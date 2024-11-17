---
title: HTTP Server
index: true
order: 2
category:
  - Guide
---

# HTTP Server
Creates a HTTP Server.
::: tabs
@tab Lua
```lua
--- @param ip_addr string
--- @param port number
--- @param callback function
--- @return nil
http:Listen(ip_addr, port, callback)
```
The callback has the following arguments:
```lua
--- @param req HTTPRequest
--- @param res HTTPResponse
--- @return nil
cb(req, res)
```
:::