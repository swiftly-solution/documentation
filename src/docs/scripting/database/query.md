---
title: Query
index: true
order: 2
category:
  - Guide
---

# Query
Returns a Database Query Result inside the callback which can be used to iterate through the return values.
::: tabs
@tab Lua
```lua
--- @param query string
--- @param callback function
--- @return nil
db:Query(query, callback)
```
> [!info]
> If database is not connected it will never execute.

### Callback
The callback has the following arguments:
```lua
cb(err --[[ string ]], result --[[ table ]])
```
:::