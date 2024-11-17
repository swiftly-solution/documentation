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
--- @param ptr string
CRenderMesh(ptr)
```
# Properties
## Skeleton (Read-Only)
```lua
--- @type CRenderSkeleton
Read: crendermesh.Skeleton
```
## MeshDeformParams (Read-Only)
```lua
--- @type DynamicMeshDeformParams_t
Read: crendermesh.MeshDeformParams
```
## GroomData (Read-Only)
```lua
--- @type CRenderGroom
Read: crendermesh.GroomData
```
# Functions
## ToPtr
```lua
--- @return string
crendermesh:ToPtr()
```
## IsValid
```lua
--- @return bool
crendermesh:IsValid()
```

:::