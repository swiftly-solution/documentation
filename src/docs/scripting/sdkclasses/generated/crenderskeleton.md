---
title: CRenderSkeleton
index: true
order: 2
category:
  - Guide
---

# CRenderSkeleton

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
CRenderSkeleton(ptr)
```
# Properties
## Bones (Read-Only)
```lua
--- @type table
Read: crenderskeleton.Bones
```
## BoneParents (Read-Only)
```lua
--- @type table
Read: crenderskeleton.BoneParents
```
## BoneWeightCount 
```lua
--- @type number
Read: crenderskeleton.BoneWeightCount
Write: crenderskeleton.BoneWeightCount = value
```
# Functions
## ToPtr
```lua
--- @return string
crenderskeleton:ToPtr()
```
## IsValid
```lua
--- @return bool
crenderskeleton:IsValid()
```

:::