---
title: CBasePlayerPawn
index: true
order: 2
category:
  - Guide
---

# CBasePlayerPawn

::: tabs
@tab Lua
# Constructor
```lua
CBasePlayerPawn(ptr --[[ string ]])
```
# Properties
## WeaponServices 
```lua
@type CPlayer_WeaponServices
Read: cbaseplayerpawn.WeaponServices
Write: cbaseplayerpawn.WeaponServices = value
```
## ItemServices 
```lua
@type CPlayer_ItemServices
Read: cbaseplayerpawn.ItemServices
Write: cbaseplayerpawn.ItemServices = value
```
## AutoaimServices 
```lua
@type CPlayer_AutoaimServices
Read: cbaseplayerpawn.AutoaimServices
Write: cbaseplayerpawn.AutoaimServices = value
```
## ObserverServices 
```lua
@type CPlayer_ObserverServices
Read: cbaseplayerpawn.ObserverServices
Write: cbaseplayerpawn.ObserverServices = value
```
## WaterServices 
```lua
@type CPlayer_WaterServices
Read: cbaseplayerpawn.WaterServices
Write: cbaseplayerpawn.WaterServices = value
```
## UseServices 
```lua
@type CPlayer_UseServices
Read: cbaseplayerpawn.UseServices
Write: cbaseplayerpawn.UseServices = value
```
## FlashlightServices 
```lua
@type CPlayer_FlashlightServices
Read: cbaseplayerpawn.FlashlightServices
Write: cbaseplayerpawn.FlashlightServices = value
```
## CameraServices 
```lua
@type CPlayer_CameraServices
Read: cbaseplayerpawn.CameraServices
Write: cbaseplayerpawn.CameraServices = value
```
## MovementServices 
```lua
@type CPlayer_MovementServices
Read: cbaseplayerpawn.MovementServices
Write: cbaseplayerpawn.MovementServices = value
```
## ServerViewAngleChanges 
```lua
@type table
Read: cbaseplayerpawn.ServerViewAngleChanges
Write: cbaseplayerpawn.ServerViewAngleChanges = value
```
## HighestGeneratedServerViewAngleChangeIndex 
```lua
@type number
Read: cbaseplayerpawn.HighestGeneratedServerViewAngleChangeIndex
Write: cbaseplayerpawn.HighestGeneratedServerViewAngleChangeIndex = value
```
## _angle 
```lua
@type QAngle
Read: cbaseplayerpawn._angle
Write: cbaseplayerpawn._angle = value
```
## _anglePrevious 
```lua
@type QAngle
Read: cbaseplayerpawn._anglePrevious
Write: cbaseplayerpawn._anglePrevious = value
```
## HideHUD 
```lua
@type number
Read: cbaseplayerpawn.HideHUD
Write: cbaseplayerpawn.HideHUD = value
```
## Skybox3d (Read-Only)
```lua
@type sky3dparams_t
Read: cbaseplayerpawn.Skybox3d
```
## TimeLastHurt 
```lua
@type number
Read: cbaseplayerpawn.TimeLastHurt
Write: cbaseplayerpawn.TimeLastHurt = value
```
## DeathTime 
```lua
@type number
Read: cbaseplayerpawn.DeathTime
Write: cbaseplayerpawn.DeathTime = value
```
## NextSuicideTime 
```lua
@type number
Read: cbaseplayerpawn.NextSuicideTime
Write: cbaseplayerpawn.NextSuicideTime = value
```
## InitHUD 
```lua
@type boolean
Read: cbaseplayerpawn.InitHUD
Write: cbaseplayerpawn.InitHUD = value
```
## Expresser 
```lua
@type CAI_Expresser
Read: cbaseplayerpawn.Expresser
Write: cbaseplayerpawn.Expresser = value
```
## Controller (Read-Only)
```lua
@type CBasePlayerController
Read: cbaseplayerpawn.Controller
```
## HltvReplayDelay 
```lua
@type number
Read: cbaseplayerpawn.HltvReplayDelay
Write: cbaseplayerpawn.HltvReplayDelay = value
```
## HltvReplayEnd 
```lua
@type number
Read: cbaseplayerpawn.HltvReplayEnd
Write: cbaseplayerpawn.HltvReplayEnd = value
```
## HltvReplayEntity 
```lua
@type number
Read: cbaseplayerpawn.HltvReplayEntity
Write: cbaseplayerpawn.HltvReplayEntity = value
```
## SndOpvarLatchData 
```lua
@type table
Read: cbaseplayerpawn.SndOpvarLatchData
Write: cbaseplayerpawn.SndOpvarLatchData = value
```
## Parent 
```lua
@type CBaseCombatCharacter
Read: cbaseplayerpawn.Parent
Write: cbaseplayerpawn.Parent = value
```
# Functions
## ToPtr
```lua
@returns string
cbaseplayerpawn:ToPtr()
```
## IsValid
```lua
@returns bool
cbaseplayerpawn:IsValid()
```

:::