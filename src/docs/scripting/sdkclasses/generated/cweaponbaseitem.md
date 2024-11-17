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
--- @param ptr string
CWeaponBaseItem(ptr)
```
# Properties
## SequenceCompleteTimer (Read-Only)
```lua
--- @type CountdownTimer
Read: cweaponbaseitem.SequenceCompleteTimer
```
## Redraw 
```lua
--- @type boolean
Read: cweaponbaseitem.Redraw
Write: cweaponbaseitem.Redraw = value
```
## Parent (Read-Only)
```lua
--- @type CCSWeaponBase
Read: cweaponbaseitem.Parent
```
# Functions
## ToPtr
```lua
--- @return string
cweaponbaseitem:ToPtr()
```
## IsValid
```lua
--- @return bool
cweaponbaseitem:IsValid()
```

:::