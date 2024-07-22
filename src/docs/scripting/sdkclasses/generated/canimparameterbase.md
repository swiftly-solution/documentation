---
title: CAnimParameterBase
index: true
order: 2
category:
  - Guide
---

# CAnimParameterBase

::: tabs
@tab Lua
# Constructor
```lua
CAnimParameterBase(ptr --[[ string ]])
```
# Properties
## Comment 
```lua
@type string
Read: canimparameterbase.Comment
Write: canimparameterbase.Comment = value
```
## Group 
```lua
@type string
Read: canimparameterbase.Group
Write: canimparameterbase.Group = value
```
## Id (Read-Only)
```lua
@type AnimParamID
Read: canimparameterbase.Id
```
## ComponentName 
```lua
@type string
Read: canimparameterbase.ComponentName
Write: canimparameterbase.ComponentName = value
```
## NetworkingRequested 
```lua
@type boolean
Read: canimparameterbase.NetworkingRequested
Write: canimparameterbase.NetworkingRequested = value
```
## IsReferenced 
```lua
@type boolean
Read: canimparameterbase.IsReferenced
Write: canimparameterbase.IsReferenced = value
```
# Functions
## ToPtr
```lua
@returns string
canimparameterbase:ToPtr()
```
## IsValid
```lua
@returns bool
canimparameterbase:IsValid()
```

:::