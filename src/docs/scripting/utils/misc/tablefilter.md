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
@returns table
table.filter(tbl --[[ table ]], callback --[[ function ]])
```
The callback has the following arguments:
```lua
--- @return boolean
cb(element --[[ any ]])
```
:::