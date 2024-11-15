---
title: CGameRules
index: true
order: 2
category:
  - Guide
---

# CGameRules

::: tabs
@tab Lua
# Constructor
```lua
CGameRules(ptr)
```
# Properties
## __pChainEntity (Read-Only)
```lua
--- @type CNetworkVarChainer
Read: cgamerules.__pChainEntity
```
## QuestName 
```lua
--- @type string
Read: cgamerules.QuestName
Write: cgamerules.QuestName = value
```
## QuestPhase 
```lua
--- @type number
Read: cgamerules.QuestPhase
Write: cgamerules.QuestPhase = value
```
## TotalPausedTicks 
```lua
--- @type number
Read: cgamerules.TotalPausedTicks
Write: cgamerules.TotalPausedTicks = value
```
## PauseStartTick 
```lua
--- @type number
Read: cgamerules.PauseStartTick
Write: cgamerules.PauseStartTick = value
```
## GamePaused 
```lua
--- @type boolean
Read: cgamerules.GamePaused
Write: cgamerules.GamePaused = value
```
# Functions
## ToPtr
```lua
@returns string
cgamerules:ToPtr()
```
## IsValid
```lua
@returns bool
cgamerules:IsValid()
```

:::