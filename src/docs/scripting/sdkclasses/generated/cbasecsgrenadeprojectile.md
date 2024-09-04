---
title: CBaseCSGrenadeProjectile
index: true
order: 2
category:
  - Guide
---

# CBaseCSGrenadeProjectile

::: tabs
@tab Lua
# Constructor
```lua
CBaseCSGrenadeProjectile(ptr --[[ string ]])
```
# Properties
## InitialPosition 
```lua
@type Vector
Read: cbasecsgrenadeprojectile.InitialPosition
Write: cbasecsgrenadeprojectile.InitialPosition = value
```
## InitialVelocity 
```lua
@type Vector
Read: cbasecsgrenadeprojectile.InitialVelocity
Write: cbasecsgrenadeprojectile.InitialVelocity = value
```
## Bounces 
```lua
@type number
Read: cbasecsgrenadeprojectile.Bounces
Write: cbasecsgrenadeprojectile.Bounces = value
```
## ExplodeEffectTickBegin 
```lua
@type number
Read: cbasecsgrenadeprojectile.ExplodeEffectTickBegin
Write: cbasecsgrenadeprojectile.ExplodeEffectTickBegin = value
```
## ExplodeEffectOrigin 
```lua
@type Vector
Read: cbasecsgrenadeprojectile.ExplodeEffectOrigin
Write: cbasecsgrenadeprojectile.ExplodeEffectOrigin = value
```
## SpawnTime 
```lua
@type number
Read: cbasecsgrenadeprojectile.SpawnTime
Write: cbasecsgrenadeprojectile.SpawnTime = value
```
## OGSExtraFlags 
```lua
@type number
Read: cbasecsgrenadeprojectile.OGSExtraFlags
Write: cbasecsgrenadeprojectile.OGSExtraFlags = value
```
## DetonationRecorded 
```lua
@type boolean
Read: cbasecsgrenadeprojectile.DetonationRecorded
Write: cbasecsgrenadeprojectile.DetonationRecorded = value
```
## ItemIndex 
```lua
@type number
Read: cbasecsgrenadeprojectile.ItemIndex
Write: cbasecsgrenadeprojectile.ItemIndex = value
```
## OriginalSpawnLocation 
```lua
@type Vector
Read: cbasecsgrenadeprojectile.OriginalSpawnLocation
Write: cbasecsgrenadeprojectile.OriginalSpawnLocation = value
```
## LastBounceSoundTime 
```lua
@type number
Read: cbasecsgrenadeprojectile.LastBounceSoundTime
Write: cbasecsgrenadeprojectile.LastBounceSoundTime = value
```
## GrenadeSpin 
```lua
@type Vector
Read: cbasecsgrenadeprojectile.GrenadeSpin
Write: cbasecsgrenadeprojectile.GrenadeSpin = value
```
## LastHitSurfaceNormal 
```lua
@type Vector
Read: cbasecsgrenadeprojectile.LastHitSurfaceNormal
Write: cbasecsgrenadeprojectile.LastHitSurfaceNormal = value
```
## TicksAtZeroVelocity 
```lua
@type number
Read: cbasecsgrenadeprojectile.TicksAtZeroVelocity
Write: cbasecsgrenadeprojectile.TicksAtZeroVelocity = value
```
## HasEverHitPlayer 
```lua
@type boolean
Read: cbasecsgrenadeprojectile.HasEverHitPlayer
Write: cbasecsgrenadeprojectile.HasEverHitPlayer = value
```
## ClearFromPlayers 
```lua
@type boolean
Read: cbasecsgrenadeprojectile.ClearFromPlayers
Write: cbasecsgrenadeprojectile.ClearFromPlayers = value
```
## Parent (Read-Only)
```lua
@type CBaseGrenade
Read: cbasecsgrenadeprojectile.Parent
```
# Functions
## ToPtr
```lua
@returns string
cbasecsgrenadeprojectile:ToPtr()
```
## IsValid
```lua
@returns bool
cbasecsgrenadeprojectile:IsValid()
```

:::