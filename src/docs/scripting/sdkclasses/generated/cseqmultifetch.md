---
title: CSeqMultiFetch
index: true
order: 2
category:
  - Guide
---

# CSeqMultiFetch

::: tabs
@tab Lua
# Constructor
```lua
CSeqMultiFetch(ptr)
```
# Properties
## Flags (Read-Only)
```lua
--- @type CSeqMultiFetchFlag
Read: cseqmultifetch.Flags
```
## LocalReferenceArray (Read-Only)
```lua
--- @type table
Read: cseqmultifetch.LocalReferenceArray
```
## GroupSize 
```lua
--- @type table
Read: cseqmultifetch.GroupSize
Write: cseqmultifetch.GroupSize = value
```
## LocalPose 
```lua
--- @type table
Read: cseqmultifetch.LocalPose
Write: cseqmultifetch.LocalPose = value
```
## PoseKeyArray0 (Read-Only)
```lua
--- @type table
Read: cseqmultifetch.PoseKeyArray0
```
## PoseKeyArray1 (Read-Only)
```lua
--- @type table
Read: cseqmultifetch.PoseKeyArray1
```
## LocalCyclePoseParameter 
```lua
--- @type number
Read: cseqmultifetch.LocalCyclePoseParameter
Write: cseqmultifetch.LocalCyclePoseParameter = value
```
## CalculatePoseParameters 
```lua
--- @type boolean
Read: cseqmultifetch.CalculatePoseParameters
Write: cseqmultifetch.CalculatePoseParameters = value
```
## FixedBlendWeight 
```lua
--- @type boolean
Read: cseqmultifetch.FixedBlendWeight
Write: cseqmultifetch.FixedBlendWeight = value
```
## FixedBlendWeightVals 
```lua
--- @type table
Read: cseqmultifetch.FixedBlendWeightVals
Write: cseqmultifetch.FixedBlendWeightVals = value
```
# Functions
## ToPtr
```lua
@returns string
cseqmultifetch:ToPtr()
```
## IsValid
```lua
@returns bool
cseqmultifetch:IsValid()
```

:::