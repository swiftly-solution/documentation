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
--- @param ptr string
CAnimSkeleton(ptr)
```
# Properties
## BoneNames (Read-Only)
```lua
--- @type table
Read: canimskeleton.BoneNames
```
## Parents (Read-Only)
```lua
--- @type table
Read: canimskeleton.Parents
```
## Feet (Read-Only)
```lua
--- @type table
Read: canimskeleton.Feet
```
## MorphNames (Read-Only)
```lua
--- @type table
Read: canimskeleton.MorphNames
```
## LodBoneCounts (Read-Only)
```lua
--- @type table
Read: canimskeleton.LodBoneCounts
```
# Functions
## ToPtr
```lua
--- @return string
canimskeleton:ToPtr()
```
## IsValid
```lua
--- @return bool
canimskeleton:IsValid()
```

:::