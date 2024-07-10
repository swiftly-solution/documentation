---
title: NodeData_t
index: true
order: 2
category:
  - Guide
---

# NodeData_t

::: tabs
@tab Lua
# Constructor
```lua
NodeData_t(ptr --[[ string ]])
```
# Properties
## Parent 
```lua
@type number
Read: nodedata_t.Parent
Write: nodedata_t.Parent = value
```
## Origin 
```lua
@type Vector
Read: nodedata_t.Origin
Write: nodedata_t.Origin = value
```
## MinBounds 
```lua
@type Vector
Read: nodedata_t.MinBounds
Write: nodedata_t.MinBounds = value
```
## MaxBounds 
```lua
@type Vector
Read: nodedata_t.MaxBounds
Write: nodedata_t.MaxBounds = value
```
## MinimumDistance 
```lua
@type number
Read: nodedata_t.MinimumDistance
Write: nodedata_t.MinimumDistance = value
```
## ChildNodeIndices 
```lua
@type table
Read: nodedata_t.ChildNodeIndices
Write: nodedata_t.ChildNodeIndices = value
```
## WorldNodePrefix 
```lua
@type string
Read: nodedata_t.WorldNodePrefix
Write: nodedata_t.WorldNodePrefix = value
```
# Functions
## ToPtr
```lua
@returns string
nodedata_t:ToPtr()
```
## IsValid
```lua
@returns bool
nodedata_t:IsValid()
```

:::