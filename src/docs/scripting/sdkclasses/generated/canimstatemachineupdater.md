---
title: CAnimStateMachineUpdater
index: true
order: 2
category:
  - Guide
---

# CAnimStateMachineUpdater

::: tabs
@tab Lua
# Constructor
```lua
CAnimStateMachineUpdater(ptr --[[ string ]])
```
# Properties
## States (Read-Only)
```lua
@type table
Read: canimstatemachineupdater.States
```
## Transitions (Read-Only)
```lua
@type table
Read: canimstatemachineupdater.Transitions
```
## StartStateIndex 
```lua
@type number
Read: canimstatemachineupdater.StartStateIndex
Write: canimstatemachineupdater.StartStateIndex = value
```
# Functions
## ToPtr
```lua
@returns string
canimstatemachineupdater:ToPtr()
```
## IsValid
```lua
@returns bool
canimstatemachineupdater:IsValid()
```

:::