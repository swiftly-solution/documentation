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
## Constraints 
```lua
@type table
Read: crendermesh.Constraints
Write: crendermesh.Constraints = value
```
## Skeleton 
```lua
@type CRenderSkeleton
Read: crendermesh.Skeleton
Write: crendermesh.Skeleton = value
```
## MeshDeformParams 
```lua
@type DynamicMeshDeformParams_t
Read: crendermesh.MeshDeformParams
Write: crendermesh.MeshDeformParams = value
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