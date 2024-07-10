---
title: CLogicBranch
index: true
order: 2
category:
  - Guide
---

# CLogicBranch

::: tabs
@tab Lua
# Constructor
```lua
CLogicBranch(ptr --[[ string ]])
```
# Properties
## InValue 
```lua
@type boolean
Read: clogicbranch.InValue
Write: clogicbranch.InValue = value
```
## OnTrue 
```lua
@type CEntityIOOutput
Read: clogicbranch.OnTrue
Write: clogicbranch.OnTrue = value
```
## OnFalse 
```lua
@type CEntityIOOutput
Read: clogicbranch.OnFalse
Write: clogicbranch.OnFalse = value
```
## Parent 
```lua
@type CLogicalEntity
Read: clogicbranch.Parent
Write: clogicbranch.Parent = value
```
# Functions
## ToPtr
```lua
@returns string
clogicbranch:ToPtr()
```
## IsValid
```lua
@returns bool
clogicbranch:IsValid()
```

:::