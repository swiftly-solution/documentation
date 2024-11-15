---
title: CCSPlayer_PingServices
index: true
order: 2
category:
  - Guide
---

# CCSPlayer_PingServices

::: tabs
@tab Lua
# Constructor
```lua
CCSPlayer_PingServices(ptr)
```
# Properties
## PlayerPingTokens 
```lua
--- @type table
Read: ccsplayer_pingservices.PlayerPingTokens
Write: ccsplayer_pingservices.PlayerPingTokens = value
```
## PlayerPing (Read-Only)
```lua
--- @type CBaseEntity
Read: ccsplayer_pingservices.PlayerPing
```
## Parent (Read-Only)
```lua
--- @type CPlayerPawnComponent
Read: ccsplayer_pingservices.Parent
```
# Functions
## ToPtr
```lua
@returns string
ccsplayer_pingservices:ToPtr()
```
## IsValid
```lua
@returns bool
ccsplayer_pingservices:IsValid()
```

:::