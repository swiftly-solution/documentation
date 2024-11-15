---
title: CGameChoreoServices
index: true
order: 2
category:
  - Guide
---

# CGameChoreoServices

::: tabs
@tab Lua
# Constructor
```lua
CGameChoreoServices(ptr)
```
# Properties
## Owner (Read-Only)
```lua
--- @type CBaseAnimGraph
Read: cgamechoreoservices.Owner
```
## ScriptedSequence (Read-Only)
```lua
--- @type CScriptedSequence
Read: cgamechoreoservices.ScriptedSequence
```
## TimeStartedState 
```lua
--- @type number
Read: cgamechoreoservices.TimeStartedState
Write: cgamechoreoservices.TimeStartedState = value
```
## Parent (Read-Only)
```lua
--- @type IChoreoServices
Read: cgamechoreoservices.Parent
```
# Functions
## ToPtr
```lua
@returns string
cgamechoreoservices:ToPtr()
```
## IsValid
```lua
@returns bool
cgamechoreoservices:IsValid()
```

:::