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
## ScriptState 
```lua
@type IChoreoServices
Read: cgamechoreoservices.ScriptState
Write: cgamechoreoservices.ScriptState = value
```
## ChoreoState 
```lua
@type IChoreoServices
Read: cgamechoreoservices.ChoreoState
Write: cgamechoreoservices.ChoreoState = value
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