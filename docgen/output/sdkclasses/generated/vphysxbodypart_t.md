---
title: VPhysXBodyPart_t
index: true
order: 2
category:
  - Guide
---

# VPhysXBodyPart_t

::: tabs
@tab Lua
# Constructor
```lua
VPhysXBodyPart_t(ptr --[[ string ]])
```
# Properties
## Flags 
```lua
@type number
Read: vphysxbodypart_t.Flags
Write: vphysxbodypart_t.Flags = value
```
## Mass 
```lua
@type number
Read: vphysxbodypart_t.Mass
Write: vphysxbodypart_t.Mass = value
```
## RnShape 
```lua
@type VPhysics2ShapeDef_t
Read: vphysxbodypart_t.RnShape
Write: vphysxbodypart_t.RnShape = value
```
## CollisionAttributeIndex 
```lua
@type number
Read: vphysxbodypart_t.CollisionAttributeIndex
Write: vphysxbodypart_t.CollisionAttributeIndex = value
```
## Reserved 
```lua
@type number
Read: vphysxbodypart_t.Reserved
Write: vphysxbodypart_t.Reserved = value
```
## InertiaScale 
```lua
@type number
Read: vphysxbodypart_t.InertiaScale
Write: vphysxbodypart_t.InertiaScale = value
```
## LinearDamping 
```lua
@type number
Read: vphysxbodypart_t.LinearDamping
Write: vphysxbodypart_t.LinearDamping = value
```
## AngularDamping 
```lua
@type number
Read: vphysxbodypart_t.AngularDamping
Write: vphysxbodypart_t.AngularDamping = value
```
## OverrideMassCenter 
```lua
@type boolean
Read: vphysxbodypart_t.OverrideMassCenter
Write: vphysxbodypart_t.OverrideMassCenter = value
```
## MassCenterOverride 
```lua
@type Vector
Read: vphysxbodypart_t.MassCenterOverride
Write: vphysxbodypart_t.MassCenterOverride = value
```
# Functions
## ToPtr
```lua
@returns string
vphysxbodypart_t:ToPtr()
```
## IsValid
```lua
@returns bool
vphysxbodypart_t:IsValid()
```

:::