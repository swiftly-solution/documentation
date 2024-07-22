---
title: CSetParameterActionUpdater
index: true
order: 2
category:
  - Guide
---

# CSetParameterActionUpdater

::: tabs
@tab Lua
# Constructor
```lua
CSetParameterActionUpdater(ptr --[[ string ]])
```
# Properties
## Param (Read-Only)
```lua
@type CAnimParamHandle
Read: csetparameteractionupdater.Param
```
## Parent 
```lua
@type CAnimActionUpdater
Read: csetparameteractionupdater.Parent
Write: csetparameteractionupdater.Parent = value
```
# Functions
## ToPtr
```lua
@returns string
csetparameteractionupdater:ToPtr()
```
## IsValid
```lua
@returns bool
csetparameteractionupdater:IsValid()
```

:::