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
--- @param ptr string
VPhysics2ShapeDef_t(ptr)
```
# Properties
## Spheres (Read-Only)
```lua
--- @type table
Read: vphysics2shapedef_t.Spheres
```
## Capsules (Read-Only)
```lua
--- @type table
Read: vphysics2shapedef_t.Capsules
```
## Hulls (Read-Only)
```lua
--- @type table
Read: vphysics2shapedef_t.Hulls
```
## Meshes (Read-Only)
```lua
--- @type table
Read: vphysics2shapedef_t.Meshes
```
## CollisionAttributeIndices (Read-Only)
```lua
--- @type table
Read: vphysics2shapedef_t.CollisionAttributeIndices
```
# Functions
## ToPtr
```lua
--- @return string
vphysics2shapedef_t:ToPtr()
```
## IsValid
```lua
--- @return bool
vphysics2shapedef_t:IsValid()
```

:::