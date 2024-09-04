---
title: CAnimData
index: true
order: 2
category:
  - Guide
---

# CAnimData

::: tabs
@tab Lua
# Constructor
```lua
CAnimData(ptr --[[ string ]])
```
# Properties
## AnimArray (Read-Only)
```lua
@type table
Read: canimdata.AnimArray
```
## DecoderArray (Read-Only)
```lua
@type table
Read: canimdata.DecoderArray
```
## MaxUniqueFrameIndex 
```lua
@type number
Read: canimdata.MaxUniqueFrameIndex
Write: canimdata.MaxUniqueFrameIndex = value
```
## SegmentArray (Read-Only)
```lua
@type table
Read: canimdata.SegmentArray
```
# Functions
## ToPtr
```lua
@returns string
canimdata:ToPtr()
```
## IsValid
```lua
@returns bool
canimdata:IsValid()
```

:::