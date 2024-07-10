---
title: VPhysXJoint_t
index: true
order: 2
category:
  - Guide
---

# VPhysXJoint_t

::: tabs
@tab Lua
# Constructor
```lua
VPhysXJoint_t(ptr --[[ string ]])
```
# Properties
## Type 
```lua
@type number
Read: vphysxjoint_t.Type
Write: vphysxjoint_t.Type = value
```
## Body1 
```lua
@type number
Read: vphysxjoint_t.Body1
Write: vphysxjoint_t.Body1 = value
```
## Body2 
```lua
@type number
Read: vphysxjoint_t.Body2
Write: vphysxjoint_t.Body2 = value
```
## Flags 
```lua
@type number
Read: vphysxjoint_t.Flags
Write: vphysxjoint_t.Flags = value
```
## EnableCollision 
```lua
@type boolean
Read: vphysxjoint_t.EnableCollision
Write: vphysxjoint_t.EnableCollision = value
```
## EnableLinearLimit 
```lua
@type boolean
Read: vphysxjoint_t.EnableLinearLimit
Write: vphysxjoint_t.EnableLinearLimit = value
```
## LinearLimit 
```lua
@type VPhysXRange_t
Read: vphysxjoint_t.LinearLimit
Write: vphysxjoint_t.LinearLimit = value
```
## EnableLinearMotor 
```lua
@type boolean
Read: vphysxjoint_t.EnableLinearMotor
Write: vphysxjoint_t.EnableLinearMotor = value
```
## LinearTargetVelocity 
```lua
@type Vector
Read: vphysxjoint_t.LinearTargetVelocity
Write: vphysxjoint_t.LinearTargetVelocity = value
```
## MaxForce 
```lua
@type number
Read: vphysxjoint_t.MaxForce
Write: vphysxjoint_t.MaxForce = value
```
## EnableSwingLimit 
```lua
@type boolean
Read: vphysxjoint_t.EnableSwingLimit
Write: vphysxjoint_t.EnableSwingLimit = value
```
## SwingLimit 
```lua
@type VPhysXRange_t
Read: vphysxjoint_t.SwingLimit
Write: vphysxjoint_t.SwingLimit = value
```
## EnableTwistLimit 
```lua
@type boolean
Read: vphysxjoint_t.EnableTwistLimit
Write: vphysxjoint_t.EnableTwistLimit = value
```
## TwistLimit 
```lua
@type VPhysXRange_t
Read: vphysxjoint_t.TwistLimit
Write: vphysxjoint_t.TwistLimit = value
```
## EnableAngularMotor 
```lua
@type boolean
Read: vphysxjoint_t.EnableAngularMotor
Write: vphysxjoint_t.EnableAngularMotor = value
```
## AngularTargetVelocity 
```lua
@type Vector
Read: vphysxjoint_t.AngularTargetVelocity
Write: vphysxjoint_t.AngularTargetVelocity = value
```
## MaxTorque 
```lua
@type number
Read: vphysxjoint_t.MaxTorque
Write: vphysxjoint_t.MaxTorque = value
```
## LinearFrequency 
```lua
@type number
Read: vphysxjoint_t.LinearFrequency
Write: vphysxjoint_t.LinearFrequency = value
```
## LinearDampingRatio 
```lua
@type number
Read: vphysxjoint_t.LinearDampingRatio
Write: vphysxjoint_t.LinearDampingRatio = value
```
## AngularFrequency 
```lua
@type number
Read: vphysxjoint_t.AngularFrequency
Write: vphysxjoint_t.AngularFrequency = value
```
## AngularDampingRatio 
```lua
@type number
Read: vphysxjoint_t.AngularDampingRatio
Write: vphysxjoint_t.AngularDampingRatio = value
```
## Friction 
```lua
@type number
Read: vphysxjoint_t.Friction
Write: vphysxjoint_t.Friction = value
```
# Functions
## ToPtr
```lua
@returns string
vphysxjoint_t:ToPtr()
```
## IsValid
```lua
@returns bool
vphysxjoint_t:IsValid()
```

:::