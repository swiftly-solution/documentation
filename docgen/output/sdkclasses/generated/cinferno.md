---
title: CInferno
index: true
order: 2
category:
  - Guide
---

# CInferno

::: tabs
@tab Lua
# Constructor
```lua
CInferno(ptr --[[ string ]])
```
# Properties
## FirePositions 
```lua
@type table
Read: cinferno.FirePositions
Write: cinferno.FirePositions = value
```
## FireParentPositions 
```lua
@type table
Read: cinferno.FireParentPositions
Write: cinferno.FireParentPositions = value
```
## FireIsBurning 
```lua
@type table
Read: cinferno.FireIsBurning
Write: cinferno.FireIsBurning = value
```
## BurnNormal 
```lua
@type table
Read: cinferno.BurnNormal
Write: cinferno.BurnNormal = value
```
## FireCount 
```lua
@type number
Read: cinferno.FireCount
Write: cinferno.FireCount = value
```
## InfernoType 
```lua
@type number
Read: cinferno.InfernoType
Write: cinferno.InfernoType = value
```
## FireEffectTickBegin 
```lua
@type number
Read: cinferno.FireEffectTickBegin
Write: cinferno.FireEffectTickBegin = value
```
## FireLifetime 
```lua
@type number
Read: cinferno.FireLifetime
Write: cinferno.FireLifetime = value
```
## InPostEffectTime 
```lua
@type boolean
Read: cinferno.InPostEffectTime
Write: cinferno.InPostEffectTime = value
```
## FiresExtinguishCount 
```lua
@type number
Read: cinferno.FiresExtinguishCount
Write: cinferno.FiresExtinguishCount = value
```
## WasCreatedInSmoke 
```lua
@type boolean
Read: cinferno.WasCreatedInSmoke
Write: cinferno.WasCreatedInSmoke = value
```
## Extent (Read-Only)
```lua
@type Extent
Read: cinferno.Extent
```
## DamageTimer (Read-Only)
```lua
@type CountdownTimer
Read: cinferno.DamageTimer
```
## DamageRampTimer (Read-Only)
```lua
@type CountdownTimer
Read: cinferno.DamageRampTimer
```
## SplashVelocity 
```lua
@type Vector
Read: cinferno.SplashVelocity
Write: cinferno.SplashVelocity = value
```
## InitialSplashVelocity 
```lua
@type Vector
Read: cinferno.InitialSplashVelocity
Write: cinferno.InitialSplashVelocity = value
```
## StartPos 
```lua
@type Vector
Read: cinferno.StartPos
Write: cinferno.StartPos = value
```
## OriginalSpawnLocation 
```lua
@type Vector
Read: cinferno.OriginalSpawnLocation
Write: cinferno.OriginalSpawnLocation = value
```
## ActiveTimer (Read-Only)
```lua
@type IntervalTimer
Read: cinferno.ActiveTimer
```
## FireSpawnOffset 
```lua
@type number
Read: cinferno.FireSpawnOffset
Write: cinferno.FireSpawnOffset = value
```
## MaxFlames 
```lua
@type number
Read: cinferno.MaxFlames
Write: cinferno.MaxFlames = value
```
## SpreadCount 
```lua
@type number
Read: cinferno.SpreadCount
Write: cinferno.SpreadCount = value
```
## BookkeepingTimer (Read-Only)
```lua
@type CountdownTimer
Read: cinferno.BookkeepingTimer
```
## NextSpreadTimer (Read-Only)
```lua
@type CountdownTimer
Read: cinferno.NextSpreadTimer
```
## SourceItemDefIndex 
```lua
@type number
Read: cinferno.SourceItemDefIndex
Write: cinferno.SourceItemDefIndex = value
```
## Parent 
```lua
@type CBaseModelEntity
Read: cinferno.Parent
Write: cinferno.Parent = value
```
# Functions
## ToPtr
```lua
@returns string
cinferno:ToPtr()
```
## IsValid
```lua
@returns bool
cinferno:IsValid()
```

:::