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
CItem(ptr)
```
# Properties
## OnPlayerTouch (Read-Only)
```lua
--- @type CEntityIOOutput
Read: citem.OnPlayerTouch
```
## OnPlayerPickup (Read-Only)
```lua
--- @type CEntityIOOutput
Read: citem.OnPlayerPickup
```
## ActivateWhenAtRest 
```lua
--- @type boolean
Read: citem.ActivateWhenAtRest
Write: citem.ActivateWhenAtRest = value
```
## OnCacheInteraction (Read-Only)
```lua
--- @type CEntityIOOutput
Read: citem.OnCacheInteraction
```
## OnGlovePulled (Read-Only)
```lua
--- @type CEntityIOOutput
Read: citem.OnGlovePulled
```
## OriginalSpawnOrigin 
```lua
--- @type Vector
Read: citem.OriginalSpawnOrigin
Write: citem.OriginalSpawnOrigin = value
```
## OriginalSpawnAngles 
```lua
--- @type QAngle
Read: citem.OriginalSpawnAngles
Write: citem.OriginalSpawnAngles = value
```
## PhysStartAsleep 
```lua
--- @type boolean
Read: citem.PhysStartAsleep
Write: citem.PhysStartAsleep = value
```
## Parent (Read-Only)
```lua
--- @type CBaseAnimGraph
Read: citem.Parent
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