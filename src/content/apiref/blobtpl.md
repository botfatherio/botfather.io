---
title: BlobTpl Type
---

The BlobTpl is used to describe the shape and size of blobs. Such blobs can then be found on screenshots using the [Vision API](/docs/apiref/vision-api/)'s `.findBlobs` method.

If you want to look for blobs of a certain color, isolate that color in your [Image](/docs/apiref/image/) beforehand. To do so, use the [Image](/docs/apiref/image/) type's `.isolateColorRange` method. After doing so, only blobs of the desired color are left.

## Creating a BlobTpl

The BlobTpl's constructor takes up to 11 numeric arguments in the following order. Grouped arguments must be provided at the same time.

<table class="table">
	<tr>
		<th>Position</th>
		<th>Type</th>
		<th>Range</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>1 + 2</td>
		<td>Number</td>
		<td>0 <= min <= max</td>
		<td>Min area, Max area</td>
	</tr>
	<tr>
		<td>3 + 4</td>
		<td>Number</td>
		<td>0.0 <= min <= max <= 1.0</td>
		<td>Min Circularity, Max Circularity</td>
	</tr>
	<tr>
		<td>5 + 6</td>
		<td>Number</td>
		<td>0.0 <= min <= max <= 1.0</td>
		<td>Min Convexity, Max Convexity</td>
	</tr>
	<tr>
		<td>7 + 8</td>
		<td>Number</td>
		<td>0.0 <= min <= max <= 1.0</td>
		<td>Min Inertia, Max Inertia</td>
	</tr>
	<tr>
		<td>9 + 10</td>
		<td>Number</td>
		<td>0 <= min <= max <= 255</td>
		<td>Min Threshold, Max Threshold</td>
	</tr>
	<tr>
		<td>11</td>
		<td>Number</td>
		<td>1 <= threshold step <= max threshold - min threshold</td>
		<td>Threshold Step</td>
	</tr>
</table>

If arguments are out of range, e.g. if a min value is greater than its max value, the constructor throws a `RangeError`.

### Default values

Parameters you don't provide keep their default values:

- Area: 25 to 5000
- Circularity, convexity, and inertia: -1 (not used for filtering)
- Threshold: 50 to 220
- Threshold step: 10

```javascript
var default_tpl = new BlobTpl();
var sized_tpl = new BlobTpl(100, 2000);
var round_tpl = new BlobTpl(100, 2000, 0.8, 1.0);
```

### What the parameters mean

- **Area**: The blob's size in pixels.
- **Circularity**: How close the blob's shape is to a circle. A circle has a circularity of 1.0, and a square has a circularity of about 0.785.
- **Convexity**: The blob's area divided by the area of its convex hull. Shapes with dents or holes in their outline have a low convexity.
- **Inertia**: How elongated the blob is. A circle has an inertia of 1.0, an ellipse has a value between 0.0 and 1.0, and a line has an inertia of 0.0.
- **Threshold**: Before searching for blobs, the image is converted to several black and white images. The first one uses the min threshold. Each following one uses a threshold that is the threshold step higher, until the max threshold is reached.

**Note**: Blobs are only filtered by circularity, convexity, or inertia if both the min and the max value of that parameter are 0.0 or greater. Setting only one of them, or setting either of them to a negative number, disables that filter.

## BlobTpl methods

---

The setters below don't check their arguments. Keep them within the ranges listed in the _Creating a BlobTpl_ section.

### `BlobTpl.getMinArea();`

Returns the blob template's min area in pixels.

### `BlobTpl.setMinArea(min_area);`

- `min_area` (number): The new min area in pixels.

Sets the blob template's min area to `min_area`.

### `BlobTpl.getMaxArea();`

Returns the blob template's max area in pixels.

### `BlobTpl.setMaxArea(max_area);`

- `max_area` (number): The new max area in pixels.

Sets the blob template's max area to `max_area`.

### `BlobTpl.getMinCircularity();`

Returns the blob template's min circularity. Returns -1 if it hasn't been set.

### `BlobTpl.setMinCircularity(min_circularity);`

- `min_circularity` (number): The new min circularity (between 0.0 and 1.0).

Sets the blob template's min circularity to `min_circularity`.

### `BlobTpl.getMaxCircularity();`

Returns the blob template's max circularity. Returns -1 if it hasn't been set.

### `BlobTpl.setMaxCircularity(max_circularity);`

- `max_circularity` (number): The new max circularity (between 0.0 and 1.0).

Sets the blob template's max circularity to `max_circularity`.

### `BlobTpl.getMinConvexity();`

Returns the blob template's min convexity. Returns -1 if it hasn't been set.

### `BlobTpl.setMinConvexity(min_convexity);`

- `min_convexity` (number): The new min convexity (between 0.0 and 1.0).

Sets the blob template's min convexity to `min_convexity`.

### `BlobTpl.getMaxConvexity();`

Returns the blob template's max convexity. Returns -1 if it hasn't been set.

### `BlobTpl.setMaxConvexity(max_convexity);`

- `max_convexity` (number): The new max convexity (between 0.0 and 1.0).

Sets the blob template's max convexity to `max_convexity`.

### `BlobTpl.getMinInertia();`

Returns the blob template's min inertia. Returns -1 if it hasn't been set.

### `BlobTpl.setMinInertia(min_inertia);`

- `min_inertia` (number): The new min inertia (between 0.0 and 1.0).

Sets the blob template's min inertia to `min_inertia`.

### `BlobTpl.getMaxInertia();`

Returns the blob template's max inertia. Returns -1 if it hasn't been set.

### `BlobTpl.setMaxInertia(max_inertia);`

- `max_inertia` (number): The new max inertia (between 0.0 and 1.0).

Sets the blob template's max inertia to `max_inertia`.

### `BlobTpl.getMinThreshold();`

Returns the blob template's min threshold.

### `BlobTpl.setMinThreshold(min_threshold);`

- `min_threshold` (number): The new min threshold (between 0 and 255).

Sets the blob template's min threshold to `min_threshold`.

### `BlobTpl.getMaxThreshold();`

Returns the blob template's max threshold.

### `BlobTpl.setMaxThreshold(max_threshold);`

- `max_threshold` (number): The new max threshold (between 0 and 255).

Sets the blob template's max threshold to `max_threshold`.

### `BlobTpl.getThresholdStep();`

Returns the blob template's threshold step.

### `BlobTpl.setThresholdStep(threshold_step);`

- `threshold_step` (number): The new threshold step (at least 1).

Sets the blob template's threshold step to `threshold_step`. A smaller step means more black and white images are searched, which takes longer.

### `BlobTpl.toString();`

Returns the blob template's string representation, listing all of its parameters.
