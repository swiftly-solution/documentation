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
CRenderSkeleton(ptr --[[ string ]])
```
# Properties
## Bones 
```lua
@type table
Read: crenderskeleton.Bones
Write: crenderskeleton.Bones = value
```
## BoneParents 
```lua
@type table
Read: crenderskeleton.BoneParents
Write: crenderskeleton.BoneParents = value
```
## BoneWeightCount 
```lua
@type number
Read: crenderskeleton.BoneWeightCount
Write: crenderskeleton.BoneWeightCount = value
```
# Functions
## ToPtr
```lua
@returns string
crenderskeleton:ToPtr()
```
## IsValid
```lua
@returns bool
crenderskeleton:IsValid()
```

:::