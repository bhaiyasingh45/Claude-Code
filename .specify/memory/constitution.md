<!--
Sync Impact Report
==================
Version change: N/A (template) → 1.0.0
Modified principles: N/A (initial ratification)
Added sections:
  - Core Principles: I. Two-Service Architecture, II. LangGraph + LangChain Agent Core,
    III. Research-Agent Chat Experience, IV. Clean, Minimal UI, V. Demo-Grade Simplicity
    (No Mandatory Test Suite)
  - Technology Stack Constraints
  - Development Workflow
  - Governance
Removed sections: none (all placeholders replaced)
Deferred/TODO items:
  - TODO(PROJECT_NAME): user did not provide a project name; placeholder
    "Research Agent Chat Application" used — rename when a real name is chosen.
  - TODO(RATIFICATION_DATE): original adoption date not provided by user.
Templates requiring follow-up review (not modified by this command):
  - .specify/templates/plan-template.md — verify tech-stack section references
    Python 3.13.12 / LangGraph / LangChain / Node.js once written.
  - .specify/templates/tasks-template.md — verify no default "write tests" tasks
    are auto-inserted, per Principle V.
  - .specify/templates/spec-template.md — no constitution-specific fields; OK as-is.
-->

# Research Agent Chat Application Constitution
<!-- TODO(PROJECT_NAME): replace with the actual product name once decided. -->

## Core Principles

### I. Two-Service Architecture
The system MUST be organized as exactly two independently runnable services, each in
its own top-level folder: `frontend/` (Node.js) and `backend/` (Python). The frontend
MUST NOT contain Python code and the backend MUST NOT contain Node.js application
code; the two communicate only over a documented HTTP/WebSocket API boundary.
**Rationale**: A demo application benefits from a clear, low-friction split that lets
frontend and backend be developed, run, and reasoned about independently, without the
overhead of a monorepo build system or shared runtime.

### II. LangGraph + LangChain Agent Core
The backend MUST implement its agent(s) using LangChain and LangGraph on Python
3.13.12. Agent orchestration, tool-calling, and state/graph flow MUST be expressed as
LangGraph graphs; ad-hoc hand-rolled orchestration loops that duplicate what
LangGraph provides are NOT permitted.
**Rationale**: Standardizing on one agent framework and one Python version keeps the
demo's dependency surface small and its behavior predictable and reproducible.

### III. Research-Agent Chat Experience
The core user-facing capability MUST be a chat interface where the user converses
with a single research agent whose job is to research a topic and produce written
paragraph(s) of output in response to the user's request. Every feature MUST serve
this chat → research → written-response loop; features that do not support this loop
are out of scope for this application.
**Rationale**: This is the one concrete, user-validated behavior requested — keeping
scope anchored to it prevents the demo from sprawling into unrelated functionality.

### IV. Clean, Minimal UI
The frontend UI MUST be visually clean and minimal: a focused chat surface, sensible
typography and spacing, and no unnecessary chrome, dashboards, or settings screens
beyond what the chat interaction requires.
**Rationale**: The user explicitly asked for a clean UI; for a demo, visual clarity
matters more than feature-rich screens.

### V. Demo-Grade Simplicity (No Mandatory Test Suite)
This is a demo application: automated test suites (unit, integration, or e2e) are
NOT required and MUST NOT be treated as a blocking gate for implementation or
completion. Implementers MAY still do manual/exploratory verification, but writing
and maintaining a formal test harness is explicitly out of scope unless the user
later asks for it.
**Rationale**: The user explicitly stated testing is unnecessary for this demo;
mandating tests here would add process overhead the project owner does not want.

## Technology Stack Constraints

- Backend language/runtime: Python 3.13.12 (LangChain + LangGraph for agent logic).
- Frontend runtime: Node.js.
- Repository layout: two top-level folders, `frontend/` and `backend/`, each a
  self-contained service with its own dependency manifest (e.g. `package.json` for
  frontend, `pyproject.toml`/`requirements.txt` for backend).
- Communication between services MUST use a documented API contract (REST and/or
  WebSocket for streaming chat responses); no direct in-process coupling between the
  two services.

## Development Workflow

- New work MUST stay within the chat-with-research-agent scope defined in Principle
  III unless the user explicitly expands scope.
- No automated test suite is required per Principle V; features are considered done
  when they work as manually verified against the golden path (user sends a message,
  agent researches, agent replies with written paragraph(s)).
- Keep the dependency footprint minimal on both sides — favor the standard
  LangChain/LangGraph and Node.js ecosystem primitives over introducing extra
  frameworks not requested by the user.

## Governance

This constitution supersedes ad-hoc practice for this project. Amendments require:
1. A stated reason for the change (new user requirement or corrected misunderstanding).
2. An update to this file with a version bump per semantic versioning:
   - MAJOR: removal/redefinition of a principle (e.g. dropping the two-service split,
     dropping LangGraph/LangChain, or reinstating mandatory testing).
   - MINOR: adding a new principle or materially expanding existing guidance.
   - PATCH: wording clarifications with no behavioral change.
3. Recording the change in a Sync Impact Report comment at the top of this file.

All feature specs, plans, and task lists produced for this project MUST be checked
against these principles; any deviation MUST be explicitly justified in the relevant
spec/plan rather than silently introduced.

**Version**: 1.0.0 | **Ratified**: TODO(RATIFICATION_DATE): original adoption date not supplied by user | **Last Amended**: 2026-08-25
