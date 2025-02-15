// Common ad selectors
const adSelectors = [
  'div[id*="google_ads"]',
  'ins.adsbygoogle',
  'div[class*="ad-container"]',
  'div[id*="banner"]',
  'div[class*="banner_ad"]',
  'iframe[src*="ads"]',
  'div[class*="sponsor"]',
  // Add more common ad selectors
];

// Collection of helpful and humorous content
const replacementContent = [
  {
    type: "productivity",
    title: "Quick Productivity Tip",
    content: "Try the Pomodoro Technique: 25 minutes of focus, 5 minutes of break. Your brain will thank you!",
    icon: "⏱️"
  },
  {
    type: "mindfulness",
    title: "Mindful Moment",
    content: "Take three deep breaths right now. In through the nose, out through the mouth. Feel better already?",
    icon: "🧘"
  },
  {
    type: "humor",
    title: "Dad Joke Break",
    content: "Why don't scientists trust atoms? Because they make up everything!",
    icon: "🤪"
  },
  {
    type: "motivation",
    title: "You've Got This!",
    content: "Remember: Every expert was once a beginner. Keep going!",
    icon: "💪"
  },
  {
    type: "health",
    title: "Wellness Reminder",
    content: "Time to hydrate! Have you had enough water today?",
    icon: "💧"
  },
  {
    type: "humor",
    title: "Tech Humor",
    content: "Why do programmers prefer dark mode? Because light attracts bugs!",
    icon: "🐛"
  }
  // More content can be added here
];

// Function to create replacement element
function createReplacementElement() {
  const randomContent = replacementContent[Math.floor(Math.random() * replacementContent.length)];
  
  const replacementDiv = document.createElement('div');
  replacementDiv.style.padding = '10px';
  replacementDiv.style.border = '1px solid #e0e0e0';
  replacementDiv.style.borderRadius = '4px';
  replacementDiv.style.backgroundColor = '#f9f9f9';
  replacementDiv.style.fontFamily = 'Arial, sans-serif';
  replacementDiv.style.maxWidth = '300px';
  replacementDiv.style.margin = '10px auto';
  replacementDiv.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
  
  replacementDiv.innerHTML = `
    <div style="display: flex; align-items: center; margin-bottom: 8px">
      <span style="font-size: 24px; margin-right: 10px">${randomContent.icon}</span>
      <h3 style="margin: 0; color: #333; font-size: 16px">${randomContent.title}</h3>
    </div>
    <p style="margin: 0; color: #555; font-size: 14px">${randomContent.content}</p>
  `;
  
  return replacementDiv;
}

// Function to replace ads
function replaceAds() {
  adSelectors.forEach(selector => {
    const adElements = document.querySelectorAll(selector);
    adElements.forEach(adElement => {
      if (!adElement.classList.contains('replaced-ad')) {
        const replacement = createReplacementElement();
        adElement.innerHTML = '';
        adElement.appendChild(replacement);
        adElement.classList.add('replaced-ad');
        adElement.style.display = 'block';
      }
    });
  });
}

// Initial replacement
replaceAds();

// Listen for messages from background script
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === "replaceAds") {
    replaceAds();
  }
  return true;
});

// Set up a MutationObserver to catch dynamically loaded ads
const observer = new MutationObserver(function(mutations) {
  replaceAds();
});

observer.observe(document.body, {
  childList: true,
  subtree: true
});