# First ₹500 on Solana

**Aaryan Singh | Mumbai | Final-year CS student**

## Two-Line Summary
An independent Phantom newcomer-send concept that makes a small SOL transfer understandable in rupees.
A simulated prototype, not a shipped Phantom feature; usability outcomes remain untested.

## Case Study

### Problem and Audience
First ₹500 on Solana explores a first transfer for Indian newcomers who think in rupees but must choose a token, understand network fees, and verify an unfamiliar address. My goal is not to redesign Phantom wholesale. It is to help someone understand what they are sending, to whom, and what happens next without implying that a wallet can guarantee safety.

### Evidence and Boundaries
The user reports an empty wallet, Send showing only Cash rather than SOL, no visible Swap, and empty History. These are reported observations, not findings I independently verified from screenshots. Seven supplied JPEGs remain at the project root; Before mode must use those actual images, never a fabricated reconstruction.

Phantom already has history, P&L, transaction simulation, a malicious-site blocklist, and spam-token hiding. This concept complements those protections rather than claiming they are absent. A brief-supplied February 2026 poisoning incident involving approximately $264,000 and 3.5 WBTC is an unverified secondary lead. A primary source is required before publishing that claim as evidence.

### Design Decisions
Rupee-first amounts make the intended spend legible while preserving the SOL amount and fee. Recipient checks interrupt a potentially risky choice before review. Neither choice proves ownership or makes a transfer scam-proof. A review screen separates amount, recipient, and network cost; failure and success screens make the next action explicit.

The flow covers home, token, recipient, warning, amount, review, failure, success, and save. Add funding is simulated. Example values use ₹12,400 per SOL and a ₹0.04 fee, not live pricing. No wallet connects and no funds move.

### Test Method
I plan five moderated sessions: send ₹50 to Rahul, then handle an unsafe-address scenario. I will record completion, time, errors, hesitations, and confidence without coaching. No sessions have been conducted. The table below deliberately separates proposed decisions from evidence still needed.

### Next Steps
Run the sessions, inspect confusion at recipient and review, then revise the highest-risk misunderstanding first. Assemble a free Figma file manually using actual captures, document limitations, and publish only after checking labels, links, and mobile behavior. A deployed URL and a Figma file do not yet exist. Findings will determine whether to retain, change, or remove each intervention.

## Planned Results

| Metric (five participants) | Before | After |
| --- | --- | --- |
| Task A average time | [BEFORE_TIME_AVG] | [AFTER_TIME_AVG] |
| Task A errors | [BEFORE_ERRORS] | [AFTER_ERRORS] |
| Task A hesitations | [BEFORE_HESITATIONS] | [AFTER_HESITATIONS] |
| Task B unsafe sends | [BEFORE_UNSAFE_SENDS] | [AFTER_UNSAFE_SENDS] |
| Confidence, 1-5 | [BEFORE_CONFIDENCE] | [AFTER_CONFIDENCE] |

Before timings require a safe, interactive baseline with fictional data, not the static evidence viewer. No measurements have been collected.

## Decisions By Feature

| Proposed decision | Evidence needed | Test result | Next decision |
| --- | --- | --- | --- |
| Show INR alongside SOL | Can newcomers explain both amounts? | [Not tested] | [Retain / revise / remove] |
| Interrupt risky recipient selection | Does the warning prompt verification rather than blind dismissal? | [Not tested] | [Retain / revise / remove] |
| Separate review amount and fee | Can people state the total and destination? | [Not tested] | [Retain / revise / remove] |

The main-text word count covers only the prose under Case Study, excluding headings, summary, attribution, and this table.
