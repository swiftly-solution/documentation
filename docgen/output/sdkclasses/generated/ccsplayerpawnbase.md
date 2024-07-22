---
title: CCSPlayerPawnBase
index: true
order: 2
category:
  - Guide
---

# CCSPlayerPawnBase

::: tabs
@tab Lua
# Constructor
```lua
CCSPlayerPawnBase(ptr --[[ string ]])
```
# Properties
## CTouchExpansionComponent (Read-Only)
```lua
@type CTouchExpansionComponent
Read: ccsplayerpawnbase.CTouchExpansionComponent
```
## PingServices 
```lua
@type CCSPlayer_PingServices
Read: ccsplayerpawnbase.PingServices
Write: ccsplayerpawnbase.PingServices = value
```
## ViewModelServices 
```lua
@type CPlayer_ViewModelServices
Read: ccsplayerpawnbase.ViewModelServices
Write: ccsplayerpawnbase.ViewModelServices = value
```
## BlindUntilTime 
```lua
@type number
Read: ccsplayerpawnbase.BlindUntilTime
Write: ccsplayerpawnbase.BlindUntilTime = value
```
## BlindStartTime 
```lua
@type number
Read: ccsplayerpawnbase.BlindStartTime
Write: ccsplayerpawnbase.BlindStartTime = value
```
## PlayerState 
```lua
@type number
Read: ccsplayerpawnbase.PlayerState
Write: ccsplayerpawnbase.PlayerState = value
```
## Respawning 
```lua
@type boolean
Read: ccsplayerpawnbase.Respawning
Write: ccsplayerpawnbase.Respawning = value
```
## ImmuneToGunGameDamageTime 
```lua
@type number
Read: ccsplayerpawnbase.ImmuneToGunGameDamageTime
Write: ccsplayerpawnbase.ImmuneToGunGameDamageTime = value
```
## GunGameImmunity 
```lua
@type boolean
Read: ccsplayerpawnbase.GunGameImmunity
Write: ccsplayerpawnbase.GunGameImmunity = value
```
## MolotovDamageTime 
```lua
@type number
Read: ccsplayerpawnbase.MolotovDamageTime
Write: ccsplayerpawnbase.MolotovDamageTime = value
```
## HasMovedSinceSpawn 
```lua
@type boolean
Read: ccsplayerpawnbase.HasMovedSinceSpawn
Write: ccsplayerpawnbase.HasMovedSinceSpawn = value
```
## NumSpawns 
```lua
@type number
Read: ccsplayerpawnbase.NumSpawns
Write: ccsplayerpawnbase.NumSpawns = value
```
## IdleTimeSinceLastAction 
```lua
@type number
Read: ccsplayerpawnbase.IdleTimeSinceLastAction
Write: ccsplayerpawnbase.IdleTimeSinceLastAction = value
```
## NextRadarUpdateTime 
```lua
@type number
Read: ccsplayerpawnbase.NextRadarUpdateTime
Write: ccsplayerpawnbase.NextRadarUpdateTime = value
```
## FlashDuration 
```lua
@type number
Read: ccsplayerpawnbase.FlashDuration
Write: ccsplayerpawnbase.FlashDuration = value
```
## FlashMaxAlpha 
```lua
@type number
Read: ccsplayerpawnbase.FlashMaxAlpha
Write: ccsplayerpawnbase.FlashMaxAlpha = value
```
## ProgressBarStartTime 
```lua
@type number
Read: ccsplayerpawnbase.ProgressBarStartTime
Write: ccsplayerpawnbase.ProgressBarStartTime = value
```
## ProgressBarDuration 
```lua
@type number
Read: ccsplayerpawnbase.ProgressBarDuration
Write: ccsplayerpawnbase.ProgressBarDuration = value
```
## EyeAngles 
```lua
@type QAngle
Read: ccsplayerpawnbase.EyeAngles
Write: ccsplayerpawnbase.EyeAngles = value
```
## NumEnemiesAtRoundStart 
```lua
@type number
Read: ccsplayerpawnbase.NumEnemiesAtRoundStart
Write: ccsplayerpawnbase.NumEnemiesAtRoundStart = value
```
## WasNotKilledNaturally 
```lua
@type boolean
Read: ccsplayerpawnbase.WasNotKilledNaturally
Write: ccsplayerpawnbase.WasNotKilledNaturally = value
```
## CommittingSuicideOnTeamChange 
```lua
@type boolean
Read: ccsplayerpawnbase.CommittingSuicideOnTeamChange
Write: ccsplayerpawnbase.CommittingSuicideOnTeamChange = value
```
## OriginalController (Read-Only)
```lua
@type CCSPlayerController
Read: ccsplayerpawnbase.OriginalController
```
## Parent 
```lua
@type CBasePlayerPawn
Read: ccsplayerpawnbase.Parent
Write: ccsplayerpawnbase.Parent = value
```
# Functions
## ToPtr
```lua
@returns string
ccsplayerpawnbase:ToPtr()
```
## IsValid
```lua
@returns bool
ccsplayerpawnbase:IsValid()
```

:::