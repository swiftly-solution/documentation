---
title: CPointAngularVelocitySensor
index: true
order: 2
category:
  - Guide
---

# CPointAngularVelocitySensor

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
CPointAngularVelocitySensor(ptr)
```
# Properties
## TargetEntity (Read-Only)
```lua
--- @type CBaseEntity
Read: cpointangularvelocitysensor.TargetEntity
```
## Threshold 
```lua
--- @type number
Read: cpointangularvelocitysensor.Threshold
Write: cpointangularvelocitysensor.Threshold = value
```
## LastCompareResult 
```lua
--- @type number
Read: cpointangularvelocitysensor.LastCompareResult
Write: cpointangularvelocitysensor.LastCompareResult = value
```
## LastFireResult 
```lua
--- @type number
Read: cpointangularvelocitysensor.LastFireResult
Write: cpointangularvelocitysensor.LastFireResult = value
```
## FireTime 
```lua
--- @type number
Read: cpointangularvelocitysensor.FireTime
Write: cpointangularvelocitysensor.FireTime = value
```
## FireInterval 
```lua
--- @type number
Read: cpointangularvelocitysensor.FireInterval
Write: cpointangularvelocitysensor.FireInterval = value
```
## LastAngVelocity 
```lua
--- @type number
Read: cpointangularvelocitysensor.LastAngVelocity
Write: cpointangularvelocitysensor.LastAngVelocity = value
```
## LastOrientation 
```lua
--- @type QAngle
Read: cpointangularvelocitysensor.LastOrientation
Write: cpointangularvelocitysensor.LastOrientation = value
```
## Axis 
```lua
--- @type Vector
Read: cpointangularvelocitysensor.Axis
Write: cpointangularvelocitysensor.Axis = value
```
## UseHelper 
```lua
--- @type boolean
Read: cpointangularvelocitysensor.UseHelper
Write: cpointangularvelocitysensor.UseHelper = value
```
## OnLessThan (Read-Only)
```lua
--- @type CEntityIOOutput
Read: cpointangularvelocitysensor.OnLessThan
```
## OnLessThanOrEqualTo (Read-Only)
```lua
--- @type CEntityIOOutput
Read: cpointangularvelocitysensor.OnLessThanOrEqualTo
```
## OnGreaterThan (Read-Only)
```lua
--- @type CEntityIOOutput
Read: cpointangularvelocitysensor.OnGreaterThan
```
## OnGreaterThanOrEqualTo (Read-Only)
```lua
--- @type CEntityIOOutput
Read: cpointangularvelocitysensor.OnGreaterThanOrEqualTo
```
## OnEqualTo (Read-Only)
```lua
--- @type CEntityIOOutput
Read: cpointangularvelocitysensor.OnEqualTo
```
## Parent (Read-Only)
```lua
--- @type CPointEntity
Read: cpointangularvelocitysensor.Parent
```
# Functions
## ToPtr
```lua
--- @return string
cpointangularvelocitysensor:ToPtr()
```
## IsValid
```lua
--- @return bool
cpointangularvelocitysensor:IsValid()
```

:::