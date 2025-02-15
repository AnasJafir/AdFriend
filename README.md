# AdFriend: Helpful Humor Edition

**AdFriend: Helpful Humor Edition** is a Chrome extension that blocks annoying ads and replaces them with motivational quotes, helpful tips, and humorous content to improve your productivity, mental well-being, and overall experience while browsing.

## Features

- **Ad Blocking**: Automatically blocks ads on websites and replaces them with engaging content.
- **Motivational Quotes**: Get a quick boost with motivational quotes that remind you to keep going.
- **Wellness Tips**: Tips like reminders to hydrate, take breaks, and do stretches for better health.
- **Humor**: Lighten the mood with dad jokes and tech humor.
- **Mindfulness**: Includes tips to take a mindful moment and improve focus.
- **Productivity**: Try the Pomodoro Technique to stay productive with focus and break intervals.

## Installation

To install the extension, follow these steps:

1. Clone or download this repository to your local machine.
2. Open Chrome and go to the Extensions page (`chrome://extensions/`).
3. Enable "Developer mode" at the top right.
4. Click the "Load unpacked" button and select the directory where you downloaded the repository.
5. The extension will now be installed and active!

## How It Works

AdFriend works by replacing ads on web pages with helpful and humorous content. It does so by using common ad selectors to identify ads and replace them with a variety of content:

- **Motivational Quotes**: Get a quick push with encouraging messages.
- **Health and Wellness Tips**: Reminders to hydrate, stretch, or practice mindfulness.
- **Humor**: Dad jokes and tech humor to make you smile.
- **Productivity Tips**: Advice on staying productive, such as the Pomodoro Technique.

The extension uses content scripts to monitor the page for ads and replaces them dynamically.

## Usage

Once installed, the extension will automatically replace ads with helpful and humorous content whenever an ad is detected on a page. No need for additional setup!

### Customize Content

The content displayed when ads are replaced is chosen randomly from a predefined list of quotes, tips, and jokes. You can add more content to the `replacementContent` array in the `content.js` file.

## Permissions

This extension requires the following permissions:

- **scripting**: For injecting scripts to modify the content of web pages.
- **declarativeNetRequest**: For blocking ads via declarative rules.
- **host_permissions**: To access all URLs where ads are present.

## How to Contribute

We welcome contributions to improve the extension! If you want to help, feel free to open an issue or submit a pull request with any fixes or improvements.

## License

This extension is open source and licensed under the MIT License.
