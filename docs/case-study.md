# First ₹500 on Solana

**Aaryan Singh | Mumbai | Final-year CS student**

A scam-resistant, rupee-first Phantom send-flow concept for newcomers accustomed to UPI.
Validated through an expert cognitive walkthrough, not participant research.

## Links
- Live: https://aryan787913.github.io/superteam-A-Phantom-send-flow-concept/
- Figma: https://www.figma.com/design/datQybXdHn6Bd9hUrmHGnF/First-%E2%82%B9500-on-Solana--Phantom-Redesign
- Silent walkthrough: [Video](../video/walkthrough.mp4)

## Problem
First-time Indian senders think in rupees and recognize people by name. A shortened wallet address offers neither. Address poisoning exploits that gap: a familiar prefix and suffix can conceal a different destination. Cointelegraph's 10 February 2026 article, “Phantom Chat Triggers Address Poisoning Concerns After User Loses $264K,” documents the risk behind this exploration.

In the designer's empty-wallet check, Send showed only Cash, no Swap option was visible, and History was empty. These observations motivated clearer onboarding, not a claim that Phantom lacks those features. Phantom already provides history, P&L, transaction simulation, a malicious-site blocklist and spam-token hiding.

## Decisions
Safe Send starts with saved contacts. Untrusted addresses remain fully visible; lookalikes trigger a comparison before amount entry. Only the pasted address's differing chunks are red. Full-address fingerprints add a visual cue, not identity verification. The primary action uses the saved contact; overriding requires a two-second hold with visible progress.

Plain-language moments put INR first while keeping SOL and fees visible. The review names the amount and recipient. Failure explains the fee shortfall and returns a corrected amount to review. Saved recipients receive a Done action; new recipients can be saved after independent verification.

## Expert Walkthrough
A cognitive walkthrough used the persona of a UPI user with no crypto experience, on desktop and mobile. No participants were recruited and no usability times, confidence scores or quotes were collected.

The ₹50 task takes six taps when the full-address check is included: Send, Rahul, ₹50, Review send, Check full recipient address, Confirm send. This is an interaction count, not a measured participant outcome. The address check is currently optional, so skipping it takes five taps.

| Found | Fixed |
| --- | --- |
| Warning difficult to discover | Clipboard and unsaved recent recipient open it in the normal flow |
| Hold lacked feedback | Visible progress, cancellation, keyboard and pointer support |
| Excessive decimals and inconsistent arithmetic | Four-decimal SOL display; integer-paise balance accounting |
| Saved contact offered Save again | Done for saved recipients; Save for new recipients |
| Both addresses appeared risky | Red differences only on the pasted address |

SOL figures are rounded display values, not exact accounting precision. The illustrative rate is ₹12,400/SOL and the fee is ₹0.04. No real funds move.

## Next Step
Moderated tests with five first-time senders will evaluate completion, unsafe decisions, hesitations and confidence. Automated browser checks establish implemented behavior, not newcomer comprehension or scam prevention.
