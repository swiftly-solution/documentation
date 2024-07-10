---
title: FeCollisionPlane_t
index: true
order: 2
category:
  - Guide
---

# FeCollisionPlane_t

::: tabs
@tab Lua
# Constructor
```lua
FeCollisionPlane_t(ptr --[[ string ]])
```
# Properties
## CtrlParent 
```lua
@type number
Read: fecollisionplane_t.CtrlParent
Write: fecollisionplane_t.CtrlParent = value
```
## ChildNode 
```lua
@type number
Read: fecollisionplane_t.ChildNode
Write: fecollisionplane_t.ChildNode = value
```
## Plane 
```lua
@type RnPlane_t
Read: fecollisionplane_t.Plane
Write: fecollisionplane_t.Plane = value
```
## Strength 
```lua
@type number
Read: fecollisionplane_t.Strength
Write: fecollisionplane_t.Strength = value
```
# Functions
## ToPtr
```lua
@returns string
fecollisionplane_t:ToPtr()
```
## IsValid
```lua
@returns bool
fecollisionplane_t:IsValid()
```

:::