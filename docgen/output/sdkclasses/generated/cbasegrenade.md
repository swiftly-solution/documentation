---
title: CBaseGrenade
index: true
order: 2
category:
  - Guide
---

# CBaseGrenade

::: tabs
@tab Lua
# Constructor
```lua
CBaseGrenade(ptr --[[ string ]])
```
# Properties
## OnPlayerPickup (Read-Only)
```lua
@type CEntityIOOutput
Read: cbasegrenade.OnPlayerPickup
```
## OnExplode (Read-Only)
```lua
@type CEntityIOOutput
Read: cbasegrenade.OnExplode
```
## HasWarnedAI 
```lua
@type boolean
Read: cbasegrenade.HasWarnedAI
Write: cbasegrenade.HasWarnedAI = value
```
## IsSmokeGrenade 
```lua
@type boolean
Read: cbasegrenade.IsSmokeGrenade
Write: cbasegrenade.IsSmokeGrenade = value
```
## IsLive 
```lua
@type boolean
Read: cbasegrenade.IsLive
Write: cbasegrenade.IsLive = value
```
## DmgRadius 
```lua
@type number
Read: cbasegrenade.DmgRadius
Write: cbasegrenade.DmgRadius = value
```
## DetonateTime 
```lua
@type number
Read: cbasegrenade.DetonateTime
Write: cbasegrenade.DetonateTime = value
```
## WarnAITime 
```lua
@type number
Read: cbasegrenade.WarnAITime
Write: cbasegrenade.WarnAITime = value
```
## Damage 
```lua
@type number
Read: cbasegrenade.Damage
Write: cbasegrenade.Damage = value
```
## BounceSound 
```lua
@type string
Read: cbasegrenade.BounceSound
Write: cbasegrenade.BounceSound = value
```
## ExplosionSound 
```lua
@type string
Read: cbasegrenade.ExplosionSound
Write: cbasegrenade.ExplosionSound = value
```
## Thrower (Read-Only)
```lua
@type CCSPlayerPawn
Read: cbasegrenade.Thrower
```
## NextAttack 
```lua
@type number
Read: cbasegrenade.NextAttack
Write: cbasegrenade.NextAttack = value
```
## OriginalThrower (Read-Only)
```lua
@type CCSPlayerPawn
Read: cbasegrenade.OriginalThrower
```
## Parent 
```lua
@type CBaseFlex
Read: cbasegrenade.Parent
Write: cbasegrenade.Parent = value
```
# Functions
## ToPtr
```lua
@returns string
cbasegrenade:ToPtr()
```
## IsValid
```lua
@returns bool
cbasegrenade:IsValid()
```

:::