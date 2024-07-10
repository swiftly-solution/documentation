---
title: CSeqBoneMaskList
index: true
order: 2
category:
  - Guide
---

# CSeqBoneMaskList

::: tabs
@tab Lua
# Constructor
```lua
CSeqBoneMaskList(ptr --[[ string ]])
```
# Properties
## LocalBoneArray 
```lua
@type table
Read: cseqbonemasklist.LocalBoneArray
Write: cseqbonemasklist.LocalBoneArray = value
```
## BoneWeightArray 
```lua
@type table
Read: cseqbonemasklist.BoneWeightArray
Write: cseqbonemasklist.BoneWeightArray = value
```
## DefaultMorphCtrlWeight 
```lua
@type number
Read: cseqbonemasklist.DefaultMorphCtrlWeight
Write: cseqbonemasklist.DefaultMorphCtrlWeight = value
```
# Functions
## ToPtr
```lua
@returns string
cseqbonemasklist:ToPtr()
```
## IsValid
```lua
@returns bool
cseqbonemasklist:IsValid()
```

:::