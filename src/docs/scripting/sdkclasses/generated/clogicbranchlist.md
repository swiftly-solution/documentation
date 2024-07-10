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
## LastState 
```lua
@type CLogicBranchList
Read: clogicbranchlist.LastState
Write: clogicbranchlist.LastState = value
```
## OnAllTrue 
```lua
@type CEntityIOOutput
Read: clogicbranchlist.OnAllTrue
Write: clogicbranchlist.OnAllTrue = value
```
## OnAllFalse 
```lua
@type CEntityIOOutput
Read: clogicbranchlist.OnAllFalse
Write: clogicbranchlist.OnAllFalse = value
```
## OnMixed 
```lua
@type CEntityIOOutput
Read: clogicbranchlist.OnMixed
Write: clogicbranchlist.OnMixed = value
```
## Parent 
```lua
@type CLogicalEntity
Read: clogicbranchlist.Parent
Write: clogicbranchlist.Parent = value
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