---
title: Stats API
---

The stats API allows scripts to display grouped and labeled string values in a bots `Stats` tab. This is especially usefull for displaying progress related information.

## Table of contents

## Examples

---

### Display a value

Values are displayed labeled and grouped. You can display as many groups and labeled values as you like.

```javascript
Stats.show("Group", "Label", "Value");
Stats.show("General", "Progress", "10%");
```

### Update a value

A value can be referenced by the its `group` and `label` name.

```javascript
var group = "Sleep";
var label = "Sheep counted";

for (var sheepCount = 0; sheepCount < 10; sheepCount++) {
  Stats.show(group, label, sheepCount.toString());
  Helper.sleep(1);
}
```

### Display values in groups

Labels and values of the same `group` are displayed in a box. Labels and values of other groups have their own box.

```javascript
Stats.show("Group1", "Label1", "Value1");
Stats.show("Group1", "Label2", "Value2");

Stats.show("Group2", "Label3", "Value3");
```

### Clear stats

When a bot script is restarted its stats tab is cleared. The stats tab can also be cleared from the script itself.

```javascript
Stats.show("Group", "Label", "Value");
Stats.clear();
```
