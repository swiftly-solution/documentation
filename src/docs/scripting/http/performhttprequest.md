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
--- @param url string
--- @param callback function
--- @param method string
--- @param data string
--- @param headers table
--- @param files table
--- @return nil
PerformHTTPRequest(url, callback, method, data, headers, files)
```
The callback has the following arguments:
```lua
--- @param status number
--- @param body string
--- @param headers table
--- @param err string
--- @return nil
cb(status, body, headers, err)
```
:::