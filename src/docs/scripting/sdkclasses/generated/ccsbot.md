---
title: CCSBot
index: true
order: 2
category:
  - Guide
---

# CCSBot

::: tabs
@tab Lua
# Constructor
```lua
CCSBot(ptr --[[ string ]])
```
# Properties
## EyePosition 
```lua
@type Vector
Read: ccsbot.EyePosition
Write: ccsbot.EyePosition = value
```
## Name 
```lua
@type string
Read: ccsbot.Name
Write: ccsbot.Name = value
```
## CombatRange 
```lua
@type number
Read: ccsbot.CombatRange
Write: ccsbot.CombatRange = value
```
## IsRogue 
```lua
@type boolean
Read: ccsbot.IsRogue
Write: ccsbot.IsRogue = value
```
## RogueTimer 
```lua
@type CountdownTimer
Read: ccsbot.RogueTimer
Write: ccsbot.RogueTimer = value
```
## DiedLastRound 
```lua
@type boolean
Read: ccsbot.DiedLastRound
Write: ccsbot.DiedLastRound = value
```
## SafeTime 
```lua
@type number
Read: ccsbot.SafeTime
Write: ccsbot.SafeTime = value
```
## WasSafe 
```lua
@type boolean
Read: ccsbot.WasSafe
Write: ccsbot.WasSafe = value
```
## BlindFire 
```lua
@type boolean
Read: ccsbot.BlindFire
Write: ccsbot.BlindFire = value
```
## SurpriseTimer 
```lua
@type CountdownTimer
Read: ccsbot.SurpriseTimer
Write: ccsbot.SurpriseTimer = value
```
## AllowActive 
```lua
@type boolean
Read: ccsbot.AllowActive
Write: ccsbot.AllowActive = value
```
## IsFollowing 
```lua
@type boolean
Read: ccsbot.IsFollowing
Write: ccsbot.IsFollowing = value
```
## Leader (Read-Only)
```lua
@type CCSPlayerPawn
Read: ccsbot.Leader
```
## FollowTimestamp 
```lua
@type number
Read: ccsbot.FollowTimestamp
Write: ccsbot.FollowTimestamp = value
```
## AllowAutoFollowTime 
```lua
@type number
Read: ccsbot.AllowAutoFollowTime
Write: ccsbot.AllowAutoFollowTime = value
```
## HurryTimer 
```lua
@type CountdownTimer
Read: ccsbot.HurryTimer
Write: ccsbot.HurryTimer = value
```
## AlertTimer 
```lua
@type CountdownTimer
Read: ccsbot.AlertTimer
Write: ccsbot.AlertTimer = value
```
## SneakTimer 
```lua
@type CountdownTimer
Read: ccsbot.SneakTimer
Write: ccsbot.SneakTimer = value
```
## PanicTimer 
```lua
@type CountdownTimer
Read: ccsbot.PanicTimer
Write: ccsbot.PanicTimer = value
```
## StateTimestamp 
```lua
@type number
Read: ccsbot.StateTimestamp
Write: ccsbot.StateTimestamp = value
```
## IsAttacking 
```lua
@type boolean
Read: ccsbot.IsAttacking
Write: ccsbot.IsAttacking = value
```
## IsOpeningDoor 
```lua
@type boolean
Read: ccsbot.IsOpeningDoor
Write: ccsbot.IsOpeningDoor = value
```
## TaskEntity (Read-Only)
```lua
@type CBaseEntity
Read: ccsbot.TaskEntity
```
## GoalPosition 
```lua
@type Vector
Read: ccsbot.GoalPosition
Write: ccsbot.GoalPosition = value
```
## GoalEntity (Read-Only)
```lua
@type CBaseEntity
Read: ccsbot.GoalEntity
```
## Avoid (Read-Only)
```lua
@type CBaseEntity
Read: ccsbot.Avoid
```
## AvoidTimestamp 
```lua
@type number
Read: ccsbot.AvoidTimestamp
Write: ccsbot.AvoidTimestamp = value
```
## IsStopping 
```lua
@type boolean
Read: ccsbot.IsStopping
Write: ccsbot.IsStopping = value
```
## HasVisitedEnemySpawn 
```lua
@type boolean
Read: ccsbot.HasVisitedEnemySpawn
Write: ccsbot.HasVisitedEnemySpawn = value
```
## StillTimer 
```lua
@type IntervalTimer
Read: ccsbot.StillTimer
Write: ccsbot.StillTimer = value
```
## EyeAnglesUnderPathFinderControl 
```lua
@type boolean
Read: ccsbot.EyeAnglesUnderPathFinderControl
Write: ccsbot.EyeAnglesUnderPathFinderControl = value
```
## PathIndex 
```lua
@type number
Read: ccsbot.PathIndex
Write: ccsbot.PathIndex = value
```
## AreaEnteredTimestamp 
```lua
@type number
Read: ccsbot.AreaEnteredTimestamp
Write: ccsbot.AreaEnteredTimestamp = value
```
## RepathTimer 
```lua
@type CountdownTimer
Read: ccsbot.RepathTimer
Write: ccsbot.RepathTimer = value
```
## AvoidFriendTimer 
```lua
@type CountdownTimer
Read: ccsbot.AvoidFriendTimer
Write: ccsbot.AvoidFriendTimer = value
```
## IsFriendInTheWay 
```lua
@type boolean
Read: ccsbot.IsFriendInTheWay
Write: ccsbot.IsFriendInTheWay = value
```
## PoliteTimer 
```lua
@type CountdownTimer
Read: ccsbot.PoliteTimer
Write: ccsbot.PoliteTimer = value
```
## IsWaitingBehindFriend 
```lua
@type boolean
Read: ccsbot.IsWaitingBehindFriend
Write: ccsbot.IsWaitingBehindFriend = value
```
## PathLadderEnd 
```lua
@type number
Read: ccsbot.PathLadderEnd
Write: ccsbot.PathLadderEnd = value
```
## MustRunTimer 
```lua
@type CountdownTimer
Read: ccsbot.MustRunTimer
Write: ccsbot.MustRunTimer = value
```
## WaitTimer 
```lua
@type CountdownTimer
Read: ccsbot.WaitTimer
Write: ccsbot.WaitTimer = value
```
## UpdateTravelDistanceTimer 
```lua
@type CountdownTimer
Read: ccsbot.UpdateTravelDistanceTimer
Write: ccsbot.UpdateTravelDistanceTimer = value
```
## PlayerTravelDistance 
```lua
@type table
Read: ccsbot.PlayerTravelDistance
Write: ccsbot.PlayerTravelDistance = value
```
## TravelDistancePhase 
```lua
@type number
Read: ccsbot.TravelDistancePhase
Write: ccsbot.TravelDistancePhase = value
```
## HostageEscortCount 
```lua
@type number
Read: ccsbot.HostageEscortCount
Write: ccsbot.HostageEscortCount = value
```
## HostageEscortCountTimestamp 
```lua
@type number
Read: ccsbot.HostageEscortCountTimestamp
Write: ccsbot.HostageEscortCountTimestamp = value
```
## DesiredTeam 
```lua
@type number
Read: ccsbot.DesiredTeam
Write: ccsbot.DesiredTeam = value
```
## HasJoined 
```lua
@type boolean
Read: ccsbot.HasJoined
Write: ccsbot.HasJoined = value
```
## IsWaitingForHostage 
```lua
@type boolean
Read: ccsbot.IsWaitingForHostage
Write: ccsbot.IsWaitingForHostage = value
```
## InhibitWaitingForHostageTimer 
```lua
@type CountdownTimer
Read: ccsbot.InhibitWaitingForHostageTimer
Write: ccsbot.InhibitWaitingForHostageTimer = value
```
## WaitForHostageTimer 
```lua
@type CountdownTimer
Read: ccsbot.WaitForHostageTimer
Write: ccsbot.WaitForHostageTimer = value
```
## NoisePosition 
```lua
@type Vector
Read: ccsbot.NoisePosition
Write: ccsbot.NoisePosition = value
```
## NoiseTravelDistance 
```lua
@type number
Read: ccsbot.NoiseTravelDistance
Write: ccsbot.NoiseTravelDistance = value
```
## NoiseTimestamp 
```lua
@type number
Read: ccsbot.NoiseTimestamp
Write: ccsbot.NoiseTimestamp = value
```
## NoiseSource (Read-Only)
```lua
@type CCSPlayerPawn
Read: ccsbot.NoiseSource
```
## NoiseBendTimer 
```lua
@type CountdownTimer
Read: ccsbot.NoiseBendTimer
Write: ccsbot.NoiseBendTimer = value
```
## BentNoisePosition 
```lua
@type Vector
Read: ccsbot.BentNoisePosition
Write: ccsbot.BentNoisePosition = value
```
## BendNoisePositionValid 
```lua
@type boolean
Read: ccsbot.BendNoisePositionValid
Write: ccsbot.BendNoisePositionValid = value
```
## LookAroundStateTimestamp 
```lua
@type number
Read: ccsbot.LookAroundStateTimestamp
Write: ccsbot.LookAroundStateTimestamp = value
```
## LookAheadAngle 
```lua
@type number
Read: ccsbot.LookAheadAngle
Write: ccsbot.LookAheadAngle = value
```
## ForwardAngle 
```lua
@type number
Read: ccsbot.ForwardAngle
Write: ccsbot.ForwardAngle = value
```
## InhibitLookAroundTimestamp 
```lua
@type number
Read: ccsbot.InhibitLookAroundTimestamp
Write: ccsbot.InhibitLookAroundTimestamp = value
```
## LookAtSpot 
```lua
@type Vector
Read: ccsbot.LookAtSpot
Write: ccsbot.LookAtSpot = value
```
## LookAtSpotDuration 
```lua
@type number
Read: ccsbot.LookAtSpotDuration
Write: ccsbot.LookAtSpotDuration = value
```
## LookAtSpotTimestamp 
```lua
@type number
Read: ccsbot.LookAtSpotTimestamp
Write: ccsbot.LookAtSpotTimestamp = value
```
## LookAtSpotAngleTolerance 
```lua
@type number
Read: ccsbot.LookAtSpotAngleTolerance
Write: ccsbot.LookAtSpotAngleTolerance = value
```
## LookAtSpotClearIfClose 
```lua
@type boolean
Read: ccsbot.LookAtSpotClearIfClose
Write: ccsbot.LookAtSpotClearIfClose = value
```
## LookAtSpotAttack 
```lua
@type boolean
Read: ccsbot.LookAtSpotAttack
Write: ccsbot.LookAtSpotAttack = value
```
## LookAtDesc 
```lua
@type string
Read: ccsbot.LookAtDesc
Write: ccsbot.LookAtDesc = value
```
## PeripheralTimestamp 
```lua
@type number
Read: ccsbot.PeripheralTimestamp
Write: ccsbot.PeripheralTimestamp = value
```
## ApproachPointCount 
```lua
@type number
Read: ccsbot.ApproachPointCount
Write: ccsbot.ApproachPointCount = value
```
## ApproachPointViewPosition 
```lua
@type Vector
Read: ccsbot.ApproachPointViewPosition
Write: ccsbot.ApproachPointViewPosition = value
```
## ViewSteadyTimer 
```lua
@type IntervalTimer
Read: ccsbot.ViewSteadyTimer
Write: ccsbot.ViewSteadyTimer = value
```
## TossGrenadeTimer 
```lua
@type CountdownTimer
Read: ccsbot.TossGrenadeTimer
Write: ccsbot.TossGrenadeTimer = value
```
## IsAvoidingGrenade 
```lua
@type CountdownTimer
Read: ccsbot.IsAvoidingGrenade
Write: ccsbot.IsAvoidingGrenade = value
```
## SpotCheckTimestamp 
```lua
@type number
Read: ccsbot.SpotCheckTimestamp
Write: ccsbot.SpotCheckTimestamp = value
```
## CheckedHidingSpotCount 
```lua
@type number
Read: ccsbot.CheckedHidingSpotCount
Write: ccsbot.CheckedHidingSpotCount = value
```
## LookPitch 
```lua
@type number
Read: ccsbot.LookPitch
Write: ccsbot.LookPitch = value
```
## LookPitchVel 
```lua
@type number
Read: ccsbot.LookPitchVel
Write: ccsbot.LookPitchVel = value
```
## LookYaw 
```lua
@type number
Read: ccsbot.LookYaw
Write: ccsbot.LookYaw = value
```
## LookYawVel 
```lua
@type number
Read: ccsbot.LookYawVel
Write: ccsbot.LookYawVel = value
```
## TargetSpot 
```lua
@type Vector
Read: ccsbot.TargetSpot
Write: ccsbot.TargetSpot = value
```
## TargetSpotVelocity 
```lua
@type Vector
Read: ccsbot.TargetSpotVelocity
Write: ccsbot.TargetSpotVelocity = value
```
## TargetSpotPredicted 
```lua
@type Vector
Read: ccsbot.TargetSpotPredicted
Write: ccsbot.TargetSpotPredicted = value
```
## AimError 
```lua
@type QAngle
Read: ccsbot.AimError
Write: ccsbot.AimError = value
```
## AimGoal 
```lua
@type QAngle
Read: ccsbot.AimGoal
Write: ccsbot.AimGoal = value
```
## TargetSpotTime 
```lua
@type number
Read: ccsbot.TargetSpotTime
Write: ccsbot.TargetSpotTime = value
```
## AimFocus 
```lua
@type number
Read: ccsbot.AimFocus
Write: ccsbot.AimFocus = value
```
## AimFocusInterval 
```lua
@type number
Read: ccsbot.AimFocusInterval
Write: ccsbot.AimFocusInterval = value
```
## AimFocusNextUpdate 
```lua
@type number
Read: ccsbot.AimFocusNextUpdate
Write: ccsbot.AimFocusNextUpdate = value
```
## IgnoreEnemiesTimer 
```lua
@type CountdownTimer
Read: ccsbot.IgnoreEnemiesTimer
Write: ccsbot.IgnoreEnemiesTimer = value
```
## Enemy (Read-Only)
```lua
@type CCSPlayerPawn
Read: ccsbot.Enemy
```
## IsEnemyVisible 
```lua
@type boolean
Read: ccsbot.IsEnemyVisible
Write: ccsbot.IsEnemyVisible = value
```
## VisibleEnemyParts 
```lua
@type number
Read: ccsbot.VisibleEnemyParts
Write: ccsbot.VisibleEnemyParts = value
```
## LastEnemyPosition 
```lua
@type Vector
Read: ccsbot.LastEnemyPosition
Write: ccsbot.LastEnemyPosition = value
```
## LastSawEnemyTimestamp 
```lua
@type number
Read: ccsbot.LastSawEnemyTimestamp
Write: ccsbot.LastSawEnemyTimestamp = value
```
## FirstSawEnemyTimestamp 
```lua
@type number
Read: ccsbot.FirstSawEnemyTimestamp
Write: ccsbot.FirstSawEnemyTimestamp = value
```
## CurrentEnemyAcquireTimestamp 
```lua
@type number
Read: ccsbot.CurrentEnemyAcquireTimestamp
Write: ccsbot.CurrentEnemyAcquireTimestamp = value
```
## EnemyDeathTimestamp 
```lua
@type number
Read: ccsbot.EnemyDeathTimestamp
Write: ccsbot.EnemyDeathTimestamp = value
```
## FriendDeathTimestamp 
```lua
@type number
Read: ccsbot.FriendDeathTimestamp
Write: ccsbot.FriendDeathTimestamp = value
```
## IsLastEnemyDead 
```lua
@type boolean
Read: ccsbot.IsLastEnemyDead
Write: ccsbot.IsLastEnemyDead = value
```
## NearbyEnemyCount 
```lua
@type number
Read: ccsbot.NearbyEnemyCount
Write: ccsbot.NearbyEnemyCount = value
```
## Bomber (Read-Only)
```lua
@type CCSPlayerPawn
Read: ccsbot.Bomber
```
## NearbyFriendCount 
```lua
@type number
Read: ccsbot.NearbyFriendCount
Write: ccsbot.NearbyFriendCount = value
```
## ClosestVisibleFriend (Read-Only)
```lua
@type CCSPlayerPawn
Read: ccsbot.ClosestVisibleFriend
```
## ClosestVisibleHumanFriend (Read-Only)
```lua
@type CCSPlayerPawn
Read: ccsbot.ClosestVisibleHumanFriend
```
## AttentionInterval 
```lua
@type IntervalTimer
Read: ccsbot.AttentionInterval
Write: ccsbot.AttentionInterval = value
```
## Attacker (Read-Only)
```lua
@type CCSPlayerPawn
Read: ccsbot.Attacker
```
## AttackedTimestamp 
```lua
@type number
Read: ccsbot.AttackedTimestamp
Write: ccsbot.AttackedTimestamp = value
```
## BurnedByFlamesTimer 
```lua
@type IntervalTimer
Read: ccsbot.BurnedByFlamesTimer
Write: ccsbot.BurnedByFlamesTimer = value
```
## LastVictimID 
```lua
@type number
Read: ccsbot.LastVictimID
Write: ccsbot.LastVictimID = value
```
## IsAimingAtEnemy 
```lua
@type boolean
Read: ccsbot.IsAimingAtEnemy
Write: ccsbot.IsAimingAtEnemy = value
```
## IsRapidFiring 
```lua
@type boolean
Read: ccsbot.IsRapidFiring
Write: ccsbot.IsRapidFiring = value
```
## EquipTimer 
```lua
@type IntervalTimer
Read: ccsbot.EquipTimer
Write: ccsbot.EquipTimer = value
```
## ZoomTimer 
```lua
@type CountdownTimer
Read: ccsbot.ZoomTimer
Write: ccsbot.ZoomTimer = value
```
## FireWeaponTimestamp 
```lua
@type number
Read: ccsbot.FireWeaponTimestamp
Write: ccsbot.FireWeaponTimestamp = value
```
## LookForWeaponsOnGroundTimer 
```lua
@type CountdownTimer
Read: ccsbot.LookForWeaponsOnGroundTimer
Write: ccsbot.LookForWeaponsOnGroundTimer = value
```
## IsSleeping 
```lua
@type boolean
Read: ccsbot.IsSleeping
Write: ccsbot.IsSleeping = value
```
## IsEnemySniperVisible 
```lua
@type boolean
Read: ccsbot.IsEnemySniperVisible
Write: ccsbot.IsEnemySniperVisible = value
```
## SawEnemySniperTimer 
```lua
@type CountdownTimer
Read: ccsbot.SawEnemySniperTimer
Write: ccsbot.SawEnemySniperTimer = value
```
## EnemyQueueIndex 
```lua
@type number
Read: ccsbot.EnemyQueueIndex
Write: ccsbot.EnemyQueueIndex = value
```
## EnemyQueueCount 
```lua
@type number
Read: ccsbot.EnemyQueueCount
Write: ccsbot.EnemyQueueCount = value
```
## EnemyQueueAttendIndex 
```lua
@type number
Read: ccsbot.EnemyQueueAttendIndex
Write: ccsbot.EnemyQueueAttendIndex = value
```
## IsStuck 
```lua
@type boolean
Read: ccsbot.IsStuck
Write: ccsbot.IsStuck = value
```
## StuckTimestamp 
```lua
@type number
Read: ccsbot.StuckTimestamp
Write: ccsbot.StuckTimestamp = value
```
## StuckSpot 
```lua
@type Vector
Read: ccsbot.StuckSpot
Write: ccsbot.StuckSpot = value
```
## WiggleTimer 
```lua
@type CountdownTimer
Read: ccsbot.WiggleTimer
Write: ccsbot.WiggleTimer = value
```
## StuckJumpTimer 
```lua
@type CountdownTimer
Read: ccsbot.StuckJumpTimer
Write: ccsbot.StuckJumpTimer = value
```
## NextCleanupCheckTimestamp 
```lua
@type number
Read: ccsbot.NextCleanupCheckTimestamp
Write: ccsbot.NextCleanupCheckTimestamp = value
```
## AvgVel 
```lua
@type table
Read: ccsbot.AvgVel
Write: ccsbot.AvgVel = value
```
## AvgVelIndex 
```lua
@type number
Read: ccsbot.AvgVelIndex
Write: ccsbot.AvgVelIndex = value
```
## AvgVelCount 
```lua
@type number
Read: ccsbot.AvgVelCount
Write: ccsbot.AvgVelCount = value
```
## LastOrigin 
```lua
@type Vector
Read: ccsbot.LastOrigin
Write: ccsbot.LastOrigin = value
```
## LastRadioRecievedTimestamp 
```lua
@type number
Read: ccsbot.LastRadioRecievedTimestamp
Write: ccsbot.LastRadioRecievedTimestamp = value
```
## LastRadioSentTimestamp 
```lua
@type number
Read: ccsbot.LastRadioSentTimestamp
Write: ccsbot.LastRadioSentTimestamp = value
```
## RadioSubject (Read-Only)
```lua
@type CCSPlayerPawn
Read: ccsbot.RadioSubject
```
## RadioPosition 
```lua
@type Vector
Read: ccsbot.RadioPosition
Write: ccsbot.RadioPosition = value
```
## VoiceEndTimestamp 
```lua
@type number
Read: ccsbot.VoiceEndTimestamp
Write: ccsbot.VoiceEndTimestamp = value
```
## LastValidReactionQueueFrame 
```lua
@type number
Read: ccsbot.LastValidReactionQueueFrame
Write: ccsbot.LastValidReactionQueueFrame = value
```
## Parent 
```lua
@type CBot
Read: ccsbot.Parent
Write: ccsbot.Parent = value
```
# Functions
## ToPtr
```lua
@returns string
ccsbot:ToPtr()
```
## IsValid
```lua
@returns bool
ccsbot:IsValid()
```

:::