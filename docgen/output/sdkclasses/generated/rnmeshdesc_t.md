---
title: RnMeshDesc_t
index: true
order: 2
category:
  - Guide
---

# RnMeshDesc_t

::: tabs
@tab Lua
# Constructor
```lua
RnMeshDesc_t(ptr --[[ string ]])
```
# Properties
## Mesh 
```lua
@type RnMesh_t
Read: rnmeshdesc_t.Mesh
Write: rnmeshdesc_t.Mesh = value
```
## Parent 
```lua
@type RnShapeDesc_t
Read: rnmeshdesc_t.Parent
Write: rnmeshdesc_t.Parent = value
```
# Functions
## ToPtr
```lua
@returns string
rnmeshdesc_t:ToPtr()
```
## IsValid
```lua
@returns bool
rnmeshdesc_t:IsValid()
```

:::