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
--- @param ptr string
CStateUpdateData(ptr)
```
# Properties
## Name 
```lua
--- @type string
Read: cstateupdatedata.Name
Write: cstateupdatedata.Name = value
```
## Script (Read-Only)
```lua
--- @type AnimScriptHandle
Read: cstateupdatedata.Script
```
## TransitionIndices (Read-Only)
```lua
--- @type table
Read: cstateupdatedata.TransitionIndices
```
## Actions (Read-Only)
```lua
--- @type table
Read: cstateupdatedata.Actions
```
## StateID (Read-Only)
```lua
--- @type AnimStateID
Read: cstateupdatedata.StateID
```
## IsStartState 
```lua
--- @type bitfield:1
Read: cstateupdatedata.IsStartState
Write: cstateupdatedata.IsStartState = value
```
## IsEndState 
```lua
--- @type bitfield:1
Read: cstateupdatedata.IsEndState
Write: cstateupdatedata.IsEndState = value
```
## IsPassthrough 
```lua
--- @type bitfield:1
Read: cstateupdatedata.IsPassthrough
Write: cstateupdatedata.IsPassthrough = value
```
# Functions
## ToPtr
```lua
--- @return string
cstateupdatedata:ToPtr()
```
## IsValid
```lua
--- @return bool
cstateupdatedata:IsValid()
```

:::