---
title: FeSDFRigid_t
index: true
order: 2
category:
  - Guide
---

# FeSDFRigid_t

::: tabs
@tab Lua
# Constructor
```lua
FeSDFRigid_t(ptr --[[ string ]])
```
# Properties
## LocalMin 
```lua
@type Vector
Read: fesdfrigid_t.LocalMin
Write: fesdfrigid_t.LocalMin = value
```
## LocalMax 
```lua
@type Vector
Read: fesdfrigid_t.LocalMax
Write: fesdfrigid_t.LocalMax = value
```
## Bounciness 
```lua
@type number
Read: fesdfrigid_t.Bounciness
Write: fesdfrigid_t.Bounciness = value
```
## Node 
```lua
@type number
Read: fesdfrigid_t.Node
Write: fesdfrigid_t.Node = value
```
## CollisionMask 
```lua
@type number
Read: fesdfrigid_t.CollisionMask
Write: fesdfrigid_t.CollisionMask = value
```
## VertexMapIndex 
```lua
@type number
Read: fesdfrigid_t.VertexMapIndex
Write: fesdfrigid_t.VertexMapIndex = value
```
## Flags 
```lua
@type number
Read: fesdfrigid_t.Flags
Write: fesdfrigid_t.Flags = value
```
## Distances (Read-Only)
```lua
@type table
Read: fesdfrigid_t.Distances
```
## Width 
```lua
@type number
Read: fesdfrigid_t.Width
Write: fesdfrigid_t.Width = value
```
## Height 
```lua
@type number
Read: fesdfrigid_t.Height
Write: fesdfrigid_t.Height = value
```
## Depth 
```lua
@type number
Read: fesdfrigid_t.Depth
Write: fesdfrigid_t.Depth = value
```
# Functions
## ToPtr
```lua
@returns string
fesdfrigid_t:ToPtr()
```
## IsValid
```lua
@returns bool
fesdfrigid_t:IsValid()
```

:::