---
title: CLogicBranchList
index: true
order: 2
category:
  - Guide
---

# CLogicBranchList

::: tabs
@tab Lua
# Constructor
```lua
CLogicBranchList(ptr --[[ string ]])
```
# Properties
## LogicBranchNames 
```lua
@type table
Read: clogicbranchlist.LogicBranchNames
Write: clogicbranchlist.LogicBranchNames = value
```
## OnAllTrue (Read-Only)
```lua
@type CEntityIOOutput
Read: clogicbranchlist.OnAllTrue
```
## OnAllFalse (Read-Only)
```lua
@type CEntityIOOutput
Read: clogicbranchlist.OnAllFalse
```
## OnMixed (Read-Only)
```lua
@type CEntityIOOutput
Read: clogicbranchlist.OnMixed
```
## Parent (Read-Only)
```lua
@type CLogicalEntity
Read: clogicbranchlist.Parent
```
# Functions
## ToPtr
```lua
@returns string
clogicbranchlist:ToPtr()
```
## IsValid
```lua
@returns bool
clogicbranchlist:IsValid()
```

:::