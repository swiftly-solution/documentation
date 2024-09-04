---
title: CNmSkeleton
index: true
order: 2
category:
  - Guide
---

# CNmSkeleton

::: tabs
@tab Lua
# Constructor
```lua
CNmSkeleton(ptr --[[ string ]])
```
# Properties
## ParentIndices (Read-Only)
```lua
@type table
Read: cnmskeleton.ParentIndices
```
## NumBonesToSampleAtLowLOD 
```lua
@type number
Read: cnmskeleton.NumBonesToSampleAtLowLOD
Write: cnmskeleton.NumBonesToSampleAtLowLOD = value
```
# Functions
## ToPtr
```lua
@returns string
cnmskeleton:ToPtr()
```
## IsValid
```lua
@returns bool
cnmskeleton:IsValid()
```

:::