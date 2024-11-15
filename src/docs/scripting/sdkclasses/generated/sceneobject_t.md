---
title: SceneObject_t
index: true
order: 2
category:
  - Guide
---

# SceneObject_t

::: tabs
@tab Lua
# Constructor
```lua
SceneObject_t(ptr)
```
# Properties
## ObjectID 
```lua
--- @type number
Read: sceneobject_t.ObjectID
Write: sceneobject_t.ObjectID = value
```
## Transform 
```lua
--- @type table
Read: sceneobject_t.Transform
Write: sceneobject_t.Transform = value
```
## FadeStartDistance 
```lua
--- @type number
Read: sceneobject_t.FadeStartDistance
Write: sceneobject_t.FadeStartDistance = value
```
## FadeEndDistance 
```lua
--- @type number
Read: sceneobject_t.FadeEndDistance
Write: sceneobject_t.FadeEndDistance = value
```
## TintColor 
```lua
--- @type Vector4D
Read: sceneobject_t.TintColor
Write: sceneobject_t.TintColor = value
```
## Skin 
```lua
--- @type string
Read: sceneobject_t.Skin
Write: sceneobject_t.Skin = value
```
## ObjectTypeFlags 
```lua
--- @type number
Read: sceneobject_t.ObjectTypeFlags
Write: sceneobject_t.ObjectTypeFlags = value
```
## LightingOrigin 
```lua
--- @type Vector
Read: sceneobject_t.LightingOrigin
Write: sceneobject_t.LightingOrigin = value
```
## OverlayRenderOrder 
```lua
--- @type number
Read: sceneobject_t.OverlayRenderOrder
Write: sceneobject_t.OverlayRenderOrder = value
```
## LODOverride 
```lua
--- @type number
Read: sceneobject_t.LODOverride
Write: sceneobject_t.LODOverride = value
```
## CubeMapPrecomputedHandshake 
```lua
--- @type number
Read: sceneobject_t.CubeMapPrecomputedHandshake
Write: sceneobject_t.CubeMapPrecomputedHandshake = value
```
## LightProbeVolumePrecomputedHandshake 
```lua
--- @type number
Read: sceneobject_t.LightProbeVolumePrecomputedHandshake
Write: sceneobject_t.LightProbeVolumePrecomputedHandshake = value
```
# Functions
## ToPtr
```lua
@returns string
sceneobject_t:ToPtr()
```
## IsValid
```lua
@returns bool
sceneobject_t:IsValid()
```

:::