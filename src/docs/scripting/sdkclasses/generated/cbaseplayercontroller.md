---
title: CBasePlayerController
index: true
order: 2
category:
  - Guide
---

# CBasePlayerController

::: tabs
@tab Lua
# Constructor
```lua
CBasePlayerController(ptr)
```
# Properties
## InButtonsWhichAreToggles 
```lua
--- @type number
Read: cbaseplayercontroller.InButtonsWhichAreToggles
Write: cbaseplayercontroller.InButtonsWhichAreToggles = value
```
## TickBase 
```lua
--- @type number
Read: cbaseplayercontroller.TickBase
Write: cbaseplayercontroller.TickBase = value
```
## Pawn (Read-Only)
```lua
--- @type CBasePlayerPawn
Read: cbaseplayercontroller.Pawn
```
## KnownTeamMismatch 
```lua
--- @type boolean
Read: cbaseplayercontroller.KnownTeamMismatch
Write: cbaseplayercontroller.KnownTeamMismatch = value
```
## SplitScreenSlot 
```lua
--- @type number
Read: cbaseplayercontroller.SplitScreenSlot
Write: cbaseplayercontroller.SplitScreenSlot = value
```
## SplitOwner (Read-Only)
```lua
--- @type CBasePlayerController
Read: cbaseplayercontroller.SplitOwner
```
## IsHLTV 
```lua
--- @type boolean
Read: cbaseplayercontroller.IsHLTV
Write: cbaseplayercontroller.IsHLTV = value
```
## Connected 
```lua
--- @type number
Read: cbaseplayercontroller.Connected
Write: cbaseplayercontroller.Connected = value
```
## PlayerName 
```lua
--- @type string
Read: cbaseplayercontroller.PlayerName
Write: cbaseplayercontroller.PlayerName = value
```
## NetworkIDString 
```lua
--- @type string
Read: cbaseplayercontroller.NetworkIDString
Write: cbaseplayercontroller.NetworkIDString = value
```
## LerpTime 
```lua
--- @type number
Read: cbaseplayercontroller.LerpTime
Write: cbaseplayercontroller.LerpTime = value
```
## LagCompensation 
```lua
--- @type boolean
Read: cbaseplayercontroller.LagCompensation
Write: cbaseplayercontroller.LagCompensation = value
```
## Predict 
```lua
--- @type boolean
Read: cbaseplayercontroller.Predict
Write: cbaseplayercontroller.Predict = value
```
## AutoKickDisabled 
```lua
--- @type boolean
Read: cbaseplayercontroller.AutoKickDisabled
Write: cbaseplayercontroller.AutoKickDisabled = value
```
## IsLowViolence 
```lua
--- @type boolean
Read: cbaseplayercontroller.IsLowViolence
Write: cbaseplayercontroller.IsLowViolence = value
```
## GamePaused 
```lua
--- @type boolean
Read: cbaseplayercontroller.GamePaused
Write: cbaseplayercontroller.GamePaused = value
```
## IgnoreGlobalChat 
```lua
--- @type number
Read: cbaseplayercontroller.IgnoreGlobalChat
Write: cbaseplayercontroller.IgnoreGlobalChat = value
```
## LastPlayerTalkTime 
```lua
--- @type number
Read: cbaseplayercontroller.LastPlayerTalkTime
Write: cbaseplayercontroller.LastPlayerTalkTime = value
```
## LastEntitySteadyState 
```lua
--- @type number
Read: cbaseplayercontroller.LastEntitySteadyState
Write: cbaseplayercontroller.LastEntitySteadyState = value
```
## AvailableEntitySteadyState 
```lua
--- @type number
Read: cbaseplayercontroller.AvailableEntitySteadyState
Write: cbaseplayercontroller.AvailableEntitySteadyState = value
```
## HasAnySteadyStateEnts 
```lua
--- @type boolean
Read: cbaseplayercontroller.HasAnySteadyStateEnts
Write: cbaseplayercontroller.HasAnySteadyStateEnts = value
```
## SteamID 
```lua
--- @type number
Read: cbaseplayercontroller.SteamID
Write: cbaseplayercontroller.SteamID = value
```
## DesiredFOV 
```lua
--- @type number
Read: cbaseplayercontroller.DesiredFOV
Write: cbaseplayercontroller.DesiredFOV = value
```
## Parent (Read-Only)
```lua
--- @type CBaseEntity
Read: cbaseplayercontroller.Parent
```
# Functions
## EntityIndex
```lua
@returns number
cbaseplayercontroller:EntityIndex()
```
## ToPtr
```lua
@returns string
cbaseplayercontroller:ToPtr()
```
## IsValid
```lua
@returns bool
cbaseplayercontroller:IsValid()
```

:::