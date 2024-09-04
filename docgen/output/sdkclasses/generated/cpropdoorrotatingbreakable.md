---
title: CPropDoorRotatingBreakable
index: true
order: 2
category:
  - Guide
---

# CPropDoorRotatingBreakable

::: tabs
@tab Lua
# Constructor
```lua
CPropDoorRotatingBreakable(ptr --[[ string ]])
```
# Properties
## Breakable 
```lua
@type boolean
Read: cpropdoorrotatingbreakable.Breakable
Write: cpropdoorrotatingbreakable.Breakable = value
```
## IsAbleToCloseAreaPortals 
```lua
@type boolean
Read: cpropdoorrotatingbreakable.IsAbleToCloseAreaPortals
Write: cpropdoorrotatingbreakable.IsAbleToCloseAreaPortals = value
```
## CurrentDamageState 
```lua
@type number
Read: cpropdoorrotatingbreakable.CurrentDamageState
Write: cpropdoorrotatingbreakable.CurrentDamageState = value
```
## DamageStates (Read-Only)
```lua
@type table
Read: cpropdoorrotatingbreakable.DamageStates
```
## Parent (Read-Only)
```lua
@type CPropDoorRotating
Read: cpropdoorrotatingbreakable.Parent
```
# Functions
## ToPtr
```lua
@returns string
cpropdoorrotatingbreakable:ToPtr()
```
## IsValid
```lua
@returns bool
cpropdoorrotatingbreakable:IsValid()
```

:::