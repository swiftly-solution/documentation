---
title: FeBuildSphereRigid_t
index: true
order: 2
category:
  - Guide
---

# FeBuildSphereRigid_t

::: tabs
@tab Lua
# Constructor
```lua
FeBuildSphereRigid_t(ptr --[[ string ]])
```
# Properties
## Priority 
```lua
@type number
Read: febuildsphererigid_t.Priority
Write: febuildsphererigid_t.Priority = value
```
## VertexMapHash 
```lua
@type number
Read: febuildsphererigid_t.VertexMapHash
Write: febuildsphererigid_t.VertexMapHash = value
```
## Parent (Read-Only)
```lua
@type FeSphereRigid_t
Read: febuildsphererigid_t.Parent
```
# Functions
## ToPtr
```lua
@returns string
febuildsphererigid_t:ToPtr()
```
## IsValid
```lua
@returns bool
febuildsphererigid_t:IsValid()
```

:::