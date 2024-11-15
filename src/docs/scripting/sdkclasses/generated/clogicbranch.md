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
CLogicBranch(ptr)
```
# Properties
## InValue 
```lua
--- @type boolean
Read: clogicbranch.InValue
Write: clogicbranch.InValue = value
```
## OnTrue (Read-Only)
```lua
--- @type CEntityIOOutput
Read: clogicbranch.OnTrue
```
## OnFalse (Read-Only)
```lua
--- @type CEntityIOOutput
Read: clogicbranch.OnFalse
```
## Parent (Read-Only)
```lua
--- @type CLogicalEntity
Read: clogicbranch.Parent
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