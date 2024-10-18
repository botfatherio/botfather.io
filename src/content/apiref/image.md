---
title: The Image Type
---

Whenever you want to work with images in bot scripts you need the inbuild `Image` type. Using the `Image` type images can be loaded into the script engine, manipulated and used in methods.

## Table of contents

## Loading an image

Usually you want to load an image from an image file provided with your script file. Images can be stored in any common format, but we strongly recommend you to use **.png** files (an losseless image file format that supports lossless data compression).

The image filepath provided should be stored relative to the script file. Absolute file paths are supported too, but never use them in scripts you want to share with someone else.

- `var image = new Image("testimage.png");`
- `var another_image = new Image("templates/epic_loot.png");`

## Creating an image

Images can also be created providing their [Size](../size) and optionally a [Color](../color). The image will be _null_ (`Image.isNull();` will return true) if no color has been provided.

- `var red_50x50_image = new Image(new Size(50, 50), new Color("red"));`
- `var invalid_image = new Image(new Size(100, 100);`

Creating images using this method can be usefull e.g. to compare such images to other images taken using Apis _takeScreenshot_ methods.

## Image methods

---

##### `Image.isNull();`

A null image has all parameters set to zero and no allocated data.

##### `Image.hasAlphaChannel();`

Returns true if the image has a format that respects the alpha channel, otherwise returns false.

##### `Image.getWidth();`

Returns the images width.

##### `Image.getHeight();`

Returns the images height.

##### `Image.getSize();`

Returns the images [Size](../size).

##### `Image.load(filepath);`

- `filepath` (string): A absolute or relative image filepath. Relative file paths are considered relative to the bot script.

Loads image data from `filepath`. Most common image file extensions are supported but .png files are strongly recommended.

##### `Image.save(filepath);`

- `filepath` (string): A absolute or relative image filepath. Relative file paths are considered relative to the bot script.

Saves the image to `filepath`.

##### `Image.fill(color);`

- `color` ([Color](../color)): A color object of the desired fill color.

Fills the entire image with the given color.

##### `Image.getPixelColor(position);`

- `position` ([Point](../point)): The pixels position on the image.

Returns the color of the pixel at the given `position` as a [Color](../color) object.

##### `Image.setPixelColor(position, color);`

- `position` ([Point](../point)): The pixels position on the image.
- `color` ([Color](../color)): The desired new pixel color.

Alters the pixels `color` at the given `position`.

##### `Image.copy(sub_area);`

- `sub_area` [Rect](../rect): The sub area of the image to copy.

Returns a sub-area of the image as a new [Image](#).

##### `Image.mirrored(horizontally, vertically);`

- `horizontally` (boolean): Whether the image shall be mirrored horizontally.
- `vertically` (boolean): Whether the image shall be mirrored vertically.

Returns a mirror of the image as a new [Image](#) object.

##### `Image.grayed();`

Returns the image in grayscale format as a new [Image](#) object.

##### `Image.createMaskFromColor(color);`

- `color` ([Color](../color)): The color used to create the mask.

Creates and returns a mask for this image based on the given `color` value. The returned mask will be a new [Image](#). Pixels having the provided `color` will be black on the mask image, every other pixel white.

##### `Image.createMaskFromAlpha();`

Builds and returns a mask [Image](../image) from the alpha channel of this image.

##### `Image.isolateColorRange(min_color, max_color, keep_color);`

- `min_color` and `max_color` using the HSV color space as described in the [Color documentation](../color).
- `min_color` ([Color](../color)): The min HSV color values isolated.
- `max_color` ([Color](../color)): The max HSV color values isolated.
- `keep_color` Whether pixels with their color being in range of `min_color` and `keep_color` shall keep their original color. If false, their pixel color will become white.

Turns all pixels black which are not in range of `min_color` and `max_color`. Pixels in range keep their color if `keep_color` is true or become white if false. The method calculates the range to isolate using the HSV color space. Thus it's good practise to instanciate `min_color` and `max_color` as HSV colors.

##### `Image.countDifferentPixels(other_image);`

- `other_image` ([Image](../image)): Another image of this images size.

Returns the number of pixels different on two images of the same size.

##### `Image.pixelEqualityTo(other_image);`

- `other_image` ([Image](../image)): Another image of this images size.

Calculates the percentage of pixels being the same color and position on both images. (Internally this method uses the `Image.countDifferentPixels` method).
