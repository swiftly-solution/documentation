---
title: CAudioMorphData
index: true
order: 2
category:
  - Guide
---

# CAudioMorphData

::: tabs
@tab Lua
# Constructor
```lua
CAudioMorphData(ptr --[[ string ]])
```
# Properties
## Times 
```lua
@type table
Read: caudiomorphdata.Times
Write: caudiomorphdata.Times = value
```
## NameHashCodes 
```lua
@type table
Read: caudiomorphdata.NameHashCodes
Write: caudiomorphdata.NameHashCodes = value
```
## NameStrings 
```lua
@type table
Read: caudiomorphdata.NameStrings
Write: caudiomorphdata.NameStrings = value
```
## EaseIn 
```lua
@type number
Read: caudiomorphdata.EaseIn
Write: caudiomorphdata.EaseIn = value
```
## EaseOut 
```lua
@type number
Read: caudiomorphdata.EaseOut
Write: caudiomorphdata.EaseOut = value
```
# Functions
## ToPtr
```lua
@returns string
caudiomorphdata:ToPtr()
```
## IsValid
```lua
@returns bool
caudiomorphdata:IsValid()
```

:::