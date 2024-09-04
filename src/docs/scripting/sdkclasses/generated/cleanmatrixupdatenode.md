---
title: CLeanMatrixUpdateNode
index: true
order: 2
category:
  - Guide
---

# CLeanMatrixUpdateNode

::: tabs
@tab Lua
# Constructor
```lua
CLeanMatrixUpdateNode(ptr --[[ string ]])
```
# Properties
## Poses (Read-Only)
```lua
@type table
Read: cleanmatrixupdatenode.Poses
```
## Damping (Read-Only)
```lua
@type CAnimInputDamping
Read: cleanmatrixupdatenode.Damping
```
## BlendSource 
```lua
@type number
Read: cleanmatrixupdatenode.BlendSource
Write: cleanmatrixupdatenode.BlendSource = value
```
## ParamIndex (Read-Only)
```lua
@type CAnimParamHandle
Read: cleanmatrixupdatenode.ParamIndex
```
## VerticalAxis 
```lua
@type Vector
Read: cleanmatrixupdatenode.VerticalAxis
Write: cleanmatrixupdatenode.VerticalAxis = value
```
## HorizontalAxis 
```lua
@type Vector
Read: cleanmatrixupdatenode.HorizontalAxis
Write: cleanmatrixupdatenode.HorizontalAxis = value
```
## MaxValue 
```lua
@type number
Read: cleanmatrixupdatenode.MaxValue
Write: cleanmatrixupdatenode.MaxValue = value
```
## SequenceMaxFrame 
```lua
@type number
Read: cleanmatrixupdatenode.SequenceMaxFrame
Write: cleanmatrixupdatenode.SequenceMaxFrame = value
```
## Parent (Read-Only)
```lua
@type CLeafUpdateNode
Read: cleanmatrixupdatenode.Parent
```
# Functions
## ToPtr
```lua
@returns string
cleanmatrixupdatenode:ToPtr()
```
## IsValid
```lua
@returns bool
cleanmatrixupdatenode:IsValid()
```

:::