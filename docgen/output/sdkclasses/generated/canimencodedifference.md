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
CAnimEncodeDifference(ptr --[[ string ]])
```
# Properties
## BoneArray 
```lua
@type table
Read: canimencodedifference.BoneArray
Write: canimencodedifference.BoneArray = value
```
## MorphArray 
```lua
@type table
Read: canimencodedifference.MorphArray
Write: canimencodedifference.MorphArray = value
```
## UserArray 
```lua
@type table
Read: canimencodedifference.UserArray
Write: canimencodedifference.UserArray = value
```
## HasRotationBitArray 
```lua
@type table
Read: canimencodedifference.HasRotationBitArray
Write: canimencodedifference.HasRotationBitArray = value
```
## HasMovementBitArray 
```lua
@type table
Read: canimencodedifference.HasMovementBitArray
Write: canimencodedifference.HasMovementBitArray = value
```
## HasMorphBitArray 
```lua
@type table
Read: canimencodedifference.HasMorphBitArray
Write: canimencodedifference.HasMorphBitArray = value
```
## HasUserBitArray 
```lua
@type table
Read: canimencodedifference.HasUserBitArray
Write: canimencodedifference.HasUserBitArray = value
```
# Functions
## ToPtr
```lua
@returns string
canimencodedifference:ToPtr()
```
## IsValid
```lua
@returns bool
canimencodedifference:IsValid()
```

:::