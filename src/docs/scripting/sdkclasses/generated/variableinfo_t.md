---
title: VariableInfo_t
index: true
order: 2
category:
  - Guide
---

# VariableInfo_t

::: tabs
@tab Lua
# Constructor
```lua
VariableInfo_t(ptr)
```
# Properties
## Name 
```lua
--- @type string
Read: variableinfo_t.Name
Write: variableinfo_t.Name = value
```
## NameToken 
```lua
--- @type number
Read: variableinfo_t.NameToken
Write: variableinfo_t.NameToken = value
```
## Index (Read-Only)
```lua
--- @type FuseVariableIndex_t
Read: variableinfo_t.Index
```
## NumComponents 
```lua
--- @type number
Read: variableinfo_t.NumComponents
Write: variableinfo_t.NumComponents = value
```
## VarType 
```lua
--- @type number
Read: variableinfo_t.VarType
Write: variableinfo_t.VarType = value
```
## Access 
```lua
--- @type number
Read: variableinfo_t.Access
Write: variableinfo_t.Access = value
```
# Functions
## ToPtr
```lua
@returns string
variableinfo_t:ToPtr()
```
## IsValid
```lua
@returns bool
variableinfo_t:IsValid()
```

:::