---
title: CEffectData
index: true
order: 2
category:
  - Guide
---

# CEffectData

::: tabs
@tab Lua
# Constructor
```lua
CEffectData(ptr)
```
# Properties
## Origin 
```lua
--- @type Vector
Read: ceffectdata.Origin
Write: ceffectdata.Origin = value
```
## Start 
```lua
--- @type Vector
Read: ceffectdata.Start
Write: ceffectdata.Start = value
```
## Normal 
```lua
--- @type Vector
Read: ceffectdata.Normal
Write: ceffectdata.Normal = value
```
## Angles 
```lua
--- @type QAngle
Read: ceffectdata.Angles
Write: ceffectdata.Angles = value
```
## Entity (Read-Only)
```lua
--- @type CEntityInstance
Read: ceffectdata.Entity
```
## OtherEntity (Read-Only)
```lua
--- @type CEntityInstance
Read: ceffectdata.OtherEntity
```
## Scale 
```lua
--- @type number
Read: ceffectdata.Scale
Write: ceffectdata.Scale = value
```
## Magnitude 
```lua
--- @type number
Read: ceffectdata.Magnitude
Write: ceffectdata.Magnitude = value
```
## Radius 
```lua
--- @type number
Read: ceffectdata.Radius
Write: ceffectdata.Radius = value
```
## SurfaceProp 
```lua
--- @type number
Read: ceffectdata.SurfaceProp
Write: ceffectdata.SurfaceProp = value
```
## DamageType 
```lua
--- @type number
Read: ceffectdata.DamageType
Write: ceffectdata.DamageType = value
```
## Penetrate 
```lua
--- @type number
Read: ceffectdata.Penetrate
Write: ceffectdata.Penetrate = value
```
## Material 
```lua
--- @type number
Read: ceffectdata.Material
Write: ceffectdata.Material = value
```
## HitBox 
```lua
--- @type number
Read: ceffectdata.HitBox
Write: ceffectdata.HitBox = value
```
## Color 
```lua
--- @type number
Read: ceffectdata.Color
Write: ceffectdata.Color = value
```
## Flags 
```lua
--- @type number
Read: ceffectdata.Flags
Write: ceffectdata.Flags = value
```
## AttachmentName 
```lua
--- @type number
Read: ceffectdata.AttachmentName
Write: ceffectdata.AttachmentName = value
```
## EffectName 
```lua
--- @type number
Read: ceffectdata.EffectName
Write: ceffectdata.EffectName = value
```
## ExplosionType 
```lua
--- @type number
Read: ceffectdata.ExplosionType
Write: ceffectdata.ExplosionType = value
```
# Functions
## ToPtr
```lua
@returns string
ceffectdata:ToPtr()
```
## IsValid
```lua
@returns bool
ceffectdata:IsValid()
```

:::