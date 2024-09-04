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
## StartFadeSize (Read-Only)
```lua
@type CParticleCollectionRendererFloatInput
Read: cbasetrailrenderer.StartFadeSize
```
## EndFadeSize (Read-Only)
```lua
@type CParticleCollectionRendererFloatInput
Read: cbasetrailrenderer.EndFadeSize
```
## ClampV 
```lua
@type boolean
Read: cbasetrailrenderer.ClampV
Write: cbasetrailrenderer.ClampV = value
```
## Parent (Read-Only)
```lua
@type CBaseRendererSource2
Read: cbasetrailrenderer.Parent
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