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
--- @param ptr string
CBasePlayerPawn(ptr)
```
# Properties
## WeaponServices (Read-Only)
```lua
--- @type CPlayer_WeaponServices
Read: cbaseplayerpawn.WeaponServices
```
## ItemServices (Read-Only)
```lua
--- @type CPlayer_ItemServices
Read: cbaseplayerpawn.ItemServices
```
## AutoaimServices (Read-Only)
```lua
--- @type CPlayer_AutoaimServices
Read: cbaseplayerpawn.AutoaimServices
```
## ObserverServices (Read-Only)
```lua
--- @type CPlayer_ObserverServices
Read: cbaseplayerpawn.ObserverServices
```
## WaterServices (Read-Only)
```lua
--- @type CPlayer_WaterServices
Read: cbaseplayerpawn.WaterServices
```
## UseServices (Read-Only)
```lua
--- @type CPlayer_UseServices
Read: cbaseplayerpawn.UseServices
```
## FlashlightServices (Read-Only)
```lua
--- @type CPlayer_FlashlightServices
Read: cbaseplayerpawn.FlashlightServices
```
## CameraServices (Read-Only)
```lua
--- @type CPlayer_CameraServices
Read: cbaseplayerpawn.CameraServices
```
## MovementServices (Read-Only)
```lua
--- @type CPlayer_MovementServices
Read: cbaseplayerpawn.MovementServices
```
## ServerViewAngleChanges (Read-Only)
```lua
--- @type table
Read: cbaseplayerpawn.ServerViewAngleChanges
```
## HighestGeneratedServerViewAngleChangeIndex 
```lua
--- @type number
Read: cbaseplayerpawn.HighestGeneratedServerViewAngleChangeIndex
Write: cbaseplayerpawn.HighestGeneratedServerViewAngleChangeIndex = value
```
## _angle 
```lua
--- @type QAngle
Read: cbaseplayerpawn._angle
Write: cbaseplayerpawn._angle = value
```
## _anglePrevious 
```lua
--- @type QAngle
Read: cbaseplayerpawn._anglePrevious
Write: cbaseplayerpawn._anglePrevious = value
```
## HideHUD 
```lua
--- @type number
Read: cbaseplayerpawn.HideHUD
Write: cbaseplayerpawn.HideHUD = value
```
## Skybox3d (Read-Only)
```lua
--- @type sky3dparams_t
Read: cbaseplayerpawn.Skybox3d
```
## TimeLastHurt 
```lua
--- @type number
Read: cbaseplayerpawn.TimeLastHurt
Write: cbaseplayerpawn.TimeLastHurt = value
```
## DeathTime 
```lua
--- @type number
Read: cbaseplayerpawn.DeathTime
Write: cbaseplayerpawn.DeathTime = value
```
## NextSuicideTime 
```lua
--- @type number
Read: cbaseplayerpawn.NextSuicideTime
Write: cbaseplayerpawn.NextSuicideTime = value
```
## InitHUD 
```lua
--- @type boolean
Read: cbaseplayerpawn.InitHUD
Write: cbaseplayerpawn.InitHUD = value
```
## Expresser (Read-Only)
```lua
--- @type CAI_Expresser
Read: cbaseplayerpawn.Expresser
```
## Controller (Read-Only)
```lua
--- @type CBasePlayerController
Read: cbaseplayerpawn.Controller
```
## HltvReplayDelay 
```lua
--- @type number
Read: cbaseplayerpawn.HltvReplayDelay
Write: cbaseplayerpawn.HltvReplayDelay = value
```
## HltvReplayEnd 
```lua
--- @type number
Read: cbaseplayerpawn.HltvReplayEnd
Write: cbaseplayerpawn.HltvReplayEnd = value
```
## HltvReplayEntity 
```lua
--- @type number
Read: cbaseplayerpawn.HltvReplayEntity
Write: cbaseplayerpawn.HltvReplayEntity = value
```
## SndOpvarLatchData (Read-Only)
```lua
--- @type table
Read: cbaseplayerpawn.SndOpvarLatchData
```
## Parent (Read-Only)
```lua
--- @type CBaseCombatCharacter
Read: cbaseplayerpawn.Parent
```
# Functions
## ToPtr
```lua
--- @return string
cbaseplayerpawn:ToPtr()
```
## IsValid
```lua
--- @return bool
cbaseplayerpawn:IsValid()
```

:::