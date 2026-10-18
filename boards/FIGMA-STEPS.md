# Import Your Presentation Into Figma

## Create The File
1. Visit https://www.figma.com/ and create a free account. Choose Figma Design, not FigJam.
2. Open your Drafts and choose New design file. Rename it `First Rs500 on Solana | Aaryan Singh` using the title at the top.
3. Open `boards/export/` on your computer. Select all seven numbered PNGs and drag them onto the Figma canvas.
4. Each exported PNG is 3840 x 2160 pixels: a 2x rendering of a 1920 x 1080 board. Select each image, lock its aspect ratio and set its displayed width to 1920 and height to 1080 in the right panel.
5. Arrange the images left to right, 01 through 07, with approximately 120 pixels between them. Rename each image layer to its filename without `.png`.
6. Optionally create a page per board using the plus beside Pages, then move each image onto its page. If your free workspace limits pages, keep all seven boards on one page; no upgrade is necessary for the single-page presentation.
7. The PNGs are flattened presentation boards, not editable text or components. Keep `boards.html` as the editable source. To use frames, create a 1920 x 1080 frame and place the corresponding image inside at 0,0.
8. Click Share. Set access to Anyone with the link and Can view, subject to your workspace's available settings. Copy the link and test it in a signed-out browser. Do not grant public edit access.

## Replace Placeholders After Testing
Edit `boards/boards.html` and re-export; do not invent missing results.

| Placeholder | Location | Replacement |
| --- | --- | --- |
| `[BEFORE_TIME]`, `[AFTER_TIME]` | Cover and Test Results | Measured task time with units and stated aggregation method |
| `[BEFORE_ERRORS]`, `[AFTER_ERRORS]` | Test Results | Observed errors with definition and denominator |
| `[BEFORE_CONF]`, `[AFTER_CONF]` | Test Results | Measured confidence on the stated 1–5 scale |
| `[PARTICIPANT_QUOTE_1]`, `[PARTICIPANT_QUOTE_2]` | Test Results | Consented, anonymized verbatim quotes |
| `[LIVE_LINK]` | Links & Credits | Verified public prototype URL |
| `[LOOM_LINK]` | Links & Credits | Verified recording URL |

Also update the planned-study language when sessions actually happen. Verify the Cointelegraph citation against the actual article, add its URL, and remove the verification caveat only after checking it. Confirm all original screenshot-to-feature mappings manually. The cover's requested scam-proof subtitle is explicitly framed as an ambition, not an achieved guarantee.

## Re-Export
Start the project's local server on port 8000 using README instructions. From `D:\SUPERTEAM`, run:

```powershell
$env:NODE_PATH='C:\Users\Aryan\AppData\Local\Temp\kilo\node_modules'
node boards/export.cjs
```

The current machine has Playwright, Microsoft Edge and axe installed for the existing browser workflow. On a different machine install `playwright` and `@axe-core/playwright` into a tooling directory and point `NODE_PATH` at its `node_modules`.

The script exports all seven images at 2x and checks image loading, text/element bounds and automated text contrast. Replace old image layers in Figma with the new exports; then verify share access again. Automated checks do not replace visual inspection of raster screenshots, reading order, private data or the final Figma presentation.
