---
title: CFuncTrackTrain
index: true
order: 2
category:
  - Guide
---

# CFuncTrackTrain

::: tabs
@tab Lua
# Constructor
```lua
CFuncTrackTrain(ptr)
```
# Properties
## Ppath (Read-Only)
```lua
--- @type CPathTrack
Read: cfunctracktrain.Ppath
```
## Length 
```lua
--- @type number
Read: cfunctracktrain.Length
Write: cfunctracktrain.Length = value
```
## PosPrev 
```lua
--- @type Vector
Read: cfunctracktrain.PosPrev
Write: cfunctracktrain.PosPrev = value
```
## Prev 
```lua
--- @type QAngle
Read: cfunctracktrain.Prev
Write: cfunctracktrain.Prev = value
```
## ControlMins 
```lua
--- @type Vector
Read: cfunctracktrain.ControlMins
Write: cfunctracktrain.ControlMins = value
```
## ControlMaxs 
```lua
--- @type Vector
Read: cfunctracktrain.ControlMaxs
Write: cfunctracktrain.ControlMaxs = value
```
## LastBlockPos 
```lua
--- @type Vector
Read: cfunctracktrain.LastBlockPos
Write: cfunctracktrain.LastBlockPos = value
```
## LastBlockTick 
```lua
--- @type number
Read: cfunctracktrain.LastBlockTick
Write: cfunctracktrain.LastBlockTick = value
```
## Volume 
```lua
--- @type number
Read: cfunctracktrain.Volume
Write: cfunctracktrain.Volume = value
```
## Bank 
```lua
--- @type number
Read: cfunctracktrain.Bank
Write: cfunctracktrain.Bank = value
```
## OldSpeed 
```lua
--- @type number
Read: cfunctracktrain.OldSpeed
Write: cfunctracktrain.OldSpeed = value
```
## BlockDamage 
```lua
--- @type number
Read: cfunctracktrain.BlockDamage
Write: cfunctracktrain.BlockDamage = value
```
## Height 
```lua
--- @type number
Read: cfunctracktrain.Height
Write: cfunctracktrain.Height = value
```
## MaxSpeed 
```lua
--- @type number
Read: cfunctracktrain.MaxSpeed
Write: cfunctracktrain.MaxSpeed = value
```
## Dir 
```lua
--- @type number
Read: cfunctracktrain.Dir
Write: cfunctracktrain.Dir = value
```
## SoundMove 
```lua
--- @type string
Read: cfunctracktrain.SoundMove
Write: cfunctracktrain.SoundMove = value
```
## SoundMovePing 
```lua
--- @type string
Read: cfunctracktrain.SoundMovePing
Write: cfunctracktrain.SoundMovePing = value
```
## SoundStart 
```lua
--- @type string
Read: cfunctracktrain.SoundStart
Write: cfunctracktrain.SoundStart = value
```
## SoundStop 
```lua
--- @type string
Read: cfunctracktrain.SoundStop
Write: cfunctracktrain.SoundStop = value
```
## StrPathTarget 
```lua
--- @type string
Read: cfunctracktrain.StrPathTarget
Write: cfunctracktrain.StrPathTarget = value
```
## MoveSoundMinDuration 
```lua
--- @type number
Read: cfunctracktrain.MoveSoundMinDuration
Write: cfunctracktrain.MoveSoundMinDuration = value
```
## MoveSoundMaxDuration 
```lua
--- @type number
Read: cfunctracktrain.MoveSoundMaxDuration
Write: cfunctracktrain.MoveSoundMaxDuration = value
```
## NextMoveSoundTime 
```lua
--- @type number
Read: cfunctracktrain.NextMoveSoundTime
Write: cfunctracktrain.NextMoveSoundTime = value
```
## MoveSoundMinPitch 
```lua
--- @type number
Read: cfunctracktrain.MoveSoundMinPitch
Write: cfunctracktrain.MoveSoundMinPitch = value
```
## MoveSoundMaxPitch 
```lua
--- @type number
Read: cfunctracktrain.MoveSoundMaxPitch
Write: cfunctracktrain.MoveSoundMaxPitch = value
```
## OrientationType 
```lua
--- @type number
Read: cfunctracktrain.OrientationType
Write: cfunctracktrain.OrientationType = value
```
## VelocityType 
```lua
--- @type number
Read: cfunctracktrain.VelocityType
Write: cfunctracktrain.VelocityType = value
```
## OnStart (Read-Only)
```lua
--- @type CEntityIOOutput
Read: cfunctracktrain.OnStart
```
## OnNext (Read-Only)
```lua
--- @type CEntityIOOutput
Read: cfunctracktrain.OnNext
```
## OnArrivedAtDestinationNode (Read-Only)
```lua
--- @type CEntityIOOutput
Read: cfunctracktrain.OnArrivedAtDestinationNode
```
## ManualSpeedChanges 
```lua
--- @type boolean
Read: cfunctracktrain.ManualSpeedChanges
Write: cfunctracktrain.ManualSpeedChanges = value
```
## DesiredSpeed 
```lua
--- @type number
Read: cfunctracktrain.DesiredSpeed
Write: cfunctracktrain.DesiredSpeed = value
```
## SpeedChangeTime 
```lua
--- @type number
Read: cfunctracktrain.SpeedChangeTime
Write: cfunctracktrain.SpeedChangeTime = value
```
## AccelSpeed 
```lua
--- @type number
Read: cfunctracktrain.AccelSpeed
Write: cfunctracktrain.AccelSpeed = value
```
## DecelSpeed 
```lua
--- @type number
Read: cfunctracktrain.DecelSpeed
Write: cfunctracktrain.DecelSpeed = value
```
## AccelToSpeed 
```lua
--- @type boolean
Read: cfunctracktrain.AccelToSpeed
Write: cfunctracktrain.AccelToSpeed = value
```
## NextMPSoundTime 
```lua
--- @type number
Read: cfunctracktrain.NextMPSoundTime
Write: cfunctracktrain.NextMPSoundTime = value
```
## Parent (Read-Only)
```lua
--- @type CBaseModelEntity
Read: cfunctracktrain.Parent
```
# Functions
## ToPtr
```lua
@returns string
cfunctracktrain:ToPtr()
```
## IsValid
```lua
@returns bool
cfunctracktrain:IsValid()
```

:::