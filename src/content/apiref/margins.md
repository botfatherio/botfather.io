---
title: The Margins Type
---

The botfather engine provides an inbuild `Margins` type. Use it to represents margins in a convenient way.

## Table of contents

## Margins type instanciation

---

New `Margins` objects can be created providing the _left_, _right_, _top_ and _bottom_ margin values (**in that order**) or nothing. Providing nothing results in an _null_ margins object with all margins values being 0.

- `var margins = new Margins(10, 42, 21, 100);`
- `var null_margins = new Margins();`

## Margins type methods

---

##### `Margins.isNull();`

Returns true if all margins are is 0; otherwise returns false.

##### `Margins.getTop();`

Returns the top margin.

##### `Margins.setTop(top);`

- `top` (number): The new top margin.

Sets the Top margin to `top`.

##### `Margins.getLeft();`

Returns the left margin.

##### `Margins.setLeft(left);`

- `left` (number): The new left margin.

Sets the left margin to `left`.

##### `Margins.getRight();`

Returns the right margin.

##### `Margins.setRight(right);`

- `right` (number): The new right margin.

Sets the right margin to `right`.

##### `Margins.getBottom();`

Returns the bottom margin.

##### `Margins.setBottom(bottom);`

- `bottom` (number): The new bottom margin.

Sets the bottom margin to `bottom`.

##### `Margins.marginsAdded(other_margins)`

- `margins` ([Margins](../margins)): The other margins

Returns a [Margins](../margins) object that is the sum of other_margins and this margins object; each component is added separately.

##### `Margins.marginsSubtracted(other_margins)`

- `margins` ([Margins](../margins)): The other margins

Returns a [Margins](../margins) object that is formed by subtracting other_margins from this margins object; each component is subtracted separately.
