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
@returns void
http:Listen(ip_addr --[[ string ]], port --[[ number ]], callback --[[ function ]])
```
The callback has the following arguments:
```lua
cb(req --[[ HTTPRequest ]], res --[[ HTTPResponse ]])
```
:::