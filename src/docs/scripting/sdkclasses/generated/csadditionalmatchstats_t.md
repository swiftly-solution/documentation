---
title: CSAdditionalMatchStats_t
index: true
order: 2
category:
  - Guide
---

# CSAdditionalMatchStats_t

::: tabs
@tab Lua
# Constructor
```lua
CSAdditionalMatchStats_t(ptr)
```
# Properties
## NumRoundsSurvived 
```lua
--- @type number
Read: csadditionalmatchstats_t.NumRoundsSurvived
Write: csadditionalmatchstats_t.NumRoundsSurvived = value
```
## MaxNumRoundsSurvived 
```lua
--- @type number
Read: csadditionalmatchstats_t.MaxNumRoundsSurvived
Write: csadditionalmatchstats_t.MaxNumRoundsSurvived = value
```
## NumRoundsSurvivedTotal 
```lua
--- @type number
Read: csadditionalmatchstats_t.NumRoundsSurvivedTotal
Write: csadditionalmatchstats_t.NumRoundsSurvivedTotal = value
```
## RoundsWonWithoutPurchase 
```lua
--- @type number
Read: csadditionalmatchstats_t.RoundsWonWithoutPurchase
Write: csadditionalmatchstats_t.RoundsWonWithoutPurchase = value
```
## RoundsWonWithoutPurchaseTotal 
```lua
--- @type number
Read: csadditionalmatchstats_t.RoundsWonWithoutPurchaseTotal
Write: csadditionalmatchstats_t.RoundsWonWithoutPurchaseTotal = value
```
## NumFirstKills 
```lua
--- @type number
Read: csadditionalmatchstats_t.NumFirstKills
Write: csadditionalmatchstats_t.NumFirstKills = value
```
## NumClutchKills 
```lua
--- @type number
Read: csadditionalmatchstats_t.NumClutchKills
Write: csadditionalmatchstats_t.NumClutchKills = value
```
## NumPistolKills 
```lua
--- @type number
Read: csadditionalmatchstats_t.NumPistolKills
Write: csadditionalmatchstats_t.NumPistolKills = value
```
## NumSniperKills 
```lua
--- @type number
Read: csadditionalmatchstats_t.NumSniperKills
Write: csadditionalmatchstats_t.NumSniperKills = value
```
## NumSuicides 
```lua
--- @type number
Read: csadditionalmatchstats_t.NumSuicides
Write: csadditionalmatchstats_t.NumSuicides = value
```
## NumTeamKills 
```lua
--- @type number
Read: csadditionalmatchstats_t.NumTeamKills
Write: csadditionalmatchstats_t.NumTeamKills = value
```
## TeamDamage 
```lua
--- @type number
Read: csadditionalmatchstats_t.TeamDamage
Write: csadditionalmatchstats_t.TeamDamage = value
```
## Parent (Read-Only)
```lua
--- @type CSAdditionalPerRoundStats_t
Read: csadditionalmatchstats_t.Parent
```
# Functions
## ToPtr
```lua
@returns string
csadditionalmatchstats_t:ToPtr()
```
## IsValid
```lua
@returns bool
csadditionalmatchstats_t:IsValid()
```

:::