# Claude Code: Agents, Skills, MCP & Configuration 

---

## 1. Core Building Blocks of Claude Code

Every capability in Claude Code is built from five internal components:

| Component | What it is | When it loads |
|---|---|---|
| **Agent Prompt** | System instruction defining a subagent's role | When a subagent is invoked |
| **SKILL.md** | Core instruction file for the skill | On task match |
| **Scripts** | Executable Python/Shell/Node code | When Claude calls it via bash |
| **Resources/References** | Documentation, schemas, API docs | On demand / when referenced |
| **Assets** | Static templates, images, config files | When Claude needs to use them |

### Skill Folder Structure

```
your-skill-name/
├── SKILL.md          # Required: instructions + metadata
├── scripts/          # Executable code (Python, Shell, Node)
├── references/       # Docs, schemas, API specs
└── assets/           # Static files: templates, images, configs
```

**Key principle:** Skills use progressive disclosure — frontmatter (name + description) loads on every turn; the full SKILL.md body loads only when the skill is triggered; scripts/references/assets load only when explicitly needed.

---

## 2. Where MCP Fits

MCP (Model Context Protocol) operates at a **different layer** from skills, scripts, and assets. Those work *inside* Claude's environment. MCP connects Claude to *external* systems.

> **One-line rule:** Skills encode knowledge. Subagents isolate context. **MCP connects Claude to external systems.**

### MCP's Three Primitives

| Primitive | What it is |
|---|---|
| **Resources** | Read-only data Claude can fetch (DB rows, file contents, API responses) |
| **Tools** | Actions Claude can invoke on external systems |
| **Prompts** | Reusable prompt templates exposed by the MCP server |

### Where to Declare Your MCP

| Scope | Where to declare | Use when |
|---|---|---|
| All projects | `~/.claude/settings.json` or global `.mcp.json` | GitHub, Postgres — used everywhere |
| One project | `.mcp.json` in project root | Client-specific DB or API |
| One agent only | `mcpServers:` in agent frontmatter | Only that agent needs the connection |

### Full Layer Map (Internal vs External)

| Layer | Component | Scope |
|---|---|---|
| Behavior | Agent Prompt | Internal |
| Knowledge | SKILL.md | Internal |
| Execution | Scripts | Internal |
| Lookup | Resources/References | Internal |
| Static files | Assets | Internal |
| **Connectivity** | **MCP Servers** | **External** |

---

## 3. Agents + Skills: Can You Attach Skills to a Specific Agent?

**Yes. This is the correct and intended architecture.**

Use the `skills:` field in the agent's YAML frontmatter to pre-load specific skills into that agent at startup.

```yaml
---
name: sql-analyst
description: Handles all Text-to-SQL queries for App
skills:
  - text-to-sql
  - schema-routing
---
You are a SQL analyst for App...
```

### Two Modes of Skill Loading

| Mode | How | Effect |
|---|---|---|
| **Attached to agent** | Listed in `skills:` frontmatter | Pre-loaded at agent startup — no discovery needed |
| **Shared / Auto-discovered** | Skill exists in `.claude/skills/` | Any general-purpose agent can find and invoke it via filesystem scan |

> The `skills:` field controls **startup injection**, not access restriction. Agents with filesystem access can still discover any skill in `.claude/skills/` even without being listed.

### Example: 6-Agent Architecture

```
.claude/
├── agents/
│   ├── sql-analyst.md        ← skills: [text-to-sql, schema-routing]
│   ├── code-reviewer.md      ← skills: [review-standards]
│   ├── data-validator.md     ← skills: [validation-rules]
│   ├── report-writer.md      ← skills: [report-template]
│   ├── security-auditor.md   ← skills: [security-checklist]
│   └── orchestrator.md       ← no skills, coordinates others
│
└── skills/
    ├── text-to-sql/SKILL.md
    ├── schema-routing/SKILL.md
    ├── review-standards/SKILL.md
    ├── validation-rules/SKILL.md
    ├── report-template/SKILL.md
    └── security-checklist/SKILL.md
```

---

## 4. The 6 Things You Configure Per Agent

As shown in the official Anthropic diagram:

| Component | What it does |
|---|---|
| **Tools** | Which tools the agent can use — e.g. `Read`, `Bash`, `Grep`, `Write` |
| **Prompt** | The agent's system prompt — its role, personality, and instructions (the `.md` file body) |
| **Model** | Which Claude model it runs on — `haiku` (fast), `sonnet` (reasoning), `opus` (deep work) |
| **Permissions** | Higher-level access control — file writes, shell commands, network access |
| **Hooks** | Event-driven triggers around agent actions — e.g. run a linter after every file write |
| **Skills** | Pre-loaded SKILL.md files injected into the agent's context at startup |

### Full Agent Frontmatter Example

```yaml
---
name: sql-analyst
description: Handles Text-to-SQL queries for App

model: sonnet
tools: Read, Bash, Grep
disallowedTools: Write, Edit
mcpServers:
  - App-db
skills:
  - text-to-sql
  - schema-routing
hooks:
  - on: PostToolUse
    run: log_query.sh
---

You are a SQL analyst for App...
```

---

## 5. Complete Reference Table

| Component | Tied to one agent? | Lives where? | Loaded how? |
|---|---|---|---|
| Agent Prompt | Yes — it IS the agent | `.claude/agents/name.md` body | At agent invocation |
| Skills (attached) | Yes, when in `skills:` frontmatter | `.claude/skills/` | Pre-loaded at agent startup |
| Skills (shared) | No — available to all | `.claude/skills/` | Auto-discovered on task match |
| Scripts | No — inside skill folder | `skill/scripts/` | When Claude runs via bash |
| Resources | No — inside skill folder | `skill/references/` | On demand |
| Assets | No — inside skill folder | `skill/assets/` | When needed |
| MCP (global) | No — all projects | `~/.claude/settings.json` | When Claude calls MCP tool |
| MCP (project) | No — one project | `.mcp.json` in root | When Claude calls MCP tool |
| MCP (agent) | Yes — one agent only | Agent frontmatter `mcpServers:` | When that agent calls MCP tool |

---

## Key Mental Models

- **Skills = reusable knowledge modules** — shared or pinned to a specific agent
- **Agents = workers with a role** — optionally with skills pre-loaded
- **MCP = the external connector** — databases, APIs, live systems
- **Scripts = deterministic execution** — reliable, token-free operations
- **Hooks = event-driven guards** — run outside the agent loop on specific events

> *"Compose these to create exactly the agent you need."* — Anthropic
