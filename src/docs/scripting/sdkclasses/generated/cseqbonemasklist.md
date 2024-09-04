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
## LocalBoneArray (Read-Only)
```lua
@type table
Read: cseqbonemasklist.LocalBoneArray
```
## BoneWeightArray (Read-Only)
```lua
@type table
Read: cseqbonemasklist.BoneWeightArray
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