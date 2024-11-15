---
title: CGlowOverlay
index: true
order: 2
category:
  - Guide
---

# CGlowOverlay

::: tabs
@tab Lua
# Constructor
```lua
CGlowOverlay(ptr)
```
# Properties
## Pos 
```lua
--- @type Vector
Read: cglowoverlay.Pos
Write: cglowoverlay.Pos = value
```
## Directional 
```lua
--- @type boolean
Read: cglowoverlay.Directional
Write: cglowoverlay.Directional = value
```
## Direction 
```lua
--- @type Vector
Read: cglowoverlay.Direction
Write: cglowoverlay.Direction = value
```
## InSky 
```lua
--- @type boolean
Read: cglowoverlay.InSky
Write: cglowoverlay.InSky = value
```
## SkyObstructionScale 
```lua
--- @type number
Read: cglowoverlay.SkyObstructionScale
Write: cglowoverlay.SkyObstructionScale = value
```
## Sprites (Read-Only)
```lua
--- @type table
Read: cglowoverlay.Sprites
```
## Sprites1 
```lua
--- @type number
Read: cglowoverlay.Sprites1
Write: cglowoverlay.Sprites1 = value
```
## ProxyRadius 
```lua
--- @type number
Read: cglowoverlay.ProxyRadius
Write: cglowoverlay.ProxyRadius = value
```
## HDRColorScale 
```lua
--- @type number
Read: cglowoverlay.HDRColorScale
Write: cglowoverlay.HDRColorScale = value
```
## GlowObstructionScale 
```lua
--- @type number
Read: cglowoverlay.GlowObstructionScale
Write: cglowoverlay.GlowObstructionScale = value
```
## CacheGlowObstruction 
```lua
--- @type boolean
Read: cglowoverlay.CacheGlowObstruction
Write: cglowoverlay.CacheGlowObstruction = value
```
## CacheSkyObstruction 
```lua
--- @type boolean
Read: cglowoverlay.CacheSkyObstruction
Write: cglowoverlay.CacheSkyObstruction = value
```
## Activated 
```lua
--- @type number
Read: cglowoverlay.Activated
Write: cglowoverlay.Activated = value
```
## ListIndex 
```lua
--- @type number
Read: cglowoverlay.ListIndex
Write: cglowoverlay.ListIndex = value
```
## QueryHandle 
```lua
--- @type number
Read: cglowoverlay.QueryHandle
Write: cglowoverlay.QueryHandle = value
```
# Functions
## ToPtr
```lua
@returns string
cglowoverlay:ToPtr()
```
## IsValid
```lua
@returns bool
cglowoverlay:IsValid()
```

:::