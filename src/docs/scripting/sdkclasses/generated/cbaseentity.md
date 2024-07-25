---
title: CBaseEntity
index: true
order: 2
category:
  - Guide
---

# CBaseEntity

::: tabs
@tab Lua
# Constructor
```lua
CBaseEntity(ptr --[[ string ]])
```
# Properties
## CBodyComponent 
```lua
@type CBodyComponent
Read: cbaseentity.CBodyComponent
Write: cbaseentity.CBodyComponent = value
```
## NetworkTransmitComponent (Read-Only)
```lua
@type CNetworkTransmitComponent
Read: cbaseentity.NetworkTransmitComponent
```
## ThinkFunctions 
```lua
@type table
Read: cbaseentity.ThinkFunctions
Write: cbaseentity.ThinkFunctions = value
```
## CurrentThinkContext 
```lua
@type number
Read: cbaseentity.CurrentThinkContext
Write: cbaseentity.CurrentThinkContext = value
```
## LastThinkTick 
```lua
@type number
Read: cbaseentity.LastThinkTick
Write: cbaseentity.LastThinkTick = value
```
## DisabledContextThinks 
```lua
@type boolean
Read: cbaseentity.DisabledContextThinks
Write: cbaseentity.DisabledContextThinks = value
```
## LastNetworkChange 
```lua
@type number
Read: cbaseentity.LastNetworkChange
Write: cbaseentity.LastNetworkChange = value
```
## ResponseContexts 
```lua
@type table
Read: cbaseentity.ResponseContexts
Write: cbaseentity.ResponseContexts = value
```
## ResponseContext 
```lua
@type string
Read: cbaseentity.ResponseContext
Write: cbaseentity.ResponseContext = value
```
## Health 
```lua
@type number
Read: cbaseentity.Health
Write: cbaseentity.Health = value
```
## MaxHealth 
```lua
@type number
Read: cbaseentity.MaxHealth
Write: cbaseentity.MaxHealth = value
```
## LifeState 
```lua
@type number
Read: cbaseentity.LifeState
Write: cbaseentity.LifeState = value
```
## DamageAccumulator 
```lua
@type number
Read: cbaseentity.DamageAccumulator
Write: cbaseentity.DamageAccumulator = value
```
## TakesDamage 
```lua
@type boolean
Read: cbaseentity.TakesDamage
Write: cbaseentity.TakesDamage = value
```
## TakeDamageFlags 
```lua
@type number
Read: cbaseentity.TakeDamageFlags
Write: cbaseentity.TakeDamageFlags = value
```
## IsPlatform 
```lua
@type boolean
Read: cbaseentity.IsPlatform
Write: cbaseentity.IsPlatform = value
```
## MoveCollide 
```lua
@type number
Read: cbaseentity.MoveCollide
Write: cbaseentity.MoveCollide = value
```
## MoveType 
```lua
@type number
Read: cbaseentity.MoveType
Write: cbaseentity.MoveType = value
```
## ActualMoveType 
```lua
@type number
Read: cbaseentity.ActualMoveType
Write: cbaseentity.ActualMoveType = value
```
## WaterTouch 
```lua
@type number
Read: cbaseentity.WaterTouch
Write: cbaseentity.WaterTouch = value
```
## SlimeTouch 
```lua
@type number
Read: cbaseentity.SlimeTouch
Write: cbaseentity.SlimeTouch = value
```
## RestoreInHierarchy 
```lua
@type boolean
Read: cbaseentity.RestoreInHierarchy
Write: cbaseentity.RestoreInHierarchy = value
```
## Target 
```lua
@type string
Read: cbaseentity.Target
Write: cbaseentity.Target = value
```
## DamageFilter (Read-Only)
```lua
@type CBaseFilter
Read: cbaseentity.DamageFilter
```
## DamageFilterName 
```lua
@type string
Read: cbaseentity.DamageFilterName
Write: cbaseentity.DamageFilterName = value
```
## MoveDoneTime 
```lua
@type number
Read: cbaseentity.MoveDoneTime
Write: cbaseentity.MoveDoneTime = value
```
## SubclassID 
```lua
@type number
Read: cbaseentity.SubclassID
Write: cbaseentity.SubclassID = value
```
## AnimTime 
```lua
@type number
Read: cbaseentity.AnimTime
Write: cbaseentity.AnimTime = value
```
## SimulationTime 
```lua
@type number
Read: cbaseentity.SimulationTime
Write: cbaseentity.SimulationTime = value
```
## CreateTime 
```lua
@type number
Read: cbaseentity.CreateTime
Write: cbaseentity.CreateTime = value
```
## ClientSideRagdoll 
```lua
@type boolean
Read: cbaseentity.ClientSideRagdoll
Write: cbaseentity.ClientSideRagdoll = value
```
## InterpolationFrame 
```lua
@type number
Read: cbaseentity.InterpolationFrame
Write: cbaseentity.InterpolationFrame = value
```
## PrevVPhysicsUpdatePos 
```lua
@type Vector
Read: cbaseentity.PrevVPhysicsUpdatePos
Write: cbaseentity.PrevVPhysicsUpdatePos = value
```
## TeamNum 
```lua
@type number
Read: cbaseentity.TeamNum
Write: cbaseentity.TeamNum = value
```
## Globalname 
```lua
@type string
Read: cbaseentity.Globalname
Write: cbaseentity.Globalname = value
```
## SentToClients 
```lua
@type number
Read: cbaseentity.SentToClients
Write: cbaseentity.SentToClients = value
```
## Speed 
```lua
@type number
Read: cbaseentity.Speed
Write: cbaseentity.Speed = value
```
## UniqueHammerID 
```lua
@type string
Read: cbaseentity.UniqueHammerID
Write: cbaseentity.UniqueHammerID = value
```
## Spawnflags 
```lua
@type number
Read: cbaseentity.Spawnflags
Write: cbaseentity.Spawnflags = value
```
## NextThinkTick 
```lua
@type number
Read: cbaseentity.NextThinkTick
Write: cbaseentity.NextThinkTick = value
```
## SimulationTick 
```lua
@type number
Read: cbaseentity.SimulationTick
Write: cbaseentity.SimulationTick = value
```
## OnKilled (Read-Only)
```lua
@type CEntityIOOutput
Read: cbaseentity.OnKilled
```
## Flags 
```lua
@type number
Read: cbaseentity.Flags
Write: cbaseentity.Flags = value
```
## AbsVelocity 
```lua
@type Vector
Read: cbaseentity.AbsVelocity
Write: cbaseentity.AbsVelocity = value
```
## Velocity (Read-Only)
```lua
@type CNetworkVelocityVector
Read: cbaseentity.Velocity
```
## BaseVelocity 
```lua
@type Vector
Read: cbaseentity.BaseVelocity
Write: cbaseentity.BaseVelocity = value
```
## PushEnumCount 
```lua
@type number
Read: cbaseentity.PushEnumCount
Write: cbaseentity.PushEnumCount = value
```
## Collision 
```lua
@type CCollisionProperty
Read: cbaseentity.Collision
Write: cbaseentity.Collision = value
```
## EffectEntity (Read-Only)
```lua
@type CBaseEntity
Read: cbaseentity.EffectEntity
```
## OwnerEntity (Read-Only)
```lua
@type CBaseEntity
Read: cbaseentity.OwnerEntity
```
## Effects 
```lua
@type number
Read: cbaseentity.Effects
Write: cbaseentity.Effects = value
```
## GroundEntity (Read-Only)
```lua
@type CBaseEntity
Read: cbaseentity.GroundEntity
```
## GroundBodyIndex 
```lua
@type number
Read: cbaseentity.GroundBodyIndex
Write: cbaseentity.GroundBodyIndex = value
```
## Friction 
```lua
@type number
Read: cbaseentity.Friction
Write: cbaseentity.Friction = value
```
## Elasticity 
```lua
@type number
Read: cbaseentity.Elasticity
Write: cbaseentity.Elasticity = value
```
## GravityScale 
```lua
@type number
Read: cbaseentity.GravityScale
Write: cbaseentity.GravityScale = value
```
## TimeScale 
```lua
@type number
Read: cbaseentity.TimeScale
Write: cbaseentity.TimeScale = value
```
## WaterLevel 
```lua
@type number
Read: cbaseentity.WaterLevel
Write: cbaseentity.WaterLevel = value
```
## AnimatedEveryTick 
```lua
@type boolean
Read: cbaseentity.AnimatedEveryTick
Write: cbaseentity.AnimatedEveryTick = value
```
## DisableLowViolence 
```lua
@type boolean
Read: cbaseentity.DisableLowViolence
Write: cbaseentity.DisableLowViolence = value
```
## WaterType 
```lua
@type number
Read: cbaseentity.WaterType
Write: cbaseentity.WaterType = value
```
## EFlags 
```lua
@type number
Read: cbaseentity.EFlags
Write: cbaseentity.EFlags = value
```
## OnUser1 (Read-Only)
```lua
@type CEntityIOOutput
Read: cbaseentity.OnUser1
```
## OnUser2 (Read-Only)
```lua
@type CEntityIOOutput
Read: cbaseentity.OnUser2
```
## OnUser3 (Read-Only)
```lua
@type CEntityIOOutput
Read: cbaseentity.OnUser3
```
## OnUser4 (Read-Only)
```lua
@type CEntityIOOutput
Read: cbaseentity.OnUser4
```
## InitialTeamNum 
```lua
@type number
Read: cbaseentity.InitialTeamNum
Write: cbaseentity.InitialTeamNum = value
```
## NavIgnoreUntilTime 
```lua
@type number
Read: cbaseentity.NavIgnoreUntilTime
Write: cbaseentity.NavIgnoreUntilTime = value
```
## AngVelocity 
```lua
@type QAngle
Read: cbaseentity.AngVelocity
Write: cbaseentity.AngVelocity = value
```
## NetworkQuantizeOriginAndAngles 
```lua
@type boolean
Read: cbaseentity.NetworkQuantizeOriginAndAngles
Write: cbaseentity.NetworkQuantizeOriginAndAngles = value
```
## LagCompensate 
```lua
@type boolean
Read: cbaseentity.LagCompensate
Write: cbaseentity.LagCompensate = value
```
## OverriddenFriction 
```lua
@type number
Read: cbaseentity.OverriddenFriction
Write: cbaseentity.OverriddenFriction = value
```
## Blocker (Read-Only)
```lua
@type CBaseEntity
Read: cbaseentity.Blocker
```
## LocalTime 
```lua
@type number
Read: cbaseentity.LocalTime
Write: cbaseentity.LocalTime = value
```
## VPhysicsUpdateLocalTime 
```lua
@type number
Read: cbaseentity.VPhysicsUpdateLocalTime
Write: cbaseentity.VPhysicsUpdateLocalTime = value
```
## BloodType 
```lua
@type number
Read: cbaseentity.BloodType
Write: cbaseentity.BloodType = value
```
## Parent 
```lua
@type CEntityInstance
Read: cbaseentity.Parent
Write: cbaseentity.Parent = value
```
# Functions
## EmitSound
```lua
@returns void
cbaseentity:EmitSound(sound_name --[[ string ]], pitch --[[ number ]], volume --[[ number ]], delay --[[ number ]])
```
## EHandle
```lua
@returns CBaseEntity
cbaseentity:EHandle()
```
## Spawn
```lua
@returns void
cbaseentity:Spawn()
```
## Despawn
```lua
@returns void
cbaseentity:Despawn()
```
## AcceptInput
```lua
@returns void
cbaseentity:AcceptInput(input --[[ string ]], activator --[[ CEntityInstance ]], caller --[[ CEntityInstance ]], value --[[ string ]], outputID --[[ number ]])
```
## GetClassname
```lua
@returns string
cbaseentity:GetClassname()
```
## GetVData
```lua
@returns CEntitySubclassVDataBase
cbaseentity:GetVData()
```
## Teleport
```lua
@returns void
cbaseentity:Teleport(value --[[ Vector ]])
```
## ToPtr
```lua
@returns string
cbaseentity:ToPtr()
```
## IsValid
```lua
@returns bool
cbaseentity:IsValid()
```

:::