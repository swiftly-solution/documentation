---
title: CBuoyancyHelper
index: true
order: 2
category:
  - Guide
---

# CBuoyancyHelper

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
CBuoyancyHelper(ptr)
```
# Properties
## FluidType 
```lua
--- @type number
Read: cbuoyancyhelper.FluidType
Write: cbuoyancyhelper.FluidType = value
```
## FluidDensity 
```lua
--- @type number
Read: cbuoyancyhelper.FluidDensity
Write: cbuoyancyhelper.FluidDensity = value
```
## FractionOfWheelSubmergedForWheelFriction (Read-Only)
```lua
--- @type table
Read: cbuoyancyhelper.FractionOfWheelSubmergedForWheelFriction
```
## WheelFrictionScales (Read-Only)
```lua
--- @type table
Read: cbuoyancyhelper.WheelFrictionScales
```
## FractionOfWheelSubmergedForWheelDrag (Read-Only)
```lua
--- @type table
Read: cbuoyancyhelper.FractionOfWheelSubmergedForWheelDrag
```
## WheelDrag (Read-Only)
```lua
--- @type table
Read: cbuoyancyhelper.WheelDrag
```
# Functions
## ToPtr
```lua
--- @return string
cbuoyancyhelper:ToPtr()
```
## IsValid
```lua
--- @return bool
cbuoyancyhelper:IsValid()
```

:::