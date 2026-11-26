---
title: Simple agar.io Bot Tutorial
---

Saw that small code snippet on our start page? In this tutorial, we'll program something quite similar: a super basic agar.io bot script.

[agar.io](http://agar.io/) is an online browser game where you start as a small blob and become bigger by "eating" other blobs. Once big enough, you can even start "eating" other players.

While winning a game is difficult, **writing a simple bot for educational purposes** is simple.

In this tutorial, we will use Botfather's [Browser API](/docs/apiref/browser/), [Vision API](/docs/apiref/vision-api/), and [Helper API](/docs/apiref/helper-api/).

## Step 1: Loading the game

First, our bot needs a browser. We create one using the [Browser](/docs/apiref/browser/) constructor and give it a name. The name labels the browser in Botfather's "Browsers" tab. Next, we load the game's website using the browser's `loadUrl` method. This method is asynchronous, which means that it does not wait for the website to finish loading.

```javascript
browser.loadUrl("http://agar.io/");
```

But we want the bot to wait for the website to finish loading. We could use a method such as `Helper.sleep` to wait for some seconds. But depending on the user's internet connection, we might be waiting too long or not long enough.

```javascript
browser.loadUrl("http://agar.io/");
Helper.sleep(10); // Wait for 10 seconds. This might be too long or not long enough for the website to load.
```

Instead, we use the `browser.finishLoading` method to wait for the website to finish loading. That way, the script will continue once the website has finished loading.

```javascript
browser.loadUrl("http://agar.io/");
browser.finishLoading(); // Wait for the website to finish loading.
```

By default, the `browser.finishLoading` method returns `false` after 30 seconds if the website takes longer to load. Read the [Browser API documentation](/docs/apiref/browser/) to learn more.

## Step 2: Start the game

After loading the game's website, we're presented with the game's start screen. Here we have to click the play button and optionally enter a username.

![Agar.io start screen](@assets/docs/start-screen.png)

There are two methods to solve this "problem". We could either take a screenshot, find the play button, and click at its location, or execute some JavaScript in the browser to submit the login form.

While executing JavaScript is the faster and more robust way, it's not always possible. Executing JavaScript only works on websites, neither on Android nor on the desktop. Taking screenshots, finding subimages (templates) in them, and clicking them always works.

### Using browser JavaScript

As shown on Botfather's start page, we just have to find the HTML play button and click it using JavaScript. If you know HTML (Hypertext Markup Language), this is straightforward for you: Just write a little JavaScript code snippet and execute it using the `browser.executeJavascript` method.

For newcomers, this might be confusing: We're writing bot scripts in JavaScript and sending JavaScript to the browser to execute it there (dafuq?). If you don't know HTML, you might want to skip this section and look at _Using image recognition_ instead.

The play button element's ID is `play`. Using `document.getElementById`, we can get a reference to the element and call its `.click` method to click it.

```javascript
var click_script = "document.getElementById('play').click();";
browser.executeJavascript(click_script);
```

### Using image recognition

Mastering image recognition is what you want in order to create good bots. We'll employ a method called _template matching_. To do so, we need a screenshot of the browser and a smaller image, called a _template_, that we want to find in the screenshot.

To get good results, called _matches_, you want your _template_ to look as distinct as possible. The _template_ must look the same as in the screenshot. Looking for a scaled version of it won't work.

To take a screenshot of the browser, we use the `browser.takeScreenshot` method. It will return an [Image](/docs/apiref/image/) object. We store the screenshot in a variable called `screenshot`.

```javascript
var screenshot = browser.takeScreenshot();
```

In the screenshot, we'll look for the _template_ of the play button shown below. Download it and put it next to your script file.

![Agar.io play button](@assets/docs/play-button.png)

To load the play button's _template_ image, we use the [Image](/docs/apiref/image/) constructor. We store the loaded _template_ [Image](/docs/apiref/image/) object in a variable called `template`.

```javascript
var template = new Image("play-button.png");
```

It's time to use one of the [Vision API](/docs/apiref/vision-api/) methods. `Vision.findMatch` takes three parameters: a `screenshot`, a `template`, and a `score`, and returns a [Match](/docs/apiref/match/) object.

The `match` object will tell us where the _template_ has been found in the _screenshot_. If there are multiple matches, the best one is returned.

The _score_ tells the `Vision.findMatch` method how good a _match_ must be at least. A _score_ of `0.5` means: the _template_ must match something in the _screenshot_ by at least 50%. We want the _template_ to match by at least 95%.

```javascript
var match = Vision.findMatch(screenshot, template, 0.95);
```

Using the `Match.isValid` method, we can check whether the play button could be found.

To click the play button, we use the `browser.leftClick` method, which takes a [Point](/docs/apiref/point/) object. We want to click the center of the play button match. To do so, we use two methods: `Match.getRect` and `Rect.getCenter()`. Read the [Rect](/docs/apiref/rect/) object's documentation to learn more.

```javascript
// Complete code using image recognition:

var browser = new Browser("agar.io");
browser.loadUrl("http://agar.io/");
browser.finishLoading();

var screenshot = browser.takeScreenshot();
var template = new Image("play-button.png");

var match = Vision.findMatch(screenshot, template, 0.95);

if (match.isValid()) {
  var play_button_position = match.getRect().getCenter();
  browser.leftClick(play_button_position);
}
```

## Step 3: Play the actual game

_work in progress..._

## Step 4: Respawn

_work in progress..._
