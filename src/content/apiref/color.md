---
title: Color Type
---

To represent colors, the Botfather script engine provides a `Color` type. Some Botfather APIs take instances of `Color` as parameters. Feel free to use and extend the `Color` type yourself in your bot scripts.

## RGB color instantiation

The most common way to represent colors is by _using their RGB (red, green, blue) values_. Each RGB value ranges from 0 to 255. Red, for example, can be represented like this: `var red = new Color(255, 0, 0);`

Programs like [GIMP](https://www.gimp.org/) or [Paint.net](https://www.getpaint.net/doc/latest/ColorsWindow.html) can help you choose the `Color` you want to represent and its RGB values.
There are also tons of **_online tools_** available; just search for **_rgb color picker_** using your favorite search engine.

### Some RGB examples

- `var gold = new Color(255,215,0);`
- `var crimson = new Color(220,20,60);`
- `var purple = new Color(128,0,128);`

## HSV color instantiation

When working with color ranges, you might want to use the HSV color space instead of RGB. HSV stands for Hue, Saturation, and Value. An HSV `Color` object can be instantiated like this: `var hsv_blue = new Color(240, 255, 127, 'hsv');`

The _hue_ must be in the range of 0-359. Both the _saturation_ and _value_ must be in the range of 0-255.

## Instantiate colors by their name

Simple colors can be instantiated _using their name_. To create a variable representing green you could write: `var green = new Color('green');`

The following built-in color names can be used to instantiate `Color` variables in Botfather scripts.
If you want to define a **_more complex color_** like _crimson_ or _teal_, use the RGB- or HSV-based instantiation discussed earlier.

### Built-in color names

- `"black"`
- `"blue"`
- `"cyan"`
- `"darkblue"`
- `"darkcyan"`
- `"darkgray"`
- `"darkgreen"`
- `"darkmagenta"`
- `"darkred"`
- `"darkyellow"`
- `"gray"`
- `"green"`
- `"lightgray"`
- `"magenta"`
- `"red"`
- `"white"`
- `"yellow"`

### Invalid colors

You can also create an initially invalid `Color` object by providing neither a color name nor RGB/HSV values: `var invalid_color = new Color();`

## Color methods

---

### `Color.isValid();`

Returns true if the color is valid; otherwise returns false.

### `Color.getRed();`

Returns a number between 0 and 255 representing the color's RGB red value.

### `Color.setRed(red_value);`

- `red_value`: The color's new RGB red value (number between 0 and 255).

Alters the color's RGB red value.

### `Color.getGreen();`

Returns a number between 0 and 255 representing the color's RGB green value.

### `Color.setGreen(green_value);`

- `green_value`: The color's new RGB green value (number between 0 and 255).

Alters the color's RGB green value.

### `Color.getBlue();`

Returns a number between 0 and 255 representing the color's RGB blue value.

### `Color.setBlue(blue_value);`

- `blue_value`: The color's new RGB blue value (number between 0 and 255).

Alters the color's RGB blue value.

### `Color.setHsv(hue, saturation, value);`

Sets the color's hue, saturation, and value HSV color space components.

### `Color.getHue();`

Returns the hue HSV color space component of this color.

### `Color.getSaturation();`

Returns the saturation color component of this color.

### `Color.getValue();`

Returns the value color component of this color.
