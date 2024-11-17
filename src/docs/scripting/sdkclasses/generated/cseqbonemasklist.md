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
--- @param ptr string
CSeqBoneMaskList(ptr)
```
# Properties
## LocalBoneArray (Read-Only)
```lua
--- @type table
Read: cseqbonemasklist.LocalBoneArray
```
## BoneWeightArray (Read-Only)
```lua
--- @type table
Read: cseqbonemasklist.BoneWeightArray
```
## DefaultMorphCtrlWeight 
```lua
--- @type number
Read: cseqbonemasklist.DefaultMorphCtrlWeight
Write: cseqbonemasklist.DefaultMorphCtrlWeight = value
```
# Functions
## ToPtr
```lua
--- @return string
cseqbonemasklist:ToPtr()
```
## IsValid
```lua
--- @return bool
cseqbonemasklist:IsValid()
```

:::