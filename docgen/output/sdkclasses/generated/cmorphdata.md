---
title: CMorphData
index: true
order: 2
category:
  - Guide
---

# CMorphData

::: tabs
@tab Lua
# Constructor
```lua
CMorphData(ptr --[[ string ]])
```
# Properties
## Name 
```lua
@type string
Read: cmorphdata.Name
Write: cmorphdata.Name = value
```
## MorphRectDatas 
```lua
@type table
Read: cmorphdata.MorphRectDatas
Write: cmorphdata.MorphRectDatas = value
```
# Functions
## ToPtr
```lua
@returns string
cmorphdata:ToPtr()
```
## IsValid
```lua
@returns bool
cmorphdata:IsValid()
```

:::