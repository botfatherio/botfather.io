---
title: Margins Type
---

The Botfather engine provides a built-in `Margins` type. Use it to represent margins in a convenient way.

## Margins type instantiation

---

New `Margins` objects can be created by providing the _left_, _right_, _top_, and _bottom_ margin values (**in that order**) or nothing. Providing nothing results in a _null_ margins object with all margin values being 0.

- `var margins = new Margins(10, 42, 21, 100);`
- `var null_margins = new Margins();`

## Margins type methods

---

### `Margins.isNull();`

Returns true if all margins are 0; otherwise returns false.

### `Margins.getTop();`

Returns the top margin.

### `Margins.setTop(top);`

- `top` (number): The new top margin.

Sets the top margin to `top`.

### `Margins.getLeft();`

Returns the left margin.

### `Margins.setLeft(left);`

- `left` (number): The new left margin.

Sets the left margin to `left`.

### `Margins.getRight();`

Returns the right margin.

### `Margins.setRight(right);`

- `right` (number): The new right margin.

Sets the right margin to `right`.

### `Margins.getBottom();`

Returns the bottom margin.

### `Margins.setBottom(bottom);`

- `bottom` (number): The new bottom margin.

Sets the bottom margin to `bottom`.

### `Margins.marginsAdded(other_margins)`

- `other_margins` ([Margins](/docs/apiref/margins/)): The other margins.

Returns a [Margins](/docs/apiref/margins/) object that is the sum of other_margins and this margins object; each component is added separately.

### `Margins.marginsSubtracted(other_margins)`

- `other_margins` ([Margins](/docs/apiref/margins/)): The other margins.

Returns a [Margins](/docs/apiref/margins/) object that is formed by subtracting other_margins from this margins object; each component is subtracted separately.
