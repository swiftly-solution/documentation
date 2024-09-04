---
title: CCSPlayerPawn
index: true
order: 2
category:
  - Guide
---

# CCSPlayerPawn

::: tabs
@tab Lua
# Constructor
```lua
CCSPlayerPawn(ptr --[[ string ]])
```
# Properties
## BulletServices 
```lua
@type CCSPlayer_BulletServices
Read: ccsplayerpawn.BulletServices
Write: ccsplayerpawn.BulletServices = value
```
## HostageServices 
```lua
@type CCSPlayer_HostageServices
Read: ccsplayerpawn.HostageServices
Write: ccsplayerpawn.HostageServices = value
```
## BuyServices 
```lua
@type CCSPlayer_BuyServices
Read: ccsplayerpawn.BuyServices
Write: ccsplayerpawn.BuyServices = value
```
## ActionTrackingServices 
```lua
@type CCSPlayer_ActionTrackingServices
Read: ccsplayerpawn.ActionTrackingServices
Write: ccsplayerpawn.ActionTrackingServices = value
```
## RadioServices 
```lua
@type CCSPlayer_RadioServices
Read: ccsplayerpawn.RadioServices
Write: ccsplayerpawn.RadioServices = value
```
## DamageReactServices 
```lua
@type CCSPlayer_DamageReactServices
Read: ccsplayerpawn.DamageReactServices
Write: ccsplayerpawn.DamageReactServices = value
```
## CharacterDefIndex 
```lua
@type number
Read: ccsplayerpawn.CharacterDefIndex
Write: ccsplayerpawn.CharacterDefIndex = value
```
## HasFemaleVoice 
```lua
@type boolean
Read: ccsplayerpawn.HasFemaleVoice
Write: ccsplayerpawn.HasFemaleVoice = value
```
## StrVOPrefix 
```lua
@type string
Read: ccsplayerpawn.StrVOPrefix
Write: ccsplayerpawn.StrVOPrefix = value
```
## LastPlaceName 
```lua
@type string
Read: ccsplayerpawn.LastPlaceName
Write: ccsplayerpawn.LastPlaceName = value
```
## InHostageResetZone 
```lua
@type boolean
Read: ccsplayerpawn.InHostageResetZone
Write: ccsplayerpawn.InHostageResetZone = value
```
## InBuyZone 
```lua
@type boolean
Read: ccsplayerpawn.InBuyZone
Write: ccsplayerpawn.InBuyZone = value
```
## WasInBuyZone 
```lua
@type boolean
Read: ccsplayerpawn.WasInBuyZone
Write: ccsplayerpawn.WasInBuyZone = value
```
## InHostageRescueZone 
```lua
@type boolean
Read: ccsplayerpawn.InHostageRescueZone
Write: ccsplayerpawn.InHostageRescueZone = value
```
## InBombZone 
```lua
@type boolean
Read: ccsplayerpawn.InBombZone
Write: ccsplayerpawn.InBombZone = value
```
## WasInHostageRescueZone 
```lua
@type boolean
Read: ccsplayerpawn.WasInHostageRescueZone
Write: ccsplayerpawn.WasInHostageRescueZone = value
```
## RetakesOffering 
```lua
@type number
Read: ccsplayerpawn.RetakesOffering
Write: ccsplayerpawn.RetakesOffering = value
```
## RetakesOfferingCard 
```lua
@type number
Read: ccsplayerpawn.RetakesOfferingCard
Write: ccsplayerpawn.RetakesOfferingCard = value
```
## RetakesHasDefuseKit 
```lua
@type boolean
Read: ccsplayerpawn.RetakesHasDefuseKit
Write: ccsplayerpawn.RetakesHasDefuseKit = value
```
## RetakesMVPLastRound 
```lua
@type boolean
Read: ccsplayerpawn.RetakesMVPLastRound
Write: ccsplayerpawn.RetakesMVPLastRound = value
```
## RetakesMVPBoostItem 
```lua
@type number
Read: ccsplayerpawn.RetakesMVPBoostItem
Write: ccsplayerpawn.RetakesMVPBoostItem = value
```
## RetakesMVPBoostExtraUtility 
```lua
@type number
Read: ccsplayerpawn.RetakesMVPBoostExtraUtility
Write: ccsplayerpawn.RetakesMVPBoostExtraUtility = value
```
## HealthShotBoostExpirationTime 
```lua
@type number
Read: ccsplayerpawn.HealthShotBoostExpirationTime
Write: ccsplayerpawn.HealthShotBoostExpirationTime = value
```
## LandingTimeSeconds 
```lua
@type number
Read: ccsplayerpawn.LandingTimeSeconds
Write: ccsplayerpawn.LandingTimeSeconds = value
```
## AimPunchAngle 
```lua
@type QAngle
Read: ccsplayerpawn.AimPunchAngle
Write: ccsplayerpawn.AimPunchAngle = value
```
## AimPunchAngleVel 
```lua
@type QAngle
Read: ccsplayerpawn.AimPunchAngleVel
Write: ccsplayerpawn.AimPunchAngleVel = value
```
## AimPunchTickBase 
```lua
@type number
Read: ccsplayerpawn.AimPunchTickBase
Write: ccsplayerpawn.AimPunchTickBase = value
```
## AimPunchTickFraction 
```lua
@type number
Read: ccsplayerpawn.AimPunchTickFraction
Write: ccsplayerpawn.AimPunchTickFraction = value
```
## AimPunchCache (Read-Only)
```lua
@type table
Read: ccsplayerpawn.AimPunchCache
```
## IsBuyMenuOpen 
```lua
@type boolean
Read: ccsplayerpawn.IsBuyMenuOpen
Write: ccsplayerpawn.IsBuyMenuOpen = value
```
## LastHeadBoneTransformIsValid 
```lua
@type boolean
Read: ccsplayerpawn.LastHeadBoneTransformIsValid
Write: ccsplayerpawn.LastHeadBoneTransformIsValid = value
```
## LastLandTime 
```lua
@type number
Read: ccsplayerpawn.LastLandTime
Write: ccsplayerpawn.LastLandTime = value
```
## OnGroundLastTick 
```lua
@type boolean
Read: ccsplayerpawn.OnGroundLastTick
Write: ccsplayerpawn.OnGroundLastTick = value
```
## PlayerLocked 
```lua
@type number
Read: ccsplayerpawn.PlayerLocked
Write: ccsplayerpawn.PlayerLocked = value
```
## TimeOfLastInjury 
```lua
@type number
Read: ccsplayerpawn.TimeOfLastInjury
Write: ccsplayerpawn.TimeOfLastInjury = value
```
## NextSprayDecalTime 
```lua
@type number
Read: ccsplayerpawn.NextSprayDecalTime
Write: ccsplayerpawn.NextSprayDecalTime = value
```
## NextSprayDecalTimeExpedited 
```lua
@type boolean
Read: ccsplayerpawn.NextSprayDecalTimeExpedited
Write: ccsplayerpawn.NextSprayDecalTimeExpedited = value
```
## RagdollDamageBone 
```lua
@type number
Read: ccsplayerpawn.RagdollDamageBone
Write: ccsplayerpawn.RagdollDamageBone = value
```
## RagdollDamageForce 
```lua
@type Vector
Read: ccsplayerpawn.RagdollDamageForce
Write: ccsplayerpawn.RagdollDamageForce = value
```
## RagdollDamagePosition 
```lua
@type Vector
Read: ccsplayerpawn.RagdollDamagePosition
Write: ccsplayerpawn.RagdollDamagePosition = value
```
## RagdollDamageWeaponName 
```lua
@type string
Read: ccsplayerpawn.RagdollDamageWeaponName
Write: ccsplayerpawn.RagdollDamageWeaponName = value
```
## RagdollDamageHeadshot 
```lua
@type boolean
Read: ccsplayerpawn.RagdollDamageHeadshot
Write: ccsplayerpawn.RagdollDamageHeadshot = value
```
## RagdollServerOrigin 
```lua
@type Vector
Read: ccsplayerpawn.RagdollServerOrigin
Write: ccsplayerpawn.RagdollServerOrigin = value
```
## EconGloves (Read-Only)
```lua
@type CEconItemView
Read: ccsplayerpawn.EconGloves
```
## EconGlovesChanged 
```lua
@type number
Read: ccsplayerpawn.EconGlovesChanged
Write: ccsplayerpawn.EconGlovesChanged = value
```
## DeathEyeAngles 
```lua
@type QAngle
Read: ccsplayerpawn.DeathEyeAngles
Write: ccsplayerpawn.DeathEyeAngles = value
```
## SkipOneHeadConstraintUpdate 
```lua
@type boolean
Read: ccsplayerpawn.SkipOneHeadConstraintUpdate
Write: ccsplayerpawn.SkipOneHeadConstraintUpdate = value
```
## LeftHanded 
```lua
@type boolean
Read: ccsplayerpawn.LeftHanded
Write: ccsplayerpawn.LeftHanded = value
```
## SwitchedHandednessTime 
```lua
@type number
Read: ccsplayerpawn.SwitchedHandednessTime
Write: ccsplayerpawn.SwitchedHandednessTime = value
```
## ViewmodelOffsetX 
```lua
@type number
Read: ccsplayerpawn.ViewmodelOffsetX
Write: ccsplayerpawn.ViewmodelOffsetX = value
```
## ViewmodelOffsetY 
```lua
@type number
Read: ccsplayerpawn.ViewmodelOffsetY
Write: ccsplayerpawn.ViewmodelOffsetY = value
```
## ViewmodelOffsetZ 
```lua
@type number
Read: ccsplayerpawn.ViewmodelOffsetZ
Write: ccsplayerpawn.ViewmodelOffsetZ = value
```
## ViewmodelFOV 
```lua
@type number
Read: ccsplayerpawn.ViewmodelFOV
Write: ccsplayerpawn.ViewmodelFOV = value
```
## IsWalking 
```lua
@type boolean
Read: ccsplayerpawn.IsWalking
Write: ccsplayerpawn.IsWalking = value
```
## LastGivenDefuserTime 
```lua
@type number
Read: ccsplayerpawn.LastGivenDefuserTime
Write: ccsplayerpawn.LastGivenDefuserTime = value
```
## LastGivenBombTime 
```lua
@type number
Read: ccsplayerpawn.LastGivenBombTime
Write: ccsplayerpawn.LastGivenBombTime = value
```
## DealtDamageToEnemyMostRecentTimestamp 
```lua
@type number
Read: ccsplayerpawn.DealtDamageToEnemyMostRecentTimestamp
Write: ccsplayerpawn.DealtDamageToEnemyMostRecentTimestamp = value
```
## DisplayHistoryBits 
```lua
@type number
Read: ccsplayerpawn.DisplayHistoryBits
Write: ccsplayerpawn.DisplayHistoryBits = value
```
## LastAttackedTeammate 
```lua
@type number
Read: ccsplayerpawn.LastAttackedTeammate
Write: ccsplayerpawn.LastAttackedTeammate = value
```
## AllowAutoFollowTime 
```lua
@type number
Read: ccsplayerpawn.AllowAutoFollowTime
Write: ccsplayerpawn.AllowAutoFollowTime = value
```
## ResetArmorNextSpawn 
```lua
@type boolean
Read: ccsplayerpawn.ResetArmorNextSpawn
Write: ccsplayerpawn.ResetArmorNextSpawn = value
```
## LastKillerIndex 
```lua
@type number
Read: ccsplayerpawn.LastKillerIndex
Write: ccsplayerpawn.LastKillerIndex = value
```
## EntitySpottedState (Read-Only)
```lua
@type EntitySpottedState_t
Read: ccsplayerpawn.EntitySpottedState
```
## SpotRules 
```lua
@type number
Read: ccsplayerpawn.SpotRules
Write: ccsplayerpawn.SpotRules = value
```
## IsScoped 
```lua
@type boolean
Read: ccsplayerpawn.IsScoped
Write: ccsplayerpawn.IsScoped = value
```
## ResumeZoom 
```lua
@type boolean
Read: ccsplayerpawn.ResumeZoom
Write: ccsplayerpawn.ResumeZoom = value
```
## IsDefusing 
```lua
@type boolean
Read: ccsplayerpawn.IsDefusing
Write: ccsplayerpawn.IsDefusing = value
```
## IsGrabbingHostage 
```lua
@type boolean
Read: ccsplayerpawn.IsGrabbingHostage
Write: ccsplayerpawn.IsGrabbingHostage = value
```
## BlockingUseActionInProgress 
```lua
@type number
Read: ccsplayerpawn.BlockingUseActionInProgress
Write: ccsplayerpawn.BlockingUseActionInProgress = value
```
## EmitSoundTime 
```lua
@type number
Read: ccsplayerpawn.EmitSoundTime
Write: ccsplayerpawn.EmitSoundTime = value
```
## InNoDefuseArea 
```lua
@type boolean
Read: ccsplayerpawn.InNoDefuseArea
Write: ccsplayerpawn.InNoDefuseArea = value
```
## BombSiteIndex 
```lua
@type number
Read: ccsplayerpawn.BombSiteIndex
Write: ccsplayerpawn.BombSiteIndex = value
```
## WhichBombZone 
```lua
@type number
Read: ccsplayerpawn.WhichBombZone
Write: ccsplayerpawn.WhichBombZone = value
```
## InBombZoneTrigger 
```lua
@type boolean
Read: ccsplayerpawn.InBombZoneTrigger
Write: ccsplayerpawn.InBombZoneTrigger = value
```
## WasInBombZoneTrigger 
```lua
@type boolean
Read: ccsplayerpawn.WasInBombZoneTrigger
Write: ccsplayerpawn.WasInBombZoneTrigger = value
```
## ShotsFired 
```lua
@type number
Read: ccsplayerpawn.ShotsFired
Write: ccsplayerpawn.ShotsFired = value
```
## FlinchStack 
```lua
@type number
Read: ccsplayerpawn.FlinchStack
Write: ccsplayerpawn.FlinchStack = value
```
## VelocityModifier 
```lua
@type number
Read: ccsplayerpawn.VelocityModifier
Write: ccsplayerpawn.VelocityModifier = value
```
## HitHeading 
```lua
@type number
Read: ccsplayerpawn.HitHeading
Write: ccsplayerpawn.HitHeading = value
```
## HitBodyPart 
```lua
@type number
Read: ccsplayerpawn.HitBodyPart
Write: ccsplayerpawn.HitBodyPart = value
```
## TotalBulletForce 
```lua
@type Vector
Read: ccsplayerpawn.TotalBulletForce
Write: ccsplayerpawn.TotalBulletForce = value
```
## WaitForNoAttack 
```lua
@type boolean
Read: ccsplayerpawn.WaitForNoAttack
Write: ccsplayerpawn.WaitForNoAttack = value
```
## IgnoreLadderJumpTime 
```lua
@type number
Read: ccsplayerpawn.IgnoreLadderJumpTime
Write: ccsplayerpawn.IgnoreLadderJumpTime = value
```
## KilledByHeadshot 
```lua
@type boolean
Read: ccsplayerpawn.KilledByHeadshot
Write: ccsplayerpawn.KilledByHeadshot = value
```
## LastHitBox 
```lua
@type number
Read: ccsplayerpawn.LastHitBox
Write: ccsplayerpawn.LastHitBox = value
```
## LastHealth 
```lua
@type number
Read: ccsplayerpawn.LastHealth
Write: ccsplayerpawn.LastHealth = value
```
## Bot 
```lua
@type CCSBot
Read: ccsplayerpawn.Bot
Write: ccsplayerpawn.Bot = value
```
## BotAllowActive 
```lua
@type boolean
Read: ccsplayerpawn.BotAllowActive
Write: ccsplayerpawn.BotAllowActive = value
```
## ThirdPersonHeading 
```lua
@type QAngle
Read: ccsplayerpawn.ThirdPersonHeading
Write: ccsplayerpawn.ThirdPersonHeading = value
```
## SlopeDropOffset 
```lua
@type number
Read: ccsplayerpawn.SlopeDropOffset
Write: ccsplayerpawn.SlopeDropOffset = value
```
## SlopeDropHeight 
```lua
@type number
Read: ccsplayerpawn.SlopeDropHeight
Write: ccsplayerpawn.SlopeDropHeight = value
```
## HeadConstraintOffset 
```lua
@type Vector
Read: ccsplayerpawn.HeadConstraintOffset
Write: ccsplayerpawn.HeadConstraintOffset = value
```
## LastPickupPriority 
```lua
@type number
Read: ccsplayerpawn.LastPickupPriority
Write: ccsplayerpawn.LastPickupPriority = value
```
## LastPickupPriorityTime 
```lua
@type number
Read: ccsplayerpawn.LastPickupPriorityTime
Write: ccsplayerpawn.LastPickupPriorityTime = value
```
## ArmorValue 
```lua
@type number
Read: ccsplayerpawn.ArmorValue
Write: ccsplayerpawn.ArmorValue = value
```
## CurrentEquipmentValue 
```lua
@type number
Read: ccsplayerpawn.CurrentEquipmentValue
Write: ccsplayerpawn.CurrentEquipmentValue = value
```
## RoundStartEquipmentValue 
```lua
@type number
Read: ccsplayerpawn.RoundStartEquipmentValue
Write: ccsplayerpawn.RoundStartEquipmentValue = value
```
## FreezetimeEndEquipmentValue 
```lua
@type number
Read: ccsplayerpawn.FreezetimeEndEquipmentValue
Write: ccsplayerpawn.FreezetimeEndEquipmentValue = value
```
## LastWeaponFireUsercmd 
```lua
@type number
Read: ccsplayerpawn.LastWeaponFireUsercmd
Write: ccsplayerpawn.LastWeaponFireUsercmd = value
```
## IsSpawning 
```lua
@type boolean
Read: ccsplayerpawn.IsSpawning
Write: ccsplayerpawn.IsSpawning = value
```
## DeathFlags 
```lua
@type number
Read: ccsplayerpawn.DeathFlags
Write: ccsplayerpawn.DeathFlags = value
```
## HasDeathInfo 
```lua
@type boolean
Read: ccsplayerpawn.HasDeathInfo
Write: ccsplayerpawn.HasDeathInfo = value
```
## DeathInfoTime 
```lua
@type number
Read: ccsplayerpawn.DeathInfoTime
Write: ccsplayerpawn.DeathInfoTime = value
```
## DeathInfoOrigin 
```lua
@type Vector
Read: ccsplayerpawn.DeathInfoOrigin
Write: ccsplayerpawn.DeathInfoOrigin = value
```
## PlayerPatchEconIndices 
```lua
@type table
Read: ccsplayerpawn.PlayerPatchEconIndices
Write: ccsplayerpawn.PlayerPatchEconIndices = value
```
## GunGameImmunityColor 
```lua
@type Color
Read: ccsplayerpawn.GunGameImmunityColor
Write: ccsplayerpawn.GunGameImmunityColor = value
```
## GrenadeParameterStashTime 
```lua
@type number
Read: ccsplayerpawn.GrenadeParameterStashTime
Write: ccsplayerpawn.GrenadeParameterStashTime = value
```
## GrenadeParametersStashed 
```lua
@type boolean
Read: ccsplayerpawn.GrenadeParametersStashed
Write: ccsplayerpawn.GrenadeParametersStashed = value
```
## StashedShootAngles 
```lua
@type QAngle
Read: ccsplayerpawn.StashedShootAngles
Write: ccsplayerpawn.StashedShootAngles = value
```
## StashedGrenadeThrowPosition 
```lua
@type Vector
Read: ccsplayerpawn.StashedGrenadeThrowPosition
Write: ccsplayerpawn.StashedGrenadeThrowPosition = value
```
## StashedVelocity 
```lua
@type Vector
Read: ccsplayerpawn.StashedVelocity
Write: ccsplayerpawn.StashedVelocity = value
```
## ShootAngleHistory 
```lua
@type table
Read: ccsplayerpawn.ShootAngleHistory
Write: ccsplayerpawn.ShootAngleHistory = value
```
## ThrowPositionHistory 
```lua
@type table
Read: ccsplayerpawn.ThrowPositionHistory
Write: ccsplayerpawn.ThrowPositionHistory = value
```
## VelocityHistory 
```lua
@type table
Read: ccsplayerpawn.VelocityHistory
Write: ccsplayerpawn.VelocityHistory = value
```
## PredictedDamageTags (Read-Only)
```lua
@type table
Read: ccsplayerpawn.PredictedDamageTags
```
## HighestAppliedDamageTagTick 
```lua
@type number
Read: ccsplayerpawn.HighestAppliedDamageTagTick
Write: ccsplayerpawn.HighestAppliedDamageTagTick = value
```
## Parent (Read-Only)
```lua
@type CCSPlayerPawnBase
Read: ccsplayerpawn.Parent
```
# Functions
## ToPtr
```lua
@returns string
ccsplayerpawn:ToPtr()
```
## IsValid
```lua
@returns bool
ccsplayerpawn:IsValid()
```

:::