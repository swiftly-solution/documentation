---
title: CPointValueRemapper
index: true
order: 2
category:
  - Guide
---

# CPointValueRemapper

::: tabs
@tab Lua
# Constructor
```lua
CPointValueRemapper(ptr --[[ string ]])
```
# Properties
## Disabled 
```lua
@type boolean
Read: cpointvalueremapper.Disabled
Write: cpointvalueremapper.Disabled = value
```
## UpdateOnClient 
```lua
@type boolean
Read: cpointvalueremapper.UpdateOnClient
Write: cpointvalueremapper.UpdateOnClient = value
```
## InputType 
```lua
@type number
Read: cpointvalueremapper.InputType
Write: cpointvalueremapper.InputType = value
```
## RemapLineStartName 
```lua
@type string
Read: cpointvalueremapper.RemapLineStartName
Write: cpointvalueremapper.RemapLineStartName = value
```
## RemapLineEndName 
```lua
@type string
Read: cpointvalueremapper.RemapLineEndName
Write: cpointvalueremapper.RemapLineEndName = value
```
## RemapLineStart (Read-Only)
```lua
@type CBaseEntity
Read: cpointvalueremapper.RemapLineStart
```
## RemapLineEnd (Read-Only)
```lua
@type CBaseEntity
Read: cpointvalueremapper.RemapLineEnd
```
## MaximumChangePerSecond 
```lua
@type number
Read: cpointvalueremapper.MaximumChangePerSecond
Write: cpointvalueremapper.MaximumChangePerSecond = value
```
## DisengageDistance 
```lua
@type number
Read: cpointvalueremapper.DisengageDistance
Write: cpointvalueremapper.DisengageDistance = value
```
## EngageDistance 
```lua
@type number
Read: cpointvalueremapper.EngageDistance
Write: cpointvalueremapper.EngageDistance = value
```
## RequiresUseKey 
```lua
@type boolean
Read: cpointvalueremapper.RequiresUseKey
Write: cpointvalueremapper.RequiresUseKey = value
```
## OutputType 
```lua
@type number
Read: cpointvalueremapper.OutputType
Write: cpointvalueremapper.OutputType = value
```
## OutputEntityName 
```lua
@type string
Read: cpointvalueremapper.OutputEntityName
Write: cpointvalueremapper.OutputEntityName = value
```
## OutputEntity2Name 
```lua
@type string
Read: cpointvalueremapper.OutputEntity2Name
Write: cpointvalueremapper.OutputEntity2Name = value
```
## OutputEntity3Name 
```lua
@type string
Read: cpointvalueremapper.OutputEntity3Name
Write: cpointvalueremapper.OutputEntity3Name = value
```
## OutputEntity4Name 
```lua
@type string
Read: cpointvalueremapper.OutputEntity4Name
Write: cpointvalueremapper.OutputEntity4Name = value
```
## OutputEntities 
```lua
@type table
Read: cpointvalueremapper.OutputEntities
Write: cpointvalueremapper.OutputEntities = value
```
## HapticsType 
```lua
@type number
Read: cpointvalueremapper.HapticsType
Write: cpointvalueremapper.HapticsType = value
```
## MomentumType 
```lua
@type number
Read: cpointvalueremapper.MomentumType
Write: cpointvalueremapper.MomentumType = value
```
## MomentumModifier 
```lua
@type number
Read: cpointvalueremapper.MomentumModifier
Write: cpointvalueremapper.MomentumModifier = value
```
## SnapValue 
```lua
@type number
Read: cpointvalueremapper.SnapValue
Write: cpointvalueremapper.SnapValue = value
```
## CurrentMomentum 
```lua
@type number
Read: cpointvalueremapper.CurrentMomentum
Write: cpointvalueremapper.CurrentMomentum = value
```
## RatchetType 
```lua
@type number
Read: cpointvalueremapper.RatchetType
Write: cpointvalueremapper.RatchetType = value
```
## RatchetOffset 
```lua
@type number
Read: cpointvalueremapper.RatchetOffset
Write: cpointvalueremapper.RatchetOffset = value
```
## InputOffset 
```lua
@type number
Read: cpointvalueremapper.InputOffset
Write: cpointvalueremapper.InputOffset = value
```
## Engaged 
```lua
@type boolean
Read: cpointvalueremapper.Engaged
Write: cpointvalueremapper.Engaged = value
```
## FirstUpdate 
```lua
@type boolean
Read: cpointvalueremapper.FirstUpdate
Write: cpointvalueremapper.FirstUpdate = value
```
## PreviousValue 
```lua
@type number
Read: cpointvalueremapper.PreviousValue
Write: cpointvalueremapper.PreviousValue = value
```
## PreviousUpdateTickTime 
```lua
@type number
Read: cpointvalueremapper.PreviousUpdateTickTime
Write: cpointvalueremapper.PreviousUpdateTickTime = value
```
## PreviousTestPoint 
```lua
@type Vector
Read: cpointvalueremapper.PreviousTestPoint
Write: cpointvalueremapper.PreviousTestPoint = value
```
## UsingPlayer (Read-Only)
```lua
@type CBasePlayerPawn
Read: cpointvalueremapper.UsingPlayer
```
## CustomOutputValue 
```lua
@type number
Read: cpointvalueremapper.CustomOutputValue
Write: cpointvalueremapper.CustomOutputValue = value
```
## SoundEngage 
```lua
@type string
Read: cpointvalueremapper.SoundEngage
Write: cpointvalueremapper.SoundEngage = value
```
## SoundDisengage 
```lua
@type string
Read: cpointvalueremapper.SoundDisengage
Write: cpointvalueremapper.SoundDisengage = value
```
## SoundReachedValueZero 
```lua
@type string
Read: cpointvalueremapper.SoundReachedValueZero
Write: cpointvalueremapper.SoundReachedValueZero = value
```
## SoundReachedValueOne 
```lua
@type string
Read: cpointvalueremapper.SoundReachedValueOne
Write: cpointvalueremapper.SoundReachedValueOne = value
```
## SoundMovingLoop 
```lua
@type string
Read: cpointvalueremapper.SoundMovingLoop
Write: cpointvalueremapper.SoundMovingLoop = value
```
## OnReachedValueZero (Read-Only)
```lua
@type CEntityIOOutput
Read: cpointvalueremapper.OnReachedValueZero
```
## OnReachedValueOne (Read-Only)
```lua
@type CEntityIOOutput
Read: cpointvalueremapper.OnReachedValueOne
```
## OnReachedValueCustom (Read-Only)
```lua
@type CEntityIOOutput
Read: cpointvalueremapper.OnReachedValueCustom
```
## OnEngage (Read-Only)
```lua
@type CEntityIOOutput
Read: cpointvalueremapper.OnEngage
```
## OnDisengage (Read-Only)
```lua
@type CEntityIOOutput
Read: cpointvalueremapper.OnDisengage
```
## Parent 
```lua
@type CBaseEntity
Read: cpointvalueremapper.Parent
Write: cpointvalueremapper.Parent = value
```
# Functions
## ToPtr
```lua
@returns string
cpointvalueremapper:ToPtr()
```
## IsValid
```lua
@returns bool
cpointvalueremapper:IsValid()
```

:::