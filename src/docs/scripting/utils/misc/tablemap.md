---
title: Table Map
index: true
order: 2
category:
  - Guide
---

# Table Map
Maps a given function to each element in a table, returning a new table with the transformed values.
::: tabs
@tab Lua
```lua
--- @param tbl table
--- @param callback function
--- @return table
table.map(tbl, callback)
```
The callback has the following arguments:
```lua
--- @param element any
--- @return boolean
cb(element)
```
:::