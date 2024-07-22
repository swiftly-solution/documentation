---
title: CStateMachineComponentUpdater
index: true
order: 2
category:
  - Guide
---

# CStateMachineComponentUpdater

::: tabs
@tab Lua
# Constructor
```lua
CStateMachineComponentUpdater(ptr --[[ string ]])
```
# Properties
## StateMachine (Read-Only)
```lua
@type CAnimStateMachineUpdater
Read: cstatemachinecomponentupdater.StateMachine
```
## Parent 
```lua
@type CAnimComponentUpdater
Read: cstatemachinecomponentupdater.Parent
Write: cstatemachinecomponentupdater.Parent = value
```
# Functions
## ToPtr
```lua
@returns string
cstatemachinecomponentupdater:ToPtr()
```
## IsValid
```lua
@returns bool
cstatemachinecomponentupdater:IsValid()
```

:::