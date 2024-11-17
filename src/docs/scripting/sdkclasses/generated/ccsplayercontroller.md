---
title: CCSPlayerController
index: true
order: 2
category:
  - Guide
---

# CCSPlayerController

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
CCSPlayerController(ptr)
```
# Properties
## InGameMoneyServices (Read-Only)
```lua
--- @type CCSPlayerController_InGameMoneyServices
Read: ccsplayercontroller.InGameMoneyServices
```
## InventoryServices (Read-Only)
```lua
--- @type CCSPlayerController_InventoryServices
Read: ccsplayercontroller.InventoryServices
```
## ActionTrackingServices (Read-Only)
```lua
--- @type CCSPlayerController_ActionTrackingServices
Read: ccsplayercontroller.ActionTrackingServices
```
## DamageServices (Read-Only)
```lua
--- @type CCSPlayerController_DamageServices
Read: ccsplayercontroller.DamageServices
```
## Ping 
```lua
--- @type number
Read: ccsplayercontroller.Ping
Write: ccsplayercontroller.Ping = value
```
## HasCommunicationAbuseMute 
```lua
--- @type boolean
Read: ccsplayercontroller.HasCommunicationAbuseMute
Write: ccsplayercontroller.HasCommunicationAbuseMute = value
```
## CrosshairCodes 
```lua
--- @type string
Read: ccsplayercontroller.CrosshairCodes
Write: ccsplayercontroller.CrosshairCodes = value
```
## PendingTeamNum 
```lua
--- @type number
Read: ccsplayercontroller.PendingTeamNum
Write: ccsplayercontroller.PendingTeamNum = value
```
## ForceTeamTime 
```lua
--- @type number
Read: ccsplayercontroller.ForceTeamTime
Write: ccsplayercontroller.ForceTeamTime = value
```
## CompTeammateColor 
```lua
--- @type number
Read: ccsplayercontroller.CompTeammateColor
Write: ccsplayercontroller.CompTeammateColor = value
```
## EverPlayedOnTeam 
```lua
--- @type boolean
Read: ccsplayercontroller.EverPlayedOnTeam
Write: ccsplayercontroller.EverPlayedOnTeam = value
```
## AttemptedToGetColor 
```lua
--- @type boolean
Read: ccsplayercontroller.AttemptedToGetColor
Write: ccsplayercontroller.AttemptedToGetColor = value
```
## TeammatePreferredColor 
```lua
--- @type number
Read: ccsplayercontroller.TeammatePreferredColor
Write: ccsplayercontroller.TeammatePreferredColor = value
```
## TeamChanged 
```lua
--- @type boolean
Read: ccsplayercontroller.TeamChanged
Write: ccsplayercontroller.TeamChanged = value
```
## InSwitchTeam 
```lua
--- @type boolean
Read: ccsplayercontroller.InSwitchTeam
Write: ccsplayercontroller.InSwitchTeam = value
```
## HasSeenJoinGame 
```lua
--- @type boolean
Read: ccsplayercontroller.HasSeenJoinGame
Write: ccsplayercontroller.HasSeenJoinGame = value
```
## JustBecameSpectator 
```lua
--- @type boolean
Read: ccsplayercontroller.JustBecameSpectator
Write: ccsplayercontroller.JustBecameSpectator = value
```
## SwitchTeamsOnNextRoundReset 
```lua
--- @type boolean
Read: ccsplayercontroller.SwitchTeamsOnNextRoundReset
Write: ccsplayercontroller.SwitchTeamsOnNextRoundReset = value
```
## RemoveAllItemsOnNextRoundReset 
```lua
--- @type boolean
Read: ccsplayercontroller.RemoveAllItemsOnNextRoundReset
Write: ccsplayercontroller.RemoveAllItemsOnNextRoundReset = value
```
## Clan 
```lua
--- @type string
Read: ccsplayercontroller.Clan
Write: ccsplayercontroller.Clan = value
```
## ClanName 
```lua
--- @type string
Read: ccsplayercontroller.ClanName
Write: ccsplayercontroller.ClanName = value
```
## CoachingTeam 
```lua
--- @type number
Read: ccsplayercontroller.CoachingTeam
Write: ccsplayercontroller.CoachingTeam = value
```
## PlayerDominated 
```lua
--- @type number
Read: ccsplayercontroller.PlayerDominated
Write: ccsplayercontroller.PlayerDominated = value
```
## PlayerDominatingMe 
```lua
--- @type number
Read: ccsplayercontroller.PlayerDominatingMe
Write: ccsplayercontroller.PlayerDominatingMe = value
```
## CompetitiveRanking 
```lua
--- @type number
Read: ccsplayercontroller.CompetitiveRanking
Write: ccsplayercontroller.CompetitiveRanking = value
```
## CompetitiveWins 
```lua
--- @type number
Read: ccsplayercontroller.CompetitiveWins
Write: ccsplayercontroller.CompetitiveWins = value
```
## CompetitiveRankType 
```lua
--- @type number
Read: ccsplayercontroller.CompetitiveRankType
Write: ccsplayercontroller.CompetitiveRankType = value
```
## CompetitiveRankingPredicted_Win 
```lua
--- @type number
Read: ccsplayercontroller.CompetitiveRankingPredicted_Win
Write: ccsplayercontroller.CompetitiveRankingPredicted_Win = value
```
## CompetitiveRankingPredicted_Loss 
```lua
--- @type number
Read: ccsplayercontroller.CompetitiveRankingPredicted_Loss
Write: ccsplayercontroller.CompetitiveRankingPredicted_Loss = value
```
## CompetitiveRankingPredicted_Tie 
```lua
--- @type number
Read: ccsplayercontroller.CompetitiveRankingPredicted_Tie
Write: ccsplayercontroller.CompetitiveRankingPredicted_Tie = value
```
## EndMatchNextMapVote 
```lua
--- @type number
Read: ccsplayercontroller.EndMatchNextMapVote
Write: ccsplayercontroller.EndMatchNextMapVote = value
```
## ActiveQuestId 
```lua
--- @type number
Read: ccsplayercontroller.ActiveQuestId
Write: ccsplayercontroller.ActiveQuestId = value
```
## PlayerTvControlFlags 
```lua
--- @type number
Read: ccsplayercontroller.PlayerTvControlFlags
Write: ccsplayercontroller.PlayerTvControlFlags = value
```
## DraftIndex 
```lua
--- @type number
Read: ccsplayercontroller.DraftIndex
Write: ccsplayercontroller.DraftIndex = value
```
## MsQueuedModeDisconnectionTimestamp 
```lua
--- @type number
Read: ccsplayercontroller.MsQueuedModeDisconnectionTimestamp
Write: ccsplayercontroller.MsQueuedModeDisconnectionTimestamp = value
```
## UiAbandonRecordedReason 
```lua
--- @type number
Read: ccsplayercontroller.UiAbandonRecordedReason
Write: ccsplayercontroller.UiAbandonRecordedReason = value
```
## CannotBeKicked 
```lua
--- @type boolean
Read: ccsplayercontroller.CannotBeKicked
Write: ccsplayercontroller.CannotBeKicked = value
```
## EverFullyConnected 
```lua
--- @type boolean
Read: ccsplayercontroller.EverFullyConnected
Write: ccsplayercontroller.EverFullyConnected = value
```
## AbandonAllowsSurrender 
```lua
--- @type boolean
Read: ccsplayercontroller.AbandonAllowsSurrender
Write: ccsplayercontroller.AbandonAllowsSurrender = value
```
## AbandonOffersInstantSurrender 
```lua
--- @type boolean
Read: ccsplayercontroller.AbandonOffersInstantSurrender
Write: ccsplayercontroller.AbandonOffersInstantSurrender = value
```
## Disconnection1MinWarningPrinted 
```lua
--- @type boolean
Read: ccsplayercontroller.Disconnection1MinWarningPrinted
Write: ccsplayercontroller.Disconnection1MinWarningPrinted = value
```
## ScoreReported 
```lua
--- @type boolean
Read: ccsplayercontroller.ScoreReported
Write: ccsplayercontroller.ScoreReported = value
```
## DisconnectionTick 
```lua
--- @type number
Read: ccsplayercontroller.DisconnectionTick
Write: ccsplayercontroller.DisconnectionTick = value
```
## ControllingBot 
```lua
--- @type boolean
Read: ccsplayercontroller.ControllingBot
Write: ccsplayercontroller.ControllingBot = value
```
## HasControlledBotThisRound 
```lua
--- @type boolean
Read: ccsplayercontroller.HasControlledBotThisRound
Write: ccsplayercontroller.HasControlledBotThisRound = value
```
## HasBeenControlledByPlayerThisRound 
```lua
--- @type boolean
Read: ccsplayercontroller.HasBeenControlledByPlayerThisRound
Write: ccsplayercontroller.HasBeenControlledByPlayerThisRound = value
```
## BotsControlledThisRound 
```lua
--- @type number
Read: ccsplayercontroller.BotsControlledThisRound
Write: ccsplayercontroller.BotsControlledThisRound = value
```
## CanControlObservedBot 
```lua
--- @type boolean
Read: ccsplayercontroller.CanControlObservedBot
Write: ccsplayercontroller.CanControlObservedBot = value
```
## PlayerPawn (Read-Only)
```lua
--- @type CCSPlayerPawn
Read: ccsplayercontroller.PlayerPawn
```
## ObserverPawn (Read-Only)
```lua
--- @type CCSObserverPawn
Read: ccsplayercontroller.ObserverPawn
```
## DesiredObserverMode 
```lua
--- @type number
Read: ccsplayercontroller.DesiredObserverMode
Write: ccsplayercontroller.DesiredObserverMode = value
```
## DesiredObserverTarget (Read-Only)
```lua
--- @type CEntityInstance
Read: ccsplayercontroller.DesiredObserverTarget
```
## PawnIsAlive 
```lua
--- @type boolean
Read: ccsplayercontroller.PawnIsAlive
Write: ccsplayercontroller.PawnIsAlive = value
```
## PawnHealth 
```lua
--- @type number
Read: ccsplayercontroller.PawnHealth
Write: ccsplayercontroller.PawnHealth = value
```
## PawnArmor 
```lua
--- @type number
Read: ccsplayercontroller.PawnArmor
Write: ccsplayercontroller.PawnArmor = value
```
## PawnHasDefuser 
```lua
--- @type boolean
Read: ccsplayercontroller.PawnHasDefuser
Write: ccsplayercontroller.PawnHasDefuser = value
```
## PawnHasHelmet 
```lua
--- @type boolean
Read: ccsplayercontroller.PawnHasHelmet
Write: ccsplayercontroller.PawnHasHelmet = value
```
## PawnCharacterDefIndex 
```lua
--- @type number
Read: ccsplayercontroller.PawnCharacterDefIndex
Write: ccsplayercontroller.PawnCharacterDefIndex = value
```
## PawnLifetimeStart 
```lua
--- @type number
Read: ccsplayercontroller.PawnLifetimeStart
Write: ccsplayercontroller.PawnLifetimeStart = value
```
## PawnLifetimeEnd 
```lua
--- @type number
Read: ccsplayercontroller.PawnLifetimeEnd
Write: ccsplayercontroller.PawnLifetimeEnd = value
```
## PawnBotDifficulty 
```lua
--- @type number
Read: ccsplayercontroller.PawnBotDifficulty
Write: ccsplayercontroller.PawnBotDifficulty = value
```
## OriginalControllerOfCurrentPawn (Read-Only)
```lua
--- @type CCSPlayerController
Read: ccsplayercontroller.OriginalControllerOfCurrentPawn
```
## Score 
```lua
--- @type number
Read: ccsplayercontroller.Score
Write: ccsplayercontroller.Score = value
```
## RoundScore 
```lua
--- @type number
Read: ccsplayercontroller.RoundScore
Write: ccsplayercontroller.RoundScore = value
```
## RoundsWon 
```lua
--- @type number
Read: ccsplayercontroller.RoundsWon
Write: ccsplayercontroller.RoundsWon = value
```
## RecentKillQueue 
```lua
--- @type table
Read: ccsplayercontroller.RecentKillQueue
Write: ccsplayercontroller.RecentKillQueue = value
```
## FirstKill 
```lua
--- @type number
Read: ccsplayercontroller.FirstKill
Write: ccsplayercontroller.FirstKill = value
```
## KillCount 
```lua
--- @type number
Read: ccsplayercontroller.KillCount
Write: ccsplayercontroller.KillCount = value
```
## MvpNoMusic 
```lua
--- @type boolean
Read: ccsplayercontroller.MvpNoMusic
Write: ccsplayercontroller.MvpNoMusic = value
```
## MvpReason 
```lua
--- @type number
Read: ccsplayercontroller.MvpReason
Write: ccsplayercontroller.MvpReason = value
```
## MusicKitID 
```lua
--- @type number
Read: ccsplayercontroller.MusicKitID
Write: ccsplayercontroller.MusicKitID = value
```
## MusicKitMVPs 
```lua
--- @type number
Read: ccsplayercontroller.MusicKitMVPs
Write: ccsplayercontroller.MusicKitMVPs = value
```
## MVPs 
```lua
--- @type number
Read: ccsplayercontroller.MVPs
Write: ccsplayercontroller.MVPs = value
```
## UpdateCounter 
```lua
--- @type number
Read: ccsplayercontroller.UpdateCounter
Write: ccsplayercontroller.UpdateCounter = value
```
## SmoothedPing 
```lua
--- @type number
Read: ccsplayercontroller.SmoothedPing
Write: ccsplayercontroller.SmoothedPing = value
```
## LastHeldVoteTimer (Read-Only)
```lua
--- @type IntervalTimer
Read: ccsplayercontroller.LastHeldVoteTimer
```
## ShowHints 
```lua
--- @type boolean
Read: ccsplayercontroller.ShowHints
Write: ccsplayercontroller.ShowHints = value
```
## NextTimeCheck 
```lua
--- @type number
Read: ccsplayercontroller.NextTimeCheck
Write: ccsplayercontroller.NextTimeCheck = value
```
## JustDidTeamKill 
```lua
--- @type boolean
Read: ccsplayercontroller.JustDidTeamKill
Write: ccsplayercontroller.JustDidTeamKill = value
```
## PunishForTeamKill 
```lua
--- @type boolean
Read: ccsplayercontroller.PunishForTeamKill
Write: ccsplayercontroller.PunishForTeamKill = value
```
## GaveTeamDamageWarning 
```lua
--- @type boolean
Read: ccsplayercontroller.GaveTeamDamageWarning
Write: ccsplayercontroller.GaveTeamDamageWarning = value
```
## GaveTeamDamageWarningThisRound 
```lua
--- @type boolean
Read: ccsplayercontroller.GaveTeamDamageWarningThisRound
Write: ccsplayercontroller.GaveTeamDamageWarningThisRound = value
```
## DblLastReceivedPacketPlatFloatTime 
```lua
--- @type number
Read: ccsplayercontroller.DblLastReceivedPacketPlatFloatTime
Write: ccsplayercontroller.DblLastReceivedPacketPlatFloatTime = value
```
## LastTeamDamageWarningTime 
```lua
--- @type number
Read: ccsplayercontroller.LastTeamDamageWarningTime
Write: ccsplayercontroller.LastTeamDamageWarningTime = value
```
## LastTimePlayerWasDisconnectedForPawnsRemove 
```lua
--- @type number
Read: ccsplayercontroller.LastTimePlayerWasDisconnectedForPawnsRemove
Write: ccsplayercontroller.LastTimePlayerWasDisconnectedForPawnsRemove = value
```
## SuspiciousHitCount 
```lua
--- @type number
Read: ccsplayercontroller.SuspiciousHitCount
Write: ccsplayercontroller.SuspiciousHitCount = value
```
## NonSuspiciousHitStreak 
```lua
--- @type number
Read: ccsplayercontroller.NonSuspiciousHitStreak
Write: ccsplayercontroller.NonSuspiciousHitStreak = value
```
## FireBulletsSeedSynchronized 
```lua
--- @type boolean
Read: ccsplayercontroller.FireBulletsSeedSynchronized
Write: ccsplayercontroller.FireBulletsSeedSynchronized = value
```
## Parent (Read-Only)
```lua
--- @type CBasePlayerController
Read: ccsplayercontroller.Parent
```
# Functions
## ToPtr
```lua
--- @return string
ccsplayercontroller:ToPtr()
```
## IsValid
```lua
--- @return bool
ccsplayercontroller:IsValid()
```

:::