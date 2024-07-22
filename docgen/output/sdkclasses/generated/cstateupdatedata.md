---
title: CStateUpdateData
index: true
order: 2
category:
  - Guide
---

# CStateUpdateData

::: tabs
@tab Lua
# Constructor
```lua
CStateUpdateData(ptr --[[ string ]])
```
# Properties
## Name 
```lua
@type string
Read: cstateupdatedata.Name
Write: cstateupdatedata.Name = value
```
## Script (Read-Only)
```lua
@type AnimScriptHandle
Read: cstateupdatedata.Script
```
## TransitionIndices 
```lua
@type table
Read: cstateupdatedata.TransitionIndices
Write: cstateupdatedata.TransitionIndices = value
```
## Actions 
```lua
@type table
Read: cstateupdatedata.Actions
Write: cstateupdatedata.Actions = value
```
## StateID (Read-Only)
```lua
@type AnimStateID
Read: cstateupdatedata.StateID
```
# Functions
## ToPtr
```lua
@returns string
cstateupdatedata:ToPtr()
```
## IsValid
```lua
@returns bool
cstateupdatedata:IsValid()
```

:::