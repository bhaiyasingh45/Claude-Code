# Feature Specification: Multi-Agent Topic Research & Writing

**Feature Branch**: `001-research-writer-critic`

**Created**: 2026-08-25

**Status**: Draft

**Input**: User description: "This is a completely new application. We have to create a feature in the application. This is our first feature in which there is a UI. In the UI, the user can write the topic name and on the basis of that topic, our agents (a research agent, a writer agent, and a critic/reviewer agent) collaborate to produce content. The reviewer agent can give feedback to the writer agent or the researcher agent. The researcher agent has a web search tool so it can search on the topic the user provides. We have to build a UI and the backend to support this."

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Get a researched, written answer for a topic (Priority: P1)

A user opens the application, types a topic they want to learn about into the UI, and submits it. Behind the scenes, a research agent gathers information about the topic from the web, a writer agent turns that research into a written piece, and a critic agent reviews the draft for accuracy and quality before it is shown to the user. The user receives a finished, well-written piece of content about their topic.

**Why this priority**: This is the entire value proposition of the feature — without a working end-to-end pipeline from topic to finished content, there is no product.

**Independent Test**: Can be fully tested by entering a topic (e.g., "the history of the printing press") and verifying that a complete, coherent, topic-relevant written piece is returned to the user in the UI.

**Acceptance Scenarios**:

1. **Given** the user is on the topic input screen, **When** they type a topic and submit it, **Then** the system begins processing and eventually displays a finished written piece about that topic.
2. **Given** a submitted topic, **When** the critic agent finds the first draft acceptable, **Then** the system presents that draft to the user as the final result without unnecessary extra revision cycles.
3. **Given** a submitted topic, **When** the critic agent finds issues with the first draft, **Then** the system automatically revises the content (via the writer and/or research agent) before presenting a final result to the user, without requiring the user to manually intervene.

---

### User Story 2 - See progress while the agents work (Priority: P2)

While the research, writing, and review process is running (which may take some time), the user can see that the system is actively working and roughly what stage it is at (e.g., researching, writing, reviewing/revising), rather than staring at a blank or frozen screen.

**Why this priority**: The multi-agent pipeline is not instantaneous; without visible progress, users may think the application is broken or unresponsive.

**Independent Test**: Can be fully tested by submitting a topic and observing that the UI shows a status indicator that changes as the pipeline moves through its stages, prior to the final result appearing.

**Acceptance Scenarios**:

1. **Given** a topic has just been submitted, **When** the research agent is gathering information, **Then** the UI indicates that research is in progress.
2. **Given** the writer agent is drafting content, **When** this stage is active, **Then** the UI indicates that writing/drafting is in progress.
3. **Given** the critic agent has requested a revision, **When** the writer or research agent is reworking the content, **Then** the UI indicates that a revision is in progress.

---

### User Story 3 - Start a new topic after receiving a result (Priority: P3)

After receiving a finished piece of content, the user can submit a new topic to generate another piece of content without reloading or restarting the application.

**Why this priority**: This makes the tool reusable in a single session and is a natural, low-cost extension of the core flow, but the application is still useful even if the user has to refresh to start over.

**Independent Test**: Can be fully tested by completing one topic request end-to-end, then submitting a second, different topic in the same session and confirming a second independent result is produced.

**Acceptance Scenarios**:

1. **Given** a finished result is displayed, **When** the user enters a new topic and submits it, **Then** the system starts a fresh research-write-review cycle for the new topic and the previous result is no longer treated as active.

---

### Edge Cases

