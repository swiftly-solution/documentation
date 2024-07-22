---
title: CCSGameRules
index: true
order: 2
category:
  - Guide
---

# CCSGameRules

::: tabs
@tab Lua
# Constructor
```lua
CCSGameRules(ptr --[[ string ]])
```
# Properties
## FreezePeriod 
```lua
@type boolean
Read: ccsgamerules.FreezePeriod
Write: ccsgamerules.FreezePeriod = value
```
## WarmupPeriod 
```lua
@type boolean
Read: ccsgamerules.WarmupPeriod
Write: ccsgamerules.WarmupPeriod = value
```
## WarmupPeriodEnd 
```lua
@type number
Read: ccsgamerules.WarmupPeriodEnd
Write: ccsgamerules.WarmupPeriodEnd = value
```
## WarmupPeriodStart 
```lua
@type number
Read: ccsgamerules.WarmupPeriodStart
Write: ccsgamerules.WarmupPeriodStart = value
```
## ServerPaused 
```lua
@type boolean
Read: ccsgamerules.ServerPaused
Write: ccsgamerules.ServerPaused = value
```
## TerroristTimeOutActive 
```lua
@type boolean
Read: ccsgamerules.TerroristTimeOutActive
Write: ccsgamerules.TerroristTimeOutActive = value
```
## CTTimeOutActive 
```lua
@type boolean
Read: ccsgamerules.CTTimeOutActive
Write: ccsgamerules.CTTimeOutActive = value
```
## TerroristTimeOutRemaining 
```lua
@type number
Read: ccsgamerules.TerroristTimeOutRemaining
Write: ccsgamerules.TerroristTimeOutRemaining = value
```
## CTTimeOutRemaining 
```lua
@type number
Read: ccsgamerules.CTTimeOutRemaining
Write: ccsgamerules.CTTimeOutRemaining = value
```
## TerroristTimeOuts 
```lua
@type number
Read: ccsgamerules.TerroristTimeOuts
Write: ccsgamerules.TerroristTimeOuts = value
```
## CTTimeOuts 
```lua
@type number
Read: ccsgamerules.CTTimeOuts
Write: ccsgamerules.CTTimeOuts = value
```
## TechnicalTimeOut 
```lua
@type boolean
Read: ccsgamerules.TechnicalTimeOut
Write: ccsgamerules.TechnicalTimeOut = value
```
## MatchWaitingForResume 
```lua
@type boolean
Read: ccsgamerules.MatchWaitingForResume
Write: ccsgamerules.MatchWaitingForResume = value
```
## RoundTime 
```lua
@type number
Read: ccsgamerules.RoundTime
Write: ccsgamerules.RoundTime = value
```
## MatchStartTime 
```lua
@type number
Read: ccsgamerules.MatchStartTime
Write: ccsgamerules.MatchStartTime = value
```
## RoundStartTime 
```lua
@type number
Read: ccsgamerules.RoundStartTime
Write: ccsgamerules.RoundStartTime = value
```
## RestartRoundTime 
```lua
@type number
Read: ccsgamerules.RestartRoundTime
Write: ccsgamerules.RestartRoundTime = value
```
## GameRestart 
```lua
@type boolean
Read: ccsgamerules.GameRestart
Write: ccsgamerules.GameRestart = value
```
## GameStartTime 
```lua
@type number
Read: ccsgamerules.GameStartTime
Write: ccsgamerules.GameStartTime = value
```
## TimeUntilNextPhaseStarts 
```lua
@type number
Read: ccsgamerules.TimeUntilNextPhaseStarts
Write: ccsgamerules.TimeUntilNextPhaseStarts = value
```
## GamePhase 
```lua
@type number
Read: ccsgamerules.GamePhase
Write: ccsgamerules.GamePhase = value
```
## TotalRoundsPlayed 
```lua
@type number
Read: ccsgamerules.TotalRoundsPlayed
Write: ccsgamerules.TotalRoundsPlayed = value
```
## RoundsPlayedThisPhase 
```lua
@type number
Read: ccsgamerules.RoundsPlayedThisPhase
Write: ccsgamerules.RoundsPlayedThisPhase = value
```
## OvertimePlaying 
```lua
@type number
Read: ccsgamerules.OvertimePlaying
Write: ccsgamerules.OvertimePlaying = value
```
## HostagesRemaining 
```lua
@type number
Read: ccsgamerules.HostagesRemaining
Write: ccsgamerules.HostagesRemaining = value
```
## AnyHostageReached 
```lua
@type boolean
Read: ccsgamerules.AnyHostageReached
Write: ccsgamerules.AnyHostageReached = value
```
## MapHasBombTarget 
```lua
@type boolean
Read: ccsgamerules.MapHasBombTarget
Write: ccsgamerules.MapHasBombTarget = value
```
## MapHasRescueZone 
```lua
@type boolean
Read: ccsgamerules.MapHasRescueZone
Write: ccsgamerules.MapHasRescueZone = value
```
## MapHasBuyZone 
```lua
@type boolean
Read: ccsgamerules.MapHasBuyZone
Write: ccsgamerules.MapHasBuyZone = value
```
## IsQueuedMatchmaking 
```lua
@type boolean
Read: ccsgamerules.IsQueuedMatchmaking
Write: ccsgamerules.IsQueuedMatchmaking = value
```
## QueuedMatchmakingMode 
```lua
@type number
Read: ccsgamerules.QueuedMatchmakingMode
Write: ccsgamerules.QueuedMatchmakingMode = value
```
## IsValveDS 
```lua
@type boolean
Read: ccsgamerules.IsValveDS
Write: ccsgamerules.IsValveDS = value
```
## LogoMap 
```lua
@type boolean
Read: ccsgamerules.LogoMap
Write: ccsgamerules.LogoMap = value
```
## PlayAllStepSoundsOnServer 
```lua
@type boolean
Read: ccsgamerules.PlayAllStepSoundsOnServer
Write: ccsgamerules.PlayAllStepSoundsOnServer = value
```
## SpectatorSlotCount 
```lua
@type number
Read: ccsgamerules.SpectatorSlotCount
Write: ccsgamerules.SpectatorSlotCount = value
```
## MatchDevice 
```lua
@type number
Read: ccsgamerules.MatchDevice
Write: ccsgamerules.MatchDevice = value
```
## HasMatchStarted 
```lua
@type boolean
Read: ccsgamerules.HasMatchStarted
Write: ccsgamerules.HasMatchStarted = value
```
## NextMapInMapgroup 
```lua
@type number
Read: ccsgamerules.NextMapInMapgroup
Write: ccsgamerules.NextMapInMapgroup = value
```
## TournamentEventName 
```lua
@type string
Read: ccsgamerules.TournamentEventName
Write: ccsgamerules.TournamentEventName = value
```
## TournamentEventStage 
```lua
@type string
Read: ccsgamerules.TournamentEventStage
Write: ccsgamerules.TournamentEventStage = value
```
## MatchStatTxt 
```lua
@type string
Read: ccsgamerules.MatchStatTxt
Write: ccsgamerules.MatchStatTxt = value
```
## TournamentPredictionsTxt 
```lua
@type string
Read: ccsgamerules.TournamentPredictionsTxt
Write: ccsgamerules.TournamentPredictionsTxt = value
```
## TournamentPredictionsPct 
```lua
@type number
Read: ccsgamerules.TournamentPredictionsPct
Write: ccsgamerules.TournamentPredictionsPct = value
```
## CMMItemDropRevealStartTime 
```lua
@type number
Read: ccsgamerules.CMMItemDropRevealStartTime
Write: ccsgamerules.CMMItemDropRevealStartTime = value
```
## CMMItemDropRevealEndTime 
```lua
@type number
Read: ccsgamerules.CMMItemDropRevealEndTime
Write: ccsgamerules.CMMItemDropRevealEndTime = value
```
## IsDroppingItems 
```lua
@type boolean
Read: ccsgamerules.IsDroppingItems
Write: ccsgamerules.IsDroppingItems = value
```
## IsQuestEligible 
```lua
@type boolean
Read: ccsgamerules.IsQuestEligible
Write: ccsgamerules.IsQuestEligible = value
```
## IsHltvActive 
```lua
@type boolean
Read: ccsgamerules.IsHltvActive
Write: ccsgamerules.IsHltvActive = value
```
## ProhibitedItemIndices 
```lua
@type table
Read: ccsgamerules.ProhibitedItemIndices
Write: ccsgamerules.ProhibitedItemIndices = value
```
## TournamentActiveCasterAccounts 
```lua
@type table
Read: ccsgamerules.TournamentActiveCasterAccounts
Write: ccsgamerules.TournamentActiveCasterAccounts = value
```
## NumBestOfMaps 
```lua
@type number
Read: ccsgamerules.NumBestOfMaps
Write: ccsgamerules.NumBestOfMaps = value
```
## HalloweenMaskListSeed 
```lua
@type number
Read: ccsgamerules.HalloweenMaskListSeed
Write: ccsgamerules.HalloweenMaskListSeed = value
```
## BombDropped 
```lua
@type boolean
Read: ccsgamerules.BombDropped
Write: ccsgamerules.BombDropped = value
```
## BombPlanted 
```lua
@type boolean
Read: ccsgamerules.BombPlanted
Write: ccsgamerules.BombPlanted = value
```
## RoundWinStatus 
```lua
@type number
Read: ccsgamerules.RoundWinStatus
Write: ccsgamerules.RoundWinStatus = value
```
## RoundWinReason 
```lua
@type number
Read: ccsgamerules.RoundWinReason
Write: ccsgamerules.RoundWinReason = value
```
## TCantBuy 
```lua
@type boolean
Read: ccsgamerules.TCantBuy
Write: ccsgamerules.TCantBuy = value
```
## CTCantBuy 
```lua
@type boolean
Read: ccsgamerules.CTCantBuy
Write: ccsgamerules.CTCantBuy = value
```
## MatchStats_RoundResults 
```lua
@type table
Read: ccsgamerules.MatchStats_RoundResults
Write: ccsgamerules.MatchStats_RoundResults = value
```
## MatchStats_PlayersAlive_CT 
```lua
@type table
Read: ccsgamerules.MatchStats_PlayersAlive_CT
Write: ccsgamerules.MatchStats_PlayersAlive_CT = value
```
## MatchStats_PlayersAlive_T 
```lua
@type table
Read: ccsgamerules.MatchStats_PlayersAlive_T
Write: ccsgamerules.MatchStats_PlayersAlive_T = value
```
## TeamRespawnWaveTimes 
```lua
@type table
Read: ccsgamerules.TeamRespawnWaveTimes
Write: ccsgamerules.TeamRespawnWaveTimes = value
```
## NextRespawnWave 
```lua
@type table
Read: ccsgamerules.NextRespawnWave
Write: ccsgamerules.NextRespawnWave = value
```
## ServerQuestID 
```lua
@type number
Read: ccsgamerules.ServerQuestID
Write: ccsgamerules.ServerQuestID = value
```
## MinimapMins 
```lua
@type Vector
Read: ccsgamerules.MinimapMins
Write: ccsgamerules.MinimapMins = value
```
## MinimapMaxs 
```lua
@type Vector
Read: ccsgamerules.MinimapMaxs
Write: ccsgamerules.MinimapMaxs = value
```
## MinimapVerticalSectionHeights 
```lua
@type table
Read: ccsgamerules.MinimapVerticalSectionHeights
Write: ccsgamerules.MinimapVerticalSectionHeights = value
```
## SpawnedTerrorHuntHeavy 
```lua
@type boolean
Read: ccsgamerules.SpawnedTerrorHuntHeavy
Write: ccsgamerules.SpawnedTerrorHuntHeavy = value
```
## EndMatchMapGroupVoteTypes 
```lua
@type table
Read: ccsgamerules.EndMatchMapGroupVoteTypes
Write: ccsgamerules.EndMatchMapGroupVoteTypes = value
```
## EndMatchMapGroupVoteOptions 
```lua
@type table
Read: ccsgamerules.EndMatchMapGroupVoteOptions
Write: ccsgamerules.EndMatchMapGroupVoteOptions = value
```
## EndMatchMapVoteWinner 
```lua
@type number
Read: ccsgamerules.EndMatchMapVoteWinner
Write: ccsgamerules.EndMatchMapVoteWinner = value
```
## NumConsecutiveCTLoses 
```lua
@type number
Read: ccsgamerules.NumConsecutiveCTLoses
Write: ccsgamerules.NumConsecutiveCTLoses = value
```
## NumConsecutiveTerroristLoses 
```lua
@type number
Read: ccsgamerules.NumConsecutiveTerroristLoses
Write: ccsgamerules.NumConsecutiveTerroristLoses = value
```
## HasHostageBeenTouched 
```lua
@type boolean
Read: ccsgamerules.HasHostageBeenTouched
Write: ccsgamerules.HasHostageBeenTouched = value
```
## IntermissionStartTime 
```lua
@type number
Read: ccsgamerules.IntermissionStartTime
Write: ccsgamerules.IntermissionStartTime = value
```
## IntermissionEndTime 
```lua
@type number
Read: ccsgamerules.IntermissionEndTime
Write: ccsgamerules.IntermissionEndTime = value
```
## LevelInitialized 
```lua
@type boolean
Read: ccsgamerules.LevelInitialized
Write: ccsgamerules.LevelInitialized = value
```
## TotalRoundsPlayed1 
```lua
@type number
Read: ccsgamerules.TotalRoundsPlayed1
Write: ccsgamerules.TotalRoundsPlayed1 = value
```
## UnBalancedRounds 
```lua
@type number
Read: ccsgamerules.UnBalancedRounds
Write: ccsgamerules.UnBalancedRounds = value
```
## EndMatchOnRoundReset 
```lua
@type boolean
Read: ccsgamerules.EndMatchOnRoundReset
Write: ccsgamerules.EndMatchOnRoundReset = value
```
## EndMatchOnThink 
```lua
@type boolean
Read: ccsgamerules.EndMatchOnThink
Write: ccsgamerules.EndMatchOnThink = value
```
## FreezeTime 
```lua
@type number
Read: ccsgamerules.FreezeTime
Write: ccsgamerules.FreezeTime = value
```
## NumTerrorist 
```lua
@type number
Read: ccsgamerules.NumTerrorist
Write: ccsgamerules.NumTerrorist = value
```
## NumCT 
```lua
@type number
Read: ccsgamerules.NumCT
Write: ccsgamerules.NumCT = value
```
## NumSpawnableTerrorist 
```lua
@type number
Read: ccsgamerules.NumSpawnableTerrorist
Write: ccsgamerules.NumSpawnableTerrorist = value
```
## NumSpawnableCT 
```lua
@type number
Read: ccsgamerules.NumSpawnableCT
Write: ccsgamerules.NumSpawnableCT = value
```
## SelectedHostageSpawnIndices 
```lua
@type table
Read: ccsgamerules.SelectedHostageSpawnIndices
Write: ccsgamerules.SelectedHostageSpawnIndices = value
```
## SpawnPointsRandomSeed 
```lua
@type number
Read: ccsgamerules.SpawnPointsRandomSeed
Write: ccsgamerules.SpawnPointsRandomSeed = value
```
## FirstConnected 
```lua
@type boolean
Read: ccsgamerules.FirstConnected
Write: ccsgamerules.FirstConnected = value
```
## CompleteReset 
```lua
@type boolean
Read: ccsgamerules.CompleteReset
Write: ccsgamerules.CompleteReset = value
```
## PickNewTeamsOnReset 
```lua
@type boolean
Read: ccsgamerules.PickNewTeamsOnReset
Write: ccsgamerules.PickNewTeamsOnReset = value
```
## ScrambleTeamsOnRestart 
```lua
@type boolean
Read: ccsgamerules.ScrambleTeamsOnRestart
Write: ccsgamerules.ScrambleTeamsOnRestart = value
```
## SwapTeamsOnRestart 
```lua
@type boolean
Read: ccsgamerules.SwapTeamsOnRestart
Write: ccsgamerules.SwapTeamsOnRestart = value
```
## EndMatchTiedVotes 
```lua
@type table
Read: ccsgamerules.EndMatchTiedVotes
Write: ccsgamerules.EndMatchTiedVotes = value
```
## NeedToAskPlayersForContinueVote 
```lua
@type boolean
Read: ccsgamerules.NeedToAskPlayersForContinueVote
Write: ccsgamerules.NeedToAskPlayersForContinueVote = value
```
## NumQueuedMatchmakingAccounts 
```lua
@type number
Read: ccsgamerules.NumQueuedMatchmakingAccounts
Write: ccsgamerules.NumQueuedMatchmakingAccounts = value
```
## AvgPlayerRank 
```lua
@type number
Read: ccsgamerules.AvgPlayerRank
Write: ccsgamerules.AvgPlayerRank = value
```
## QueuedMatchmakingReservationString 
```lua
@type string
Read: ccsgamerules.QueuedMatchmakingReservationString
Write: ccsgamerules.QueuedMatchmakingReservationString = value
```
## NumTotalTournamentDrops 
```lua
@type number
Read: ccsgamerules.NumTotalTournamentDrops
Write: ccsgamerules.NumTotalTournamentDrops = value
```
## NumSpectatorsCountMax 
```lua
@type number
Read: ccsgamerules.NumSpectatorsCountMax
Write: ccsgamerules.NumSpectatorsCountMax = value
```
## NumSpectatorsCountMaxTV 
```lua
@type number
Read: ccsgamerules.NumSpectatorsCountMaxTV
Write: ccsgamerules.NumSpectatorsCountMaxTV = value
```
## NumSpectatorsCountMaxLnk 
```lua
@type number
Read: ccsgamerules.NumSpectatorsCountMaxLnk
Write: ccsgamerules.NumSpectatorsCountMaxLnk = value
```
## ForceTeamChangeSilent 
```lua
@type boolean
Read: ccsgamerules.ForceTeamChangeSilent
Write: ccsgamerules.ForceTeamChangeSilent = value
```
## LoadingRoundBackupData 
```lua
@type boolean
Read: ccsgamerules.LoadingRoundBackupData
Write: ccsgamerules.LoadingRoundBackupData = value
```
## MatchInfoShowType 
```lua
@type number
Read: ccsgamerules.MatchInfoShowType
Write: ccsgamerules.MatchInfoShowType = value
```
## MatchInfoDecidedTime 
```lua
@type number
Read: ccsgamerules.MatchInfoDecidedTime
Write: ccsgamerules.MatchInfoDecidedTime = value
```
## MTeamDMLastWinningTeamNumber 
```lua
@type number
Read: ccsgamerules.MTeamDMLastWinningTeamNumber
Write: ccsgamerules.MTeamDMLastWinningTeamNumber = value
```
## MTeamDMLastThinkTime 
```lua
@type number
Read: ccsgamerules.MTeamDMLastThinkTime
Write: ccsgamerules.MTeamDMLastThinkTime = value
```
## TeamDMLastAnnouncementTime 
```lua
@type number
Read: ccsgamerules.TeamDMLastAnnouncementTime
Write: ccsgamerules.TeamDMLastAnnouncementTime = value
```
## AccountTerrorist 
```lua
@type number
Read: ccsgamerules.AccountTerrorist
Write: ccsgamerules.AccountTerrorist = value
```
## AccountCT 
```lua
@type number
Read: ccsgamerules.AccountCT
Write: ccsgamerules.AccountCT = value
```
## SpawnPointCount_Terrorist 
```lua
@type number
Read: ccsgamerules.SpawnPointCount_Terrorist
Write: ccsgamerules.SpawnPointCount_Terrorist = value
```
## SpawnPointCount_CT 
```lua
@type number
Read: ccsgamerules.SpawnPointCount_CT
Write: ccsgamerules.SpawnPointCount_CT = value
```
## MaxNumTerrorists 
```lua
@type number
Read: ccsgamerules.MaxNumTerrorists
Write: ccsgamerules.MaxNumTerrorists = value
```
## MaxNumCTs 
```lua
@type number
Read: ccsgamerules.MaxNumCTs
Write: ccsgamerules.MaxNumCTs = value
```
## LoserBonusMostRecentTeam 
```lua
@type number
Read: ccsgamerules.LoserBonusMostRecentTeam
Write: ccsgamerules.LoserBonusMostRecentTeam = value
```
## TmNextPeriodicThink 
```lua
@type number
Read: ccsgamerules.TmNextPeriodicThink
Write: ccsgamerules.TmNextPeriodicThink = value
```
## VoiceWonMatchBragFired 
```lua
@type boolean
Read: ccsgamerules.VoiceWonMatchBragFired
Write: ccsgamerules.VoiceWonMatchBragFired = value
```
## WarmupNextChatNoticeTime 
```lua
@type number
Read: ccsgamerules.WarmupNextChatNoticeTime
Write: ccsgamerules.WarmupNextChatNoticeTime = value
```
## HostagesRescued 
```lua
@type number
Read: ccsgamerules.HostagesRescued
Write: ccsgamerules.HostagesRescued = value
```
## HostagesTouched 
```lua
@type number
Read: ccsgamerules.HostagesTouched
Write: ccsgamerules.HostagesTouched = value
```
## NextHostageAnnouncement 
```lua
@type number
Read: ccsgamerules.NextHostageAnnouncement
Write: ccsgamerules.NextHostageAnnouncement = value
```
## NoTerroristsKilled 
```lua
@type boolean
Read: ccsgamerules.NoTerroristsKilled
Write: ccsgamerules.NoTerroristsKilled = value
```
## NoCTsKilled 
```lua
@type boolean
Read: ccsgamerules.NoCTsKilled
Write: ccsgamerules.NoCTsKilled = value
```
## NoEnemiesKilled 
```lua
@type boolean
Read: ccsgamerules.NoEnemiesKilled
Write: ccsgamerules.NoEnemiesKilled = value
```
## CanDonateWeapons 
```lua
@type boolean
Read: ccsgamerules.CanDonateWeapons
Write: ccsgamerules.CanDonateWeapons = value
```
## FirstKillTime 
```lua
@type number
Read: ccsgamerules.FirstKillTime
Write: ccsgamerules.FirstKillTime = value
```
## FirstBloodTime 
```lua
@type number
Read: ccsgamerules.FirstBloodTime
Write: ccsgamerules.FirstBloodTime = value
```
## HostageWasInjured 
```lua
@type boolean
Read: ccsgamerules.HostageWasInjured
Write: ccsgamerules.HostageWasInjured = value
```
## HostageWasKilled 
```lua
@type boolean
Read: ccsgamerules.HostageWasKilled
Write: ccsgamerules.HostageWasKilled = value
```
## VoteCalled 
```lua
@type boolean
Read: ccsgamerules.VoteCalled
Write: ccsgamerules.VoteCalled = value
```
## ServerVoteOnReset 
```lua
@type boolean
Read: ccsgamerules.ServerVoteOnReset
Write: ccsgamerules.ServerVoteOnReset = value
```
## VoteCheckThrottle 
```lua
@type number
Read: ccsgamerules.VoteCheckThrottle
Write: ccsgamerules.VoteCheckThrottle = value
```
## BuyTimeEnded 
```lua
@type boolean
Read: ccsgamerules.BuyTimeEnded
Write: ccsgamerules.BuyTimeEnded = value
```
## LastFreezeEndBeep 
```lua
@type number
Read: ccsgamerules.LastFreezeEndBeep
Write: ccsgamerules.LastFreezeEndBeep = value
```
## TargetBombed 
```lua
@type boolean
Read: ccsgamerules.TargetBombed
Write: ccsgamerules.TargetBombed = value
```
## BombDefused 
```lua
@type boolean
Read: ccsgamerules.BombDefused
Write: ccsgamerules.BombDefused = value
```
## MapHasBombZone 
```lua
@type boolean
Read: ccsgamerules.MapHasBombZone
Write: ccsgamerules.MapHasBombZone = value
```
## MainCTSpawnPos 
```lua
@type Vector
Read: ccsgamerules.MainCTSpawnPos
Write: ccsgamerules.MainCTSpawnPos = value
```
## CTSpawnPointsMasterList 
```lua
@type table
Read: ccsgamerules.CTSpawnPointsMasterList
Write: ccsgamerules.CTSpawnPointsMasterList = value
```
## TerroristSpawnPointsMasterList 
```lua
@type table
Read: ccsgamerules.TerroristSpawnPointsMasterList
Write: ccsgamerules.TerroristSpawnPointsMasterList = value
```
## RespawningAllRespawnablePlayers 
```lua
@type boolean
Read: ccsgamerules.RespawningAllRespawnablePlayers
Write: ccsgamerules.RespawningAllRespawnablePlayers = value
```
## NextCTSpawnPoint 
```lua
@type number
Read: ccsgamerules.NextCTSpawnPoint
Write: ccsgamerules.NextCTSpawnPoint = value
```
## CTSpawnPointUsedTime 
```lua
@type number
Read: ccsgamerules.CTSpawnPointUsedTime
Write: ccsgamerules.CTSpawnPointUsedTime = value
```
## NextTerroristSpawnPoint 
```lua
@type number
Read: ccsgamerules.NextTerroristSpawnPoint
Write: ccsgamerules.NextTerroristSpawnPoint = value
```
## TerroristSpawnPointUsedTime 
```lua
@type number
Read: ccsgamerules.TerroristSpawnPointUsedTime
Write: ccsgamerules.TerroristSpawnPointUsedTime = value
```
## CTSpawnPoints 
```lua
@type table
Read: ccsgamerules.CTSpawnPoints
Write: ccsgamerules.CTSpawnPoints = value
```
## TerroristSpawnPoints 
```lua
@type table
Read: ccsgamerules.TerroristSpawnPoints
Write: ccsgamerules.TerroristSpawnPoints = value
```
## IsUnreservedGameServer 
```lua
@type boolean
Read: ccsgamerules.IsUnreservedGameServer
Write: ccsgamerules.IsUnreservedGameServer = value
```
## AutobalanceDisplayTime 
```lua
@type number
Read: ccsgamerules.AutobalanceDisplayTime
Write: ccsgamerules.AutobalanceDisplayTime = value
```
## AllowWeaponSwitch 
```lua
@type boolean
Read: ccsgamerules.AllowWeaponSwitch
Write: ccsgamerules.AllowWeaponSwitch = value
```
## RoundTimeWarningTriggered 
```lua
@type boolean
Read: ccsgamerules.RoundTimeWarningTriggered
Write: ccsgamerules.RoundTimeWarningTriggered = value
```
## PhaseChangeAnnouncementTime 
```lua
@type number
Read: ccsgamerules.PhaseChangeAnnouncementTime
Write: ccsgamerules.PhaseChangeAnnouncementTime = value
```
## NextUpdateTeamClanNamesTime 
```lua
@type number
Read: ccsgamerules.NextUpdateTeamClanNamesTime
Write: ccsgamerules.NextUpdateTeamClanNamesTime = value
```
## LastThinkTime 
```lua
@type number
Read: ccsgamerules.LastThinkTime
Write: ccsgamerules.LastThinkTime = value
```
## AccumulatedRoundOffDamage 
```lua
@type number
Read: ccsgamerules.AccumulatedRoundOffDamage
Write: ccsgamerules.AccumulatedRoundOffDamage = value
```
## ShorthandedBonusLastEvalRound 
```lua
@type number
Read: ccsgamerules.ShorthandedBonusLastEvalRound
Write: ccsgamerules.ShorthandedBonusLastEvalRound = value
```
## MatchAbortedEarlyReason 
```lua
@type number
Read: ccsgamerules.MatchAbortedEarlyReason
Write: ccsgamerules.MatchAbortedEarlyReason = value
```
## HasTriggeredRoundStartMusic 
```lua
@type boolean
Read: ccsgamerules.HasTriggeredRoundStartMusic
Write: ccsgamerules.HasTriggeredRoundStartMusic = value
```
## SwitchingTeamsAtRoundReset 
```lua
@type boolean
Read: ccsgamerules.SwitchingTeamsAtRoundReset
Write: ccsgamerules.SwitchingTeamsAtRoundReset = value
```
## GameModeRules 
```lua
@type CCSGameModeRules
Read: ccsgamerules.GameModeRules
Write: ccsgamerules.GameModeRules = value
```
## PlayerResource (Read-Only)
```lua
@type CBaseEntity
Read: ccsgamerules.PlayerResource
```
## RetakeRules (Read-Only)
```lua
@type CRetakeGameRules
Read: ccsgamerules.RetakeRules
```
## TeamLastKillUsedUniqueWeaponMatch 
```lua
@type table
Read: ccsgamerules.TeamLastKillUsedUniqueWeaponMatch
Write: ccsgamerules.TeamLastKillUsedUniqueWeaponMatch = value
```
## MatchEndCount 
```lua
@type number
Read: ccsgamerules.MatchEndCount
Write: ccsgamerules.MatchEndCount = value
```
## TTeamIntroVariant 
```lua
@type number
Read: ccsgamerules.TTeamIntroVariant
Write: ccsgamerules.TTeamIntroVariant = value
```
## CTTeamIntroVariant 
```lua
@type number
Read: ccsgamerules.CTTeamIntroVariant
Write: ccsgamerules.CTTeamIntroVariant = value
```
## TeamIntroPeriod 
```lua
@type boolean
Read: ccsgamerules.TeamIntroPeriod
Write: ccsgamerules.TeamIntroPeriod = value
```
## TeamIntroPeriodEnd 
```lua
@type number
Read: ccsgamerules.TeamIntroPeriodEnd
Write: ccsgamerules.TeamIntroPeriodEnd = value
```
## PlayedTeamIntroVO 
```lua
@type boolean
Read: ccsgamerules.PlayedTeamIntroVO
Write: ccsgamerules.PlayedTeamIntroVO = value
```
## RoundEndWinnerTeam 
```lua
@type number
Read: ccsgamerules.RoundEndWinnerTeam
Write: ccsgamerules.RoundEndWinnerTeam = value
```
## RoundEndReason 
```lua
@type number
Read: ccsgamerules.RoundEndReason
Write: ccsgamerules.RoundEndReason = value
```
## RoundEndShowTimerDefend 
```lua
@type boolean
Read: ccsgamerules.RoundEndShowTimerDefend
Write: ccsgamerules.RoundEndShowTimerDefend = value
```
## RoundEndTimerTime 
```lua
@type number
Read: ccsgamerules.RoundEndTimerTime
Write: ccsgamerules.RoundEndTimerTime = value
```
## RoundEndFunFactToken 
```lua
@type string
Read: ccsgamerules.RoundEndFunFactToken
Write: ccsgamerules.RoundEndFunFactToken = value
```
## RoundEndFunFactPlayerSlot 
```lua
@type number
Read: ccsgamerules.RoundEndFunFactPlayerSlot
Write: ccsgamerules.RoundEndFunFactPlayerSlot = value
```
## RoundEndFunFactData1 
```lua
@type number
Read: ccsgamerules.RoundEndFunFactData1
Write: ccsgamerules.RoundEndFunFactData1 = value
```
## RoundEndFunFactData2 
```lua
@type number
Read: ccsgamerules.RoundEndFunFactData2
Write: ccsgamerules.RoundEndFunFactData2 = value
```
## RoundEndFunFactData3 
```lua
@type number
Read: ccsgamerules.RoundEndFunFactData3
Write: ccsgamerules.RoundEndFunFactData3 = value
```
## RoundEndMessage 
```lua
@type string
Read: ccsgamerules.RoundEndMessage
Write: ccsgamerules.RoundEndMessage = value
```
## RoundEndPlayerCount 
```lua
@type number
Read: ccsgamerules.RoundEndPlayerCount
Write: ccsgamerules.RoundEndPlayerCount = value
```
## RoundEndNoMusic 
```lua
@type boolean
Read: ccsgamerules.RoundEndNoMusic
Write: ccsgamerules.RoundEndNoMusic = value
```
## RoundEndLegacy 
```lua
@type number
Read: ccsgamerules.RoundEndLegacy
Write: ccsgamerules.RoundEndLegacy = value
```
## RoundEndCount 
```lua
@type number
Read: ccsgamerules.RoundEndCount
Write: ccsgamerules.RoundEndCount = value
```
## RoundStartRoundNumber 
```lua
@type number
Read: ccsgamerules.RoundStartRoundNumber
Write: ccsgamerules.RoundStartRoundNumber = value
```
## RoundStartCount 
```lua
@type number
Read: ccsgamerules.RoundStartCount
Write: ccsgamerules.RoundStartCount = value
```
## LastPerfSampleTime 
```lua
@type number
Read: ccsgamerules.LastPerfSampleTime
Write: ccsgamerules.LastPerfSampleTime = value
```
## Parent 
```lua
@type CTeamplayRules
Read: ccsgamerules.Parent
Write: ccsgamerules.Parent = value
```
# Functions
## ToPtr
```lua
@returns string
ccsgamerules:ToPtr()
```
## IsValid
```lua
@returns bool
ccsgamerules:IsValid()
```

:::