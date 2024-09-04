---
title: CPhysSlideConstraint
index: true
order: 2
category:
  - Guide
---

# CPhysSlideConstraint

::: tabs
@tab Lua
# Constructor
```lua
CPhysSlideConstraint(ptr --[[ string ]])
```
# Properties
## AxisEnd 
```lua
@type Vector
Read: cphysslideconstraint.AxisEnd
Write: cphysslideconstraint.AxisEnd = value
```
## SlideFriction 
```lua
@type number
Read: cphysslideconstraint.SlideFriction
Write: cphysslideconstraint.SlideFriction = value
```
## SystemLoadScale 
```lua
@type number
Read: cphysslideconstraint.SystemLoadScale
Write: cphysslideconstraint.SystemLoadScale = value
```
## InitialOffset 
```lua
@type number
Read: cphysslideconstraint.InitialOffset
Write: cphysslideconstraint.InitialOffset = value
```
## EnableLinearConstraint 
```lua
@type boolean
Read: cphysslideconstraint.EnableLinearConstraint
Write: cphysslideconstraint.EnableLinearConstraint = value
```
## EnableAngularConstraint 
```lua
@type boolean
Read: cphysslideconstraint.EnableAngularConstraint
Write: cphysslideconstraint.EnableAngularConstraint = value
```
## MotorFrequency 
```lua
@type number
Read: cphysslideconstraint.MotorFrequency
Write: cphysslideconstraint.MotorFrequency = value
```
## MotorDampingRatio 
```lua
@type number
Read: cphysslideconstraint.MotorDampingRatio
Write: cphysslideconstraint.MotorDampingRatio = value
```
## UseEntityPivot 
```lua
@type boolean
Read: cphysslideconstraint.UseEntityPivot
Write: cphysslideconstraint.UseEntityPivot = value
```
## SoundInfo (Read-Only)
```lua
@type ConstraintSoundInfo
Read: cphysslideconstraint.SoundInfo
```
## Parent (Read-Only)
```lua
@type CPhysConstraint
Read: cphysslideconstraint.Parent
```
# Functions
## ToPtr
```lua
@returns string
cphysslideconstraint:ToPtr()
```
## IsValid
```lua
@returns bool
cphysslideconstraint:IsValid()
```

:::