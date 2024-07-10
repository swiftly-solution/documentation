---
title: CBaseTrailRenderer
index: true
order: 2
category:
  - Guide
---

# CBaseTrailRenderer

::: tabs
@tab Lua
# Constructor
```lua
CBaseTrailRenderer(ptr --[[ string ]])
```
# Properties
## OrientationType 
```lua
@type number
Read: cbasetrailrenderer.OrientationType
Write: cbasetrailrenderer.OrientationType = value
```
## OrientationControlPoint 
```lua
@type number
Read: cbasetrailrenderer.OrientationControlPoint
Write: cbasetrailrenderer.OrientationControlPoint = value
```
## MinSize 
```lua
@type number
Read: cbasetrailrenderer.MinSize
Write: cbasetrailrenderer.MinSize = value
```
## MaxSize 
```lua
@type number
Read: cbasetrailrenderer.MaxSize
Write: cbasetrailrenderer.MaxSize = value
```
## StartFadeSize 
```lua
@type CParticleCollectionRendererFloatInput
Read: cbasetrailrenderer.StartFadeSize
Write: cbasetrailrenderer.StartFadeSize = value
```
## EndFadeSize 
```lua
@type CParticleCollectionRendererFloatInput
Read: cbasetrailrenderer.EndFadeSize
Write: cbasetrailrenderer.EndFadeSize = value
```
## ClampV 
```lua
@type boolean
Read: cbasetrailrenderer.ClampV
Write: cbasetrailrenderer.ClampV = value
```
## Parent 
```lua
@type CBaseRendererSource2
Read: cbasetrailrenderer.Parent
Write: cbasetrailrenderer.Parent = value
```
# Functions
## ToPtr
```lua
@returns string
cbasetrailrenderer:ToPtr()
```
## IsValid
```lua
@returns bool
cbasetrailrenderer:IsValid()
```

:::