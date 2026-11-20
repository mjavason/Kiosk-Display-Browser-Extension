# Kiosk Display Browser Extension

A Chrome/Edge Manifest V3 content script extension for kiosk and public-display setups. Came up with this idea whilst using Pinterest. It blocks normal interactions like link/button clicking and allows you to focus on browsing the page content.

## Features

- Prevents left-click and middle-click/`auxclick` events.
- Prevents links and other elements from being activated by mouse clicks.
- Suppresses the right-click context menu.
- Prevents text selection and element dragging.
- Applies a page-wide CSS rule that disables text selection while preserving normal document scrolling.
- Runs on every URL and in every frame, including `about:blank` frames.
- Starts at `document_start`, as soon as the content script can be injected.

## Installation

### Load the unpacked extension

1. Open `chrome://extensions` in Chrome, or `edge://extensions` in Microsoft Edge.
2. Enable **Developer mode**.
3. Select **Load unpacked**.
4. Choose this project folder.

The extension is identified as **Kiosk display blocker**, version **1.0.1**.

### Reinstall from the packaged CRX

The repository also includes `chrome-disable-right-click.crx`. Chrome may block direct CRX installation outside of the Chrome Web Store; in that case, use **Load unpacked** with the project folder instead.

## Files

- `manifest.json` - extension metadata and content-script configuration.
- `contextblocker.js` - event and CSS blocking logic.
- `chrome-disable-right-click.crx` - packaged extension build.

## Scope and limitations

This is a content-script protection for the web pages being displayed. Browser-level controls, other extensions, keyboard navigation, and browser/operating-system UI are not blocked. It is intended for kiosk-style deterrence and does not provide security-grade protection against page inspection or interaction bypass.