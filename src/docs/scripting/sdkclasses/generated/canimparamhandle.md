---
title: CAnimParamHandle
index: true
order: 2
category:
  - Guide
---

# CAnimParamHandle

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
CAnimParamHandle(ptr)
```
# Properties
## Type 
```lua
--- @type number
Read: canimparamhandle.Type
Write: canimparamhandle.Type = value
```
## Index 
```lua
--- @type number
Read: canimparamhandle.Index
Write: canimparamhandle.Index = value
```
# Functions
## ToPtr
```lua
--- @return string
canimparamhandle:ToPtr()
```
## IsValid
```lua
--- @return bool
canimparamhandle:IsValid()
```

:::