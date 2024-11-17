---
title: CSun
index: true
order: 2
category:
  - Guide
---

# CSun

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
CSun(ptr)
```
# Properties
## Direction 
```lua
--- @type Vector
Read: csun.Direction
Write: csun.Direction = value
```
## Overlay 
```lua
--- @type Color
Read: csun.Overlay
Write: csun.Overlay = value
```
## EffectName 
```lua
--- @type string
Read: csun.EffectName
Write: csun.EffectName = value
```
## SSEffectName 
```lua
--- @type string
Read: csun.SSEffectName
Write: csun.SSEffectName = value
```
## On 
```lua
--- @type boolean
Read: csun.On
Write: csun.On = value
```
## BmaxColor 
```lua
--- @type boolean
Read: csun.BmaxColor
Write: csun.BmaxColor = value
```
## Size 
```lua
--- @type number
Read: csun.Size
Write: csun.Size = value
```
## Rotation 
```lua
--- @type number
Read: csun.Rotation
Write: csun.Rotation = value
```
## HazeScale 
```lua
--- @type number
Read: csun.HazeScale
Write: csun.HazeScale = value
```
## AlphaHaze 
```lua
--- @type number
Read: csun.AlphaHaze
Write: csun.AlphaHaze = value
```
## AlphaHdr 
```lua
--- @type number
Read: csun.AlphaHdr
Write: csun.AlphaHdr = value
```
## AlphaScale 
```lua
--- @type number
Read: csun.AlphaScale
Write: csun.AlphaScale = value
```
## HDRColorScale 
```lua
--- @type number
Read: csun.HDRColorScale
Write: csun.HDRColorScale = value
```
## FarZScale 
```lua
--- @type number
Read: csun.FarZScale
Write: csun.FarZScale = value
```
## Parent (Read-Only)
```lua
--- @type CBaseModelEntity
Read: csun.Parent
```
# Functions
## ToPtr
```lua
--- @return string
csun:ToPtr()
```
## IsValid
```lua
--- @return bool
csun:IsValid()
```

:::