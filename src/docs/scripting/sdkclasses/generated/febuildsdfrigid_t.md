---
title: FeBuildSDFRigid_t
index: true
order: 2
category:
  - Guide
---

# FeBuildSDFRigid_t

::: tabs
@tab Lua
# Constructor
```lua
FeBuildSDFRigid_t(ptr)
```
# Properties
## Priority 
```lua
--- @type number
Read: febuildsdfrigid_t.Priority
Write: febuildsdfrigid_t.Priority = value
```
## VertexMapHash 
```lua
--- @type number
Read: febuildsdfrigid_t.VertexMapHash
Write: febuildsdfrigid_t.VertexMapHash = value
```
## Parent (Read-Only)
```lua
--- @type FeSDFRigid_t
Read: febuildsdfrigid_t.Parent
```
# Functions
## ToPtr
```lua
@returns string
febuildsdfrigid_t:ToPtr()
```
## IsValid
```lua
@returns bool
febuildsdfrigid_t:IsValid()
```

:::