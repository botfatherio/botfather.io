---
title: Vision API
---

The Vision APIs main purpose is to process images taken using the [Android API](../android-api), [Browser API](../browser-api) or [Desktop API](../desktop-api). But there is no restriction on that, any [Image](../image) can be processed by the Vision APIs methods.

Currently the Vision API provides methods to find subimages or blobs on images. Results of such methods are single [Match](../match) objects or arrays containing multiple [Match](../match) objects. Things you might want to search for are for instance _buttons on webpages_ or _loot in games_. To find non static, maybe spinning objects, one can use the more complex `.findBlobs` method.

Mostly for debugging purposes the Vision API provides a `.markMatch` and `.markMatches` method. Those methods can be used to mark matches on a given image visually. That way you can check whether you choosed good parameters to find what you were looking for.

## Table of contents

## Access Vision API methods

Every bot script has it's own global Vision API object. That object holds all Vision API methods and can be used to access them.

```javascript
var screenshot = Desktop.takeScreenshot();
var windows_icon = new Image("windows_icon.png");
var match = Vision.findMatch(screenshot, windows_icon);
```

## Vision API methods

---

##### `Vision.findMaskedMatches(image, tpl, mask, threshold, max_matches);`

- `image` ([Image](../image)): The image to search the template on. (usually a screenshot).
- `tpl` ([Image](../image)): The template searched for on the `image`.
- `mask` ([Image](../image)): A mask telling the methods which parts of the template to use or ignore.
- `threshold` (number): The resulting matches min score. Default: 0.8 (80%).
- `max_matches` (number): The max amount of matches to look for. Default: -1 (unlimited).

Use this method to search for a masked template on the provided `image`. This method returns an Javascript array of [Match](../match) objects. The returned array will contain a maximum of `max_matches` matches, each of those matches has atleast the score defined by the `threshold` parameter.

A template is an [Image](../image) showing what you want to search for on an larger `image`. The `image` is usually a screenshot and the `tpl` something like an image of _loot_ in online games or _buttons_ on websites.

Looking for non rectangular objects you might want the `.findMaskedMatches` method to ignore parts of the provided `tpl`. To do you you want create another image of the templates size. This images is called the `mask`. Parts you want to ignore on the template are black on the `mask` and parts you want to search for are white.
You can create mask manually or use the [Image](../image) objects `.createMaskFromColor` and `.createMaskFromAlpha` methods.

**Note**: It's actually recommended to not use the `.findMaskedMatches`, but to use the `.findMatches` method with a lower `threshold` instead. Methods not taking a mask turned out to are more reliable.

##### `Vision.findMaskedMatch(image, tpl, mask, threshold);`

This methods does the same as the `.findMaskedMatches` method, but always returns exactly one [Match](../match), instead of an array of matches.
If the method couldn't a match, the returned match will be invalid.

##### `Vision.findMatches(image, tpl, threshold, max_matches);`

This methods works the same as the `.findMaskedMatches` method, but does not take a mask as parameter.

##### `Vision.findMatch(image, tpl, threshold);`

This methods works the same as the `.findMaskedMatch` method, but does not take a mask as parameter.

##### `Vision.findBlobs(image, blob_tpl, min_distance, min_repeatability);`

- `image` ([Image](../image)):
- `blob_tpl` ([BlobTpl](../blobtpl)):
- `min_distance` (number): default: 10
- `min_repeatability` (number): default: 2

Finds light (white) blobs on the image as described by the `blob_tpl` and `min_distance` and `min_repeatability` parameters. Matches are returned as an Javascript array of [Match](../match) objects.

**Note**: All [Match](../match) objects found using the `.findBlobs` method have a score of 1.0.

If you want to search for blobs of a specific color, filter all unwanted colors using the [Image](../image) objects `.isolateColorRange` method in beforehand.

##### `Vision.markMatches(image, matches, color, thickness);`

- `image` ([Image](../image)): The image to draw the matches on (consider it's size).
- `matches` ([Match](../match) Array): The matches to draw.
- `color` ([Color](../color)): The color of the rectangles marking the matches.
- `thickness` (number): The size of the rectangles border in pixels. Default: 2

Draws a rectangle for each Match in the matches array in the provided `image`. The position and size of the rectangles are provided by the matches `.getRect` methods. The rectangles color will be the provided `color` parameter and `thickness` the rectangles thickness. Invalid matches, identified using the matches `.isValid` methods, are not drawn.

The provided `image` should be the image one has found the matches on or at least an image of the same size. If an match is outside of the image, it won't be drawn.

##### `Vision.markMatch(image, match, color, thickness);`

Does the same as the `.markMatches` method but only takes and draws a single match.
