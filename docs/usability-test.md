# Usability Test Plan

**Concept:** First ₹500 on Solana by Aaryan Singh. **Status:** Planned; no participants tested and no outcomes recorded.

## Participants and Setup

Recruit five adults who are new to sending SOL, preferably people who normally think about payments in INR. This is a small formative study, not a representative benchmark. Record prior wallet experience without collecting wallet addresses or balances.

Allow about 15 minutes per participant. Use the same mobile viewport and starting state, reset between tasks, and use only dummy recipients. Explain that the prototype has no wallet connection, moves no funds, and uses illustrative prices. Obtain explicit permission before recording a screen or voice. Participation and recording are optional; agree on a deletion date and store consent separately from pseudonymous notes. Never request seed phrases, private keys, wallet access, or real payments.

## Neutral Introduction

“We are testing the design, not you. Please say what you are thinking. Nothing here sends money. You may stop at any time. I may wait before answering so I can see what the interface communicates.”

Do not teach the warning or identify the unsafe option in advance. If a participant asks for help, note it before offering assistance. Use a fixed three-minute task limit; mark a timeout rather than treating it as completion.

## Tasks

**A. Send ₹50 to Rahul.** “Imagine you want to send Rahul ₹50 worth of SOL. Use the supplied dummy contact details and proceed as far as you feel comfortable.” Start at the simulated funded home state. Success means reaching simulated confirmation for the intended dummy recipient and amount, with an accurate explanation of the fee and destination. Record assisted completion separately. The title's ₹500 is a newcomer framing, not this task's transfer amount.

**B. Handle an unsafe address.** “You are about to pay Rahul again. This recent entry looks familiar. Decide whether to continue and show what you would do.” Use a controlled dummy lookalike-address scenario and the warning path, never a real malicious address. Safe completion means stopping or independently checking against the supplied trusted dummy contact before proceeding. Merely dismissing a warning is not safe completion. Explain the scenario in the debrief.

Run A then B consistently and acknowledge that A may teach participants about B. A future round can counterbalance order. Test comprehension, not the effectiveness of a real scam-detection system.

## Measurements

- Time: seconds from reading the task to completion, abandonment, or timeout; include deliberation.
- Errors: wrong recipient, wrong amount/token, or continuing with the unverified lookalike. Record event and count, not just a score.
- Hesitations: pauses of at least three seconds, repeated backtracking, or explicit uncertainty; record location and quote when permitted.
- Confidence: ask “How confident are you that you made the intended choice?” after each task, from 1 (not at all) to 5 (very).
- Outcome: unassisted / assisted / abandoned / timeout; for B also record safe or unsafe decision. High confidence does not establish correctness.

## Recording Table

All cells below are placeholders. Dashes mean not collected, not zero.

| Person | Task | Outcome / B safety | Time (s) | Errors: count + event | Hesitations: count + location | Confidence 1–5 | Notes / recording reference |
| --- | --- | --- | --- | --- | --- | --- | --- |
| P1 | A | — | — | — | — | — | — |
| P1 | B | — | — | — | — | — | — |
| P2 | A | — | — | — | — | — | — |
| P2 | B | — | — | — | — | — | — |
| P3 | A | — | — | — | — | — | — |
| P3 | B | — | — | — | — | — | — |
| P4 | A | — | — | — | — | — | — |
| P4 | B | — | — | — | — | — | — |
| P5 | A | — | — | — | — | — | — |
| P5 | B | — | — | — | — | — | — |

## Three Follow-Ups

1. What did the rupee amount, SOL amount, and fee each mean to you?
2. What made you trust or question the recipient, and how would you verify them outside this prototype?
3. Where were you least certain, and what information would have helped you decide?

## Synthesis

After testing, report completion counts out of five, median time per task with assisted/timeout cases identified, recurring errors, and confidence alongside actual behavior. Keep anonymized quotes faithful. Link each proposed revision to an observed issue. Until then use “[Not tested]”; do not invent quotes, percentages, improvements, or successful outcomes.
