---
pubDate: 2018-11-16
title: Flatpak, Timer, and more (4.3 released)
lead: Botfather 4.3 features support for all major Linux distributions, a new Timer type, and, as always, many bugs have been fixed and existing features tweaked.
---

## We love Flatpak

The Linux installers for individual distributions have been replaced with a single Flatpak. Botfather now runs on all major Linux distributions "out of the box". The Botfather Flatpak is [hosted on Flathub](https://flathub.org/apps/details/io.botfather.Botfather) and thus can be found in some Linux software centers by default.

We also updated the Windows installer. It now automatically creates a shortcut in the application menu. And yes, we are aware of crashes of the integrated browser on Windows (we're working on it).

## The new Timer type

Timers have been requested for quite some time (pun not intended). Use them to check how much time has passed since they were started.

```javascript
var timer = new Timer();
timer.start();

Helper.msleep(5000);

if (timer.hasExpired(4000)) {
  Helper.log(timer.elapsed(), "ms elapsed since the timer was started");
  timer.stop();
}
```

The Timer type's documentation will be available soon. Beware: There is a `.running()` method, which will be renamed to `.isRunning()`.

## Helper.debug

Script developers can now print debug messages using `Helper.debug()`. Such debug messages will only be printed to the console when the new `Wizard Mode` setting is turned on.

## No more prompts

Botfather used to search for new updates when launched. It no longer does so. If you want to check for updates on Windows, do so via the `File` menu.

To check for updates on Linux (Flatpak), run `flatpak update` in the terminal or use your software center's update feature.

## RIP Pathfinder

The `Pathfinder` API has been replaced by a new `Algorithm` API. The `Pathfinder.findShortestPath` method has been moved and renamed to `Algorithm.dijkstra` (documentation available soon).

## What's next?

The next update will feature a built-in **Script Manager**. Using the Script Manager, scripts can be installed and updated without the need to visit our website.
