---
title: CCSPlayer_WaterServices
index: true
order: 2
category:
  - Guide
---

# CCSPlayer_WaterServices

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
CCSPlayer_WaterServices(ptr)
```
# Properties
## NextDrownDamageTime 
```lua
--- @type number
Read: ccsplayer_waterservices.NextDrownDamageTime
Write: ccsplayer_waterservices.NextDrownDamageTime = value
```
## DrownDmgRate 
```lua
--- @type number
Read: ccsplayer_waterservices.DrownDmgRate
Write: ccsplayer_waterservices.DrownDmgRate = value
```
## AirFinishedTime 
```lua
--- @type number
Read: ccsplayer_waterservices.AirFinishedTime
Write: ccsplayer_waterservices.AirFinishedTime = value
```
## WaterJumpTime 
```lua
--- @type number
Read: ccsplayer_waterservices.WaterJumpTime
Write: ccsplayer_waterservices.WaterJumpTime = value
```
## WaterJumpVel 
```lua
--- @type Vector
Read: ccsplayer_waterservices.WaterJumpVel
Write: ccsplayer_waterservices.WaterJumpVel = value
```
## SwimSoundTime 
```lua
--- @type number
Read: ccsplayer_waterservices.SwimSoundTime
Write: ccsplayer_waterservices.SwimSoundTime = value
```
## Parent (Read-Only)
```lua
--- @type CPlayer_WaterServices
Read: ccsplayer_waterservices.Parent
```
# Functions
## ToPtr
```lua
--- @return string
ccsplayer_waterservices:ToPtr()
```
## IsValid
```lua
--- @return bool
ccsplayer_waterservices:IsValid()
```

:::