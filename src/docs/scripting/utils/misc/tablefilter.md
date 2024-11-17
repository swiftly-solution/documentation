---
title: Table Filter
index: true
order: 2
category:
  - Guide
---

# Table Filter
Filters elements of a table based on a provided predicate function, returning a new table with elements that satisfy the condition.
::: tabs
@tab Lua
```lua
--- @param tbl table
--- @param callback function
--- @return table
table.filter(tbl, callback)
```
The callback has the following arguments:
```lua
--- @param element any
--- @return boolean
cb(element)
```
:::