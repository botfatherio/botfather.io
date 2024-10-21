---
pubDate: 2019-06-17
title: Support for multiple browsers and keyboard (v6)
lead: Botfather version 6.0 is about to release, featuring support for running multiple browsers at the same time and full browser keyboard support.
---

After months of intense work, Botfather 6 is about to release. In this post we'll talk about new features, API changes and our roadmap to the next versions and beyond.

We encourage script developers to read carefully and update their scripts.

## The new Browser API

Users can now run multiple bots that require a browser at the same time. A new "Browsers" tab has been added for managing a Bots browsers after it has been started.

Developers can now use multiple browsers in their scripts. For this purpose browsers can be created dynamically. Most browser methods and their parameters have remained the same.

### Changes in a nutshell:

- Scripts can now have as many Browsers as they like
- The user can view and control all script created Browsers
- Browsers now have full keyboard support
- Script created Browsers now have fixed sizes

### Using multiple browsers in a Script

To create a new Browser you need to provide a unique `name` and the browsers `size`. The name is used to identify the browser and label it in the user interface. The size of the browser can't be changed by the user. That way developers do not have to worry about users changing the browsers size and thus altering the position on website elements.

If you want to give your users a choice about a browsers size, make use of the `Config API`.

```javascript
var browser1 = new Browser("Main Browser", new Size(1600, 800));
var browser2 = new Browser("Side Browser", new Size(1400, 700));

browser1.loadUrl("google.com");
browser2.loadUrl("youtube.com");
```

#### A browsers unique name

As mentioned before: Browsers have a unique name. That name can be used to retrive a Browser even after the script has been restarted. That way a script can load a website and then prompt the user to manually log in. After the bot has been started again, the script can retrive the exact same browser and continue where it left of.

### Using the browsers keyboard

Botfather 6 features several new browser methods related to keyboard input. Most of them are straight forward to use. Take a look at our documentation if you want to use special characters or modifiers. Obviously not only scripts can control the keyboard, users viewing a bots browser may do so aswell by just typing on their keyboard.

```javascript
var browser = new Browser("Test Browser", new Size(1400, 700));
browser.loadUrl("https://keyboardtester.co/keyboard-tester.html");

browser.holdKey("Ctrl");
browser.enterText("Holding Ctrl has no effect");
browser.releaseKey("Ctrl");
browser.pressKey("!");
```

Pressing modifier keys to enter special characters such as "!" or "@" is not required. Instead write `browser.pressKey("!");` or `browser.pressKey("@");`. The Botfather browser will try its best to enter the character specified. Still you might want to press certain modifier keys if you're e.g. testing a browser game. The same goes for other special keys.

#### Supported modifier keys and special keys:

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

## Accesing type properties

Several types values can now be accessed as properties. Here are a few examples:

```javascript
// Lets click the center point of this browser
var browser = new Browser("Test", new Size(1000, 1000));

// Old notation (still working):
browser.leftClick(browser.getRect().getCenter());

// New notation:
browser.leftClick(browser.rect.center);
```

## Other changes in version 6

- The `Point` type now has a ```.distanceTo(other_point);` method
- The `Point` types `.manhattanLength` method has been removed
- The `Timer` types `.elapsed` method has been renamed to `.getElapsedTime`
- The `Browser` types `.moveMouseTo` method has been renamed to `.moveMouse`
- The `botfather_helper` program has been renamed to `webhelper`
- Hundreds of bugfixes and tweaks

## Beta available on flathub

Botfather 6 will stay in beta for one or two weeks. Users are encouraged to help us test the new major release before its official release. At the same time script developers have a chance to update their scripts.

If you are a Linux user and want to run Botfather 6, type the following command in your commandline:

```bash
flatpak remote-add flathub-beta https://flathub.org/beta-repo/flathub-beta.flatpakrepo

flatpak install flathub-beta io.botfather.Botfather

flatpak run io.botfather.Botfather//beta
```

## Roadmap beyond Botfather 6

Now that the new browser api and keyboard support are finally a thing, its time for us to update the other platform APIs aswell. Next will be the Android API possibly followed by the Desktop API. After that we'll replace Botfather's script engine. Thats the part of the program that interprets scripts written by developers. It lacks a lot of features such as using the `let` keyword or splitting scripts into multiple files.

While these new features are under development, Botfather 6 will be maintained as usually. We will ship bug fixes and introduce minor features and tweaks. Stay tuned.
