---
title: FeBoxRigid_t
index: true
order: 2
category:
  - Guide
---

# FeBoxRigid_t

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
FeBoxRigid_t(ptr)
```
# Properties
## Node 
```lua
--- @type number
Read: feboxrigid_t.Node
Write: feboxrigid_t.Node = value
```
## CollisionMask 
```lua
--- @type number
Read: feboxrigid_t.CollisionMask
Write: feboxrigid_t.CollisionMask = value
```
## Size 
```lua
--- @type Vector
Read: feboxrigid_t.Size
Write: feboxrigid_t.Size = value
```
## VertexMapIndex 
```lua
--- @type number
Read: feboxrigid_t.VertexMapIndex
Write: feboxrigid_t.VertexMapIndex = value
```
## Flags 
```lua
--- @type number
Read: feboxrigid_t.Flags
Write: feboxrigid_t.Flags = value
```
# Functions
## ToPtr
```lua
--- @return string
feboxrigid_t:ToPtr()
```
## IsValid
```lua
--- @return bool
feboxrigid_t:IsValid()
```

:::