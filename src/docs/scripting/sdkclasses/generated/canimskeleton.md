---
title: CAnimSkeleton
index: true
order: 2
category:
  - Guide
---

# CAnimSkeleton

::: tabs
@tab Lua
# Constructor
```lua
CAnimSkeleton(ptr --[[ string ]])
```
# Properties
## BoneNames 
```lua
@type table
Read: canimskeleton.BoneNames
Write: canimskeleton.BoneNames = value
```
## Parents 
```lua
@type table
Read: canimskeleton.Parents
Write: canimskeleton.Parents = value
```
## Feet 
```lua
@type table
Read: canimskeleton.Feet
Write: canimskeleton.Feet = value
```
## MorphNames 
```lua
@type table
Read: canimskeleton.MorphNames
Write: canimskeleton.MorphNames = value
```
## LodBoneCounts 
```lua
@type table
Read: canimskeleton.LodBoneCounts
Write: canimskeleton.LodBoneCounts = value
```
# Functions
## ToPtr
```lua
@returns string
canimskeleton:ToPtr()
```
## IsValid
```lua
@returns bool
canimskeleton:IsValid()
```

:::