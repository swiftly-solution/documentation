---
title: ScriptInfo_t
index: true
order: 2
category:
  - Guide
---

# ScriptInfo_t

::: tabs
@tab Lua
# Constructor
```lua
ScriptInfo_t(ptr)
```
# Properties
## Code 
```lua
--- @type string
Read: scriptinfo_t.Code
Write: scriptinfo_t.Code = value
```
## ParamsModified (Read-Only)
```lua
--- @type table
Read: scriptinfo_t.ParamsModified
```
## ProxyReadParams (Read-Only)
```lua
--- @type table
Read: scriptinfo_t.ProxyReadParams
```
## ProxyWriteParams (Read-Only)
```lua
--- @type table
Read: scriptinfo_t.ProxyWriteParams
```
## ScriptType 
```lua
--- @type number
Read: scriptinfo_t.ScriptType
Write: scriptinfo_t.ScriptType = value
```
# Functions
## ToPtr
```lua
@returns string
scriptinfo_t:ToPtr()
```
## IsValid
```lua
@returns bool
scriptinfo_t:IsValid()
```

:::