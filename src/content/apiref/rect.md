---
title: The Rect Type
---

In bot scripts rectangles can be represented using botfathers inbuild `Rect` object. A `Rect` is described by it's top left corner and size. The `Rect` type provides methods to work with rectangles conveniently (rects short).

## Table of contents

## Creating Rect objects

A non empty `Rect` object can be created by providing the `Rects` _top left corner and size_ or it's _top left and bottom right corners_. The corner position must be represented using the [Point type](../point) and sizes using the [Size type](../size). Providing no parameters results in an empty rectangle being created.

- `var empty_rect = new Rect();`
- `var also_empty_rect = new Rect(new Point(12, 34), new Size());`
- `var small_rect = new Rect(new Point(500, 400), new Size(50, 30));`
- `var large_rect = new Rect(new Point(10, 10), new Point(900, 900));`

## Rect methods

##### `Rect.isEmpty();`

Returns true if the rectangle is empty, otherwise returns false.

##### `Rect.getTop();`

Returns the y-coordinate of the rectangle's top edge.

##### `Rect.getLeft();`

Returns x-the coordinate of the rectangle's left edge.

##### `Rect.getRight();`

Returns the x-coordinate of the rectangle's right edge.

##### `Rect.getBottom();`

Returns the coordinate of the rectangle's bottom edge.

##### `Rect.getCenter();`

Returns the center [Point](../point) of the rectangle.

##### `Rect.getTopLeft();`

Returns the position of the rectangle's top-left corner as a [Point](../point).

##### `Rect.getTopRight();`

Returns the position of the rectangle's top-right corner as a [Point](../point).

##### `Rect.getBottomLeft();`

Returns the position of the rectangle's bottom-left corner as a [Point](../point).

##### `Rect.getBottomRight();`

Returns the position of the rectangle's bottom-right corner as a [Point](../point).

##### `Rect.getWidth();`

Returns the width of the rectangle.

##### `Rect.setWidth(width);`

- `width` (number): The rectangles new width.

Sets the width of the rectangle to the given `width`. The right edge is changed, but not the left one.

##### `Rect.getHeight();`

Returns the height of the rectangle.

##### `Rect.setHeight(height);`

- `height` (number): The rectangles new height.

Sets the height of the rectangle to the given `height`. The bottom edge is changed, but not the top one.

##### `Rect.getSize();`

Returns the [Size](../size) of the rectangle.

##### `Rect.moveTop(top);`

- `top` (number): The rectangles new top coordinate.

Moves the rectangle vertically, leaving the rectangle's top edge at the given `top` coordinate. The rectangle's size is unchanged.

##### `Rect.moveLeft(left);`

- `left` (number): The rectangles new left coordinate.

Moves the rectangle horizontally, leaving the rectangle's left edge at the given `left` coordinate. The rectangle's size is unchanged.

##### `Rect.moveRight(right);`

- `right` (number): The rectangles new right coordinate.

Moves the rectangle horizontally, leaving the rectangle's right edge at the given `right` coordinate. The rectangle's size is unchanged.

##### `Rect.moveBottom(bottom);`

- `bottom` (number): The rectangles new bottom coordinate.

Moves the rectangle vertically, leaving the rectangle's bottom edge at the given `bottom` coordinate. The rectangle's size is unchanged.

##### `Rect.marginsAdded(margins)`

- `margins` ([Margins](../margins)): The margins by which the rectangle shall be grown

Returns a rectangle grown by the margins.

##### `Rect.marginsSubtracted(margins)`

- `margins` ([Margins](../margins)): The margins by which the rectangle shall be shrinked

Removes the margins from the rectangle, shrinking it.

##### `Rect.contains(point, proper);`

- `point` ([Point](../point)): The point potentially contained in the rectangle.
- `proper` (boolean): See method description above. `proper` is false by default.

Returns true if the given `point` is inside or on the edge of the rectangle, otherwise returns false.
If `proper` is true, this function only returns true if the given `point` is inside the rectangle (i.e., not on the edge).

##### `Rect.contains(other_rect, proper);`

- `other_rect` ([Rect](../rect)): The rect potentially contained in this rectangle.
- `proper` (boolean): See method description above. `proper` is false by default.

Returns true if the given rectangle is inside this rectangle.
If `proper` is true, this function only returns true if the given `other_rect` is inside the rectangle (i.e., not on the edge).

##### `Rect.intersects(other_rect);`

- `other_rect` ([Rect](../rect)): The other rectangle.

Returns true if this rectangle intersects with the given rectangle, otherwise returns false.

##### `Rect.united(other_rect);`

- `other_rect` ([Rect](../rect)): The other rectangle.

Returns the bounding rectangle of this rectangle and the given `other_rect` rectangle as a new [Rect](#).

##### `Rect.randomPoint();`

Generates and returns a random point within the rectangle.
