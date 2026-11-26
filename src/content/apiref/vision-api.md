---
title: Vision API
---

The Vision API's main purpose is to process images taken using the [Android API](/docs/apiref/android-api/), [Browser API](/docs/apiref/browser/), or [Desktop API](/docs/apiref/desktop-api/). But there is no restriction on that; any [Image](/docs/apiref/image/) can be processed by the Vision API's methods.

Currently, the Vision API provides methods to find subimages or blobs in images. Results of such methods are single [Match](/docs/apiref/match/) objects or arrays containing multiple [Match](/docs/apiref/match/) objects. Things you might want to search for are, for instance, _buttons on webpages_ or _loot in games_. To find non-static, maybe spinning objects, one can use the more complex `.findBlobs` method.

Mostly for debugging purposes, the Vision API provides the `.markMatch` and `.markMatches` methods. Those methods can be used to mark matches on a given image visually. That way you can check whether you chose good parameters to find what you were looking for.

## Table of contents

## Access Vision API methods

Every bot script has its own global Vision API object. That object holds all Vision API methods and can be used to access them.

```javascript
var screenshot = Desktop.takeScreenshot();
var windows_icon = new Image("windows_icon.png");
var match = Vision.findMatch(screenshot, windows_icon);
```

## Vision API methods

---

### `Vision.findMaskedMatches(image, tpl, mask, threshold, max_matches);`

- `image` ([Image](/docs/apiref/image/)): The image to search the template in (usually a screenshot).
- `tpl` ([Image](/docs/apiref/image/)): The template searched for in the `image`.
- `mask` ([Image](/docs/apiref/image/)): A mask telling the method which parts of the template to use or ignore.
- `threshold` (number): The resulting matches' min score. Default: 0.8 (80%).
- `max_matches` (number): The max amount of matches to look for. Default: -1 (unlimited).

Use this method to search for a masked template in the provided `image`. This method returns a JavaScript array of [Match](/docs/apiref/match/) objects. The returned array will contain a maximum of `max_matches` matches; each of those matches has at least the score defined by the `threshold` parameter.

A template is an [Image](/docs/apiref/image/) showing what you want to search for in a larger `image`. The `image` is usually a screenshot and the `tpl` something like an image of _loot_ in online games or _buttons_ on websites.

When looking for non-rectangular objects, you might want the `.findMaskedMatches` method to ignore parts of the provided `tpl`. To do so, create another image of the template's size. This image is called the `mask`. Parts of the template you want to ignore are black on the `mask`, and parts you want to search for are white.
You can create masks manually or use the [Image](/docs/apiref/image/) object's `.createMaskFromColor` and `.createMaskFromAlpha` methods.

**Note**: It's actually recommended not to use the `.findMaskedMatches` method, but to use the `.findMatches` method with a lower `threshold` instead. Methods not taking a mask turned out to be more reliable.

### `Vision.findMaskedMatch(image, tpl, mask, threshold);`

This method does the same as the `.findMaskedMatches` method, but always returns exactly one [Match](/docs/apiref/match/) instead of an array of matches.
If the method couldn't find a match, the returned match will be invalid.

### `Vision.findMatches(image, tpl, threshold, max_matches);`

This method works the same as the `.findMaskedMatches` method, but does not take a mask as a parameter.

### `Vision.findMatch(image, tpl, threshold);`

This method works the same as the `.findMaskedMatch` method, but does not take a mask as a parameter.

### `Vision.findBlobs(image, blob_tpl, min_distance, min_repeatability);`

- `image` ([Image](/docs/apiref/image/)):
- `blob_tpl` ([BlobTpl](/docs/apiref/blobtpl/)):
- `min_distance` (number): Default: 10
- `min_repeatability` (number): Default: 2

Finds light (white) blobs in the image as described by the `blob_tpl`, `min_distance`, and `min_repeatability` parameters. Matches are returned as a JavaScript array of [Match](/docs/apiref/match/) objects.

**Note**: All [Match](/docs/apiref/match/) objects found using the `.findBlobs` method have a score of 1.0.

If you want to search for blobs of a specific color, filter all unwanted colors using the [Image](/docs/apiref/image/) object's `.isolateColorRange` method beforehand.

### `Vision.markMatches(image, matches, color, thickness);`

- `image` ([Image](/docs/apiref/image/)): The image to draw the matches on (consider its size).
- `matches` ([Match](/docs/apiref/match/) Array): The matches to draw.
- `color` ([Color](/docs/apiref/color/)): The color of the rectangles marking the matches.
- `thickness` (number): The size of the rectangles' borders in pixels. Default: 2

Draws a rectangle for each Match in the matches array in the provided `image`. The position and size of the rectangles are provided by the matches' `.getRect` methods. The rectangles' color will be the provided `color` parameter, and `thickness` the rectangles' thickness. Invalid matches, identified using the matches' `.isValid` methods, are not drawn.

The provided `image` should be the image the matches were found in, or at least an image of the same size. If a match is outside of the image, it won't be drawn.

### `Vision.markMatch(image, match, color, thickness);`

Does the same as the `.markMatches` method, but only takes and draws a single match.
