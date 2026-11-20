# Kiosk Display Browser Extension

A Chrome/Edge Manifest V3 extension for kiosk and public-display setups. It blocks common mouse interactions and text selection on displayed web pages.

## Features

- Blocks `click` events, preventing links and other elements from being activated.
- Blocks `auxclick` events, including middle-click behavior.
- Suppresses the right-click context menu.
- Blocks text selection with both JavaScript and a page-wide CSS rule.
- Blocks element dragging.
- Preserves normal document scrolling.
- Runs on every URL and in every frame, including `about:blank` frames.
- Starts at `document_start` in every matching frame.

The toolbar popup contains a Protection toggle and status label. The toggle state is stored in `chrome.storage.local`, and the popup sends a `TOGGLE_PROTECTION` message to open tabs. In the current implementation, `contextblocker.js` does not yet process that message or read the stored setting, so protection remains active whenever the content script is loaded.

## Installation

### Load the unpacked extension

1. Open `chrome://extensions` in Chrome, or `edge://extensions` in Microsoft Edge.
2. Enable **Developer mode**.
3. Select **Load unpacked**.
4. Choose this project folder.

The extension is identified as **Kiosk display blocker**, version **1.1.0**.

## Files

- `manifest.json` - extension metadata and content-script configuration.
- `contextblocker.js` - event and CSS blocking logic.
- `popup.html` - toolbar popup interface.
- `popup.js` - popup toggle, status, storage, and tab messaging logic.

## Scope and limitations

This protection applies only to web-page content through the content script. Browser-level controls, browser UI, keyboard navigation, developer tools, and interactions outside the page are not blocked. It is intended for kiosk-style deterrence and does not provide security-grade protection against interaction or inspection bypasses.
