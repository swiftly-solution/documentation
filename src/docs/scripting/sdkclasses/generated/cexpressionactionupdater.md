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
## Param 
```lua
@type CAnimParamHandle
Read: cexpressionactionupdater.Param
Write: cexpressionactionupdater.Param = value
```
## ParamType 
```lua
@type number
Read: cexpressionactionupdater.ParamType
Write: cexpressionactionupdater.ParamType = value
```
## Script 
```lua
@type AnimScriptHandle
Read: cexpressionactionupdater.Script
Write: cexpressionactionupdater.Script = value
```
## Parent 
```lua
@type CAnimActionUpdater
Read: cexpressionactionupdater.Parent
Write: cexpressionactionupdater.Parent = value
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