---
title: CWeaponBaseItem
index: true
order: 2
category:
  - Guide
---

# CWeaponBaseItem

::: tabs
@tab Lua
# Constructor
```lua
CWeaponBaseItem(ptr --[[ string ]])
```
# Properties
## SequenceCompleteTimer 
```lua
@type CountdownTimer
Read: cweaponbaseitem.SequenceCompleteTimer
Write: cweaponbaseitem.SequenceCompleteTimer = value
```
## Redraw 
```lua
@type boolean
Read: cweaponbaseitem.Redraw
Write: cweaponbaseitem.Redraw = value
```
## Parent 
```lua
@type CCSWeaponBase
Read: cweaponbaseitem.Parent
Write: cweaponbaseitem.Parent = value
```
# Functions
## ToPtr
```lua
@returns string
cweaponbaseitem:ToPtr()
```
## IsValid
```lua
@returns bool
cweaponbaseitem:IsValid()
```

:::