# Metrics and Prioritisation

## KPI tree

**Goal: improve predictable, outcome-led delivery**

- Decision quality
  - Mitigation decisions made before final two sprints
  - Percentage of decisions with an owner and due date
- Predictability
  - Release-date variance
  - Scope variance after commitment
  - Forecast calibration error
- Flow
  - Cycle time
  - Blocked-work percentage
  - Work-in-progress age
- Adoption
  - Weekly active delivery leaders
  - Scenario comparisons per active release
  - Risk decisions recorded

## Release confidence model

The demo confidence score is a product concept, not a trained predictive model.

| Signal | Example weight |
|---|---:|
| Critical-path dependencies | 30% |
| Team capacity variance | 20% |
| Scope completion and volatility | 20% |
| Blocked work and cycle-time trend | 15% |
| Unresolved high-impact risks | 15% |

## RICE prioritisation example

| Capability | Reach | Impact | Confidence | Effort | RICE score |
|---|---:|---:|---:|---:|---:|
| Release confidence | 90 | 3.0 | 80% | 5 | 43.2 |
| Risk register | 75 | 2.0 | 90% | 3 | 45.0 |
| Scenario comparison | 60 | 3.0 | 75% | 4 | 33.8 |
| Capacity planning | 65 | 2.0 | 70% | 5 | 18.2 |
| AI status narrative | 80 | 1.0 | 60% | 5 | 9.6 |

