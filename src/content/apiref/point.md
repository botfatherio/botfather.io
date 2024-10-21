---
title: Point Type
---

Botfathers script engine provides an inbuild `Point` type. Use it to represents points in your bot scripts. Some botfather Api methods even require you to pass parameters being `Point` objects to them.

## Table of contents

## Point type instanciation

New `Point` objects can be created proving either the points _x_ and _y_ values or nothing, which results in an point with _x_, _y_ coordiantes of 0.

- `var null_point = new Point();`
- `var point = new Point(42, 128);`

## Point type methods

---

##### `Point.getX();`

Returns the points x value.

##### `Point.setX(x);`

- `x` (number): The points new x value.

Sets the points x value to `x`.

##### `Point.getY();`

Returns the points y value.

##### `Point.setY(y);`

- `y` (number): The points new y value.

Sets the points y value to `y`.

##### `Point.pointAdded(other_point);`

- `other_point` ([Point](../point)): The point to be added

Returns a [Point](../point) object that is the sum of this point and other_point; each component is added separately.

##### `Point.pointSubtracted(other_point);`

- `other_point` ([Point](../point)): The point to be substracted

Returns a [Point](../point) object that is formed by subtracting other_point from this point; each component is subtracted separately.

##### `Point.dotProduct(other_point);`

- `other_point` ([Point](../point)): Another point.

Returns the dot product of this point and the `other_point`.

##### `Point.distanceTo(other_point);`

- `other_point` ([Point](../point)): Another point.

Returns the distance from this point to the `other_point`.
