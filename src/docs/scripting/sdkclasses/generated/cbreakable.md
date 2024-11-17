---
title: CBreakable
index: true
order: 2
category:
  - Guide
---

# CBreakable

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
CBreakable(ptr)
```
# Properties
## CPropDataComponent (Read-Only)
```lua
--- @type CPropDataComponent
Read: cbreakable.CPropDataComponent
```
## Material 
```lua
--- @type number
Read: cbreakable.Material
Write: cbreakable.Material = value
```
## Breaker (Read-Only)
```lua
--- @type CBaseEntity
Read: cbreakable.Breaker
```
## Explosion 
```lua
--- @type number
Read: cbreakable.Explosion
Write: cbreakable.Explosion = value
```
## SpawnObject 
```lua
--- @type string
Read: cbreakable.SpawnObject
Write: cbreakable.SpawnObject = value
```
## PressureDelay 
```lua
--- @type number
Read: cbreakable.PressureDelay
Write: cbreakable.PressureDelay = value
```
## MinHealthDmg 
```lua
--- @type number
Read: cbreakable.MinHealthDmg
Write: cbreakable.MinHealthDmg = value
```
## PropData 
```lua
--- @type string
Read: cbreakable.PropData
Write: cbreakable.PropData = value
```
## ImpactEnergyScale 
```lua
--- @type number
Read: cbreakable.ImpactEnergyScale
Write: cbreakable.ImpactEnergyScale = value
```
## OverrideBlockLOS 
```lua
--- @type number
Read: cbreakable.OverrideBlockLOS
Write: cbreakable.OverrideBlockLOS = value
```
## OnBreak (Read-Only)
```lua
--- @type CEntityIOOutput
Read: cbreakable.OnBreak
```
## PerformanceMode 
```lua
--- @type number
Read: cbreakable.PerformanceMode
Write: cbreakable.PerformanceMode = value
```
## PhysicsAttacker (Read-Only)
```lua
--- @type CBasePlayerPawn
Read: cbreakable.PhysicsAttacker
```
## LastPhysicsInfluenceTime 
```lua
--- @type number
Read: cbreakable.LastPhysicsInfluenceTime
Write: cbreakable.LastPhysicsInfluenceTime = value
```
## Parent (Read-Only)
```lua
--- @type CBaseModelEntity
Read: cbreakable.Parent
```
# Functions
## ToPtr
```lua
--- @return string
cbreakable:ToPtr()
```
## IsValid
```lua
--- @return bool
cbreakable:IsValid()
```

:::