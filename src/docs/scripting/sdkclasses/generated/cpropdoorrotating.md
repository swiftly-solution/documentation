---
title: CPropDoorRotating
index: true
order: 2
category:
  - Guide
---

# CPropDoorRotating

::: tabs
@tab Lua
# Constructor
```lua
CPropDoorRotating(ptr --[[ string ]])
```
# Properties
## Axis 
```lua
@type Vector
Read: cpropdoorrotating.Axis
Write: cpropdoorrotating.Axis = value
```
## Distance 
```lua
@type number
Read: cpropdoorrotating.Distance
Write: cpropdoorrotating.Distance = value
```
## SpawnPosition 
```lua
@type number
Read: cpropdoorrotating.SpawnPosition
Write: cpropdoorrotating.SpawnPosition = value
```
## OpenDirection 
```lua
@type number
Read: cpropdoorrotating.OpenDirection
Write: cpropdoorrotating.OpenDirection = value
```
## CurrentOpenDirection 
```lua
@type number
Read: cpropdoorrotating.CurrentOpenDirection
Write: cpropdoorrotating.CurrentOpenDirection = value
```
## AjarAngle 
```lua
@type number
Read: cpropdoorrotating.AjarAngle
Write: cpropdoorrotating.AjarAngle = value
```
## RotationAjarDeprecated 
```lua
@type QAngle
Read: cpropdoorrotating.RotationAjarDeprecated
Write: cpropdoorrotating.RotationAjarDeprecated = value
```
## RotationClosed 
```lua
@type QAngle
Read: cpropdoorrotating.RotationClosed
Write: cpropdoorrotating.RotationClosed = value
```
## RotationOpenForward 
```lua
@type QAngle
Read: cpropdoorrotating.RotationOpenForward
Write: cpropdoorrotating.RotationOpenForward = value
```
## RotationOpenBack 
```lua
@type QAngle
Read: cpropdoorrotating.RotationOpenBack
Write: cpropdoorrotating.RotationOpenBack = value
```
## Goal 
```lua
@type QAngle
Read: cpropdoorrotating.Goal
Write: cpropdoorrotating.Goal = value
```
## ForwardBoundsMin 
```lua
@type Vector
Read: cpropdoorrotating.ForwardBoundsMin
Write: cpropdoorrotating.ForwardBoundsMin = value
```
## ForwardBoundsMax 
```lua
@type Vector
Read: cpropdoorrotating.ForwardBoundsMax
Write: cpropdoorrotating.ForwardBoundsMax = value
```
## BackBoundsMin 
```lua
@type Vector
Read: cpropdoorrotating.BackBoundsMin
Write: cpropdoorrotating.BackBoundsMin = value
```
## BackBoundsMax 
```lua
@type Vector
Read: cpropdoorrotating.BackBoundsMax
Write: cpropdoorrotating.BackBoundsMax = value
```
## AjarDoorShouldntAlwaysOpen 
```lua
@type boolean
Read: cpropdoorrotating.AjarDoorShouldntAlwaysOpen
Write: cpropdoorrotating.AjarDoorShouldntAlwaysOpen = value
```
## EntityBlocker (Read-Only)
```lua
@type CEntityBlocker
Read: cpropdoorrotating.EntityBlocker
```
## Parent (Read-Only)
```lua
@type CBasePropDoor
Read: cpropdoorrotating.Parent
```
# Functions
## ToPtr
```lua
@returns string
cpropdoorrotating:ToPtr()
```
## IsValid
```lua
@returns bool
cpropdoorrotating:IsValid()
```

:::