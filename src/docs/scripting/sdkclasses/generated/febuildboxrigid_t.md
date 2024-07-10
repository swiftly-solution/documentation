---
title: FeBuildBoxRigid_t
index: true
order: 2
category:
  - Guide
---

# FeBuildBoxRigid_t

::: tabs
@tab Lua
# Constructor
```lua
FeBuildBoxRigid_t(ptr --[[ string ]])
```
# Properties
## Priority 
```lua
@type number
Read: febuildboxrigid_t.Priority
Write: febuildboxrigid_t.Priority = value
```
## VertexMapHash 
```lua
@type number
Read: febuildboxrigid_t.VertexMapHash
Write: febuildboxrigid_t.VertexMapHash = value
```
## Parent 
```lua
@type FeBoxRigid_t
Read: febuildboxrigid_t.Parent
Write: febuildboxrigid_t.Parent = value
```
# Functions
## ToPtr
```lua
@returns string
febuildboxrigid_t:ToPtr()
```
## IsValid
```lua
@returns bool
febuildboxrigid_t:IsValid()
```

:::