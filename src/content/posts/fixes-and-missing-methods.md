---
pubDate: 2018-09-18
title: 4.2.0 Fixes and missing methods
lead: Version 4.2.0 released featuring mainly bugfixes and addition of small methods.
---

Note that we renamed the [Image](/docs/apiref/Image) objects `.pixelEqualityTo` method to `.pixelEquality`. (We removed the "to").

Check out the changelog below to see which methods have been added.

We decided to remove the Android, Browser and Deskop shortcut methods: findMatch, findMatches, findAndTap and findAndClick.
Sure they were handy, but they were not reliable enough and just doing things one can do with regular methods to.

The Desktop.findMatch methods, aswell as the other methods can be replaced with something along those lines.
We consider them better than the shortcut methods as the script writer has full control over whats happening and will be informed over any exception occuring.

```javascript
var template = new Image("template.png");
var screenshot = Desktop.takeScreenshot();

var match = Vision.findMatch(template);
Desktop.leftClick(match.getRect().getCenter());
```

## Changelog

- Added Rect.marginsAdded
- Added Rect.marginsSubtracted
- Added Point.pointAdded
- Added Point.pointRemoved
- Added Margins.marginsAdded
- Added Margins.marginsRemoved
- Added Size.sizeRemoved
- Added Size.sizeSubtracted
- Renamed `Image.pixelEqualityTo` to `Image.pixelEquality`
- Fixed bug causing a crash when one passes an nullimage to `Image.pixelEquality`
- Enhanced the `Helper.playWavSound` method to support more wav files.
