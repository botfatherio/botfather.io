---
title: The Size Type
---

Botfather has an inbuild `Size` type which can be used to represent sizes of anything two-dimensional. Furthermore some botfather Api methods require you to pass `Size` object parameters to their methods.

## Table of contents

## Size type instanciation

Size objects can be created providing either their _width_ and _height_ or _nothing_, which results in an _empty_ `Size` object.

- `var empty_size = new Size();`
- `var size = new Size(1920, 1080);`

## Size type methods

##### `Size.getWidth();`

Returns the sizes width.

##### `Size.setWidth(int width);`

- `width` (number): The sizes new with.

Sets the sizes width to `width`.

##### `Size.getHeight();`

Returns the sizes height.

##### `Size.setHeight(int height);`

Sets the sizes height to `height`.

##### `Size.sizeAdded(other_size);`

- `other_size` ([Size](../size)): The other size to be added

Returns the sum of this size and other_size; each component is added separately.

##### `Size.sizeSubtracted(other_size);`

- `other_size` ([Size](../size)): The other size to be substracted

Returns other_size subtracted from this size; each component is subtracted separately.

##### `Size.boundedTo(other_size);`

- `other_size` ([Size](#)): Another size.

Returns a size holding the minimum width and height of this size and the given `other_size`.

##### `Size.expandedTo(const QSize &other_size);`

- `other_size` ([Size](#)): Another size.

Returns a size holding the maximum width and height of this size and the given `other_size`.

##### `Size.isEmpty();`

Returns true if either of the sizes width and height is less than or equal to 0; otherwise returns false.

##### `Size.transpose();`

Swaps the sizes width and height values.

##### `Size.transposed();`

Returns a new `Size` with width and height swapped.
