# Capture Inventory

The browser verification script generates **68 PNGs** in `captures/`: ten After states and seven original Before images, each at two sizes and in two themes. Before originals do not change with theme. Screenshots document a simulation, not live transfers. Capture buttons use presentation wording; the interactive prototype retains demo disclosures. Every default capture is checked for internal vertical overflow.

## Hero And Story

Start with `captures/after-warning-desktop-dark.png` and `captures/after-warning-mobile-dark.png`. The desktop hero has a wide two-column workspace with side-by-side full-address comparison and address fingerprints. Fingerprints are decorative identity cues, not authentication or a guarantee of uniqueness.

Home and Token share a funded 0.1 SOL / approximately Rs1,240 story. `home-empty` is a separate onboarding state. Failure intentionally illustrates a depleted Rs500 balance so the fee cannot be covered; this is a separate error scenario, not the funded starting balance. Capture labels do not turn simulated receipts into actual payments.

## Exact URLs

These are the dark-theme captures. Append `&theme=light` to any URL for the light version. After deployment replace `http://127.0.0.1:8000/` with the real Pages URL, including its repository path.

| Screen | Mobile 390 x 844 | Desktop 1440 x 900 |
| --- | --- | --- |
| Funded home | http://127.0.0.1:8000/?capture=1&screen=home&view=after&device=mobile | http://127.0.0.1:8000/?capture=1&screen=home&view=after&device=desktop |
| Empty onboarding home | http://127.0.0.1:8000/?capture=1&screen=home-empty&view=after&device=mobile | http://127.0.0.1:8000/?capture=1&screen=home-empty&view=after&device=desktop |
| Token | http://127.0.0.1:8000/?capture=1&screen=token&view=after&device=mobile | http://127.0.0.1:8000/?capture=1&screen=token&view=after&device=desktop |
| Recipient | http://127.0.0.1:8000/?capture=1&screen=recipient&view=after&device=mobile | http://127.0.0.1:8000/?capture=1&screen=recipient&view=after&device=desktop |
| Lookalike warning | http://127.0.0.1:8000/?capture=1&screen=warning&view=after&device=mobile | http://127.0.0.1:8000/?capture=1&screen=warning&view=after&device=desktop |
| Amount | http://127.0.0.1:8000/?capture=1&screen=amount&view=after&device=mobile | http://127.0.0.1:8000/?capture=1&screen=amount&view=after&device=desktop |
| Review | http://127.0.0.1:8000/?capture=1&screen=review&view=after&device=mobile | http://127.0.0.1:8000/?capture=1&screen=review&view=after&device=desktop |
| Failure | http://127.0.0.1:8000/?capture=1&screen=failure&view=after&device=mobile | http://127.0.0.1:8000/?capture=1&screen=failure&view=after&device=desktop |
| Success | http://127.0.0.1:8000/?capture=1&screen=success&view=after&device=mobile | http://127.0.0.1:8000/?capture=1&screen=success&view=after&device=desktop |
| Save contact | http://127.0.0.1:8000/?capture=1&screen=save&view=after&device=mobile | http://127.0.0.1:8000/?capture=1&screen=save&view=after&device=desktop |
| Original 1 | http://127.0.0.1:8000/?capture=1&screen=evidence-1&view=before&device=mobile | http://127.0.0.1:8000/?capture=1&screen=evidence-1&view=before&device=desktop |
| Original 2 | http://127.0.0.1:8000/?capture=1&screen=evidence-2&view=before&device=mobile | http://127.0.0.1:8000/?capture=1&screen=evidence-2&view=before&device=desktop |
| Original 3 | http://127.0.0.1:8000/?capture=1&screen=evidence-3&view=before&device=mobile | http://127.0.0.1:8000/?capture=1&screen=evidence-3&view=before&device=desktop |
| Original 4 | http://127.0.0.1:8000/?capture=1&screen=evidence-4&view=before&device=mobile | http://127.0.0.1:8000/?capture=1&screen=evidence-4&view=before&device=desktop |
| Original 5 | http://127.0.0.1:8000/?capture=1&screen=evidence-5&view=before&device=mobile | http://127.0.0.1:8000/?capture=1&screen=evidence-5&view=before&device=desktop |
| Original 6 | http://127.0.0.1:8000/?capture=1&screen=evidence-6&view=before&device=mobile | http://127.0.0.1:8000/?capture=1&screen=evidence-6&view=before&device=desktop |
| Original 7 | http://127.0.0.1:8000/?capture=1&screen=evidence-7&view=before&device=mobile | http://127.0.0.1:8000/?capture=1&screen=evidence-7&view=before&device=desktop |

Before files preserve the evidence's original aspect ratio with letterboxing. A source screenshot in a mobile-sized frame is **not evidence of Phantom's mobile UI**. Do not label it as such. Map originals to features only after human inspection. There is no screenshot evidence for invented current-app warning, failure or contact screens.

## Chrome DevTools
1. Start the local server using README instructions and open one URL above.
2. Press F12, then Ctrl+Shift+M to toggle device emulation. Select Responsive.
3. Set width and height to 390 x 844 for mobile or 1440 x 900 for desktop; set device pixel ratio to 1 for predictable file sizes. Desktop contains a 1120 x 820 two-column wallet workspace. Before source images use a 600 x 760 frame with aspect-ratio-preserving containment.
4. Wait for the font and source images to load. Do not crop an address or safety warning to make a frame look cleaner.
5. Press Ctrl+Shift+P, type **Capture screenshot**, and select it. Use this rather than Capture full size screenshot for the defined frame sizes.
6. Save with a descriptive name such as `after-warning-mobile-dark.png`. Existing generated images use this naming convention.
7. For expanded fee, hidden spam, or receipt details, interact with that control first, then capture. Label these as detail states. Capture URLs reset to the initial state, not the expanded substate.

## Figma Use
Use After mobile captures as 390 x 844 images. Use desktop captures within a 1440 x 900 frame. Keep source screenshots at their original proportions. Beside each relevant source, add the proposed state and numbered explanations, with a visible evidence limitation where no matching source exists. Screenshots are flattened assets, not editable Figma components; rebuild key components if editable layers are desired.
