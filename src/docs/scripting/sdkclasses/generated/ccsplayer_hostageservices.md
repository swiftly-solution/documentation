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
--- @param ptr string
CCSPlayer_HostageServices(ptr)
```
# Properties
## CarriedHostage (Read-Only)
```lua
--- @type CBaseEntity
Read: ccsplayer_hostageservices.CarriedHostage
```
## CarriedHostageProp (Read-Only)
```lua
--- @type CBaseEntity
Read: ccsplayer_hostageservices.CarriedHostageProp
```
## Parent (Read-Only)
```lua
--- @type CPlayerPawnComponent
Read: ccsplayer_hostageservices.Parent
```
# Functions
## ToPtr
```lua
--- @return string
ccsplayer_hostageservices:ToPtr()
```
## IsValid
```lua
--- @return bool
ccsplayer_hostageservices:IsValid()
```

:::