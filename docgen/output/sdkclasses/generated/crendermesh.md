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
## GroomData (Read-Only)
```lua
@type CRenderGroom
Read: crendermesh.GroomData
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