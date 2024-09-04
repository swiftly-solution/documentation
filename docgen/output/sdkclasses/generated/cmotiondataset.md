---
title: CMotionDataSet
index: true
order: 2
category:
  - Guide
---

# CMotionDataSet

::: tabs
@tab Lua
# Constructor
```lua
CMotionDataSet(ptr --[[ string ]])
```
# Properties
## Groups (Read-Only)
```lua
@type table
Read: cmotiondataset.Groups
```
## DimensionCount 
```lua
@type number
Read: cmotiondataset.DimensionCount
Write: cmotiondataset.DimensionCount = value
```
# Functions
## ToPtr
```lua
@returns string
cmotiondataset:ToPtr()
```
## IsValid
```lua
@returns bool
cmotiondataset:IsValid()
```

:::