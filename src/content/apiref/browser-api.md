---
title: Browser API (v5 and below)
---

Botfather's Browser API can be used to control its integrated browser. It is Chromium based, super fast and all its functions can be controlled. Thus, when automating websites and browsergames, you should prefer the integrated browser over the [DesktopAPI](../apis/desktop). Like most of our APIs the Browser API is compatible with the [Vision API](../apis/vision). You can take screenshots, analyze them and click somewhere on the website in response.

Additional to the "normal ways" to control browser, we provide methods to manipulate packages and modify other resources. Thats especialy usefull if you want to look for something on a website, but it's hard to detect. - In that case you can replace it with a resource that can be detected more easily.

**Note:** In Botfather 6.0 **multiple browser tabs** will be supported.

## Table of contents

## Android API methods

##### `Browser.takeScreenshot();`

Returns an [Image](../image) of the current website.

##### `Browser.blockResource(resource_pattern);`

- `resource_pattern` (string): A RegExp pattern of the resources url to block

Blocks resources from loading if their url matches the specified `resource_pattern`.

##### `Browser.replaceResource(old_resource_pattern, new_resource);`

- `old_resource_pattern` (string): A RegExp pattern of the resources url to replace with `new_resource`
- `new_resource` (string): The url of the resource to replace the original resource with.

Tells the browser to load the `new_resource` url whenever the requested resources url matches the `old_resource_pattern`.

##### `Browser.unmodifyResource(resource_pattern);`

- `resource_pattern` (string): The resource pattern to unmodify.

Resets the replacement rules defined with either `.blockResource` or `.replaceResource`. One usually does not have to call this method, as modifications are reset after starting a new bot script.

##### `Browser.unmodifyResources();`

Resets all replacement rules defined with either `.blockResource` or `.replaceResource`.

##### `Browser.loadUrl(url);`

- `url` (string): To url of the website to load

Loads the specified `url` asynchronously. Use `.finishLoading` to tell the browser to wait for the website to finish loading.

##### `Browser.beOnUrl(url);`

- `url` (string): To url the browser should be on

Loads the specified `url` asynchronously if the `url` is no loaded yet. Otherwise does nothing. This method is handy, don't forget about it.

##### `Browser.getUrl();`

Returns the [Url](../url) the browser is currently on.

##### `Browser.reload();`

Tell the browser to reload the website.

##### `Browser.reloadIgnoringCache();`

Tells the browser to reload the website ignoring the cache. This is usually slower than using the normal `.reload` method.

##### `Browser.loading();`

Returns `true` if the browser is currently loading something, otherwise it returns `false`.

##### `Browser.finishLoading(timeout_seconds);`

- `timeout_seconds` (number): How many seconds the browser should wait. Default 30

This method blocks (waits) until the browser finished loading or `timeout_seconds` have passed. Returns `true` if the website finished loading. Returns `false` if `timeout_seconds` passed before the browser finsihed loading.

##### `Browser.stopLoading();`

Makes the browser stop loading.

##### `Browser.canGoBack();`

Returns `true` if the browser can go back one site/url, otherwise returns `false`.

##### `Browser.canGoForward();`

Returns `true` if the browser can go forward one site/url, otherwise returns `false`.

##### `Browser.goBack();`

Makes the browser go one url back. This is only possible when `.canGoBack` returns `true`.

##### `Browser.goForward();`

Makes the browser go one url forward. This is only possible when `.canGoForward` returns `true`.

##### `Browser.getSize();`

Returns the browser [Size](../size).

##### `Browser.getRect();`

Returns the browsers [Rect](../size). The top left coordinates will be 0, 0 and the rectangles size will be the same as what `.getSize` returns.

##### `Browser.executeJavascript(javascript_code);`

- `javascript_code` (string): Javascript code to execute in the browsers own Javascript engine

Executes `javascript_code` in the browsers Javascript engine. This can be used to fill out login forms an sumit them. This method does not return anything (yet).

##### `Browser.leftClick(position);`

##### `Browser.middleClick(position);`

##### `Browser.rightClick(position);`

- `position` ([Point](../point)): The clicks desired destination in pixels

Sends a left/middle/right click to the specified pixel `position`.

##### `Browser.pressLeft(position);`

##### `Browser.pressMiddle(position);`

##### `Browser.pressRight(position);`

- `position` ([Point](../point)): The press events desired destination in pixels

Makes the browser send a left/middle/right press event to the specified `position` in pixels.

##### `Browser.releaseLeft(position);`

##### `Browser.releaseMiddle(position);`

##### `Browser.releaseRight(position);`

- `position` ([Point](../point)): The press events desired destination in pixels

Makes the browser release the left/middle/right mouse button at the specified `position` in pixels.

##### `Browser.moveMouseTo(position);`

- `position` ([Point](../point)): The mouse cursor destination location in pixels

Makes the browser move the mouse cursor the the specified `position` in pixels.

##### `Browser.scrollWheel(position, delta_x, delta_y);`

- `position` ([Point](../point)): Where to send the scroll event to
- `delta_x` (number): By how much scroll horizontally
- `delta_y` (number): By how much scroll vertically

Makes the browser scroll the mouse wheel at the given `position` by `delta_x` pixels horizontally and `delta_y` pixels vertically.
