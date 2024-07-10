---
title: CPlantedC4
index: true
order: 2
category:
  - Guide
---

# CPlantedC4

::: tabs
@tab Lua
# Constructor
```lua
CPlantedC4(ptr --[[ string ]])
```
# Properties
## BombTicking 
```lua
@type boolean
Read: cplantedc4.BombTicking
Write: cplantedc4.BombTicking = value
```
## C4Blow 
```lua
@type number
Read: cplantedc4.C4Blow
Write: cplantedc4.C4Blow = value
```
## BombSite 
```lua
@type number
Read: cplantedc4.BombSite
Write: cplantedc4.BombSite = value
```
## SourceSoundscapeHash 
```lua
@type number
Read: cplantedc4.SourceSoundscapeHash
Write: cplantedc4.SourceSoundscapeHash = value
```
## OnBombDefused 
```lua
@type CEntityIOOutput
Read: cplantedc4.OnBombDefused
Write: cplantedc4.OnBombDefused = value
```
## OnBombBeginDefuse 
```lua
@type CEntityIOOutput
Read: cplantedc4.OnBombBeginDefuse
Write: cplantedc4.OnBombBeginDefuse = value
```
## OnBombDefuseAborted 
```lua
@type CEntityIOOutput
Read: cplantedc4.OnBombDefuseAborted
Write: cplantedc4.OnBombDefuseAborted = value
```
## CannotBeDefused 
```lua
@type boolean
Read: cplantedc4.CannotBeDefused
Write: cplantedc4.CannotBeDefused = value
```
## EntitySpottedState 
```lua
@type EntitySpottedState_t
Read: cplantedc4.EntitySpottedState
Write: cplantedc4.EntitySpottedState = value
```
## SpotRules 
```lua
@type number
Read: cplantedc4.SpotRules
Write: cplantedc4.SpotRules = value
```
## TrainingPlacedByPlayer 
```lua
@type boolean
Read: cplantedc4.TrainingPlacedByPlayer
Write: cplantedc4.TrainingPlacedByPlayer = value
```
## HasExploded 
```lua
@type boolean
Read: cplantedc4.HasExploded
Write: cplantedc4.HasExploded = value
```
## TimerLength 
```lua
@type number
Read: cplantedc4.TimerLength
Write: cplantedc4.TimerLength = value
```
## BeingDefused 
```lua
@type boolean
Read: cplantedc4.BeingDefused
Write: cplantedc4.BeingDefused = value
```
## LastDefuseTime 
```lua
@type number
Read: cplantedc4.LastDefuseTime
Write: cplantedc4.LastDefuseTime = value
```
## DefuseLength 
```lua
@type number
Read: cplantedc4.DefuseLength
Write: cplantedc4.DefuseLength = value
```
## DefuseCountDown 
```lua
@type number
Read: cplantedc4.DefuseCountDown
Write: cplantedc4.DefuseCountDown = value
```
## BombDefused 
```lua
@type boolean
Read: cplantedc4.BombDefused
Write: cplantedc4.BombDefused = value
```
## BombDefuser (Read-Only)
```lua
@type CCSPlayerPawn
Read: cplantedc4.BombDefuser
```
## ControlPanel (Read-Only)
```lua
@type CBaseEntity
Read: cplantedc4.ControlPanel
```
## ProgressBarTime 
```lua
@type number
Read: cplantedc4.ProgressBarTime
Write: cplantedc4.ProgressBarTime = value
```
## VoiceAlertFired 
```lua
@type boolean
Read: cplantedc4.VoiceAlertFired
Write: cplantedc4.VoiceAlertFired = value
```
## VoiceAlertPlayed 
```lua
@type table
Read: cplantedc4.VoiceAlertPlayed
Write: cplantedc4.VoiceAlertPlayed = value
```
## NextBotBeepTime 
```lua
@type number
Read: cplantedc4.NextBotBeepTime
Write: cplantedc4.NextBotBeepTime = value
```
## CatchUpToPlayerEye 
```lua
@type QAngle
Read: cplantedc4.CatchUpToPlayerEye
Write: cplantedc4.CatchUpToPlayerEye = value
```
## LastSpinDetectionTime 
```lua
@type number
Read: cplantedc4.LastSpinDetectionTime
Write: cplantedc4.LastSpinDetectionTime = value
```
## Parent 
```lua
@type CBaseAnimGraph
Read: cplantedc4.Parent
Write: cplantedc4.Parent = value
```
# Functions
## ToPtr
```lua
@returns string
cplantedc4:ToPtr()
```
## IsValid
```lua
@returns bool
cplantedc4:IsValid()
```

:::