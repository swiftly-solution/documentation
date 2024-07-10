---
title: CLogicCompare
index: true
order: 2
category:
  - Guide
---

# CLogicCompare

::: tabs
@tab Lua
# Constructor
```lua
CLogicCompare(ptr --[[ string ]])
```
# Properties
## InValue 
```lua
@type number
Read: clogiccompare.InValue
Write: clogiccompare.InValue = value
```
## CompareValue 
```lua
@type number
Read: clogiccompare.CompareValue
Write: clogiccompare.CompareValue = value
```
## Parent 
```lua
@type CLogicalEntity
Read: clogiccompare.Parent
Write: clogiccompare.Parent = value
```
# Functions
## ToPtr
```lua
@returns string
clogiccompare:ToPtr()
```
## IsValid
```lua
@returns bool
clogiccompare:IsValid()
```

:::