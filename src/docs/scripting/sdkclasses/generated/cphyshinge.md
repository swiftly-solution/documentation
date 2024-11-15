---
title: CPhysHinge
index: true
order: 2
category:
  - Guide
---

# CPhysHinge

::: tabs
@tab Lua
# Constructor
```lua
CPhysHinge(ptr)
```
# Properties
## SoundInfo (Read-Only)
```lua
--- @type ConstraintSoundInfo
Read: cphyshinge.SoundInfo
```
## NotifyMinLimitReached (Read-Only)
```lua
--- @type CEntityIOOutput
Read: cphyshinge.NotifyMinLimitReached
```
## NotifyMaxLimitReached (Read-Only)
```lua
--- @type CEntityIOOutput
Read: cphyshinge.NotifyMaxLimitReached
```
## AtMinLimit 
```lua
--- @type boolean
Read: cphyshinge.AtMinLimit
Write: cphyshinge.AtMinLimit = value
```
## AtMaxLimit 
```lua
--- @type boolean
Read: cphyshinge.AtMaxLimit
Write: cphyshinge.AtMaxLimit = value
```
## Hinge (Read-Only)
```lua
--- @type constraint_hingeparams_t
Read: cphyshinge.Hinge
```
## HingeFriction 
```lua
--- @type number
Read: cphyshinge.HingeFriction
Write: cphyshinge.HingeFriction = value
```
## SystemLoadScale 
```lua
--- @type number
Read: cphyshinge.SystemLoadScale
Write: cphyshinge.SystemLoadScale = value
```
## IsAxisLocal 
```lua
--- @type boolean
Read: cphyshinge.IsAxisLocal
Write: cphyshinge.IsAxisLocal = value
```
## MinRotation 
```lua
--- @type number
Read: cphyshinge.MinRotation
Write: cphyshinge.MinRotation = value
```
## MaxRotation 
```lua
--- @type number
Read: cphyshinge.MaxRotation
Write: cphyshinge.MaxRotation = value
```
## InitialRotation 
```lua
--- @type number
Read: cphyshinge.InitialRotation
Write: cphyshinge.InitialRotation = value
```
## MotorFrequency 
```lua
--- @type number
Read: cphyshinge.MotorFrequency
Write: cphyshinge.MotorFrequency = value
```
## MotorDampingRatio 
```lua
--- @type number
Read: cphyshinge.MotorDampingRatio
Write: cphyshinge.MotorDampingRatio = value
```
## AngleSpeed 
```lua
--- @type number
Read: cphyshinge.AngleSpeed
Write: cphyshinge.AngleSpeed = value
```
## AngleSpeedThreshold 
```lua
--- @type number
Read: cphyshinge.AngleSpeedThreshold
Write: cphyshinge.AngleSpeedThreshold = value
```
## OnStartMoving (Read-Only)
```lua
--- @type CEntityIOOutput
Read: cphyshinge.OnStartMoving
```
## OnStopMoving (Read-Only)
```lua
--- @type CEntityIOOutput
Read: cphyshinge.OnStopMoving
```
## Parent (Read-Only)
```lua
--- @type CPhysConstraint
Read: cphyshinge.Parent
```
# Functions
## ToPtr
```lua
@returns string
cphyshinge:ToPtr()
```
## IsValid
```lua
@returns bool
cphyshinge:IsValid()
```

:::