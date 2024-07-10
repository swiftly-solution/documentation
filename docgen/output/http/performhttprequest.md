---
title: PerformHTTPRequest
index: true
order: 2
category:
  - Guide
---

# PerformHTTPRequest
Performs a HTTP request.
::: tabs
@tab Lua
```lua
@returns void
PerformHTTPRequest(url --[[ string ]], callback --[[ function ]], method --[[ string ]], data --[[ string ]], headers --[[ table ]], files --[[ table ]])
```
The callback has the following arguments:
```lua
cb(status --[[ number ]], body --[[ string ]], headers --[[ table ]], err --[[ string ]])
```
:::