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
--- @param ptr string
NodeData_t(ptr)
```
# Properties
## Parent 
```lua
--- @type number
Read: nodedata_t.Parent
Write: nodedata_t.Parent = value
```
## Origin 
```lua
--- @type Vector
Read: nodedata_t.Origin
Write: nodedata_t.Origin = value
```
## MinBounds 
```lua
--- @type Vector
Read: nodedata_t.MinBounds
Write: nodedata_t.MinBounds = value
```
## MaxBounds 
```lua
--- @type Vector
Read: nodedata_t.MaxBounds
Write: nodedata_t.MaxBounds = value
```
## MinimumDistance 
```lua
--- @type number
Read: nodedata_t.MinimumDistance
Write: nodedata_t.MinimumDistance = value
```
## ChildNodeIndices (Read-Only)
```lua
--- @type table
Read: nodedata_t.ChildNodeIndices
```
## WorldNodePrefix 
```lua
--- @type string
Read: nodedata_t.WorldNodePrefix
Write: nodedata_t.WorldNodePrefix = value
```
# Functions
## ToPtr
```lua
--- @return string
nodedata_t:ToPtr()
```
## IsValid
```lua
--- @return bool
nodedata_t:IsValid()
```

:::