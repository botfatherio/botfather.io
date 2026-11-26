---
title: Point Type
---

Botfather's script engine provides a built-in `Point` type. Use it to represent points in your bot scripts. Some Botfather API methods even require you to pass `Point` objects as parameters.

## Table of contents

## Point type instantiation

New `Point` objects can be created by providing either the point's _x_ and _y_ values or nothing, which results in a point with _x_, _y_ coordinates of 0.

- `var null_point = new Point();`
- `var point = new Point(42, 128);`

## Point type methods

---

### `Point.getX();`

Returns the point's x value.

### `Point.setX(x);`

- `x` (number): The point's new x value.

Sets the point's x value to `x`.

### `Point.getY();`

Returns the point's y value.

### `Point.setY(y);`

- `y` (number): The point's new y value.

Sets the point's y value to `y`.

### `Point.pointAdded(other_point);`

- `other_point` ([Point](/docs/apiref/point/)): The point to be added.

Returns a [Point](/docs/apiref/point/) object that is the sum of this point and other_point; each component is added separately.

### `Point.pointSubtracted(other_point);`

- `other_point` ([Point](/docs/apiref/point/)): The point to be subtracted.

Returns a [Point](/docs/apiref/point/) object that is formed by subtracting other_point from this point; each component is subtracted separately.

### `Point.dotProduct(other_point);`

- `other_point` ([Point](/docs/apiref/point/)): Another point.

Returns the dot product of this point and the `other_point`.

### `Point.distanceTo(other_point);`

- `other_point` ([Point](/docs/apiref/point/)): Another point.

Returns the distance from this point to the `other_point`.
