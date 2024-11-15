---
title: CCSTeam
index: true
order: 2
category:
  - Guide
---

# CCSTeam

::: tabs
@tab Lua
# Constructor
```lua
CCSTeam(ptr)
```
# Properties
## LastRecievedShorthandedRoundBonus 
```lua
--- @type number
Read: ccsteam.LastRecievedShorthandedRoundBonus
Write: ccsteam.LastRecievedShorthandedRoundBonus = value
```
## ShorthandedRoundBonusStartRound 
```lua
--- @type number
Read: ccsteam.ShorthandedRoundBonusStartRound
Write: ccsteam.ShorthandedRoundBonusStartRound = value
```
## Surrendered 
```lua
--- @type boolean
Read: ccsteam.Surrendered
Write: ccsteam.Surrendered = value
```
## TeamMatchStat 
```lua
--- @type string
Read: ccsteam.TeamMatchStat
Write: ccsteam.TeamMatchStat = value
```
## NumMapVictories 
```lua
--- @type number
Read: ccsteam.NumMapVictories
Write: ccsteam.NumMapVictories = value
```
## ScoreFirstHalf 
```lua
--- @type number
Read: ccsteam.ScoreFirstHalf
Write: ccsteam.ScoreFirstHalf = value
```
## ScoreSecondHalf 
```lua
--- @type number
Read: ccsteam.ScoreSecondHalf
Write: ccsteam.ScoreSecondHalf = value
```
## ScoreOvertime 
```lua
--- @type number
Read: ccsteam.ScoreOvertime
Write: ccsteam.ScoreOvertime = value
```
## ClanTeamname 
```lua
--- @type string
Read: ccsteam.ClanTeamname
Write: ccsteam.ClanTeamname = value
```
## ClanID 
```lua
--- @type number
Read: ccsteam.ClanID
Write: ccsteam.ClanID = value
```
## TeamFlagImage 
```lua
--- @type string
Read: ccsteam.TeamFlagImage
Write: ccsteam.TeamFlagImage = value
```
## TeamLogoImage 
```lua
--- @type string
Read: ccsteam.TeamLogoImage
Write: ccsteam.TeamLogoImage = value
```
## NextResourceTime 
```lua
--- @type number
Read: ccsteam.NextResourceTime
Write: ccsteam.NextResourceTime = value
```
## LastUpdateSentAt 
```lua
--- @type number
Read: ccsteam.LastUpdateSentAt
Write: ccsteam.LastUpdateSentAt = value
```
## Parent (Read-Only)
```lua
--- @type CTeam
Read: ccsteam.Parent
```
# Functions
## ToPtr
```lua
@returns string
ccsteam:ToPtr()
```
## IsValid
```lua
@returns bool
ccsteam:IsValid()
```

:::