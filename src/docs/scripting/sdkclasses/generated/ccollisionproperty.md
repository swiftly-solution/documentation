---
title: CCollisionProperty
index: true
order: 2
category:
  - Guide
---

# CCollisionProperty

::: tabs
@tab Lua
# Constructor
```lua
CCollisionProperty(ptr)
```
# Properties
## CollisionAttribute (Read-Only)
```lua
--- @type VPhysicsCollisionAttribute_t
Read: ccollisionproperty.CollisionAttribute
```
## Mins 
```lua
--- @type Vector
Read: ccollisionproperty.Mins
Write: ccollisionproperty.Mins = value
```
## Maxs 
```lua
--- @type Vector
Read: ccollisionproperty.Maxs
Write: ccollisionproperty.Maxs = value
```
## SolidFlags 
```lua
--- @type number
Read: ccollisionproperty.SolidFlags
Write: ccollisionproperty.SolidFlags = value
```
## SolidType 
```lua
--- @type number
Read: ccollisionproperty.SolidType
Write: ccollisionproperty.SolidType = value
```
## TriggerBloat 
```lua
--- @type number
Read: ccollisionproperty.TriggerBloat
Write: ccollisionproperty.TriggerBloat = value
```
## SurroundType 
```lua
--- @type number
Read: ccollisionproperty.SurroundType
Write: ccollisionproperty.SurroundType = value
```
## CollisionGroup 
```lua
--- @type number
Read: ccollisionproperty.CollisionGroup
Write: ccollisionproperty.CollisionGroup = value
```
## EnablePhysics 
```lua
--- @type number
Read: ccollisionproperty.EnablePhysics
Write: ccollisionproperty.EnablePhysics = value
```
## BoundingRadius 
```lua
--- @type number
Read: ccollisionproperty.BoundingRadius
Write: ccollisionproperty.BoundingRadius = value
```
## SpecifiedSurroundingMins 
```lua
--- @type Vector
Read: ccollisionproperty.SpecifiedSurroundingMins
Write: ccollisionproperty.SpecifiedSurroundingMins = value
```
## SpecifiedSurroundingMaxs 
```lua
--- @type Vector
Read: ccollisionproperty.SpecifiedSurroundingMaxs
Write: ccollisionproperty.SpecifiedSurroundingMaxs = value
```
## SurroundingMaxs 
```lua
--- @type Vector
Read: ccollisionproperty.SurroundingMaxs
Write: ccollisionproperty.SurroundingMaxs = value
```
## SurroundingMins 
```lua
--- @type Vector
Read: ccollisionproperty.SurroundingMins
Write: ccollisionproperty.SurroundingMins = value
```
## CapsuleCenter1 
```lua
--- @type Vector
Read: ccollisionproperty.CapsuleCenter1
Write: ccollisionproperty.CapsuleCenter1 = value
```
## CapsuleCenter2 
```lua
--- @type Vector
Read: ccollisionproperty.CapsuleCenter2
Write: ccollisionproperty.CapsuleCenter2 = value
```
## CapsuleRadius 
```lua
--- @type number
Read: ccollisionproperty.CapsuleRadius
Write: ccollisionproperty.CapsuleRadius = value
```
# Functions
## ToPtr
```lua
@returns string
ccollisionproperty:ToPtr()
```
## IsValid
```lua
@returns bool
ccollisionproperty:IsValid()
```

:::