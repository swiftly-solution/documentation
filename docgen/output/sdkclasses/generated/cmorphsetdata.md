---
title: CMorphSetData
index: true
order: 2
category:
  - Guide
---

# CMorphSetData

::: tabs
@tab Lua
# Constructor
```lua
CMorphSetData(ptr --[[ string ]])
```
# Properties
## Width 
```lua
@type number
Read: cmorphsetdata.Width
Write: cmorphsetdata.Width = value
```
## Height 
```lua
@type number
Read: cmorphsetdata.Height
Write: cmorphsetdata.Height = value
```
## BundleTypes 
```lua
@type table
Read: cmorphsetdata.BundleTypes
Write: cmorphsetdata.BundleTypes = value
```
## MorphDatas 
```lua
@type table
Read: cmorphsetdata.MorphDatas
Write: cmorphsetdata.MorphDatas = value
```
## FlexDesc 
```lua
@type table
Read: cmorphsetdata.FlexDesc
Write: cmorphsetdata.FlexDesc = value
```
## FlexControllers 
```lua
@type table
Read: cmorphsetdata.FlexControllers
Write: cmorphsetdata.FlexControllers = value
```
## FlexRules 
```lua
@type table
Read: cmorphsetdata.FlexRules
Write: cmorphsetdata.FlexRules = value
```
# Functions
## ToPtr
```lua
@returns string
cmorphsetdata:ToPtr()
```
## IsValid
```lua
@returns bool
cmorphsetdata:IsValid()
```

:::