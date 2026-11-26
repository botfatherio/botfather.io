---
pubDate: 2018-09-18
title: 4.2.0 Fixes and missing methods
lead: Version 4.2.0 has been released, featuring mainly bug fixes and the addition of small methods.
---

Note that we renamed the [Image](/docs/apiref/image/) object's `.pixelEqualityTo` method to `.pixelEquality`. (We removed the "to").

Check out the changelog below to see which methods have been added.

We decided to remove the Android, Browser, and Desktop shortcut methods: findMatch, findMatches, findAndTap, and findAndClick.
Sure, they were handy, but they were not reliable enough and just did things one can do with regular methods too.

The Desktop.findMatch method, as well as the other methods, can be replaced with something along these lines.
We consider this better than the shortcut methods, as the script writer has full control over what's happening and will be informed of any exception occurring.

```javascript
var template = new Image("template.png");
var screenshot = Desktop.takeScreenshot();

var match = Vision.findMatch(screenshot, template);
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
- Fixed bug causing a crash when one passes a null image to `Image.pixelEquality`
- Enhanced the `Helper.playWavSound` method to support more WAV files.
