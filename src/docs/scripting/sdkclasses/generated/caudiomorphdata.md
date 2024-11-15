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
CAudioMorphData(ptr)
```
# Properties
## Times (Read-Only)
```lua
--- @type table
Read: caudiomorphdata.Times
```
## NameHashCodes (Read-Only)
```lua
--- @type table
Read: caudiomorphdata.NameHashCodes
```
## NameStrings (Read-Only)
```lua
--- @type table
Read: caudiomorphdata.NameStrings
```
## EaseIn 
```lua
--- @type number
Read: caudiomorphdata.EaseIn
Write: caudiomorphdata.EaseIn = value
```
## EaseOut 
```lua
--- @type number
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