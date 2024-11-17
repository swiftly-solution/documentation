---
title: CAnimEncodeDifference
index: true
order: 2
category:
  - Guide
---

# CAnimEncodeDifference

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
CAnimEncodeDifference(ptr)
```
# Properties
## BoneArray (Read-Only)
```lua
--- @type table
Read: canimencodedifference.BoneArray
```
## MorphArray (Read-Only)
```lua
--- @type table
Read: canimencodedifference.MorphArray
```
## UserArray (Read-Only)
```lua
--- @type table
Read: canimencodedifference.UserArray
```
## HasRotationBitArray (Read-Only)
```lua
--- @type table
Read: canimencodedifference.HasRotationBitArray
```
## HasMovementBitArray (Read-Only)
```lua
--- @type table
Read: canimencodedifference.HasMovementBitArray
```
## HasMorphBitArray (Read-Only)
```lua
--- @type table
Read: canimencodedifference.HasMorphBitArray
```
## HasUserBitArray (Read-Only)
```lua
--- @type table
Read: canimencodedifference.HasUserBitArray
```
# Functions
## ToPtr
```lua
--- @return string
canimencodedifference:ToPtr()
```
## IsValid
```lua
--- @return bool
canimencodedifference:IsValid()
```

:::