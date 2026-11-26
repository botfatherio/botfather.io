---
title: Browser Type
---

Botfather features an embedded Chromium-based web browser that can be automated. Starting with Botfather version 6, multiple browsers can be automated simultaneously. Browsers run "headless" in the background by default. However, they can be inspected and controlled by users via browser windows.

Botfather browsers can be used to automate many things such as loading websites, executing JavaScript, and sending click, scroll, and keyboard events. Furthermore, browsers can take screenshots, which can then be saved or analyzed using the [Vision API](/docs/apiref/vision-api/).

## Table of contents

## Create browsers and load websites

```javascript
var browser1 = new Browser("Browser Name 1");
var browser2 = new Browser("Browser Name 2", new Size(1200, 600));

browser1.loadUrl("https://google.com/");
browser2.loadUrl("https://youtube.com/");

browser1.finishLoading(); // (default) waits max 30 seconds for the website to load
browser2.finishLoading(10); // waits max 10 seconds for the website to load
```

## Reload websites

```javascript
var browser = new Browser("Test Browser");
browser.loadUrl("https://example.com");

// Reload the browser
browser.reload();

// Reload the browser ignoring the cache
browser.reloadIgnoringCache();
```

## Stop loading websites

```javascript
var browser = new Browser("Test Browser");
browser.loadUrl("https://example.com/");

if (browser.isLoading()) {
  browser.stopLoading();
}
```

## Go back and forward

```javascript
if (browser.canGoBack()) {
  browser.goBack();
}
if (browser.canGoForward()) {
  browser.goForward();
}
```

## Resize a browser

```javascript
var new_size = new Size(1000, 600);
browser.resize(new_size);
```

## Query basic browser information

The `.getRect()` method returns a [Rect](/docs/apiref/rect/) object, the `.getSize()` method a [Size](/docs/apiref/size/) object, and the `.getUrl()` method a [Url](/docs/apiref/url/) object.

```javascript
if (browser.isLoading()) {
  // e.g. wait
}

var rect = browser.getRect();
var size = browser.getSize();
var url = browser.getUrl();

// A browser's Rect is useful to get its center Point
var center = rect.getCenter();
```

## Take screenshots of websites

The `.takeScreenshot()` method returns an [Image](/docs/apiref/image/) object, which can be saved or used with the [Vision API](/docs/apiref/vision-api/).

```javascript
var image = browser.takeScreenshot();
image.save("image.png");
```

## Move the mouse and click

```javascript
// Move the mouse to the center of the browser
browser.moveMouse(browser.rect.center);
```

```javascript
// Click directly somewhere
var a_point = new Point(100, 100);

browser.leftClick(a_point);
browser.middleClick(a_point);
browser.rightClick(a_point);
```

## Hold and release the mouse

Holding and releasing is useful for controlling games or performing a drag and drop.

```javascript
var a_point = new Point(100, 100);

browser.holdLeft(a_point);
browser.releaseLeft(a_point);

browser.holdMiddle(a_point);
browser.releaseMiddle(a_point);

browser.holdRight(a_point);
browser.releaseRight(a_point);
```

## Scroll the mouse wheel

```javascript
var location = new Point(200, 200);
var pixels_horizontally = 0;
var pixels_vertically = 50;
browser.scrollWheel(location, pixels_horizontally, pixels_vertically);
```

## Press keyboard keys and enter text

```javascript
var browser = new Browser("Test Browser", new Size(1400, 700));
browser.loadUrl("https://keyboardtester.co/keyboard-tester.html");

browser.holdKey("Ctrl");
browser.enterText("Holding Ctrl has no effect here, but it works!");
browser.releaseKey("Ctrl");
browser.pressKey("!");
```

Pressing modifier keys to enter special characters such as "!" or "@" is not required. Instead, write `browser.pressKey("!");` or `browser.pressKey("@");`. The Botfather browser will try its best to enter the character specified. Still, you might want to press certain modifier keys if you're, e.g., testing a browser game. The same goes for other special keys.

### Supported modifier keys and special keys

- "Ctrl"
- "Alt"
- "Shift"
- "Meta"
- "Left"
- "Right"
- "Up"
- "Down"
- "Tab"
- "Escape"
- "Enter"
- "Backspace"
- "Delete"

## Execute JavaScript

Executes `javascript_code` in the browser's JavaScript engine. This can be used to fill out login forms and submit them. This method does not return anything.

```javascript
var code = "document.body.style.background = 'red';";
browser.executeJavascript(code);
```

## Evaluate JavaScript (experimental)

Scripts can now evaluate arbitrary JavaScript code in a browser and use the returned value.

```javascript
var browser = new Browser("A Test Browser");

browser.loadUrl("google.com");
browser.finishLoading();

var title = browser.evaluateJavascript("document.title;");
Helper.log(title);
```

Everything except functions can be returned and used, even objects:

```javascript
var browser = new Browser("Another test Browser");

browser.loadUrl("youtube.com");
browser.finishLoading();

var location = browser.evaluateJavascript("document.location;");
Helper.log(location.href);
```

The JavaScript is evaluated in the browser's `webhelper` process. In case something goes wrong, the `.evaluateJavascript` method has an optional `timeout_in_ms` parameter. Its default value is `10000` milliseconds.

```javascript
var browser = new Browser("Timeout Test");

try {
  // Wait 5 seconds for the code to finish executing
  browser.evaluateJavascript("while(true);", 5 * 1000);
} catch (e) {
  Helper.log(e);
}
```

**Beware**: This is an experimental feature. At the time of writing, evaluating `document;` still crashes a browser's `webhelper` process.

## Manipulate or block responses

Most of the browser's resource modification methods take regular expressions as arguments.

```javascript
// Prevent a resource from loading
browser.blockResource(".css");

// Replace a requested resource
browser.replaceResource(".png", "https://botfather.io/icons/logo.png");

// Unmodify a single resource identified by the regular expression used before
browser.unmodifyResource(".css");

// Unmodify all modified resources for this browser
browser.unmodifyResources();
```

## Setting a custom user agent

Setting a custom user agent is useful for testing websites or web apps that expect a specific user agent.

```javascript
var browser = new Browser("Test");

// Set a custom user agent string
browser.setUserAgent(
  "Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:47.0) Gecko/20100101 Firefox/81.0",
);

// Subsequent requests will use the custom user agent
browser.loadUrl("https://www.whatismybrowser.com/detect/what-is-my-user-agent");
```

One may change the user agent as many times as they wish. The user agent can also be reset to Botfather's default. Botfather's default user agent is based on its built-in Chromium browser.

```javascript
// Reset to the default user agent
browser.resetUserAgent();
```
