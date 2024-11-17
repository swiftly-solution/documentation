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
--- @param ptr string
CExpressionActionUpdater(ptr)
```
# Properties
## Param (Read-Only)
```lua
--- @type CAnimParamHandle
Read: cexpressionactionupdater.Param
```
## ParamType 
```lua
--- @type number
Read: cexpressionactionupdater.ParamType
Write: cexpressionactionupdater.ParamType = value
```
## Script (Read-Only)
```lua
--- @type AnimScriptHandle
Read: cexpressionactionupdater.Script
```
## Parent (Read-Only)
```lua
--- @type CAnimActionUpdater
Read: cexpressionactionupdater.Parent
```
# Functions
## ToPtr
```lua
--- @return string
cexpressionactionupdater:ToPtr()
```
## IsValid
```lua
--- @return bool
cexpressionactionupdater:IsValid()
```

:::