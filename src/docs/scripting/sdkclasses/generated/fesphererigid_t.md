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
--- @param ptr string
FeSphereRigid_t(ptr)
```
# Properties
## Sphere 
```lua
--- @type number
Read: fesphererigid_t.Sphere
Write: fesphererigid_t.Sphere = value
```
## Node 
```lua
--- @type number
Read: fesphererigid_t.Node
Write: fesphererigid_t.Node = value
```
## CollisionMask 
```lua
--- @type number
Read: fesphererigid_t.CollisionMask
Write: fesphererigid_t.CollisionMask = value
```
## VertexMapIndex 
```lua
--- @type number
Read: fesphererigid_t.VertexMapIndex
Write: fesphererigid_t.VertexMapIndex = value
```
## Flags 
```lua
--- @type number
Read: fesphererigid_t.Flags
Write: fesphererigid_t.Flags = value
```
# Functions
## ToPtr
```lua
--- @return string
fesphererigid_t:ToPtr()
```
## IsValid
```lua
--- @return bool
fesphererigid_t:IsValid()
```

:::