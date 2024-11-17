---
title: CCSPlayerController_ActionTrackingServices
index: true
order: 2
category:
  - Guide
---

# CCSPlayerController_ActionTrackingServices

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
CCSPlayerController_ActionTrackingServices(ptr)
```
# Properties
## PerRoundStats (Read-Only)
```lua
--- @type table
Read: ccsplayercontroller_actiontrackingservices.PerRoundStats
```
## MatchStats (Read-Only)
```lua
--- @type CSMatchStats_t
Read: ccsplayercontroller_actiontrackingservices.MatchStats
```
## NumRoundKills 
```lua
--- @type number
Read: ccsplayercontroller_actiontrackingservices.NumRoundKills
Write: ccsplayercontroller_actiontrackingservices.NumRoundKills = value
```
## NumRoundKillsHeadshots 
```lua
--- @type number
Read: ccsplayercontroller_actiontrackingservices.NumRoundKillsHeadshots
Write: ccsplayercontroller_actiontrackingservices.NumRoundKillsHeadshots = value
```
## TotalRoundDamageDealt 
```lua
--- @type number
Read: ccsplayercontroller_actiontrackingservices.TotalRoundDamageDealt
Write: ccsplayercontroller_actiontrackingservices.TotalRoundDamageDealt = value
```
## Parent (Read-Only)
```lua
--- @type CPlayerControllerComponent
Read: ccsplayercontroller_actiontrackingservices.Parent
```
# Functions
## ToPtr
```lua
--- @return string
ccsplayercontroller_actiontrackingservices:ToPtr()
```
## IsValid
```lua
--- @return bool
ccsplayercontroller_actiontrackingservices:IsValid()
```

:::