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
## States 
```lua
@type table
Read: canimstatemachineupdater.States
Write: canimstatemachineupdater.States = value
```
## Transitions 
```lua
@type table
Read: canimstatemachineupdater.Transitions
Write: canimstatemachineupdater.Transitions = value
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