---
title: CInterpolatedValue
index: true
order: 2
category:
  - Guide
---

# CInterpolatedValue

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
CInterpolatedValue(ptr)
```
# Properties
## StartTime 
```lua
--- @type number
Read: cinterpolatedvalue.StartTime
Write: cinterpolatedvalue.StartTime = value
```
## EndTime 
```lua
--- @type number
Read: cinterpolatedvalue.EndTime
Write: cinterpolatedvalue.EndTime = value
```
## StartValue 
```lua
--- @type number
Read: cinterpolatedvalue.StartValue
Write: cinterpolatedvalue.StartValue = value
```
## EndValue 
```lua
--- @type number
Read: cinterpolatedvalue.EndValue
Write: cinterpolatedvalue.EndValue = value
```
## InterpType 
```lua
--- @type number
Read: cinterpolatedvalue.InterpType
Write: cinterpolatedvalue.InterpType = value
```
# Functions
## ToPtr
```lua
--- @return string
cinterpolatedvalue:ToPtr()
```
## IsValid
```lua
--- @return bool
cinterpolatedvalue:IsValid()
```

:::