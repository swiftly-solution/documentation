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
--- @param ptr string
FeBuildBoxRigid_t(ptr)
```
# Properties
## Priority 
```lua
--- @type number
Read: febuildboxrigid_t.Priority
Write: febuildboxrigid_t.Priority = value
```
## VertexMapHash 
```lua
--- @type number
Read: febuildboxrigid_t.VertexMapHash
Write: febuildboxrigid_t.VertexMapHash = value
```
## Parent (Read-Only)
```lua
--- @type FeBoxRigid_t
Read: febuildboxrigid_t.Parent
```
# Functions
## ToPtr
```lua
--- @return string
febuildboxrigid_t:ToPtr()
```
## IsValid
```lua
--- @return bool
febuildboxrigid_t:IsValid()
```

:::