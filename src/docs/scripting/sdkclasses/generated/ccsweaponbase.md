---
title: CCSWeaponBase
index: true
order: 2
category:
  - Guide
---

# CCSWeaponBase

::: tabs
@tab Lua
# Constructor
```lua
CCSWeaponBase(ptr)
```
# Properties
## Removeable 
```lua
--- @type boolean
Read: ccsweaponbase.Removeable
Write: ccsweaponbase.Removeable = value
```
## FireSequenceStartTime 
```lua
--- @type number
Read: ccsweaponbase.FireSequenceStartTime
Write: ccsweaponbase.FireSequenceStartTime = value
```
## FireSequenceStartTimeChange 
```lua
--- @type number
Read: ccsweaponbase.FireSequenceStartTimeChange
Write: ccsweaponbase.FireSequenceStartTimeChange = value
```
## FireSequenceStartTimeAck 
```lua
--- @type number
Read: ccsweaponbase.FireSequenceStartTimeAck
Write: ccsweaponbase.FireSequenceStartTimeAck = value
```
## PlayerFireEvent 
```lua
--- @type number
Read: ccsweaponbase.PlayerFireEvent
Write: ccsweaponbase.PlayerFireEvent = value
```
## PlayerFireEventAttackType 
```lua
--- @type number
Read: ccsweaponbase.PlayerFireEventAttackType
Write: ccsweaponbase.PlayerFireEventAttackType = value
```
## SeqIdle 
```lua
--- @type number
Read: ccsweaponbase.SeqIdle
Write: ccsweaponbase.SeqIdle = value
```
## SeqFirePrimary 
```lua
--- @type number
Read: ccsweaponbase.SeqFirePrimary
Write: ccsweaponbase.SeqFirePrimary = value
```
## SeqFireSecondary 
```lua
--- @type number
Read: ccsweaponbase.SeqFireSecondary
Write: ccsweaponbase.SeqFireSecondary = value
```
## ThirdPersonFireSequences (Read-Only)
```lua
--- @type table
Read: ccsweaponbase.ThirdPersonFireSequences
```
## CurrentThirdPersonSequence 
```lua
--- @type number
Read: ccsweaponbase.CurrentThirdPersonSequence
Write: ccsweaponbase.CurrentThirdPersonSequence = value
```
## SilencerBoneIndex 
```lua
--- @type number
Read: ccsweaponbase.SilencerBoneIndex
Write: ccsweaponbase.SilencerBoneIndex = value
```
## ThirdPersonSequences 
```lua
--- @type table
Read: ccsweaponbase.ThirdPersonSequences
Write: ccsweaponbase.ThirdPersonSequences = value
```
## PlayerAmmoStockOnPickup 
```lua
--- @type boolean
Read: ccsweaponbase.PlayerAmmoStockOnPickup
Write: ccsweaponbase.PlayerAmmoStockOnPickup = value
```
## RequireUseToTouch 
```lua
--- @type boolean
Read: ccsweaponbase.RequireUseToTouch
Write: ccsweaponbase.RequireUseToTouch = value
```
## State 
```lua
--- @type number
Read: ccsweaponbase.State
Write: ccsweaponbase.State = value
```
## LastTimeInAir 
```lua
--- @type number
Read: ccsweaponbase.LastTimeInAir
Write: ccsweaponbase.LastTimeInAir = value
```
## LastDeployTime 
```lua
--- @type number
Read: ccsweaponbase.LastDeployTime
Write: ccsweaponbase.LastDeployTime = value
```
## LastEmptySoundCmdNum 
```lua
--- @type number
Read: ccsweaponbase.LastEmptySoundCmdNum
Write: ccsweaponbase.LastEmptySoundCmdNum = value
```
## ViewModelIndex 
```lua
--- @type number
Read: ccsweaponbase.ViewModelIndex
Write: ccsweaponbase.ViewModelIndex = value
```
## ReloadsWithClips 
```lua
--- @type boolean
Read: ccsweaponbase.ReloadsWithClips
Write: ccsweaponbase.ReloadsWithClips = value
```
## TimeWeaponIdle 
```lua
--- @type number
Read: ccsweaponbase.TimeWeaponIdle
Write: ccsweaponbase.TimeWeaponIdle = value
```
## FireOnEmpty 
```lua
--- @type boolean
Read: ccsweaponbase.FireOnEmpty
Write: ccsweaponbase.FireOnEmpty = value
```
## OnPlayerPickup (Read-Only)
```lua
--- @type CEntityIOOutput
Read: ccsweaponbase.OnPlayerPickup
```
## WeaponMode 
```lua
--- @type number
Read: ccsweaponbase.WeaponMode
Write: ccsweaponbase.WeaponMode = value
```
## TurningInaccuracyDelta 
```lua
--- @type number
Read: ccsweaponbase.TurningInaccuracyDelta
Write: ccsweaponbase.TurningInaccuracyDelta = value
```
## TurningInaccuracyEyeDirLast 
```lua
--- @type Vector
Read: ccsweaponbase.TurningInaccuracyEyeDirLast
Write: ccsweaponbase.TurningInaccuracyEyeDirLast = value
```
## TurningInaccuracy 
```lua
--- @type number
Read: ccsweaponbase.TurningInaccuracy
Write: ccsweaponbase.TurningInaccuracy = value
```
## AccuracyPenalty 
```lua
--- @type number
Read: ccsweaponbase.AccuracyPenalty
Write: ccsweaponbase.AccuracyPenalty = value
```
## LastAccuracyUpdateTime 
```lua
--- @type number
Read: ccsweaponbase.LastAccuracyUpdateTime
Write: ccsweaponbase.LastAccuracyUpdateTime = value
```
## AccuracySmoothedForZoom 
```lua
--- @type number
Read: ccsweaponbase.AccuracySmoothedForZoom
Write: ccsweaponbase.AccuracySmoothedForZoom = value
```
## ScopeZoomEndTime 
```lua
--- @type number
Read: ccsweaponbase.ScopeZoomEndTime
Write: ccsweaponbase.ScopeZoomEndTime = value
```
## RecoilIndex 
```lua
--- @type number
Read: ccsweaponbase.RecoilIndex
Write: ccsweaponbase.RecoilIndex = value
```
## RecoilIndex1 
```lua
--- @type number
Read: ccsweaponbase.RecoilIndex1
Write: ccsweaponbase.RecoilIndex1 = value
```
## BurstMode 
```lua
--- @type boolean
Read: ccsweaponbase.BurstMode
Write: ccsweaponbase.BurstMode = value
```
## PostponeFireReadyTicks 
```lua
--- @type number
Read: ccsweaponbase.PostponeFireReadyTicks
Write: ccsweaponbase.PostponeFireReadyTicks = value
```
## PostponeFireReadyFrac 
```lua
--- @type number
Read: ccsweaponbase.PostponeFireReadyFrac
Write: ccsweaponbase.PostponeFireReadyFrac = value
```
## InReload 
```lua
--- @type boolean
Read: ccsweaponbase.InReload
Write: ccsweaponbase.InReload = value
```
## ReloadVisuallyComplete 
```lua
--- @type boolean
Read: ccsweaponbase.ReloadVisuallyComplete
Write: ccsweaponbase.ReloadVisuallyComplete = value
```
## DroppedAtTime 
```lua
--- @type number
Read: ccsweaponbase.DroppedAtTime
Write: ccsweaponbase.DroppedAtTime = value
```
## IsHauledBack 
```lua
--- @type boolean
Read: ccsweaponbase.IsHauledBack
Write: ccsweaponbase.IsHauledBack = value
```
## SilencerOn 
```lua
--- @type boolean
Read: ccsweaponbase.SilencerOn
Write: ccsweaponbase.SilencerOn = value
```
## TimeSilencerSwitchComplete 
```lua
--- @type number
Read: ccsweaponbase.TimeSilencerSwitchComplete
Write: ccsweaponbase.TimeSilencerSwitchComplete = value
```
## OriginalTeamNumber 
```lua
--- @type number
Read: ccsweaponbase.OriginalTeamNumber
Write: ccsweaponbase.OriginalTeamNumber = value
```
## MostRecentTeamNumber 
```lua
--- @type number
Read: ccsweaponbase.MostRecentTeamNumber
Write: ccsweaponbase.MostRecentTeamNumber = value
```
## DroppedNearBuyZone 
```lua
--- @type boolean
Read: ccsweaponbase.DroppedNearBuyZone
Write: ccsweaponbase.DroppedNearBuyZone = value
```
## NextAttackRenderTimeOffset 
```lua
--- @type number
Read: ccsweaponbase.NextAttackRenderTimeOffset
Write: ccsweaponbase.NextAttackRenderTimeOffset = value
```
## CanBePickedUp 
```lua
--- @type boolean
Read: ccsweaponbase.CanBePickedUp
Write: ccsweaponbase.CanBePickedUp = value
```
## UseCanOverrideNextOwnerTouchTime 
```lua
--- @type boolean
Read: ccsweaponbase.UseCanOverrideNextOwnerTouchTime
Write: ccsweaponbase.UseCanOverrideNextOwnerTouchTime = value
```
## NextOwnerTouchTime 
```lua
--- @type number
Read: ccsweaponbase.NextOwnerTouchTime
Write: ccsweaponbase.NextOwnerTouchTime = value
```
## NextPrevOwnerTouchTime 
```lua
--- @type number
Read: ccsweaponbase.NextPrevOwnerTouchTime
Write: ccsweaponbase.NextPrevOwnerTouchTime = value
```
## NextPrevOwnerUseTime 
```lua
--- @type number
Read: ccsweaponbase.NextPrevOwnerUseTime
Write: ccsweaponbase.NextPrevOwnerUseTime = value
```
## PrevOwner (Read-Only)
```lua
--- @type CCSPlayerPawn
Read: ccsweaponbase.PrevOwner
```
## DropTick 
```lua
--- @type number
Read: ccsweaponbase.DropTick
Write: ccsweaponbase.DropTick = value
```
## Donated 
```lua
--- @type boolean
Read: ccsweaponbase.Donated
Write: ccsweaponbase.Donated = value
```
## LastShotTime 
```lua
--- @type number
Read: ccsweaponbase.LastShotTime
Write: ccsweaponbase.LastShotTime = value
```
## WasOwnedByCT 
```lua
--- @type boolean
Read: ccsweaponbase.WasOwnedByCT
Write: ccsweaponbase.WasOwnedByCT = value
```
## WasOwnedByTerrorist 
```lua
--- @type boolean
Read: ccsweaponbase.WasOwnedByTerrorist
Write: ccsweaponbase.WasOwnedByTerrorist = value
```
## FiredOutOfAmmoEvent 
```lua
--- @type boolean
Read: ccsweaponbase.FiredOutOfAmmoEvent
Write: ccsweaponbase.FiredOutOfAmmoEvent = value
```
## NumRemoveUnownedWeaponThink 
```lua
--- @type number
Read: ccsweaponbase.NumRemoveUnownedWeaponThink
Write: ccsweaponbase.NumRemoveUnownedWeaponThink = value
```
## IronSightController (Read-Only)
```lua
--- @type CIronSightController
Read: ccsweaponbase.IronSightController
```
## IronSightMode 
```lua
--- @type number
Read: ccsweaponbase.IronSightMode
Write: ccsweaponbase.IronSightMode = value
```
## LastLOSTraceFailureTime 
```lua
--- @type number
Read: ccsweaponbase.LastLOSTraceFailureTime
Write: ccsweaponbase.LastLOSTraceFailureTime = value
```
## NumEmptyAttacks 
```lua
--- @type number
Read: ccsweaponbase.NumEmptyAttacks
Write: ccsweaponbase.NumEmptyAttacks = value
```
## WatTickOffset 
```lua
--- @type number
Read: ccsweaponbase.WatTickOffset
Write: ccsweaponbase.WatTickOffset = value
```
## Parent (Read-Only)
```lua
--- @type CBasePlayerWeapon
Read: ccsweaponbase.Parent
```
# Functions
## ToPtr
```lua
@returns string
ccsweaponbase:ToPtr()
```
## IsValid
```lua
@returns bool
ccsweaponbase:IsValid()
```

:::