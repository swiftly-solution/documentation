---
title: CItem
index: true
order: 2
category:
  - Guide
---

# CItem

::: tabs
@tab Lua
# Constructor
```lua
CItem(ptr --[[ string ]])
```
# Properties
## OnPlayerTouch 
```lua
@type CEntityIOOutput
Read: citem.OnPlayerTouch
Write: citem.OnPlayerTouch = value
```
## OnPlayerPickup 
```lua
@type CEntityIOOutput
Read: citem.OnPlayerPickup
Write: citem.OnPlayerPickup = value
```
## ActivateWhenAtRest 
```lua
@type boolean
Read: citem.ActivateWhenAtRest
Write: citem.ActivateWhenAtRest = value
```
## OnCacheInteraction 
```lua
@type CEntityIOOutput
Read: citem.OnCacheInteraction
Write: citem.OnCacheInteraction = value
```
## OnGlovePulled 
```lua
@type CEntityIOOutput
Read: citem.OnGlovePulled
Write: citem.OnGlovePulled = value
```
## OriginalSpawnOrigin 
```lua
@type Vector
Read: citem.OriginalSpawnOrigin
Write: citem.OriginalSpawnOrigin = value
```
## OriginalSpawnAngles 
```lua
@type QAngle
Read: citem.OriginalSpawnAngles
Write: citem.OriginalSpawnAngles = value
```
## PhysStartAsleep 
```lua
@type boolean
Read: citem.PhysStartAsleep
Write: citem.PhysStartAsleep = value
```
## Parent 
```lua
@type CBaseAnimGraph
Read: citem.Parent
Write: citem.Parent = value
```
# Functions
## ToPtr
```lua
@returns string
citem:ToPtr()
```
## IsValid
```lua
@returns bool
citem:IsValid()
```

:::