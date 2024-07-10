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
## AnimArray 
```lua
@type table
Read: canimdata.AnimArray
Write: canimdata.AnimArray = value
```
## DecoderArray 
```lua
@type table
Read: canimdata.DecoderArray
Write: canimdata.DecoderArray = value
```
## MaxUniqueFrameIndex 
```lua
@type number
Read: canimdata.MaxUniqueFrameIndex
Write: canimdata.MaxUniqueFrameIndex = value
```
## SegmentArray 
```lua
@type table
Read: canimdata.SegmentArray
Write: canimdata.SegmentArray = value
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