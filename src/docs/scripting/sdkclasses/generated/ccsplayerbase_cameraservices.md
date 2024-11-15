---
title: CCSPlayerBase_CameraServices
index: true
order: 2
category:
  - Guide
---

# CCSPlayerBase_CameraServices

::: tabs
@tab Lua
# Constructor
```lua
CCSPlayerBase_CameraServices(ptr)
```
# Properties
## FOV 
```lua
--- @type number
Read: ccsplayerbase_cameraservices.FOV
Write: ccsplayerbase_cameraservices.FOV = value
```
## FOVStart 
```lua
--- @type number
Read: ccsplayerbase_cameraservices.FOVStart
Write: ccsplayerbase_cameraservices.FOVStart = value
```
## FOVTime 
```lua
--- @type number
Read: ccsplayerbase_cameraservices.FOVTime
Write: ccsplayerbase_cameraservices.FOVTime = value
```
## FOVRate 
```lua
--- @type number
Read: ccsplayerbase_cameraservices.FOVRate
Write: ccsplayerbase_cameraservices.FOVRate = value
```
## ZoomOwner (Read-Only)
```lua
--- @type CBaseEntity
Read: ccsplayerbase_cameraservices.ZoomOwner
```
## LastFogTrigger (Read-Only)
```lua
--- @type CBaseEntity
Read: ccsplayerbase_cameraservices.LastFogTrigger
```
## Parent (Read-Only)
```lua
--- @type CPlayer_CameraServices
Read: ccsplayerbase_cameraservices.Parent
```
# Functions
## ToPtr
```lua
@returns string
ccsplayerbase_cameraservices:ToPtr()
```
## IsValid
```lua
@returns bool
ccsplayerbase_cameraservices:IsValid()
```

:::