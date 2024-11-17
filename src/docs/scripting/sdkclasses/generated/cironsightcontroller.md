---
title: CIronSightController
index: true
order: 2
category:
  - Guide
---

# CIronSightController

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
CIronSightController(ptr)
```
# Properties
## IronSightAvailable 
```lua
--- @type boolean
Read: cironsightcontroller.IronSightAvailable
Write: cironsightcontroller.IronSightAvailable = value
```
## IronSightAmount 
```lua
--- @type number
Read: cironsightcontroller.IronSightAmount
Write: cironsightcontroller.IronSightAmount = value
```
## IronSightAmountGained 
```lua
--- @type number
Read: cironsightcontroller.IronSightAmountGained
Write: cironsightcontroller.IronSightAmountGained = value
```
## IronSightAmountBiased 
```lua
--- @type number
Read: cironsightcontroller.IronSightAmountBiased
Write: cironsightcontroller.IronSightAmountBiased = value
```
# Functions
## ToPtr
```lua
--- @return string
cironsightcontroller:ToPtr()
```
## IsValid
```lua
--- @return bool
cironsightcontroller:IsValid()
```

:::