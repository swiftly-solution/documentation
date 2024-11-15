---
title: CSMatchStats_t
index: true
order: 2
category:
  - Guide
---

# CSMatchStats_t

::: tabs
@tab Lua
# Constructor
```lua
CSMatchStats_t(ptr)
```
# Properties
## Enemy5Ks 
```lua
--- @type number
Read: csmatchstats_t.Enemy5Ks
Write: csmatchstats_t.Enemy5Ks = value
```
## Enemy4Ks 
```lua
--- @type number
Read: csmatchstats_t.Enemy4Ks
Write: csmatchstats_t.Enemy4Ks = value
```
## Enemy3Ks 
```lua
--- @type number
Read: csmatchstats_t.Enemy3Ks
Write: csmatchstats_t.Enemy3Ks = value
```
## EnemyKnifeKills 
```lua
--- @type number
Read: csmatchstats_t.EnemyKnifeKills
Write: csmatchstats_t.EnemyKnifeKills = value
```
## EnemyTaserKills 
```lua
--- @type number
Read: csmatchstats_t.EnemyTaserKills
Write: csmatchstats_t.EnemyTaserKills = value
```
## Enemy2Ks 
```lua
--- @type number
Read: csmatchstats_t.Enemy2Ks
Write: csmatchstats_t.Enemy2Ks = value
```
## Utility_Count 
```lua
--- @type number
Read: csmatchstats_t.Utility_Count
Write: csmatchstats_t.Utility_Count = value
```
## Utility_Successes 
```lua
--- @type number
Read: csmatchstats_t.Utility_Successes
Write: csmatchstats_t.Utility_Successes = value
```
## Utility_Enemies 
```lua
--- @type number
Read: csmatchstats_t.Utility_Enemies
Write: csmatchstats_t.Utility_Enemies = value
```
## Flash_Count 
```lua
--- @type number
Read: csmatchstats_t.Flash_Count
Write: csmatchstats_t.Flash_Count = value
```
## Flash_Successes 
```lua
--- @type number
Read: csmatchstats_t.Flash_Successes
Write: csmatchstats_t.Flash_Successes = value
```
## HealthPointsRemovedTotal 
```lua
--- @type number
Read: csmatchstats_t.HealthPointsRemovedTotal
Write: csmatchstats_t.HealthPointsRemovedTotal = value
```
## HealthPointsDealtTotal 
```lua
--- @type number
Read: csmatchstats_t.HealthPointsDealtTotal
Write: csmatchstats_t.HealthPointsDealtTotal = value
```
## ShotsFiredTotal 
```lua
--- @type number
Read: csmatchstats_t.ShotsFiredTotal
Write: csmatchstats_t.ShotsFiredTotal = value
```
## ShotsOnTargetTotal 
```lua
--- @type number
Read: csmatchstats_t.ShotsOnTargetTotal
Write: csmatchstats_t.ShotsOnTargetTotal = value
```
## 1v1Count 
```lua
--- @type number
Read: csmatchstats_t.1v1Count
Write: csmatchstats_t.1v1Count = value
```
## 1v1Wins 
```lua
--- @type number
Read: csmatchstats_t.1v1Wins
Write: csmatchstats_t.1v1Wins = value
```
## 1v2Count 
```lua
--- @type number
Read: csmatchstats_t.1v2Count
Write: csmatchstats_t.1v2Count = value
```
## 1v2Wins 
```lua
--- @type number
Read: csmatchstats_t.1v2Wins
Write: csmatchstats_t.1v2Wins = value
```
## EntryCount 
```lua
--- @type number
Read: csmatchstats_t.EntryCount
Write: csmatchstats_t.EntryCount = value
```
## EntryWins 
```lua
--- @type number
Read: csmatchstats_t.EntryWins
Write: csmatchstats_t.EntryWins = value
```
## Parent (Read-Only)
```lua
--- @type CSPerRoundStats_t
Read: csmatchstats_t.Parent
```
# Functions
## ToPtr
```lua
@returns string
csmatchstats_t:ToPtr()
```
## IsValid
```lua
@returns bool
csmatchstats_t:IsValid()
```

:::