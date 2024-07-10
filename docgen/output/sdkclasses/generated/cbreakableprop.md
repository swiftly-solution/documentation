---
title: CBreakableProp
index: true
order: 2
category:
  - Guide
---

# CBreakableProp

::: tabs
@tab Lua
# Constructor
```lua
CBreakableProp(ptr --[[ string ]])
```
# Properties
## CPropDataComponent 
```lua
@type CPropDataComponent
Read: cbreakableprop.CPropDataComponent
Write: cbreakableprop.CPropDataComponent = value
```
## OnBreak 
```lua
@type CEntityIOOutput
Read: cbreakableprop.OnBreak
Write: cbreakableprop.OnBreak = value
```
## OnTakeDamage 
```lua
@type CEntityIOOutput
Read: cbreakableprop.OnTakeDamage
Write: cbreakableprop.OnTakeDamage = value
```
## ImpactEnergyScale 
```lua
@type number
Read: cbreakableprop.ImpactEnergyScale
Write: cbreakableprop.ImpactEnergyScale = value
```
## MinHealthDmg 
```lua
@type number
Read: cbreakableprop.MinHealthDmg
Write: cbreakableprop.MinHealthDmg = value
```
## PreferredCarryAngles 
```lua
@type QAngle
Read: cbreakableprop.PreferredCarryAngles
Write: cbreakableprop.PreferredCarryAngles = value
```
## PressureDelay 
```lua
@type number
Read: cbreakableprop.PressureDelay
Write: cbreakableprop.PressureDelay = value
```
## DefBurstScale 
```lua
@type number
Read: cbreakableprop.DefBurstScale
Write: cbreakableprop.DefBurstScale = value
```
## DefBurstOffset 
```lua
@type Vector
Read: cbreakableprop.DefBurstOffset
Write: cbreakableprop.DefBurstOffset = value
```
## Breaker (Read-Only)
```lua
@type CBaseEntity
Read: cbreakableprop.Breaker
```
## PerformanceMode 
```lua
@type number
Read: cbreakableprop.PerformanceMode
Write: cbreakableprop.PerformanceMode = value
```
## PreventDamageBeforeTime 
```lua
@type number
Read: cbreakableprop.PreventDamageBeforeTime
Write: cbreakableprop.PreventDamageBeforeTime = value
```
## HasBreakPiecesOrCommands 
```lua
@type boolean
Read: cbreakableprop.HasBreakPiecesOrCommands
Write: cbreakableprop.HasBreakPiecesOrCommands = value
```
## ExplodeDamage 
```lua
@type number
Read: cbreakableprop.ExplodeDamage
Write: cbreakableprop.ExplodeDamage = value
```
## ExplodeRadius 
```lua
@type number
Read: cbreakableprop.ExplodeRadius
Write: cbreakableprop.ExplodeRadius = value
```
## ExplosionDelay 
```lua
@type number
Read: cbreakableprop.ExplosionDelay
Write: cbreakableprop.ExplosionDelay = value
```
## ExplosionBuildupSound 
```lua
@type string
Read: cbreakableprop.ExplosionBuildupSound
Write: cbreakableprop.ExplosionBuildupSound = value
```
## ExplosionCustomEffect 
```lua
@type string
Read: cbreakableprop.ExplosionCustomEffect
Write: cbreakableprop.ExplosionCustomEffect = value
```
## ExplosionCustomSound 
```lua
@type string
Read: cbreakableprop.ExplosionCustomSound
Write: cbreakableprop.ExplosionCustomSound = value
```
## ExplosionModifier 
```lua
@type string
Read: cbreakableprop.ExplosionModifier
Write: cbreakableprop.ExplosionModifier = value
```
## PhysicsAttacker (Read-Only)
```lua
@type CBasePlayerPawn
Read: cbreakableprop.PhysicsAttacker
```
## LastPhysicsInfluenceTime 
```lua
@type number
Read: cbreakableprop.LastPhysicsInfluenceTime
Write: cbreakableprop.LastPhysicsInfluenceTime = value
```
## OriginalBlockLOS 
```lua
@type boolean
Read: cbreakableprop.OriginalBlockLOS
Write: cbreakableprop.OriginalBlockLOS = value
```
## DefaultFadeScale 
```lua
@type number
Read: cbreakableprop.DefaultFadeScale
Write: cbreakableprop.DefaultFadeScale = value
```
## LastAttacker (Read-Only)
```lua
@type CBaseEntity
Read: cbreakableprop.LastAttacker
```
## FlareEnt (Read-Only)
```lua
@type CBaseEntity
Read: cbreakableprop.FlareEnt
```
## UsePuntSound 
```lua
@type boolean
Read: cbreakableprop.UsePuntSound
Write: cbreakableprop.UsePuntSound = value
```
## PuntSound 
```lua
@type string
Read: cbreakableprop.PuntSound
Write: cbreakableprop.PuntSound = value
```
## NoGhostCollision 
```lua
@type boolean
Read: cbreakableprop.NoGhostCollision
Write: cbreakableprop.NoGhostCollision = value
```
## Parent 
```lua
@type CBaseProp
Read: cbreakableprop.Parent
Write: cbreakableprop.Parent = value
```
# Functions
## ToPtr
```lua
@returns string
cbreakableprop:ToPtr()
```
## IsValid
```lua
@returns bool
cbreakableprop:IsValid()
```

:::