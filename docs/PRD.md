# Product Requirements Document

## Problem

Product delivery information is fragmented across boards, spreadsheets and meetings. Teams can see individual tasks but cannot easily assess whether a release remains achievable or which trade-off would improve confidence.

## MVP scope

- Portfolio command centre with release confidence
- Current, scope-trim and schedule-delay scenarios
- Workstream progress and team capacity
- Ranked risk register with resolution actions
- Delivery metrics and throughput trend
- Outcome-led Now / Next / Later roadmap
- Responsive desktop and mobile experience

## Out of scope

- Live Jira or Linear integration
- Predictive model trained on customer data
- Multi-tenant authentication and billing
- Persistent audit history
- Automated changes to third-party roadmaps

## Key user stories

### Release decision

As a Product Manager, I want to compare scope and schedule scenarios so that I can recommend the safest path without losing the release outcome.

**Acceptance criteria**

- Current confidence and target date are visible.
- Selecting a scenario updates confidence, scope and target date.
- The recommended scenario is clear and reversible.

### Risk ownership

As a Project Manager, I want risks ranked by impact and probability so that I can focus escalation on the most urgent exposure.

**Acceptance criteria**

- Each risk has an ID, owner, impact, probability and due date.
- Users can mark a risk resolved and reopen it.
- Critical and high risks are visually distinguishable.

### Capacity visibility

As an Engineering Manager, I want team allocation shown against capacity so that overloaded teams are addressed before they block delivery.

**Acceptance criteria**

- Allocation is shown by team.
- Values above 100% are highlighted as a delivery concern.
- Team size and current load are visible together.

## Non-functional requirements

- Responsive from 360px mobile width to large desktop screens
- Keyboard-accessible native buttons and semantic navigation
- No external data required for the portfolio demo
- Production build and lint must pass automatically

