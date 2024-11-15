---
title: CCSPlayer_UseServices
index: true
order: 2
category:
  - Guide
---

# CCSPlayer_UseServices

::: tabs
@tab Lua
# Constructor
```lua
CCSPlayer_UseServices(ptr)
```
# Properties
## LastKnownUseEntity (Read-Only)
```lua
--- @type CBaseEntity
Read: ccsplayer_useservices.LastKnownUseEntity
```
## LastUseTimeStamp 
```lua
--- @type number
Read: ccsplayer_useservices.LastUseTimeStamp
Write: ccsplayer_useservices.LastUseTimeStamp = value
```
## TimeLastUsedWindow 
```lua
--- @type number
Read: ccsplayer_useservices.TimeLastUsedWindow
Write: ccsplayer_useservices.TimeLastUsedWindow = value
```
## Parent (Read-Only)
```lua
--- @type CPlayer_UseServices
Read: ccsplayer_useservices.Parent
```
# Functions
## ToPtr
```lua
@returns string
ccsplayer_useservices:ToPtr()
```
## IsValid
```lua
@returns bool
ccsplayer_useservices:IsValid()
```

:::