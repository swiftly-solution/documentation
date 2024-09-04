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
## SequenceCompleteTimer (Read-Only)
```lua
@type CountdownTimer
Read: cweaponbaseitem.SequenceCompleteTimer
```
## Redraw 
```lua
@type boolean
Read: cweaponbaseitem.Redraw
Write: cweaponbaseitem.Redraw = value
```
## Parent (Read-Only)
```lua
@type CCSWeaponBase
Read: cweaponbaseitem.Parent
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