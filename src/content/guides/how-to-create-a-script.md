---
title: How to create a script
---

Scripts tell Botfather bots what to do; they contain the bot's logic. Scripts are written in JavaScript, primarily using [Botfather APIs](/docs/apiref/) (Application Programming Interfaces). Those APIs are just a bunch of handy functions that allow you to control Android devices, Botfather's integrated web browser, or your desktop. Furthermore, Botfather has custom types to represent things like images, points, or sizes. In Botfather scripts, every line of code serves a purpose and has an effect on your bot's behavior. Getting started is easy; continue reading to learn how.

## You need a code editor

Actually, any text editor can be used to create Botfather scripts. We recommend using a code editor with syntax highlighting, such as [Visual Studio Code](https://code.visualstudio.com/) or [Zed](https://zed.dev/). There are many more code editors, but we plan to release extensions for those two at some point in the future.

## The script file

Every time you want to write a script, `start by creating a folder` for it. This folder will contain the actual bot script and assets such as images, called templates, which can be used for object detection using the [Vision API](/docs/apiref/vision-api/).

Once you have a folder for your script, open your code editor and create a new file. That file will be your script file and can be named anything (e.g. `script.js`); just make sure it has `.js` as its file extension. JS stands for JavaScript, the popular programming language Botfather scripts are written in.

## Pick an API

It's time to pick one of these APIs to start with: [Android API](/docs/apiref/android-api/), [Browser API](/docs/apiref/browser/), [Desktop API](/docs/apiref/desktop-api/).

Which API to choose obviously depends on what you want to automate. We recommend using the Browser API if you just want to mess around. By the way: You can pick multiple APIs if you want to. They work at the same time.

## Explore the API's methods

Now it's time to look through the API's documentation; that's how real programmers find what they need. Feel free to contact us if there is a function or API you need, and we'll consider implementing it.

Take a look at what can be controlled using the API you chose. Using the [Browser API](/docs/apiref/browser/), you could, for example, load a YouTube video and then pause and resume it.

## Vision is key

Sooner or later, you will want to advance your bot and react to things on the screen. To accomplish this, the Android, Browser, and Desktop APIs have a `.takeScreenshot()` method, which returns an [Image](/docs/apiref/image/). The returned image can be used with the [Vision API](/docs/apiref/vision-api/) to find objects and react to them (e.g. by clicking on them).

That's actually all you need to get started. Feel free to [explore scripts](/scripts/) published by others to see how they work and draw inspiration.
