---
title: CExpressionActionUpdater
index: true
order: 2
category:
  - Guide
---

# CExpressionActionUpdater

::: tabs
@tab Lua
# Constructor
```lua
CExpressionActionUpdater(ptr --[[ string ]])
```
# Properties
## Param (Read-Only)
```lua
@type CAnimParamHandle
Read: cexpressionactionupdater.Param
```
## ParamType 
```lua
@type number
Read: cexpressionactionupdater.ParamType
Write: cexpressionactionupdater.ParamType = value
```
## Script (Read-Only)
```lua
@type AnimScriptHandle
Read: cexpressionactionupdater.Script
```
## Parent (Read-Only)
```lua
@type CAnimActionUpdater
Read: cexpressionactionupdater.Parent
```
# Functions
## ToPtr
```lua
@returns string
cexpressionactionupdater:ToPtr()
```
## IsValid
```lua
@returns bool
cexpressionactionupdater:IsValid()
```

:::