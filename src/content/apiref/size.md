---
title: Size Type
---

Botfather has a built-in `Size` type, which can be used to represent the sizes of anything two-dimensional. Furthermore, some Botfather API methods require you to pass `Size` objects as parameters.

## Size type instantiation

Size objects can be created by providing either their _width_ and _height_ or _nothing_, which results in an _empty_ `Size` object.

- `var empty_size = new Size();`
- `var size = new Size(1920, 1080);`

## Size type methods

### `Size.getWidth();`

Returns the size's width.

### `Size.setWidth(width);`

- `width` (number): The size's new width.

Sets the size's width to `width`.

### `Size.getHeight();`

Returns the size's height.

### `Size.setHeight(height);`

- `height` (number): The size's new height.

Sets the size's height to `height`.

### `Size.sizeAdded(other_size);`

- `other_size` ([Size](/docs/apiref/size/)): The other size to be added.

Returns the sum of this size and other_size; each component is added separately.

### `Size.sizeSubtracted(other_size);`

- `other_size` ([Size](/docs/apiref/size/)): The other size to be subtracted.

Returns other_size subtracted from this size; each component is subtracted separately.

### `Size.boundedTo(other_size);`

- `other_size` ([Size](#)): Another size.

Returns a size holding the minimum width and height of this size and the given `other_size`.

### `Size.expandedTo(other_size);`

- `other_size` ([Size](#)): Another size.

Returns a size holding the maximum width and height of this size and the given `other_size`.

### `Size.isEmpty();`

Returns true if either the size's width or height is less than or equal to 0; otherwise returns false.

### `Size.transpose();`

Swaps the size's width and height values.

### `Size.transposed();`

Returns a new `Size` with width and height swapped.
