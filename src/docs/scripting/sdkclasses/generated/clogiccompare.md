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
--- @param ptr string
CLogicCompare(ptr)
```
# Properties
## InValue 
```lua
--- @type number
Read: clogiccompare.InValue
Write: clogiccompare.InValue = value
```
## CompareValue 
```lua
--- @type number
Read: clogiccompare.CompareValue
Write: clogiccompare.CompareValue = value
```
## Parent (Read-Only)
```lua
--- @type CLogicalEntity
Read: clogiccompare.Parent
```
# Functions
## ToPtr
```lua
--- @return string
clogiccompare:ToPtr()
```
## IsValid
```lua
--- @return bool
clogiccompare:IsValid()
```

:::