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
CPhysHinge(ptr --[[ string ]])
```
# Properties
## SoundInfo 
```lua
@type ConstraintSoundInfo
Read: cphyshinge.SoundInfo
Write: cphyshinge.SoundInfo = value
```
## NotifyMinLimitReached 
```lua
@type CEntityIOOutput
Read: cphyshinge.NotifyMinLimitReached
Write: cphyshinge.NotifyMinLimitReached = value
```
## NotifyMaxLimitReached 
```lua
@type CEntityIOOutput
Read: cphyshinge.NotifyMaxLimitReached
Write: cphyshinge.NotifyMaxLimitReached = value
```
## AtMinLimit 
```lua
@type boolean
Read: cphyshinge.AtMinLimit
Write: cphyshinge.AtMinLimit = value
```
## AtMaxLimit 
```lua
@type boolean
Read: cphyshinge.AtMaxLimit
Write: cphyshinge.AtMaxLimit = value
```
## Hinge 
```lua
@type constraint_hingeparams_t
Read: cphyshinge.Hinge
Write: cphyshinge.Hinge = value
```
## HingeFriction 
```lua
@type number
Read: cphyshinge.HingeFriction
Write: cphyshinge.HingeFriction = value
```
## SystemLoadScale 
```lua
@type number
Read: cphyshinge.SystemLoadScale
Write: cphyshinge.SystemLoadScale = value
```
## IsAxisLocal 
```lua
@type boolean
Read: cphyshinge.IsAxisLocal
Write: cphyshinge.IsAxisLocal = value
```
## MinRotation 
```lua
@type number
Read: cphyshinge.MinRotation
Write: cphyshinge.MinRotation = value
```
## MaxRotation 
```lua
@type number
Read: cphyshinge.MaxRotation
Write: cphyshinge.MaxRotation = value
```
## InitialRotation 
```lua
@type number
Read: cphyshinge.InitialRotation
Write: cphyshinge.InitialRotation = value
```
## MotorFrequency 
```lua
@type number
Read: cphyshinge.MotorFrequency
Write: cphyshinge.MotorFrequency = value
```
## MotorDampingRatio 
```lua
@type number
Read: cphyshinge.MotorDampingRatio
Write: cphyshinge.MotorDampingRatio = value
```
## AngleSpeed 
```lua
@type number
Read: cphyshinge.AngleSpeed
Write: cphyshinge.AngleSpeed = value
```
## AngleSpeedThreshold 
```lua
@type number
Read: cphyshinge.AngleSpeedThreshold
Write: cphyshinge.AngleSpeedThreshold = value
```
## OnStartMoving 
```lua
@type CEntityIOOutput
Read: cphyshinge.OnStartMoving
Write: cphyshinge.OnStartMoving = value
```
## OnStopMoving 
```lua
@type CEntityIOOutput
Read: cphyshinge.OnStopMoving
Write: cphyshinge.OnStopMoving = value
```
## Parent 
```lua
@type CPhysConstraint
Read: cphyshinge.Parent
Write: cphyshinge.Parent = value
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