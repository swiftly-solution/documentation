---
title: RnMesh_t
index: true
order: 2
category:
  - Guide
---

# RnMesh_t

::: tabs
@tab Lua
# Constructor
```lua
RnMesh_t(ptr --[[ string ]])
```
# Properties
## Min 
```lua
@type Vector
Read: rnmesh_t.Min
Write: rnmesh_t.Min = value
```
## Max 
```lua
@type Vector
Read: rnmesh_t.Max
Write: rnmesh_t.Max = value
```
## Nodes 
```lua
@type table
Read: rnmesh_t.Nodes
Write: rnmesh_t.Nodes = value
```
## Triangles 
```lua
@type table
Read: rnmesh_t.Triangles
Write: rnmesh_t.Triangles = value
```
## Wings 
```lua
@type table
Read: rnmesh_t.Wings
Write: rnmesh_t.Wings = value
```
## Materials 
```lua
@type table
Read: rnmesh_t.Materials
Write: rnmesh_t.Materials = value
```
## OrthographicAreas 
```lua
@type Vector
Read: rnmesh_t.OrthographicAreas
Write: rnmesh_t.OrthographicAreas = value
```
## Flags 
```lua
@type number
Read: rnmesh_t.Flags
Write: rnmesh_t.Flags = value
```
## DebugFlags 
```lua
@type number
Read: rnmesh_t.DebugFlags
Write: rnmesh_t.DebugFlags = value
```
# Functions
## ToPtr
```lua
@returns string
rnmesh_t:ToPtr()
```
## IsValid
```lua
@returns bool
rnmesh_t:IsValid()
```

:::