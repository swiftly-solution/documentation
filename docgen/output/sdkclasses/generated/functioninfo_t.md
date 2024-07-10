---
title: FunctionInfo_t
index: true
order: 2
category:
  - Guide
---

# FunctionInfo_t

::: tabs
@tab Lua
# Constructor
```lua
FunctionInfo_t(ptr --[[ string ]])
```
# Properties
## Name 
```lua
@type string
Read: functioninfo_t.Name
Write: functioninfo_t.Name = value
```
## NameToken 
```lua
@type string
Read: functioninfo_t.NameToken
Write: functioninfo_t.NameToken = value
```
## ParamCount 
```lua
@type number
Read: functioninfo_t.ParamCount
Write: functioninfo_t.ParamCount = value
```
## Index 
```lua
@type FuseFunctionIndex_t
Read: functioninfo_t.Index
Write: functioninfo_t.Index = value
```
## IsPure 
```lua
@type boolean
Read: functioninfo_t.IsPure
Write: functioninfo_t.IsPure = value
```
# Functions
## ToPtr
```lua
@returns string
functioninfo_t:ToPtr()
```
## IsValid
```lua
@returns bool
functioninfo_t:IsValid()
```

:::