- What happens when the user submits an empty or whitespace-only topic? System should reject the submission with a clear, user-facing message and not start the pipeline.
- What happens when the web search tool returns no useful results for the topic? The research agent should proceed with whatever limited information is available (or none) and the writer/critic agents should surface this limitation in the final output rather than fabricating information.
- How does the system handle a critic agent that keeps requesting revisions and never approves the content? The system must cap the number of research-write-review cycles and deliver the best available draft once the cap is reached, rather than looping indefinitely.
- What happens if the web search tool or an agent fails/errors mid-pipeline? The user should see a clear error message and be able to retry, rather than the UI hanging indefinitely.
- What happens if the user submits a new topic while a previous request is still processing? The system should either queue/replace the in-flight request in a well-defined way (treat the newest submission as authoritative) so the user is never shown a mismatched result.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: System MUST provide a UI where the user can type in a free-text topic.
- **FR-002**: System MUST allow the user to submit the entered topic to start content generation.
- **FR-003**: System MUST validate that the submitted topic is non-empty before starting processing, and MUST show a clear message if validation fails.
- **FR-004**: System MUST use a research agent to gather information about the submitted topic using a web search capability.
- **FR-005**: System MUST use a writer agent to produce a written draft based on the research agent's findings and the original topic.
- **FR-006**: System MUST use a critic/reviewer agent to evaluate the writer agent's draft against the topic and the underlying research.
- **FR-007**: When the critic agent identifies issues with content quality, clarity, or structure, the system MUST route that feedback to the writer agent for revision.
- **FR-008**: When the critic agent identifies issues with the underlying facts, or determines the research was insufficient or inaccurate, the system MUST route that feedback to the research agent to gather additional or corrected information.
- **FR-009**: System MUST repeat the research/write/review cycle, incorporating critic feedback, until the critic agent approves the content or a maximum number of revision cycles is reached.
- **FR-010**: System MUST cap the number of revision cycles to prevent an unbounded feedback loop, and MUST deliver the best available draft to the user if the cap is reached without critic approval.
- **FR-011**: System MUST present the final written content to the user in the UI once the pipeline completes.
- **FR-012**: System MUST indicate to the user, while processing is underway, which stage of the pipeline is currently active (researching, writing, or reviewing/revising).
- **FR-013**: System MUST show a clear, user-facing error message if the pipeline cannot complete (e.g., search failure, agent failure) and allow the user to retry.
- **FR-014**: System MUST allow the user to submit a new topic after a result has been delivered, without needing to reload the application.

### Key Entities

- **Topic Request**: The free-text topic submitted by the user; represents the starting point of a single generation session.
- **Research Findings**: The information gathered by the research agent for a given topic, including source information used to support the written content.
- **Draft**: A version of the written content produced by the writer agent for a topic; a topic request may have multiple successive drafts as revisions occur.
- **Critic Feedback**: The evaluation output produced by the critic agent for a given draft, including whether the draft is approved and, if not, what needs to change and which agent (writer or researcher) should address it.
- **Final Output**: The written content ultimately presented to the user once the critic approves it or the revision cap is reached.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: A user with no technical background can submit a topic and receive a finished written piece without any guidance beyond the on-screen UI.
- **SC-002**: At least 95% of topic submissions result in either a finished written piece or a clear error message, with no submissions left in an indefinitely stuck/loading state.
- **SC-003**: The revision feedback loop always terminates within a bounded number of cycles (no topic submission triggers unlimited back-and-forth between agents).
- **SC-004**: Users can, at any point while a request is processing, tell which stage of the process (research, writing, or review/revision) is currently active without needing to ask for status separately.
- **SC-005**: The final delivered content is topically relevant and coherent for at least 90% of submitted topics, as judged by manual review of a representative sample.

## Assumptions

- The application is a single-user, single-session tool for this first feature; no multi-user accounts, authentication, login, or saved history across sessions is required.
- The maximum number of research-write-review revision cycles is a small, fixed number (e.g., a handful of rounds) chosen to balance output quality against response time; the exact number is a backend implementation detail to be finalized during planning.
- "Web search tool" refers to a general-purpose web search capability the research agent can invoke to look up information about the user's topic; the specific search provider/service is an implementation detail decided during planning, not a business requirement.
- The underlying language model(s) powering the three agents will be provided via the user's own model access (the user has indicated this will be a hosted model reachable through their existing cloud provider account); the specific model, provider, and credential/configuration mechanism are implementation details to be finalized during planning, not specification-level concerns.
- Final output is a single self-contained written piece (e.g., an article-style response) per topic submission, not a multi-document deliverable.
- The feature does not require exporting, saving, or sharing the final content outside the UI (e.g., no PDF export, no email) for this first version.
- Only English-language topics and output are assumed for this first version; multi-language support is out of scope unless specified later.
