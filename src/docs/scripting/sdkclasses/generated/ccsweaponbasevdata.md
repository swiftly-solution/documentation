---
title: CCSWeaponBaseVData
index: true
order: 2
category:
  - Guide
---

# CCSWeaponBaseVData

::: tabs
@tab Lua
# Constructor
```lua
CCSWeaponBaseVData(ptr --[[ string ]])
```
# Properties
## WeaponType 
```lua
@type number
Read: ccsweaponbasevdata.WeaponType
Write: ccsweaponbasevdata.WeaponType = value
```
## WeaponCategory 
```lua
@type number
Read: ccsweaponbasevdata.WeaponCategory
Write: ccsweaponbasevdata.WeaponCategory = value
```
## GearSlot 
```lua
@type number
Read: ccsweaponbasevdata.GearSlot
Write: ccsweaponbasevdata.GearSlot = value
```
## GearSlotPosition 
```lua
@type number
Read: ccsweaponbasevdata.GearSlotPosition
Write: ccsweaponbasevdata.GearSlotPosition = value
```
## DefaultLoadoutSlot 
```lua
@type number
Read: ccsweaponbasevdata.DefaultLoadoutSlot
Write: ccsweaponbasevdata.DefaultLoadoutSlot = value
```
## WrongTeamMsg 
```lua
@type string
Read: ccsweaponbasevdata.WrongTeamMsg
Write: ccsweaponbasevdata.WrongTeamMsg = value
```
## Price 
```lua
@type number
Read: ccsweaponbasevdata.Price
Write: ccsweaponbasevdata.Price = value
```
## KillAward 
```lua
@type number
Read: ccsweaponbasevdata.KillAward
Write: ccsweaponbasevdata.KillAward = value
```
## PrimaryReserveAmmoMax 
```lua
@type number
Read: ccsweaponbasevdata.PrimaryReserveAmmoMax
Write: ccsweaponbasevdata.PrimaryReserveAmmoMax = value
```
## SecondaryReserveAmmoMax 
```lua
@type number
Read: ccsweaponbasevdata.SecondaryReserveAmmoMax
Write: ccsweaponbasevdata.SecondaryReserveAmmoMax = value
```
## MeleeWeapon 
```lua
@type boolean
Read: ccsweaponbasevdata.MeleeWeapon
Write: ccsweaponbasevdata.MeleeWeapon = value
```
## HasBurstMode 
```lua
@type boolean
Read: ccsweaponbasevdata.HasBurstMode
Write: ccsweaponbasevdata.HasBurstMode = value
```
## IsRevolver 
```lua
@type boolean
Read: ccsweaponbasevdata.IsRevolver
Write: ccsweaponbasevdata.IsRevolver = value
```
## CannotShootUnderwater 
```lua
@type boolean
Read: ccsweaponbasevdata.CannotShootUnderwater
Write: ccsweaponbasevdata.CannotShootUnderwater = value
```
## AnimExtension 
```lua
@type string
Read: ccsweaponbasevdata.AnimExtension
Write: ccsweaponbasevdata.AnimExtension = value
```
## SilencerType 
```lua
@type number
Read: ccsweaponbasevdata.SilencerType
Write: ccsweaponbasevdata.SilencerType = value
```
## CrosshairMinDistance 
```lua
@type number
Read: ccsweaponbasevdata.CrosshairMinDistance
Write: ccsweaponbasevdata.CrosshairMinDistance = value
```
## CrosshairDeltaDistance 
```lua
@type number
Read: ccsweaponbasevdata.CrosshairDeltaDistance
Write: ccsweaponbasevdata.CrosshairDeltaDistance = value
```
## IsFullAuto 
```lua
@type boolean
Read: ccsweaponbasevdata.IsFullAuto
Write: ccsweaponbasevdata.IsFullAuto = value
```
## NumBullets 
```lua
@type number
Read: ccsweaponbasevdata.NumBullets
Write: ccsweaponbasevdata.NumBullets = value
```
## CycleTime (Read-Only)
```lua
@type CFiringModeFloat
Read: ccsweaponbasevdata.CycleTime
```
## MaxSpeed (Read-Only)
```lua
@type CFiringModeFloat
Read: ccsweaponbasevdata.MaxSpeed
```
## Spread (Read-Only)
```lua
@type CFiringModeFloat
Read: ccsweaponbasevdata.Spread
```
## InaccuracyCrouch (Read-Only)
```lua
@type CFiringModeFloat
Read: ccsweaponbasevdata.InaccuracyCrouch
```
## InaccuracyStand (Read-Only)
```lua
@type CFiringModeFloat
Read: ccsweaponbasevdata.InaccuracyStand
```
## InaccuracyJump (Read-Only)
```lua
@type CFiringModeFloat
Read: ccsweaponbasevdata.InaccuracyJump
```
## InaccuracyLand (Read-Only)
```lua
@type CFiringModeFloat
Read: ccsweaponbasevdata.InaccuracyLand
```
## InaccuracyLadder (Read-Only)
```lua
@type CFiringModeFloat
Read: ccsweaponbasevdata.InaccuracyLadder
```
## InaccuracyFire (Read-Only)
```lua
@type CFiringModeFloat
Read: ccsweaponbasevdata.InaccuracyFire
```
## InaccuracyMove (Read-Only)
```lua
@type CFiringModeFloat
Read: ccsweaponbasevdata.InaccuracyMove
```
## RecoilAngle (Read-Only)
```lua
@type CFiringModeFloat
Read: ccsweaponbasevdata.RecoilAngle
```
## RecoilAngleVariance (Read-Only)
```lua
@type CFiringModeFloat
Read: ccsweaponbasevdata.RecoilAngleVariance
```
## RecoilMagnitude (Read-Only)
```lua
@type CFiringModeFloat
Read: ccsweaponbasevdata.RecoilMagnitude
```
## RecoilMagnitudeVariance (Read-Only)
```lua
@type CFiringModeFloat
Read: ccsweaponbasevdata.RecoilMagnitudeVariance
```
## TracerFrequency (Read-Only)
```lua
@type CFiringModeInt
Read: ccsweaponbasevdata.TracerFrequency
```
## InaccuracyJumpInitial 
```lua
@type number
Read: ccsweaponbasevdata.InaccuracyJumpInitial
Write: ccsweaponbasevdata.InaccuracyJumpInitial = value
```
## InaccuracyJumpApex 
```lua
@type number
Read: ccsweaponbasevdata.InaccuracyJumpApex
Write: ccsweaponbasevdata.InaccuracyJumpApex = value
```
## InaccuracyReload 
```lua
@type number
Read: ccsweaponbasevdata.InaccuracyReload
Write: ccsweaponbasevdata.InaccuracyReload = value
```
## RecoilSeed 
```lua
@type number
Read: ccsweaponbasevdata.RecoilSeed
Write: ccsweaponbasevdata.RecoilSeed = value
```
## SpreadSeed 
```lua
@type number
Read: ccsweaponbasevdata.SpreadSeed
Write: ccsweaponbasevdata.SpreadSeed = value
```
## TimeToIdleAfterFire 
```lua
@type number
Read: ccsweaponbasevdata.TimeToIdleAfterFire
Write: ccsweaponbasevdata.TimeToIdleAfterFire = value
```
## IdleInterval 
```lua
@type number
Read: ccsweaponbasevdata.IdleInterval
Write: ccsweaponbasevdata.IdleInterval = value
```
## AttackMovespeedFactor 
```lua
@type number
Read: ccsweaponbasevdata.AttackMovespeedFactor
Write: ccsweaponbasevdata.AttackMovespeedFactor = value
```
## HeatPerShot 
```lua
@type number
Read: ccsweaponbasevdata.HeatPerShot
Write: ccsweaponbasevdata.HeatPerShot = value
```
## InaccuracyPitchShift 
```lua
@type number
Read: ccsweaponbasevdata.InaccuracyPitchShift
Write: ccsweaponbasevdata.InaccuracyPitchShift = value
```
## InaccuracyAltSoundThreshold 
```lua
@type number
Read: ccsweaponbasevdata.InaccuracyAltSoundThreshold
Write: ccsweaponbasevdata.InaccuracyAltSoundThreshold = value
```
## BotAudibleRange 
```lua
@type number
Read: ccsweaponbasevdata.BotAudibleRange
Write: ccsweaponbasevdata.BotAudibleRange = value
```
## UseRadioSubtitle 
```lua
@type string
Read: ccsweaponbasevdata.UseRadioSubtitle
Write: ccsweaponbasevdata.UseRadioSubtitle = value
```
## UnzoomsAfterShot 
```lua
@type boolean
Read: ccsweaponbasevdata.UnzoomsAfterShot
Write: ccsweaponbasevdata.UnzoomsAfterShot = value
```
## HideViewModelWhenZoomed 
```lua
@type boolean
Read: ccsweaponbasevdata.HideViewModelWhenZoomed
Write: ccsweaponbasevdata.HideViewModelWhenZoomed = value
```
## ZoomLevels 
```lua
@type number
Read: ccsweaponbasevdata.ZoomLevels
Write: ccsweaponbasevdata.ZoomLevels = value
```
## ZoomFOV1 
```lua
@type number
Read: ccsweaponbasevdata.ZoomFOV1
Write: ccsweaponbasevdata.ZoomFOV1 = value
```
## ZoomFOV2 
```lua
@type number
Read: ccsweaponbasevdata.ZoomFOV2
Write: ccsweaponbasevdata.ZoomFOV2 = value
```
## ZoomTime0 
```lua
@type number
Read: ccsweaponbasevdata.ZoomTime0
Write: ccsweaponbasevdata.ZoomTime0 = value
```
## ZoomTime1 
```lua
@type number
Read: ccsweaponbasevdata.ZoomTime1
Write: ccsweaponbasevdata.ZoomTime1 = value
```
## ZoomTime2 
```lua
@type number
Read: ccsweaponbasevdata.ZoomTime2
Write: ccsweaponbasevdata.ZoomTime2 = value
```
## IronSightPullUpSpeed 
```lua
@type number
Read: ccsweaponbasevdata.IronSightPullUpSpeed
Write: ccsweaponbasevdata.IronSightPullUpSpeed = value
```
## IronSightPutDownSpeed 
```lua
@type number
Read: ccsweaponbasevdata.IronSightPutDownSpeed
Write: ccsweaponbasevdata.IronSightPutDownSpeed = value
```
## IronSightFOV 
```lua
@type number
Read: ccsweaponbasevdata.IronSightFOV
Write: ccsweaponbasevdata.IronSightFOV = value
```
## IronSightPivotForward 
```lua
@type number
Read: ccsweaponbasevdata.IronSightPivotForward
Write: ccsweaponbasevdata.IronSightPivotForward = value
```
## IronSightLooseness 
```lua
@type number
Read: ccsweaponbasevdata.IronSightLooseness
Write: ccsweaponbasevdata.IronSightLooseness = value
```
## PivotAngle 
```lua
@type QAngle
Read: ccsweaponbasevdata.PivotAngle
Write: ccsweaponbasevdata.PivotAngle = value
```
## IronSightEyePos 
```lua
@type Vector
Read: ccsweaponbasevdata.IronSightEyePos
Write: ccsweaponbasevdata.IronSightEyePos = value
```
## Damage 
```lua
@type number
Read: ccsweaponbasevdata.Damage
Write: ccsweaponbasevdata.Damage = value
```
## HeadshotMultiplier 
```lua
@type number
Read: ccsweaponbasevdata.HeadshotMultiplier
Write: ccsweaponbasevdata.HeadshotMultiplier = value
```
## ArmorRatio 
```lua
@type number
Read: ccsweaponbasevdata.ArmorRatio
Write: ccsweaponbasevdata.ArmorRatio = value
```
## Penetration 
```lua
@type number
Read: ccsweaponbasevdata.Penetration
Write: ccsweaponbasevdata.Penetration = value
```
## Range 
```lua
@type number
Read: ccsweaponbasevdata.Range
Write: ccsweaponbasevdata.Range = value
```
## RangeModifier 
```lua
@type number
Read: ccsweaponbasevdata.RangeModifier
Write: ccsweaponbasevdata.RangeModifier = value
```
## FlinchVelocityModifierLarge 
```lua
@type number
Read: ccsweaponbasevdata.FlinchVelocityModifierLarge
Write: ccsweaponbasevdata.FlinchVelocityModifierLarge = value
```
## FlinchVelocityModifierSmall 
```lua
@type number
Read: ccsweaponbasevdata.FlinchVelocityModifierSmall
Write: ccsweaponbasevdata.FlinchVelocityModifierSmall = value
```
## RecoveryTimeCrouch 
```lua
@type number
Read: ccsweaponbasevdata.RecoveryTimeCrouch
Write: ccsweaponbasevdata.RecoveryTimeCrouch = value
```
## RecoveryTimeStand 
```lua
@type number
Read: ccsweaponbasevdata.RecoveryTimeStand
Write: ccsweaponbasevdata.RecoveryTimeStand = value
```
## RecoveryTimeCrouchFinal 
```lua
@type number
Read: ccsweaponbasevdata.RecoveryTimeCrouchFinal
Write: ccsweaponbasevdata.RecoveryTimeCrouchFinal = value
```
## RecoveryTimeStandFinal 
```lua
@type number
Read: ccsweaponbasevdata.RecoveryTimeStandFinal
Write: ccsweaponbasevdata.RecoveryTimeStandFinal = value
```
## RecoveryTransitionStartBullet 
```lua
@type number
Read: ccsweaponbasevdata.RecoveryTransitionStartBullet
Write: ccsweaponbasevdata.RecoveryTransitionStartBullet = value
```
## RecoveryTransitionEndBullet 
```lua
@type number
Read: ccsweaponbasevdata.RecoveryTransitionEndBullet
Write: ccsweaponbasevdata.RecoveryTransitionEndBullet = value
```
## ThrowVelocity 
```lua
@type number
Read: ccsweaponbasevdata.ThrowVelocity
Write: ccsweaponbasevdata.ThrowVelocity = value
```
## SmokeColor 
```lua
@type Vector
Read: ccsweaponbasevdata.SmokeColor
Write: ccsweaponbasevdata.SmokeColor = value
```
## Parent 
```lua
@type CBasePlayerWeaponVData
Read: ccsweaponbasevdata.Parent
Write: ccsweaponbasevdata.Parent = value
```
# Functions
## ToPtr
```lua
@returns string
ccsweaponbasevdata:ToPtr()
```
## IsValid
```lua
@returns bool
ccsweaponbasevdata:IsValid()
```

:::