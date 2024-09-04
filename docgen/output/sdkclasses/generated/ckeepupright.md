---
title: CKeepUpright
index: true
order: 2
category:
  - Guide
---

# CKeepUpright

::: tabs
@tab Lua
# Constructor
```lua
CKeepUpright(ptr --[[ string ]])
```
# Properties
## WorldGoalAxis 
```lua
@type Vector
Read: ckeepupright.WorldGoalAxis
Write: ckeepupright.WorldGoalAxis = value
```
## LocalTestAxis 
```lua
@type Vector
Read: ckeepupright.LocalTestAxis
Write: ckeepupright.LocalTestAxis = value
```
## NameAttach 
```lua
@type string
Read: ckeepupright.NameAttach
Write: ckeepupright.NameAttach = value
```
## AttachedObject (Read-Only)
```lua
@type CBaseEntity
Read: ckeepupright.AttachedObject
```
## AngularLimit 
```lua
@type number
Read: ckeepupright.AngularLimit
Write: ckeepupright.AngularLimit = value
```
## Active 
```lua
@type boolean
Read: ckeepupright.Active
Write: ckeepupright.Active = value
```
## DampAllRotation 
```lua
@type boolean
Read: ckeepupright.DampAllRotation
Write: ckeepupright.DampAllRotation = value
```
## Parent (Read-Only)
```lua
@type CPointEntity
Read: ckeepupright.Parent
```
# Functions
## ToPtr
```lua
@returns string
ckeepupright:ToPtr()
```
## IsValid
```lua
@returns bool
ckeepupright:IsValid()
```

:::