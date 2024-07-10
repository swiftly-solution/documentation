---
title: CSprite
index: true
order: 2
category:
  - Guide
---

# CSprite

::: tabs
@tab Lua
# Constructor
```lua
CSprite(ptr --[[ string ]])
```
# Properties
## AttachedToEntity (Read-Only)
```lua
@type CBaseEntity
Read: csprite.AttachedToEntity
```
## SpriteFramerate 
```lua
@type number
Read: csprite.SpriteFramerate
Write: csprite.SpriteFramerate = value
```
## Frame 
```lua
@type number
Read: csprite.Frame
Write: csprite.Frame = value
```
## DieTime 
```lua
@type number
Read: csprite.DieTime
Write: csprite.DieTime = value
```
## Brightness 
```lua
@type number
Read: csprite.Brightness
Write: csprite.Brightness = value
```
## BrightnessDuration 
```lua
@type number
Read: csprite.BrightnessDuration
Write: csprite.BrightnessDuration = value
```
## SpriteScale 
```lua
@type number
Read: csprite.SpriteScale
Write: csprite.SpriteScale = value
```
## ScaleDuration 
```lua
@type number
Read: csprite.ScaleDuration
Write: csprite.ScaleDuration = value
```
## WorldSpaceScale 
```lua
@type boolean
Read: csprite.WorldSpaceScale
Write: csprite.WorldSpaceScale = value
```
## GlowProxySize 
```lua
@type number
Read: csprite.GlowProxySize
Write: csprite.GlowProxySize = value
```
## HDRColorScale 
```lua
@type number
Read: csprite.HDRColorScale
Write: csprite.HDRColorScale = value
```
## LastTime 
```lua
@type number
Read: csprite.LastTime
Write: csprite.LastTime = value
```
## MaxFrame 
```lua
@type number
Read: csprite.MaxFrame
Write: csprite.MaxFrame = value
```
## StartScale 
```lua
@type number
Read: csprite.StartScale
Write: csprite.StartScale = value
```
## DestScale 
```lua
@type number
Read: csprite.DestScale
Write: csprite.DestScale = value
```
## ScaleTimeStart 
```lua
@type number
Read: csprite.ScaleTimeStart
Write: csprite.ScaleTimeStart = value
```
## StartBrightness 
```lua
@type number
Read: csprite.StartBrightness
Write: csprite.StartBrightness = value
```
## DestBrightness 
```lua
@type number
Read: csprite.DestBrightness
Write: csprite.DestBrightness = value
```
## BrightnessTimeStart 
```lua
@type number
Read: csprite.BrightnessTimeStart
Write: csprite.BrightnessTimeStart = value
```
## SpriteWidth 
```lua
@type number
Read: csprite.SpriteWidth
Write: csprite.SpriteWidth = value
```
## SpriteHeight 
```lua
@type number
Read: csprite.SpriteHeight
Write: csprite.SpriteHeight = value
```
## Parent 
```lua
@type CBaseModelEntity
Read: csprite.Parent
Write: csprite.Parent = value
```
# Functions
## ToPtr
```lua
@returns string
csprite:ToPtr()
```
## IsValid
```lua
@returns bool
csprite:IsValid()
```

:::