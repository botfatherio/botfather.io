---
title: Image Type
---

Whenever you want to work with images in bot scripts, you need the built-in `Image` type. Using the `Image` type, images can be loaded into the script engine, manipulated, and used in methods.

## Table of contents

## Loading an image

Usually, you want to load an image from an image file provided with your script file. Images can be stored in any common format, but we strongly recommend using **.png** files (a lossless image file format).

The image file path provided should be relative to the script file. Absolute file paths are supported too, but never use them in scripts you want to share with someone else.

- `var image = new Image("testimage.png");`
- `var another_image = new Image("templates/epic_loot.png");`

## Creating an image

Images can also be created by providing their [Size](/docs/apiref/size/) and optionally a [Color](/docs/apiref/color/). The image will be _null_ (`Image.isNull();` will return true) if no color has been provided.

- `var red_50x50_image = new Image(new Size(50, 50), new Color("red"));`
- `var invalid_image = new Image(new Size(100, 100));`

Creating images using this method can be useful, e.g. to compare such images to other images taken using the APIs' _takeScreenshot_ methods.

## Image methods

---

### `Image.isNull();`

A null image has all parameters set to zero and no allocated data.

### `Image.hasAlphaChannel();`

Returns true if the image has a format that respects the alpha channel; otherwise returns false.

### `Image.getWidth();`

Returns the image's width.

### `Image.getHeight();`

Returns the image's height.

### `Image.getSize();`

Returns the image's [Size](/docs/apiref/size/).

### `Image.load(filepath);`

- `filepath` (string): An absolute or relative image file path. Relative file paths are considered relative to the bot script.

Loads image data from `filepath`. Most common image file extensions are supported, but .png files are strongly recommended.

### `Image.save(filepath);`

- `filepath` (string): An absolute or relative image file path. Relative file paths are considered relative to the bot script.

Saves the image to `filepath`.

### `Image.fill(color);`

- `color` ([Color](/docs/apiref/color/)): A color object of the desired fill color.

Fills the entire image with the given color.

### `Image.getPixelColor(position);`

- `position` ([Point](/docs/apiref/point/)): The pixel's position in the image.

Returns the color of the pixel at the given `position` as a [Color](/docs/apiref/color/) object.

### `Image.setPixelColor(position, color);`

- `position` ([Point](/docs/apiref/point/)): The pixel's position in the image.
- `color` ([Color](/docs/apiref/color/)): The desired new pixel color.

Alters the `color` of the pixel at the given `position`.

### `Image.copy(sub_area);`

- `sub_area` [Rect](/docs/apiref/rect/): The sub area of the image to copy.

Returns a sub-area of the image as a new [Image](#).

### `Image.mirrored(horizontally, vertically);`

- `horizontally` (boolean): Whether the image shall be mirrored horizontally.
- `vertically` (boolean): Whether the image shall be mirrored vertically.

Returns a mirror of the image as a new [Image](#) object.

### `Image.grayed();`

Returns the image in grayscale format as a new [Image](#) object.

### `Image.createMaskFromColor(color);`

- `color` ([Color](/docs/apiref/color/)): The color used to create the mask.

Creates and returns a mask for this image based on the given `color` value. The returned mask will be a new [Image](#). Pixels having the provided `color` will be black on the mask image, and every other pixel white.

### `Image.createMaskFromAlpha();`

Builds and returns a mask [Image](/docs/apiref/image/) from the alpha channel of this image.

### `Image.isolateColorRange(min_color, max_color, keep_color);`

- `min_color` and `max_color` using the HSV color space as described in the [Color documentation](/docs/apiref/color/).
- `min_color` ([Color](/docs/apiref/color/)): The min HSV color values isolated.
- `max_color` ([Color](/docs/apiref/color/)): The max HSV color values isolated.
- `keep_color` (boolean): Whether pixels with a color in the range of `min_color` and `max_color` shall keep their original color. If false, their pixel color will become white.

Turns all pixels black that are not in the range of `min_color` and `max_color`. Pixels in range keep their color if `keep_color` is true or become white if false. The method calculates the range to isolate using the HSV color space. Thus, it's good practice to instantiate `min_color` and `max_color` as HSV colors.

### `Image.countDifferentPixels(other_image);`

- `other_image` ([Image](/docs/apiref/image/)): Another image of this image's size.

Returns the number of pixels that differ between two images of the same size.

### `Image.pixelEqualityTo(other_image);`

- `other_image` ([Image](/docs/apiref/image/)): Another image of this image's size.

Calculates the percentage of pixels that have the same color and position in both images. (Internally, this method uses the `Image.countDifferentPixels` method).
