---
title: The BlobTpl Type
---

The BlobTpl is used to describe the shape and size of blobs. Such blobs can then be found on screenshots using the [Vision API](../vision)s `.findBlobs` method.

If you want to look for blobs of a certain color, isolate that color on your [Image](../image) in beforehand. To do you used the [Image](../image) types `.isolateColorRange` method. After doing so only blobs of the desired color are left.

## Table of Contents

## Creating a BlobTpl

The BlobTpls constructor takes up to 11 numeric arguments in the following order. Grouped arguments must both be provided at the same time.

<table class="table">
	<tr>
		<th>Position</th>
		<th>Type</th>
		<th>Range</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>1 + 2</td>
		<td>Number</td>
		<td>0 <= min <= max</td>
		<td>Min area, Max area</td>
	</tr>
	<tr>
		<td>3 + 4</td>
		<td>Number</td>
		<td>0.0 <= min <= max <= 1.0</td>
		<td>Min Circularity, Max Circularity</td>
	</tr>
	<tr>
		<td>5 + 6</td>
		<td>Number</td>
		<td>0.0 <= min <= max <= 1.0</td>
		<td>Min Convexity, Max Convexity</td>
	</tr>
	<tr>
		<td>7 + 8</td>
		<td>Number</td>
		<td>0.0 <= min <= max <= 1.0</td>
		<td>Min Inertia, Max Inertia</td>
	</tr>
	<tr>
		<td>9 + 10</td>
		<td>Number</td>
		<td>0 <= min <= max <= 255</td>
		<td>Min Threshold, Max Threshold</td>
	</tr>
	<tr>
		<td>11</td>
		<td>Number</td>
		<td>1 <= threshold step <= max threshold - min threshold</td>
		<td>Threshold Step</td>
	</tr>
</table>

## BlobTpl methods

_TODO_ ...there are getters and setter for all parameters mentioned in the _Creating a BlobTpl_ section.
