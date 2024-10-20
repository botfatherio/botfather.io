---
title: Simple agar.io Bot Tutorial
---

Saw that small code snipped on our startpage? In this tutorial we'll program something quite similar: A super basic agar.io bot script.

[agar.io](http://agar.io/) is an online browsergame were you start as a small blob and become bigger by "eathing" other blobs. Once big enough you can even start "eating" other players.

While winning a game is difficult, **writing a simple bot for educational purposes** is simple.

In this tutorial we will use botfathers [Browser API](../apiref/browser-api), [Vision API](../apiref/vision-api) and [Helper API](../apiref/helper-api).

## Step 1: Loading the game

The first thing our bot shall do is loading the games website `http://agar.io/`. To do so we use the `Browser.loadUrl` method. This method is asynchronous, which means that it does not wait for the website to finish loading.

```javascript
Browser.loadUrl("http://agar.io/");
```

But we want the bot to wait for the website to finish loading. We could use a method such as `Helper.sleep` to wait for some seconds. But depending on the users internet connection we might be waiting too long or not long enough.

```javascript
Browser.loadUrl("http://agar.io/");
Helper.sleep(10); // Wait for 10 seconds. This might be too long or not long enough for the website to load.
```

Instead we use the `Browser.finishLoading` method to make the Browser wait for the website to finish loading. Doing so the script will continue once the website finished loading.

```javascript
Browser.loadUrl("http://agar.io/");
Browser.finishLoading(); // Wait for the website to finish loading.
```

By default the `Browser.finishLoading` methodreturns `false` after 30 seconds, if the website takes longer to load. Read the [Browser API documentation](../apiref/browser-api) to learn more.

## Step 2: Start the game

After loading the games website, we're presented with the games start screen. Here we have to click the play button and optionaly enter a username.

![Image of the agar.io start screen](/docs/start-screen.png)

There are two methods to solve this "problem". We could either take a screenshot, find the play button and click at it's location or execute some javascript in the browser to submit the login form.

While executing javascript is the faster and more robust way, it's not always possible. Executing javascript does only work on websites, neither on Android nor on the Desktop. Taking screenshots, finding subimages (templates) on it and clicking them always works.

#### Using browser javascript

As shown on botfathers startpage we just have to find the HTML play button and click it using javascript. If you known HTML (Hypertext Markup Language) this is straight forward for you: Just write a little javascript code snipped and execute it using the `Browser.executeJavascript` method.

For newcomers this might be confusing: We're writing bot scripts in javascript and sending a javascript to the browser to execute it there (dafuq?). If you don't know HTML you might want to ignore this section, but look at the _Using image recognition_ instead.

The play button elements id it `play`. Using `document.getElementById` we can get a reference to the element and call its `.click` method to click it.

```javascript
var click_script = "document.getElementById('play').click();";
Browser.executeJavscript(click_script);
```

#### Using image recognition

Mastering image recognition is what you want to create good bots. We'll employ a method called _template matching_. To do so we need a screenshot of the browser and an smaller image, called _template_, we want to find in the screenshot.

To get good results, called _matches_, you want your _template_ to look as distinct as possible. The _template_ must look the same as in the screenshot. Looking for a scaled version of it won't work.

To take a screenshot of the browser we use the `Browser.takeScreenshot` method. It will return an [Image](../apiref/image) object. We store the screenshot in a variable called `screenshot`.

```javascript
var screenshot = Browser.takeScreenshot();
```

On the screenshot we'll look for a _template_ of the play button shown below. Download and put it next to your script file.

![Image of the agar.io start screen](/docs/play-button.png)

To load the play buttons _template_ image we use the [Image](../apiref/image) constructor method. We store the loaded _template_ [Image](../apiref/image) object in a variable called `template`.

```javascript
var template = new Image("play-button.png");
```

It's time to use one a [Vision API](../apiref/vision-api) method. `Vision.findMatch` takes three parameters: A `screenshot`, a `template` and a `score` a returns a [Match](../apiref/match) object.

The `match` object will tell us where the _template_ has been found on the _screenshot_. If there are multiple matches, the best one is returned.

The _score_ tells the `Vision.findMatch` method how good at _match_ must atleast be. A _score_ of `0.5` means: the _template_ must match something in the _screenshot_ atleast 50%. We want the _template_ to match atleast to 95%.

```javascript
var match = Vision.findMatch(screenshot, template, 0.95);
```

Using the `Match.isValid` method we can check whether the play button could be found.

To click the play button we use the `Browser.leftClick` method which takes a [Point](../apiref/point) object. We want to click the play button matches center. To do so we use two methods: `Match.getRect` and `Rect.getCenter()`. Read the [Rect](../apiref/point) objects documentation to learn more.

```javascript
// Complete code using image recognition:

var screenshot = Browser.takeScreenshot();
var template = new Image("play-button.png");

var match = Vision.findMatch(screenshot, template, 0.95);

if (match.isValid()) {
  var play_button_position = match.getRect().getCenter();
  Browser.leftClick(play_button_position);
}
```

## Step 3: Play the actual game

_work in progress..._

## Step 4: Respawn

_work in progress..._
