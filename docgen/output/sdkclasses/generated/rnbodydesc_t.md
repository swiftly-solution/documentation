---
title: RnBodyDesc_t
index: true
order: 2
category:
  - Guide
---

# RnBodyDesc_t

::: tabs
@tab Lua
# Constructor
```lua
RnBodyDesc_t(ptr --[[ string ]])
```
# Properties
## DebugName 
```lua
@type string
Read: rnbodydesc_t.DebugName
Write: rnbodydesc_t.DebugName = value
```
## Position 
```lua
@type Vector
Read: rnbodydesc_t.Position
Write: rnbodydesc_t.Position = value
```
## LinearVelocity 
```lua
@type Vector
Read: rnbodydesc_t.LinearVelocity
Write: rnbodydesc_t.LinearVelocity = value
```
## AngularVelocity 
```lua
@type Vector
Read: rnbodydesc_t.AngularVelocity
Write: rnbodydesc_t.AngularVelocity = value
```
## LocalMassCenter 
```lua
@type Vector
Read: rnbodydesc_t.LocalMassCenter
Write: rnbodydesc_t.LocalMassCenter = value
```
## LocalInertiaInv 
```lua
@type table
Read: rnbodydesc_t.LocalInertiaInv
Write: rnbodydesc_t.LocalInertiaInv = value
```
## MassInv 
```lua
@type number
Read: rnbodydesc_t.MassInv
Write: rnbodydesc_t.MassInv = value
```
## GameMass 
```lua
@type number
Read: rnbodydesc_t.GameMass
Write: rnbodydesc_t.GameMass = value
```
## InertiaScaleInv 
```lua
@type number
Read: rnbodydesc_t.InertiaScaleInv
Write: rnbodydesc_t.InertiaScaleInv = value
```
## LinearDamping 
```lua
@type number
Read: rnbodydesc_t.LinearDamping
Write: rnbodydesc_t.LinearDamping = value
```
## AngularDamping 
```lua
@type number
Read: rnbodydesc_t.AngularDamping
Write: rnbodydesc_t.AngularDamping = value
```
## LinearDrag 
```lua
@type number
Read: rnbodydesc_t.LinearDrag
Write: rnbodydesc_t.LinearDrag = value
```
## AngularDrag 
```lua
@type number
Read: rnbodydesc_t.AngularDrag
Write: rnbodydesc_t.AngularDrag = value
```
## LinearBuoyancyDrag 
```lua
@type number
Read: rnbodydesc_t.LinearBuoyancyDrag
Write: rnbodydesc_t.LinearBuoyancyDrag = value
```
## AngularBuoyancyDrag 
```lua
@type number
Read: rnbodydesc_t.AngularBuoyancyDrag
Write: rnbodydesc_t.AngularBuoyancyDrag = value
```
## LastAwakeForceAccum 
```lua
@type Vector
Read: rnbodydesc_t.LastAwakeForceAccum
Write: rnbodydesc_t.LastAwakeForceAccum = value
```
## LastAwakeTorqueAccum 
```lua
@type Vector
Read: rnbodydesc_t.LastAwakeTorqueAccum
Write: rnbodydesc_t.LastAwakeTorqueAccum = value
```
## BuoyancyFactor 
```lua
@type number
Read: rnbodydesc_t.BuoyancyFactor
Write: rnbodydesc_t.BuoyancyFactor = value
```
## GravityScale 
```lua
@type number
Read: rnbodydesc_t.GravityScale
Write: rnbodydesc_t.GravityScale = value
```
## TimeScale 
```lua
@type number
Read: rnbodydesc_t.TimeScale
Write: rnbodydesc_t.TimeScale = value
```
## BodyType 
```lua
@type number
Read: rnbodydesc_t.BodyType
Write: rnbodydesc_t.BodyType = value
```
## GameIndex 
```lua
@type number
Read: rnbodydesc_t.GameIndex
Write: rnbodydesc_t.GameIndex = value
```
## GameFlags 
```lua
@type number
Read: rnbodydesc_t.GameFlags
Write: rnbodydesc_t.GameFlags = value
```
## MinVelocityIterations 
```lua
@type number
Read: rnbodydesc_t.MinVelocityIterations
Write: rnbodydesc_t.MinVelocityIterations = value
```
## MinPositionIterations 
```lua
@type number
Read: rnbodydesc_t.MinPositionIterations
Write: rnbodydesc_t.MinPositionIterations = value
```
## MassPriority 
```lua
@type number
Read: rnbodydesc_t.MassPriority
Write: rnbodydesc_t.MassPriority = value
```
## Enabled 
```lua
@type boolean
Read: rnbodydesc_t.Enabled
Write: rnbodydesc_t.Enabled = value
```
## Sleeping 
```lua
@type boolean
Read: rnbodydesc_t.Sleeping
Write: rnbodydesc_t.Sleeping = value
```
## IsContinuousEnabled 
```lua
@type boolean
Read: rnbodydesc_t.IsContinuousEnabled
Write: rnbodydesc_t.IsContinuousEnabled = value
```
## DragEnabled 
```lua
@type boolean
Read: rnbodydesc_t.DragEnabled
Write: rnbodydesc_t.DragEnabled = value
```
## BuoyancyDragEnabled 
```lua
@type boolean
Read: rnbodydesc_t.BuoyancyDragEnabled
Write: rnbodydesc_t.BuoyancyDragEnabled = value
```
## GravityDisabled 
```lua
@type boolean
Read: rnbodydesc_t.GravityDisabled
Write: rnbodydesc_t.GravityDisabled = value
```
## SpeculativeEnabled 
```lua
@type boolean
Read: rnbodydesc_t.SpeculativeEnabled
Write: rnbodydesc_t.SpeculativeEnabled = value
```
## HasShadowController 
```lua
@type boolean
Read: rnbodydesc_t.HasShadowController
Write: rnbodydesc_t.HasShadowController = value
```
# Functions
## ToPtr
```lua
@returns string
rnbodydesc_t:ToPtr()
```
## IsValid
```lua
@returns bool
rnbodydesc_t:IsValid()
```

:::