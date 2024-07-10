---
title: CParticleSystem
index: true
order: 2
category:
  - Guide
---

# CParticleSystem

::: tabs
@tab Lua
# Constructor
```lua
CParticleSystem(ptr --[[ string ]])
```
# Properties
## SnapshotFileName 
```lua
@type string
Read: cparticlesystem.SnapshotFileName
Write: cparticlesystem.SnapshotFileName = value
```
## Active 
```lua
@type boolean
Read: cparticlesystem.Active
Write: cparticlesystem.Active = value
```
## Frozen 
```lua
@type boolean
Read: cparticlesystem.Frozen
Write: cparticlesystem.Frozen = value
```
## FreezeTransitionDuration 
```lua
@type number
Read: cparticlesystem.FreezeTransitionDuration
Write: cparticlesystem.FreezeTransitionDuration = value
```
## StopType 
```lua
@type number
Read: cparticlesystem.StopType
Write: cparticlesystem.StopType = value
```
## AnimateDuringGameplayPause 
```lua
@type boolean
Read: cparticlesystem.AnimateDuringGameplayPause
Write: cparticlesystem.AnimateDuringGameplayPause = value
```
## StartTime 
```lua
@type number
Read: cparticlesystem.StartTime
Write: cparticlesystem.StartTime = value
```
## PreSimTime 
```lua
@type number
Read: cparticlesystem.PreSimTime
Write: cparticlesystem.PreSimTime = value
```
## ServerControlPoints 
```lua
@type table
Read: cparticlesystem.ServerControlPoints
Write: cparticlesystem.ServerControlPoints = value
```
## ServerControlPointAssignments 
```lua
@type table
Read: cparticlesystem.ServerControlPointAssignments
Write: cparticlesystem.ServerControlPointAssignments = value
```
## ControlPointEnts 
```lua
@type table
Read: cparticlesystem.ControlPointEnts
Write: cparticlesystem.ControlPointEnts = value
```
## NoSave 
```lua
@type boolean
Read: cparticlesystem.NoSave
Write: cparticlesystem.NoSave = value
```
## NoFreeze 
```lua
@type boolean
Read: cparticlesystem.NoFreeze
Write: cparticlesystem.NoFreeze = value
```
## NoRamp 
```lua
@type boolean
Read: cparticlesystem.NoRamp
Write: cparticlesystem.NoRamp = value
```
## StartActive 
```lua
@type boolean
Read: cparticlesystem.StartActive
Write: cparticlesystem.StartActive = value
```
## EffectName 
```lua
@type string
Read: cparticlesystem.EffectName
Write: cparticlesystem.EffectName = value
```
## ControlPointNames 
```lua
@type table
Read: cparticlesystem.ControlPointNames
Write: cparticlesystem.ControlPointNames = value
```
## DataCP 
```lua
@type number
Read: cparticlesystem.DataCP
Write: cparticlesystem.DataCP = value
```
## DataCPValue 
```lua
@type Vector
Read: cparticlesystem.DataCPValue
Write: cparticlesystem.DataCPValue = value
```
## TintCP 
```lua
@type number
Read: cparticlesystem.TintCP
Write: cparticlesystem.TintCP = value
```
## Tint 
```lua
@type Color
Read: cparticlesystem.Tint
Write: cparticlesystem.Tint = value
```
## Parent 
```lua
@type CBaseModelEntity
Read: cparticlesystem.Parent
Write: cparticlesystem.Parent = value
```
# Functions
## ToPtr
```lua
@returns string
cparticlesystem:ToPtr()
```
## IsValid
```lua
@returns bool
cparticlesystem:IsValid()
```

:::