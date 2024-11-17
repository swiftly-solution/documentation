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
--- @param ptr string
CMotionDataSet(ptr)
```
# Properties
## Groups (Read-Only)
```lua
--- @type table
Read: cmotiondataset.Groups
```
## DimensionCount 
```lua
--- @type number
Read: cmotiondataset.DimensionCount
Write: cmotiondataset.DimensionCount = value
```
# Functions
## ToPtr
```lua
--- @return string
cmotiondataset:ToPtr()
```
## IsValid
```lua
--- @return bool
cmotiondataset:IsValid()
```

:::