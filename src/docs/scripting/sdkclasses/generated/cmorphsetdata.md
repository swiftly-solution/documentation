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
--- @param ptr string
CMorphSetData(ptr)
```
# Properties
## Width 
```lua
--- @type number
Read: cmorphsetdata.Width
Write: cmorphsetdata.Width = value
```
## Height 
```lua
--- @type number
Read: cmorphsetdata.Height
Write: cmorphsetdata.Height = value
```
## BundleTypes (Read-Only)
```lua
--- @type table
Read: cmorphsetdata.BundleTypes
```
## MorphDatas (Read-Only)
```lua
--- @type table
Read: cmorphsetdata.MorphDatas
```
## FlexDesc (Read-Only)
```lua
--- @type table
Read: cmorphsetdata.FlexDesc
```
## FlexControllers (Read-Only)
```lua
--- @type table
Read: cmorphsetdata.FlexControllers
```
## FlexRules (Read-Only)
```lua
--- @type table
Read: cmorphsetdata.FlexRules
```
# Functions
## ToPtr
```lua
--- @return string
cmorphsetdata:ToPtr()
```
## IsValid
```lua
--- @return bool
cmorphsetdata:IsValid()
```

:::