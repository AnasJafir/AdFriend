// In Manifest V3, we use declarativeNetRequest instead of webRequest
// The rules are defined in rules.json

chrome.runtime.onInstalled.addListener(() => {
  console.log('Ad blocker installed successfully');
});

// Message content scripts on page load to replace ads
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete' && tab.url && tab.url.startsWith('http')) {
    chrome.tabs.sendMessage(tabId, { action: "replaceAds" })
      .catch(err => {
        // Ignore errors when content script isn't ready or available
        console.log('Communication with content script failed: ', err.message);
      });
  }
});