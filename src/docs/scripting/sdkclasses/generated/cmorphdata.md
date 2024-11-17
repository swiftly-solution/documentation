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
--- @param ptr string
CMorphData(ptr)
```
# Properties
## Name 
```lua
--- @type string
Read: cmorphdata.Name
Write: cmorphdata.Name = value
```
## MorphRectDatas (Read-Only)
```lua
--- @type table
Read: cmorphdata.MorphRectDatas
```
# Functions
## ToPtr
```lua
--- @return string
cmorphdata:ToPtr()
```
## IsValid
```lua
--- @return bool
cmorphdata:IsValid()
```

:::