---
pubDate: 2018-11-16
title: Flatpak, Timer and more (4.3 released)
lead: Botfather 4.3 features support for all major linux distributions, a new Timer type and as always, many bugs have been fixed and existing features tweaked.
---

## We love Flatpak

The Linux installers for individual distributions have been replaced with a single Flatpak. Botfather now runs all major linux distribution "out of the box". The Botfather Flatpak is [hosted on flathub](https://flathub.org/apps/details/io.botfather.Botfather) and thus can be found in some linux software centers by default.

We also updated the Windows installer. It now automatically creates a shortcut in the application menu. And yes, we are aware about crashes of the integrated browser on windows. (we're working on it).

## The new Timer type

Timers have been requested quite some time (pun not intended). Use them to check how much timed passed since they have started.

```javascript
var timer = new Timer();
timer.start();

Helper.msleep(5000);

if (timer.hasExpired(4000)) {
  Helper.log(timer.elapsed(), "ms elapsed since the timers has been started");
  timer.stop();
}
```

The Timer types documentation will be availabe soon. Beware: There is a `.running()` method which will be renamed in `.isRunning()`.

## Helper.debug

Script developers can now print debug messages using `Helper.debug()`. Such debug messages will only be printed onto the console when the new `Wizard Mode` setting is turned on.

## No more prompts

Botfather used to search for new updates when launched. Botfather no longer does so. If you want to check for updates on windows, do so via the `File` menu.

To check for updates on Linux (Flatpak), run `flatpak update` in the terminal or use your software centers update feature.

## RIP Pathfinder

The `Pathfinder` API has been replaced by a new `Algorithm` API. The `Pathfinder.findShortestPath` has been moved and renamed to `Algorithm.dijkstra`. (documentation available soon).

## Whats next?

The next update will feature an inbuilt **Script Manager**. Using the Script Manger scripts can be installed and updated without the need of visiting our website.
