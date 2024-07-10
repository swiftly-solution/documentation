---
title: CEnvLaser
index: true
order: 2
category:
  - Guide
---

# CEnvLaser

::: tabs
@tab Lua
# Constructor
```lua
CEnvLaser(ptr --[[ string ]])
```
# Properties
## LaserTarget 
```lua
@type string
Read: cenvlaser.LaserTarget
Write: cenvlaser.LaserTarget = value
```
## Sprite (Read-Only)
```lua
@type CSprite
Read: cenvlaser.Sprite
```
## SpriteName 
```lua
@type string
Read: cenvlaser.SpriteName
Write: cenvlaser.SpriteName = value
```
## FirePosition 
```lua
@type Vector
Read: cenvlaser.FirePosition
Write: cenvlaser.FirePosition = value
```
## StartFrame 
```lua
@type number
Read: cenvlaser.StartFrame
Write: cenvlaser.StartFrame = value
```
## Parent 
```lua
@type CBeam
Read: cenvlaser.Parent
Write: cenvlaser.Parent = value
```
# Functions
## ToPtr
```lua
@returns string
cenvlaser:ToPtr()
```
## IsValid
```lua
@returns bool
cenvlaser:IsValid()
```

:::