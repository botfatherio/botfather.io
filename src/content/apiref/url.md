---
title: The URL Type
---

Botfather has an inbuild `Url` type, that can be used to represent urls like _test.example.com/path/&query#fragment_. The `Url` type provides methods to retrieve and modify individual parts of the url.
Representing urls as strings is fine, but if you want to access idividual parts of more complex urls using the Url type is recommended.

## Table of contents

## Url terminology

Complex urls consist of different parts, each has it's own name. To use the url types methods you need to know how the parts are called. Consider those two example urls:

[ftp://uname:pword@sharing.example.com:2021](#)
[https://sub.example.com/contact/me/?something=cool&color=blue#fragment](#)

`scheme`: ftp
`username`: uname
`password`: pword
`host`: sharing .example .com
`port`: 2021
`query`: something=cool&color=blue
`fragment`: fragment
`topleveldomain`: .com
`authority`: uname:pword@sharing .example .com:2021

## Url type instanciation

New `Url` objects can be created providing either nothing or the urls string representation:

- `var simple_url = new Url("example.com");`
- `var full_url = new Url("https://bing.com/");`
- `var invalid_url = new Url();`

## Url type methods

##### `Url.isEmpty();`

Returns true if the URL has no data; otherwise returns false.

##### `Url.isValid();`

Returns true if the URL is non-empty and valid; otherwise returns false.

##### `Url.getScheme();`

Returns the scheme of the URL. If an empty string is returned, this means the scheme is undefined and the URL is then relative.

##### `Url.setScheme(scheme);`

- `scheme` (string): The urls new scheme ("https", "http").

Sets the scheme of the URL to `scheme`.

##### `Url.getUsername();`

Returns the user name of the URL if it is defined; otherwise an empty string is returned.

##### `Url.setUsername(username);`

- `username` (string): The urls new username part.

Sets the URL's user name to `.

##### `Url.getPassword();`

Returns the password of the URL if it is defined; otherwise an empty string is returned.

##### `Url.setPassword(password);`

- `password` (string): The urls new password part.

Sets the URL's password to `password`.

##### `Url.getHost();`

Returns the host of the URL if it is defined; otherwise an empty string is returned.

##### `Url.setHost(host);`

- `host` (string): The urls new host.

Sets the host of the URL to `host`. The host is part of the authority.

##### `Url.getPort();`

Returns the port of the URL, or -1 if the port is unspecified.

##### `Url.setPort(port);`

- `port` (number): The urls new port number.

Sets the port of the URL to `port`.

##### `Url.getPath();`

Returns the path of the URL.

##### `Url.setPath(path);`

- `path` (string): The urls new path.

Sets the path of the URL to `path`. The path is the part of the URL that comes after the authority but before the query string.

##### `Url.hasQuery();`

Returns true if this URL contains a Query (i.e., if ? was seen on it).

##### `Url.getQuery();`

Returns the query string of the URL if there's a query string, or an empty result if not.

##### `Url.setQuery(query);`

- `query` (string): The urls query part.

Sets the query string of the URL to `query`.

##### `Url.hasFragment();`

Returns true if this URL contains a fragment (i.e., if # was seen on it).

##### `Url.getFragment();`

Returns the fragment of the URL.

##### `Url.setFragment(fragment);`

- `fragment` (string): The urls new fragment.

Sets the fragment of the URL to `fragment`.

##### `Url.getTopLevelDomain();`

Returns the TLD (Top-Level Domain) of the URL, (e.g. .co.uk, .net).

##### `Url.getAuthority();`

Returns the authority of the URL if it is defined; otherwise an empty string is returned.

##### `Url.isParentOf(child_url);`

- `child_url` ([Url](#)): Well, a potential child url of this url object.

Returns true if this URL is a parent of `child_url`. `child_url` is a child of this URL if the two URLs share the same scheme and authority, and this URL's path is a parent of the path of `child_url`.

##### `Url.resolved(relative);`

- `relative` (string): A relative path to this Url objects url. (i.e. "../../image")

Returns the result of the merge of this URL with `relative`. This URL is used as a base to convert `relative` to an absolute URL. If `relative` is not a relative URL, this function will return `relative` directly.

##### `Url.toString();`

Returns the urls string representation.
