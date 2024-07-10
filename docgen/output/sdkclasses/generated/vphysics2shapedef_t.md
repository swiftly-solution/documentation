---
title: VPhysics2ShapeDef_t
index: true
order: 2
category:
  - Guide
---

# VPhysics2ShapeDef_t

::: tabs
@tab Lua
# Constructor
```lua
VPhysics2ShapeDef_t(ptr --[[ string ]])
```
# Properties
## Spheres 
```lua
@type table
Read: vphysics2shapedef_t.Spheres
Write: vphysics2shapedef_t.Spheres = value
```
## Capsules 
```lua
@type table
Read: vphysics2shapedef_t.Capsules
Write: vphysics2shapedef_t.Capsules = value
```
## Hulls 
```lua
@type table
Read: vphysics2shapedef_t.Hulls
Write: vphysics2shapedef_t.Hulls = value
```
## Meshes 
```lua
@type table
Read: vphysics2shapedef_t.Meshes
Write: vphysics2shapedef_t.Meshes = value
```
## CollisionAttributeIndices 
```lua
@type table
Read: vphysics2shapedef_t.CollisionAttributeIndices
Write: vphysics2shapedef_t.CollisionAttributeIndices = value
```
# Functions
## ToPtr
```lua
@returns string
vphysics2shapedef_t:ToPtr()
```
## IsValid
```lua
@returns bool
vphysics2shapedef_t:IsValid()
```

:::