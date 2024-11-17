---
title: CC4
index: true
order: 2
category:
  - Guide
---

# CC4

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
CC4(ptr)
```
# Properties
## LastValidPlayerHeldPosition 
```lua
--- @type Vector
Read: cc4.LastValidPlayerHeldPosition
Write: cc4.LastValidPlayerHeldPosition = value
```
## LastValidDroppedPosition 
```lua
--- @type Vector
Read: cc4.LastValidDroppedPosition
Write: cc4.LastValidDroppedPosition = value
```
## DoValidDroppedPositionCheck 
```lua
--- @type boolean
Read: cc4.DoValidDroppedPositionCheck
Write: cc4.DoValidDroppedPositionCheck = value
```
## StartedArming 
```lua
--- @type boolean
Read: cc4.StartedArming
Write: cc4.StartedArming = value
```
## ArmedTime 
```lua
--- @type number
Read: cc4.ArmedTime
Write: cc4.ArmedTime = value
```
## BombPlacedAnimation 
```lua
--- @type boolean
Read: cc4.BombPlacedAnimation
Write: cc4.BombPlacedAnimation = value
```
## IsPlantingViaUse 
```lua
--- @type boolean
Read: cc4.IsPlantingViaUse
Write: cc4.IsPlantingViaUse = value
```
## EntitySpottedState (Read-Only)
```lua
--- @type EntitySpottedState_t
Read: cc4.EntitySpottedState
```
## SpotRules 
```lua
--- @type number
Read: cc4.SpotRules
Write: cc4.SpotRules = value
```
## PlayedArmingBeeps 
```lua
--- @type table
Read: cc4.PlayedArmingBeeps
Write: cc4.PlayedArmingBeeps = value
```
## BombPlanted 
```lua
--- @type boolean
Read: cc4.BombPlanted
Write: cc4.BombPlanted = value
```
## Parent (Read-Only)
```lua
--- @type CCSWeaponBase
Read: cc4.Parent
```
# Functions
## ToPtr
```lua
--- @return string
cc4:ToPtr()
```
## IsValid
```lua
--- @return bool
cc4:IsValid()
```

:::