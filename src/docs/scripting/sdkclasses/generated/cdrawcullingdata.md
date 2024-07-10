---
title: CDrawCullingData
index: true
order: 2
category:
  - Guide
---

# CDrawCullingData

::: tabs
@tab Lua
# Constructor
```lua
CDrawCullingData(ptr --[[ string ]])
```
# Properties
## ConeApex 
```lua
@type Vector
Read: cdrawcullingdata.ConeApex
Write: cdrawcullingdata.ConeApex = value
```
## ConeAxis 
```lua
@type table
Read: cdrawcullingdata.ConeAxis
Write: cdrawcullingdata.ConeAxis = value
```
## ConeCutoff 
```lua
@type number
Read: cdrawcullingdata.ConeCutoff
Write: cdrawcullingdata.ConeCutoff = value
```
# Functions
## ToPtr
```lua
@returns string
cdrawcullingdata:ToPtr()
```
## IsValid
```lua
@returns bool
cdrawcullingdata:IsValid()
```

:::