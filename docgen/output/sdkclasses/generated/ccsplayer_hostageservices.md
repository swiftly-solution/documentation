---
title: CCSPlayer_HostageServices
index: true
order: 2
category:
  - Guide
---

# CCSPlayer_HostageServices

::: tabs
@tab Lua
# Constructor
```lua
CCSPlayer_HostageServices(ptr --[[ string ]])
```
# Properties
## CarriedHostage (Read-Only)
```lua
@type CBaseEntity
Read: ccsplayer_hostageservices.CarriedHostage
```
## CarriedHostageProp (Read-Only)
```lua
@type CBaseEntity
Read: ccsplayer_hostageservices.CarriedHostageProp
```
## Parent 
```lua
@type CPlayerPawnComponent
Read: ccsplayer_hostageservices.Parent
Write: ccsplayer_hostageservices.Parent = value
```
# Functions
## ToPtr
```lua
@returns string
ccsplayer_hostageservices:ToPtr()
```
## IsValid
```lua
@returns bool
ccsplayer_hostageservices:IsValid()
```

:::