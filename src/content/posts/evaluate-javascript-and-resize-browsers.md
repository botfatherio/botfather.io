---
pubDate: 2019-06-25
title: Evaluate JavaScript and resize Browsers (v6.1)
lead: One week after the Botfather 6 beta was released, we added even more functionality. Scripts can now evaluate JavaScript in browsers and use the returned value. And browsers can be resized dynamically.
---

## Evaluate JavaScript in a browser (experimental)

A new method has been added to the Browser type. Scripts can now evaluate arbitrary JavaScript code in a browser and use the returned value.

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

## Resize browsers dynamically

Browsers can now be resized using a new `.resize(new Size(...));` method. Furthermore, when creating a new browser, the initial size parameter became optional. A browser's default size is `1366x768`.

```javascript
var browser = new Browser("test");
browser.resize(new Size(900, 600));
```

## Beta available on Flathub

If you are a Linux user and want to run Botfather 6.1, type the following commands in your command line:

```bash
flatpak remote-add flathub-beta https://flathub.org/beta-repo/flathub-beta.flatpakrepo

flatpak install flathub-beta io.botfather.Botfather

flatpak run io.botfather.Botfather//beta
```
