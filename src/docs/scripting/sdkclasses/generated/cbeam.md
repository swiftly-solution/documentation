---
title: CBeam
index: true
order: 2
category:
  - Guide
---

# CBeam

::: tabs
@tab Lua
# Constructor
```lua
CBeam(ptr)
```
# Properties
## FrameRate 
```lua
--- @type number
Read: cbeam.FrameRate
Write: cbeam.FrameRate = value
```
## HDRColorScale 
```lua
--- @type number
Read: cbeam.HDRColorScale
Write: cbeam.HDRColorScale = value
```
## FireTime 
```lua
--- @type number
Read: cbeam.FireTime
Write: cbeam.FireTime = value
```
## Damage 
```lua
--- @type number
Read: cbeam.Damage
Write: cbeam.Damage = value
```
## NumBeamEnts 
```lua
--- @type number
Read: cbeam.NumBeamEnts
Write: cbeam.NumBeamEnts = value
```
## BeamType 
```lua
--- @type number
Read: cbeam.BeamType
Write: cbeam.BeamType = value
```
## BeamFlags 
```lua
--- @type number
Read: cbeam.BeamFlags
Write: cbeam.BeamFlags = value
```
## AttachEntity (Read-Only)
```lua
--- @type table
Read: cbeam.AttachEntity
```
## Width 
```lua
--- @type number
Read: cbeam.Width
Write: cbeam.Width = value
```
## EndWidth 
```lua
--- @type number
Read: cbeam.EndWidth
Write: cbeam.EndWidth = value
```
## FadeLength 
```lua
--- @type number
Read: cbeam.FadeLength
Write: cbeam.FadeLength = value
```
## HaloScale 
```lua
--- @type number
Read: cbeam.HaloScale
Write: cbeam.HaloScale = value
```
## Amplitude 
```lua
--- @type number
Read: cbeam.Amplitude
Write: cbeam.Amplitude = value
```
## StartFrame 
```lua
--- @type number
Read: cbeam.StartFrame
Write: cbeam.StartFrame = value
```
## Speed 
```lua
--- @type number
Read: cbeam.Speed
Write: cbeam.Speed = value
```
## Frame 
```lua
--- @type number
Read: cbeam.Frame
Write: cbeam.Frame = value
```
## ClipStyle 
```lua
--- @type number
Read: cbeam.ClipStyle
Write: cbeam.ClipStyle = value
```
## TurnedOff 
```lua
--- @type boolean
Read: cbeam.TurnedOff
Write: cbeam.TurnedOff = value
```
## EndPos 
```lua
--- @type Vector
Read: cbeam.EndPos
Write: cbeam.EndPos = value
```
## EndEntity (Read-Only)
```lua
--- @type CBaseEntity
Read: cbeam.EndEntity
```
## DissolveType 
```lua
--- @type number
Read: cbeam.DissolveType
Write: cbeam.DissolveType = value
```
## Parent (Read-Only)
```lua
--- @type CBaseModelEntity
Read: cbeam.Parent
```
# Functions
## ToPtr
```lua
@returns string
cbeam:ToPtr()
```
## IsValid
```lua
@returns bool
cbeam:IsValid()
```

:::