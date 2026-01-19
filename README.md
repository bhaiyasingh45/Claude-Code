# Claude Code CLI Shortcuts & Commands Reference

A comprehensive collection of all keyboard shortcuts, slash commands, CLI flags, and workflows for Claude Code - Anthropic's AI-powered coding assistant for the terminal.

![Claude Code](https://img.shields.io/badge/Claude-Code-orange?style=flat-square&logo=anthropic)
![License](https://img.shields.io/badge/License-MIT-blue?style=flat-square)
![Last Updated](https://img.shields.io/badge/Updated-January%202025-green?style=flat-square)

## Table of Contents

- [Installation](#installation)
- [Keyboard Shortcuts](#keyboard-shortcuts)
  - [General Controls](#general-controls)
  - [Multiline Input](#multiline-input)
  - [Quick Commands](#quick-commands)
  - [Text Editing (Bash-style)](#text-editing-bash-style)
  - [Vim Mode](#vim-mode)
- [Slash Commands](#slash-commands)
  - [Built-in Commands](#built-in-commands)
  - [Custom Commands](#custom-commands)
- [CLI Commands & Flags](#cli-commands--flags)
  - [Basic Commands](#basic-commands)
  - [CLI Flags](#cli-flags)
- [Session Management](#session-management)
- [Context Management](#context-management)
- [File & Directory References](#file--directory-references)
- [Think Modes](#think-modes)
- [Configuration](#configuration)
- [Tips & Best Practices](#tips--best-practices)
- [Resources](#resources)

---

## Installation

```bash
# Recommended: Using curl
curl -fsSL https://claude.ai/install.sh | bash

# macOS with Homebrew
brew install --cask claude-code

# Windows PowerShell
irm https://claude.ai/install.ps1 | iex

# Using npm (requires Node.js 18+)
npm install -g @anthropic-ai/claude-code
```

### Update Claude Code

```bash
claude update
```

---

## Keyboard Shortcuts

### General Controls

| Shortcut | Description | Context |
|----------|-------------|---------|
| `Ctrl+C` | Cancel current input or generation | Standard interrupt |
| `Ctrl+D` | Exit Claude Code session | EOF signal |
| `Ctrl+L` | Clear terminal screen | Keeps conversation history |
| `Ctrl+O` | Toggle verbose output | Shows detailed tool usage |
| `Ctrl+R` | Reverse search command history | Search previous commands |
| `Ctrl+V` (macOS/Linux) / `Alt+V` (Windows) | Paste image from clipboard | Image input |
| `Up/Down` arrows | Navigate command history | Recall previous inputs |
| `Esc` + `Esc` | Rewind conversation/code | Restore to previous point |
| `Tab` | Toggle extended thinking | Switch thinking on/off |
| `Shift+Tab` or `Alt+M` | Toggle permission modes | Auto-Accept/Plan/Normal mode |
| `Shift+Tab` + `Tab` | Enter Plan Mode | Planning without execution |
| `Ctrl+B` | Move command to background | For long-running processes |
| `?` | Show available shortcuts | Help for current environment |

### Multiline Input

| Method | Shortcut | Context |
|--------|----------|---------|
| Quick escape | `\` + `Enter` | Works in all terminals |
| macOS default | `Option+Enter` | Default on macOS |
| Terminal setup | `Shift+Enter` | After `/terminal-setup` |
| Control sequence | `Ctrl+J` | Line feed character |
| Paste mode | Paste directly | For code blocks, logs |

### Quick Commands

| Shortcut | Description | Notes |
|----------|-------------|-------|
| `#` at start | Memory shortcut - add to CLAUDE.md | Prompts for file selection |
| `/` at start | Slash command | See slash commands section |
| `!` at start | Bash mode | Run commands directly |
| `@` | File path mention | Trigger file path autocomplete |

### Text Editing (Bash-style)

| Shortcut | Action |
|----------|--------|
| `Ctrl+A` | Jump to beginning of line |
| `Ctrl+E` | Jump to end of line |
| `Option/Alt+F` | Move forward one word |
| `Option/Alt+B` | Move backward one word |
| `Ctrl+W` | Delete previous word |
| `Ctrl+K` | Delete to end of line |
| `Ctrl+U` | Delete entire line |

### Vim Mode

Enable with `/vim` command or configure via `/config`.

#### Mode Switching

| Command | Action | From Mode |
|---------|--------|-----------|
| `Esc` | Enter NORMAL mode | INSERT |
| `i` | Insert before cursor | NORMAL |
| `I` | Insert at beginning of line | NORMAL |
| `a` | Insert after cursor | NORMAL |
| `A` | Insert at end of line | NORMAL |
| `o` | Open line below | NORMAL |
| `O` | Open line above | NORMAL |

#### Navigation (NORMAL mode)

| Command | Action |
|---------|--------|
| `h`/`j`/`k`/`l` | Move left/down/up/right |
| `w` | Next word |
| `e` | End of word |
| `b` | Previous word |
| `0` | Beginning of line |
| `$` | End of line |
| `^` | First non-blank character |
| `gg` | Beginning of input |
| `G` | End of input |

#### Editing (NORMAL mode)

| Command | Action |
|---------|--------|
| `x` | Delete character |
| `dd` | Delete line |
| `D` | Delete to end of line |
| `dw`/`de`/`db` | Delete word/to end/back |
| `cc` | Change line |
| `C` | Change to end of line |
| `cw`/`ce`/`cb` | Change word/to end/back |
| `.` | Repeat last change |

---

## Slash Commands

### Built-in Commands

| Command | Purpose |
|---------|---------|
| `/help` | Get usage help and show all commands |
| `/exit` | Exit the REPL |
| `/clear` | Clear conversation history |
| `/compact [instructions]` | Compact conversation with optional focus |
| `/init` | Initialize project with CLAUDE.md guide |
| `/config` | Open the Settings interface |
| `/model` | Select or change the AI model |
| `/cost` | Show token usage statistics |
| `/context` | Visualize current context usage |
| `/doctor` | Check installation health |
| `/status` | Show version, model, account info |
| `/permissions` | View or update permissions |
| `/resume` | Resume a conversation |
| `/review` | Request code review |
| `/rewind` | Rewind conversation and/or code |
| `/memory` | Edit CLAUDE.md memory files |
| `/ide` | Manage IDE integrations |
| `/mcp` | Manage MCP server connections |
| `/vim` | Enter vim mode |
| `/terminal-setup` | Install Shift+Enter key binding |
| `/hooks` | Manage hook configurations |
| `/plugin` | Manage Claude Code plugins |
| `/agents` | Manage custom AI subagents |
| `/bashes` | List and manage background tasks |
| `/sandbox` | Enable sandboxed bash tool |
| `/export [filename]` | Export conversation to file |
| `/todos` | List current todo items |
| `/usage` | Show plan usage and rate limits |
| `/bug` | Report bugs to Anthropic |
| `/login` | Switch Anthropic accounts |
| `/logout` | Sign out from account |
| `/add-dir` | Add additional working directories |
| `/pr-comments` | View pull request comments |
| `/security-review` | Complete security review of changes |
| `/release-notes` | View release notes |
| `/privacy-settings` | View/update privacy settings |
| `/output-style [style]` | Set the output style |
| `/statusline` | Set up status line UI |

### Custom Commands

Create custom slash commands by adding markdown files to:
- **Project commands**: `.claude/commands/` (shared with team)
- **Personal commands**: `~/.claude/commands/` (available everywhere)

#### Example Custom Command

```markdown
# .claude/commands/review.md
---
allowed-tools: Bash(git:*), Read
description: Comprehensive code review
---

Review this code for:
- Security vulnerabilities
- Performance issues
- Code style violations
- Best practices
```

#### Using Arguments

```markdown
# .claude/commands/fix-issue.md
---
description: Fix a GitHub issue
argument-hint: [issue-number]
---

Fix issue #$ARGUMENTS following our coding standards.
```

---

## CLI Commands & Flags

### Basic Commands

| Command | Description | Example |
|---------|-------------|---------|
| `claude` | Start interactive REPL | `claude` |
| `claude "query"` | Start REPL with initial prompt | `claude "explain this project"` |
| `claude -p "query"` | Print mode (query and exit) | `claude -p "explain this function"` |
| `cat file \| claude -p "query"` | Process piped content | `cat logs.txt \| claude -p "explain"` |
| `claude -c` | Continue most recent conversation | `claude -c` |
| `claude -c -p "query"` | Continue in print mode | `claude -c -p "fix type errors"` |
| `claude -r "id" "query"` | Resume session by ID | `claude -r "abc123" "continue"` |
| `claude update` | Update to latest version | `claude update` |
| `claude mcp` | Configure MCP servers | `claude mcp add github` |
| `claude doctor` | Check installation health | `claude doctor` |

### CLI Flags

| Flag | Description | Example |
|------|-------------|---------|
| `--model` | Set model (sonnet, opus, or full name) | `claude --model opus` |
| `--print`, `-p` | Print mode without interactive session | `claude -p "query"` |
| `--continue`, `-c` | Load most recent conversation | `claude -c` |
| `--resume`, `-r` | Resume specific session by ID | `claude -r abc123` |
| `--add-dir` | Add working directories | `claude --add-dir ../apps ../lib` |
| `--allowedTools` | Allow tools without prompting | `--allowedTools "Bash(git:*)" "Read"` |
| `--disallowedTools` | Disallow specific tools | `--disallowedTools "Bash(rm:*)"` |
| `--max-turns` | Limit agentic turns | `claude -p --max-turns 3 "query"` |
| `--output-format` | Output format (text, json, stream-json) | `--output-format json` |
| `--verbose` | Enable verbose logging | `claude --verbose` |
| `--debug` | Enable debug mode | `claude --debug "api,mcp"` |
| `--system-prompt` | Replace entire system prompt | `--system-prompt "You are..."` |
| `--append-system-prompt` | Append to system prompt | `--append-system-prompt "Use TypeScript"` |
| `--dangerously-skip-permissions` | Skip permission prompts (caution!) | Use in trusted environments only |
| `--permission-mode` | Begin in specified mode | `--permission-mode plan` |
| `--fallback-model` | Model to use if default overloaded | `--fallback-model sonnet` |
| `--mcp-config` | Load MCP servers from JSON | `--mcp-config ./mcp.json` |
| `--version`, `-v` | Output version number | `claude -v` |
| `--agents` | Define custom subagents via JSON | See subagents section |
| `--fork-session` | Create new session when resuming | `--resume id --fork-session` |
| `--json-schema` | Get validated JSON output | `--json-schema '{...}'` |
| `--ide` | Auto-connect to IDE | `claude --ide` |

---

## Session Management

```bash
# Continue last session
claude -c

# Continue with a query
claude -c -p "Check for type errors"

# Resume specific session
claude -r "session-id" "Continue the feature"

# Fork a session (create new ID from existing)
claude --resume session-id --fork-session

# List recent sessions (inside REPL)
/resume

# Give session a name
/rename auth-refactor

# View session stats
/stats
```

---

## Context Management

```bash
# Clear conversation (fresh start)
/clear

# Compact conversation (summarize, keep important parts)
/compact

# Compact with focus instructions
/compact "keep only authentication implementation"

# Visualize context usage
/context

# Check token costs
/cost
```

---

## File & Directory References

```bash
# Reference files in prompts
> Review @./src/components/Button.tsx

# Reference multiple files
> Compare @src/old.js with @src/new.js

# Reference directories
> Explain the structure of @./src/

# Add directories to workspace
/add-dir ../frontend ../backend
```

---

## Think Modes

| Mode | Usage | When to Use |
|------|-------|-------------|
| Standard | Default responses | 80% of tasks |
| Think | `think: How should I structure...` | Thoughtful solutions (15%) |
| Think Hard | `think hard: Refactor the API...` | Complex architecture (5%) |

Toggle extended thinking with `Tab` key.

---

## Configuration

### CLAUDE.md

Create project context files:
- `./CLAUDE.md` - Project-level (shared)
- `~/.claude/CLAUDE.md` - User-level (global)

### Settings Files

- `~/.claude/settings.json` - User settings
- `.claude/settings.json` - Project settings
- `.claude/settings.local.json` - Local (gitignored)

### Example settings.json

```json
{
  "permissions": {
    "allow": ["Read", "Write", "Bash(git:*)"],
    "deny": ["Bash(rm -rf:*)"]
  },
  "hooks": {
    "PostToolUse": [
      {
        "matcher": "Write(*.py)",
        "hooks": [
          { "type": "command", "command": "black $file" }
        ]
      }
    ]
  }
}
```

---

## Tips & Best Practices

### Productivity Tips

1. **Use `/clear` frequently** - Start fresh between unrelated tasks
2. **Use `Up` arrow** - Navigate command history quickly
3. **Press `?`** - See all available shortcuts for your terminal
4. **Use `@` mentions** - Reference files directly in prompts
5. **Use `!` prefix** - Run shell commands without AI interpretation

### Context Management

1. Use `/compact` when context gets large
2. Clear between unrelated tasks
3. Reference specific files instead of entire directories
4. Use custom commands for repeated workflows

### Permission Tips

1. Configure `allowedTools` in settings for trusted operations
2. Use `--dangerously-skip-permissions` only in isolated environments
3. Set up hooks for automatic linting/formatting

### Session Tips

1. Name important sessions with `/rename`
2. Use `claude -c` to quickly resume
3. Fork sessions with `--fork-session` for experiments

---

## Resources

- [Official Documentation](https://code.claude.com/docs)
- [Interactive Mode Reference](https://code.claude.com/docs/en/interactive-mode)
- [Slash Commands Reference](https://code.claude.com/docs/en/slash-commands)
- [CLI Reference](https://code.claude.com/docs/en/cli-reference)
- [Agent SDK Documentation](https://docs.claude.com/en/docs/agent-sdk)
- [MCP Documentation](https://code.claude.com/docs/en/mcp)

---

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## Acknowledgments

- [Anthropic](https://www.anthropic.com/) for creating Claude Code
- The Claude Code community for tips and workflows

---

**⭐ Star this repo if you find it helpful!**
