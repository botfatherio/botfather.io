---
title: How to create a script
---

Scripts tell Botfather bots what to do, they contain the bots logic. Scripts are writting in Javascript using primarily [Botfather APIs](/docs/apiref/) (Application Programming Interfaces). Those APIs are just a bunch of handy functions which allow you to control Android devices, Botfathers integrated webbrowser or your Dekstop. Furthermore Botfather has custom types to represent things like images, points or sizes. In Botfather scripts every line of code serves a purpose and has an effect on your bots behaviour. Getting started is easy, continue reading to learn how.

### You need a code editor

Actually any text editor can be used to create Botfather scripts. We recomment you to use a code editor with syntax highlighting such as [Visual Studio Code](https://code.visualstudio.com/), [Atom](https://atom.io/), or [Sublime Text](https://www.sublimetext.com/). There are many more code editors, but we plan to release extensions for those three at some point in the future.

### The script file

Every time you want to write a script `start by creating a folder` for it. This folder will contain the actual bot script and assets such as images, called templates, which can be used for object detection using the [Vision API](/docs/apiref/vision-api/).

Once you have folder for your script open your code editor and create a new file. That file will be your script file and can be named anything (eg. `script.js`), just make sure it has `.js` as file extension. JS stands for Javascript, a popular programming language botfather scripts are written in.

### Pick an API

It's time to pick one of these APIs to start with: [Android API](/docs/apiref/android-api/), [Browser API](/docs/apiref/browser-api/), [Desktop API](/docs/apiref/desktop-api/).

Which API to choose obviously depends on what you want to automated. We recomment to use the Browser API if you just want to mess around. By the way: You can pick multiple APIs if you want to. The work at the same time.

### Expore the APIs methods

Now it's time to look through the APIs documentation, thats how real programmers find what they need. Feel free to contact us if there is a function or API you need and we'll consider implementing it.

Take a look at what can be control using the API you choosed. Using the [Browser API](/docs/apiref/browser-api/) you could for example load a youtube video and then pause and resume it.

### Vision is key

Sooner or later you want to advance your bot and reac to things on the screen. To accomplish this the Android, Browser and Desktop APIs have a `.takeScreenshot()` method which returns and [Image](/docs/apiref/image-type/). The returned image can be used with the [Vision API](/docs/apiref/vision-api/) to find objects and react to them (eg. by clicking on them).

Thats actually all you need to get started. Feel free to [explore scripts](/scripts/) published by others to see how they work and take inspiration.
