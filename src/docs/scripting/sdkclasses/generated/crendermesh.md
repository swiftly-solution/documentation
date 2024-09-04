---
title: CRenderMesh
index: true
order: 2
category:
  - Guide
---

# CRenderMesh

::: tabs
@tab Lua
# Constructor
```lua
CRenderMesh(ptr --[[ string ]])
```
# Properties
## Constraints (Read-Only)
```lua
@type table
Read: crendermesh.Constraints
```
## Skeleton (Read-Only)
```lua
@type CRenderSkeleton
Read: crendermesh.Skeleton
```
## MeshDeformParams (Read-Only)
```lua
@type DynamicMeshDeformParams_t
Read: crendermesh.MeshDeformParams
```
## GroomData 
```lua
@type CRenderGroom
Read: crendermesh.GroomData
Write: crendermesh.GroomData = value
```
# Functions
## ToPtr
```lua
@returns string
crendermesh:ToPtr()
```
## IsValid
```lua
@returns bool
crendermesh:IsValid()
```

:::