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
@returns table
table.map(tbl --[[ table ]], callback --[[ function ]])
```
The callback has the following arguments:
```lua
--- @return boolean
cb(element --[[ any ]])
```
:::