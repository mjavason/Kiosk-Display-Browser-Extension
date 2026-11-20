const toggle = document.getElementById('toggle');
const statusElement = document.getElementById('status');

async function initialize() {
  const result = await chrome.storage.local.get('enabled');

  toggle.checked = result.enabled ?? true;
  updateStatus();
}

function updateStatus() {
  statusElement.textContent = toggle.checked
    ? 'Protection is enabled'
    : 'Protection is disabled';
}

toggle.addEventListener('change', async () => {
  await chrome.storage.local.set({
    enabled: toggle.checked,
  });

  updateStatus();

  const tabs = await chrome.tabs.query({});

  for (const tab of tabs) {
    if (!tab.id) continue;

    chrome.tabs
      .sendMessage(tab.id, {
        type: 'TOGGLE_PROTECTION',
        enabled: toggle.checked,
      })
      .catch(() => {});
  }
});

initialize();
