---
title: CPhysWheelConstraint
index: true
order: 2
category:
  - Guide
---

# CPhysWheelConstraint

::: tabs
@tab Lua
# Constructor
```lua
CPhysWheelConstraint(ptr --[[ string ]])
```
# Properties
## SuspensionFrequency 
```lua
@type number
Read: cphyswheelconstraint.SuspensionFrequency
Write: cphyswheelconstraint.SuspensionFrequency = value
```
## SuspensionDampingRatio 
```lua
@type number
Read: cphyswheelconstraint.SuspensionDampingRatio
Write: cphyswheelconstraint.SuspensionDampingRatio = value
```
## SuspensionHeightOffset 
```lua
@type number
Read: cphyswheelconstraint.SuspensionHeightOffset
Write: cphyswheelconstraint.SuspensionHeightOffset = value
```
## EnableSuspensionLimit 
```lua
@type boolean
Read: cphyswheelconstraint.EnableSuspensionLimit
Write: cphyswheelconstraint.EnableSuspensionLimit = value
```
## MinSuspensionOffset 
```lua
@type number
Read: cphyswheelconstraint.MinSuspensionOffset
Write: cphyswheelconstraint.MinSuspensionOffset = value
```
## MaxSuspensionOffset 
```lua
@type number
Read: cphyswheelconstraint.MaxSuspensionOffset
Write: cphyswheelconstraint.MaxSuspensionOffset = value
```
## EnableSteeringLimit 
```lua
@type boolean
Read: cphyswheelconstraint.EnableSteeringLimit
Write: cphyswheelconstraint.EnableSteeringLimit = value
```
## MinSteeringAngle 
```lua
@type number
Read: cphyswheelconstraint.MinSteeringAngle
Write: cphyswheelconstraint.MinSteeringAngle = value
```
## MaxSteeringAngle 
```lua
@type number
Read: cphyswheelconstraint.MaxSteeringAngle
Write: cphyswheelconstraint.MaxSteeringAngle = value
```
## SteeringAxisFriction 
```lua
@type number
Read: cphyswheelconstraint.SteeringAxisFriction
Write: cphyswheelconstraint.SteeringAxisFriction = value
```
## SpinAxisFriction 
```lua
@type number
Read: cphyswheelconstraint.SpinAxisFriction
Write: cphyswheelconstraint.SpinAxisFriction = value
```
## Parent (Read-Only)
```lua
@type CPhysConstraint
Read: cphyswheelconstraint.Parent
```
# Functions
## ToPtr
```lua
@returns string
cphyswheelconstraint:ToPtr()
```
## IsValid
```lua
@returns bool
cphyswheelconstraint:IsValid()
```

:::