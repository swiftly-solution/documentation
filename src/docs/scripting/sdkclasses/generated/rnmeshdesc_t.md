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
--- @param ptr string
RnMeshDesc_t(ptr)
```
# Properties
## Mesh (Read-Only)
```lua
--- @type RnMesh_t
Read: rnmeshdesc_t.Mesh
```
## Parent (Read-Only)
```lua
--- @type RnShapeDesc_t
Read: rnmeshdesc_t.Parent
```
# Functions
## ToPtr
```lua
--- @return string
rnmeshdesc_t:ToPtr()
```
## IsValid
```lua
--- @return bool
rnmeshdesc_t:IsValid()
```

:::