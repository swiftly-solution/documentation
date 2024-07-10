---
title: CEnvBeam
index: true
order: 2
category:
  - Guide
---

# CEnvBeam

::: tabs
@tab Lua
# Constructor
```lua
CEnvBeam(ptr --[[ string ]])
```
# Properties
## Active 
```lua
@type number
Read: cenvbeam.Active
Write: cenvbeam.Active = value
```
## StartEntity 
```lua
@type string
Read: cenvbeam.StartEntity
Write: cenvbeam.StartEntity = value
```
## EndEntity 
```lua
@type string
Read: cenvbeam.EndEntity
Write: cenvbeam.EndEntity = value
```
## Life 
```lua
@type number
Read: cenvbeam.Life
Write: cenvbeam.Life = value
```
## BoltWidth 
```lua
@type number
Read: cenvbeam.BoltWidth
Write: cenvbeam.BoltWidth = value
```
## NoiseAmplitude 
```lua
@type number
Read: cenvbeam.NoiseAmplitude
Write: cenvbeam.NoiseAmplitude = value
```
## Speed 
```lua
@type number
Read: cenvbeam.Speed
Write: cenvbeam.Speed = value
```
## Restrike 
```lua
@type number
Read: cenvbeam.Restrike
Write: cenvbeam.Restrike = value
```
## SpriteName 
```lua
@type string
Read: cenvbeam.SpriteName
Write: cenvbeam.SpriteName = value
```
## FrameStart 
```lua
@type number
Read: cenvbeam.FrameStart
Write: cenvbeam.FrameStart = value
```
## EndPointWorld 
```lua
@type Vector
Read: cenvbeam.EndPointWorld
Write: cenvbeam.EndPointWorld = value
```
## EndPointRelative 
```lua
@type Vector
Read: cenvbeam.EndPointRelative
Write: cenvbeam.EndPointRelative = value
```
## Radius 
```lua
@type number
Read: cenvbeam.Radius
Write: cenvbeam.Radius = value
```
## TouchType 
```lua
@type number
Read: cenvbeam.TouchType
Write: cenvbeam.TouchType = value
```
## FilterName 
```lua
@type string
Read: cenvbeam.FilterName
Write: cenvbeam.FilterName = value
```
## Filter (Read-Only)
```lua
@type CBaseEntity
Read: cenvbeam.Filter
```
## Decal 
```lua
@type string
Read: cenvbeam.Decal
Write: cenvbeam.Decal = value
```
## OnTouchedByEntity 
```lua
@type CEntityIOOutput
Read: cenvbeam.OnTouchedByEntity
Write: cenvbeam.OnTouchedByEntity = value
```
## Parent 
```lua
@type CBeam
Read: cenvbeam.Parent
Write: cenvbeam.Parent = value
```
# Functions
## ToPtr
```lua
@returns string
cenvbeam:ToPtr()
```
## IsValid
```lua
@returns bool
cenvbeam:IsValid()
```

:::