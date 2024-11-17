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
--- @param ptr string
CNmSkeleton(ptr)
```
# Properties
## ParentIndices (Read-Only)
```lua
--- @type table
Read: cnmskeleton.ParentIndices
```
## NumBonesToSampleAtLowLOD 
```lua
--- @type number
Read: cnmskeleton.NumBonesToSampleAtLowLOD
Write: cnmskeleton.NumBonesToSampleAtLowLOD = value
```
# Functions
## ToPtr
```lua
--- @return string
cnmskeleton:ToPtr()
```
## IsValid
```lua
--- @return bool
cnmskeleton:IsValid()
```

:::