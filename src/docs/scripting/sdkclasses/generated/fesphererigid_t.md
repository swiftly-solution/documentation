---
title: FeSphereRigid_t
index: true
order: 2
category:
  - Guide
---

# FeSphereRigid_t

::: tabs
@tab Lua
# Constructor
```lua
FeSphereRigid_t(ptr --[[ string ]])
```
# Properties
## Sphere 
```lua
@type number
Read: fesphererigid_t.Sphere
Write: fesphererigid_t.Sphere = value
```
## Node 
```lua
@type number
Read: fesphererigid_t.Node
Write: fesphererigid_t.Node = value
```
## CollisionMask 
```lua
@type number
Read: fesphererigid_t.CollisionMask
Write: fesphererigid_t.CollisionMask = value
```
## VertexMapIndex 
```lua
@type number
Read: fesphererigid_t.VertexMapIndex
Write: fesphererigid_t.VertexMapIndex = value
```
## Flags 
```lua
@type number
Read: fesphererigid_t.Flags
Write: fesphererigid_t.Flags = value
```
# Functions
## ToPtr
```lua
@returns string
fesphererigid_t:ToPtr()
```
## IsValid
```lua
@returns bool
fesphererigid_t:IsValid()
```

:::