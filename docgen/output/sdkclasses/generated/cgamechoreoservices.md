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
CGameChoreoServices(ptr --[[ string ]])
```
# Properties
## Owner (Read-Only)
```lua
@type CBaseAnimGraph
Read: cgamechoreoservices.Owner
```
## ScriptedSequence (Read-Only)
```lua
@type CScriptedSequence
Read: cgamechoreoservices.ScriptedSequence
```
## ScriptState (Read-Only)
```lua
@type IChoreoServices
Read: cgamechoreoservices.ScriptState
```
## ChoreoState (Read-Only)
```lua
@type IChoreoServices
Read: cgamechoreoservices.ChoreoState
```
## TimeStartedState 
```lua
@type number
Read: cgamechoreoservices.TimeStartedState
Write: cgamechoreoservices.TimeStartedState = value
```
## Parent 
```lua
@type IChoreoServices
Read: cgamechoreoservices.Parent
Write: cgamechoreoservices.Parent = value
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