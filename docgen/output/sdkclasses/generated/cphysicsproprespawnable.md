---
title: CPhysicsPropRespawnable
index: true
order: 2
category:
  - Guide
---

# CPhysicsPropRespawnable

::: tabs
@tab Lua
# Constructor
```lua
CPhysicsPropRespawnable(ptr --[[ string ]])
```
# Properties
## OriginalSpawnOrigin 
```lua
@type Vector
Read: cphysicsproprespawnable.OriginalSpawnOrigin
Write: cphysicsproprespawnable.OriginalSpawnOrigin = value
```
## OriginalSpawnAngles 
```lua
@type QAngle
Read: cphysicsproprespawnable.OriginalSpawnAngles
Write: cphysicsproprespawnable.OriginalSpawnAngles = value
```
## OriginalMins 
```lua
@type Vector
Read: cphysicsproprespawnable.OriginalMins
Write: cphysicsproprespawnable.OriginalMins = value
```
## OriginalMaxs 
```lua
@type Vector
Read: cphysicsproprespawnable.OriginalMaxs
Write: cphysicsproprespawnable.OriginalMaxs = value
```
## RespawnDuration 
```lua
@type number
Read: cphysicsproprespawnable.RespawnDuration
Write: cphysicsproprespawnable.RespawnDuration = value
```
## Parent 
```lua
@type CPhysicsProp
Read: cphysicsproprespawnable.Parent
Write: cphysicsproprespawnable.Parent = value
```
# Functions
## ToPtr
```lua
@returns string
cphysicsproprespawnable:ToPtr()
```
## IsValid
```lua
@returns bool
cphysicsproprespawnable:IsValid()
```

:::