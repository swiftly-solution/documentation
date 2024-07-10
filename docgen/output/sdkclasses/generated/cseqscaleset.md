---
title: CSeqScaleSet
index: true
order: 2
category:
  - Guide
---

# CSeqScaleSet

::: tabs
@tab Lua
# Constructor
```lua
CSeqScaleSet(ptr --[[ string ]])
```
# Properties
## RootOffset 
```lua
@type boolean
Read: cseqscaleset.RootOffset
Write: cseqscaleset.RootOffset = value
```
## RootOffset1 
```lua
@type Vector
Read: cseqscaleset.RootOffset1
Write: cseqscaleset.RootOffset1 = value
```
## LocalBoneArray 
```lua
@type table
Read: cseqscaleset.LocalBoneArray
Write: cseqscaleset.LocalBoneArray = value
```
## BoneScaleArray 
```lua
@type table
Read: cseqscaleset.BoneScaleArray
Write: cseqscaleset.BoneScaleArray = value
```
# Functions
## ToPtr
```lua
@returns string
cseqscaleset:ToPtr()
```
## IsValid
```lua
@returns bool
cseqscaleset:IsValid()
```

:::