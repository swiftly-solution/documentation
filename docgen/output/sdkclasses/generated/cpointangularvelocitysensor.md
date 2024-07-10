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
CPointAngularVelocitySensor(ptr --[[ string ]])
```
# Properties
## TargetEntity (Read-Only)
```lua
@type CBaseEntity
Read: cpointangularvelocitysensor.TargetEntity
```
## Threshold 
```lua
@type number
Read: cpointangularvelocitysensor.Threshold
Write: cpointangularvelocitysensor.Threshold = value
```
## LastCompareResult 
```lua
@type number
Read: cpointangularvelocitysensor.LastCompareResult
Write: cpointangularvelocitysensor.LastCompareResult = value
```
## LastFireResult 
```lua
@type number
Read: cpointangularvelocitysensor.LastFireResult
Write: cpointangularvelocitysensor.LastFireResult = value
```
## FireTime 
```lua
@type number
Read: cpointangularvelocitysensor.FireTime
Write: cpointangularvelocitysensor.FireTime = value
```
## FireInterval 
```lua
@type number
Read: cpointangularvelocitysensor.FireInterval
Write: cpointangularvelocitysensor.FireInterval = value
```
## LastAngVelocity 
```lua
@type number
Read: cpointangularvelocitysensor.LastAngVelocity
Write: cpointangularvelocitysensor.LastAngVelocity = value
```
## LastOrientation 
```lua
@type QAngle
Read: cpointangularvelocitysensor.LastOrientation
Write: cpointangularvelocitysensor.LastOrientation = value
```
## Axis 
```lua
@type Vector
Read: cpointangularvelocitysensor.Axis
Write: cpointangularvelocitysensor.Axis = value
```
## UseHelper 
```lua
@type boolean
Read: cpointangularvelocitysensor.UseHelper
Write: cpointangularvelocitysensor.UseHelper = value
```
## OnLessThan 
```lua
@type CEntityIOOutput
Read: cpointangularvelocitysensor.OnLessThan
Write: cpointangularvelocitysensor.OnLessThan = value
```
## OnLessThanOrEqualTo 
```lua
@type CEntityIOOutput
Read: cpointangularvelocitysensor.OnLessThanOrEqualTo
Write: cpointangularvelocitysensor.OnLessThanOrEqualTo = value
```
## OnGreaterThan 
```lua
@type CEntityIOOutput
Read: cpointangularvelocitysensor.OnGreaterThan
Write: cpointangularvelocitysensor.OnGreaterThan = value
```
## OnGreaterThanOrEqualTo 
```lua
@type CEntityIOOutput
Read: cpointangularvelocitysensor.OnGreaterThanOrEqualTo
Write: cpointangularvelocitysensor.OnGreaterThanOrEqualTo = value
```
## OnEqualTo 
```lua
@type CEntityIOOutput
Read: cpointangularvelocitysensor.OnEqualTo
Write: cpointangularvelocitysensor.OnEqualTo = value
```
## Parent 
```lua
@type CPointEntity
Read: cpointangularvelocitysensor.Parent
Write: cpointangularvelocitysensor.Parent = value
```
# Functions
## ToPtr
```lua
@returns string
cpointangularvelocitysensor:ToPtr()
```
## IsValid
```lua
@returns bool
cpointangularvelocitysensor:IsValid()
```

:::