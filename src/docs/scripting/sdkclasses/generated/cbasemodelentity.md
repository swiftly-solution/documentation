---
title: CBaseModelEntity
index: true
order: 2
category:
  - Guide
---

# CBaseModelEntity

::: tabs
@tab Lua
# Constructor
```lua
CBaseModelEntity(ptr --[[ string ]])
```
# Properties
## CRenderComponent 
```lua
@type CRenderComponent
Read: cbasemodelentity.CRenderComponent
Write: cbasemodelentity.CRenderComponent = value
```
## CHitboxComponent (Read-Only)
```lua
@type CHitboxComponent
Read: cbasemodelentity.CHitboxComponent
```
## DissolveStartTime 
```lua
@type number
Read: cbasemodelentity.DissolveStartTime
Write: cbasemodelentity.DissolveStartTime = value
```
## OnIgnite (Read-Only)
```lua
@type CEntityIOOutput
Read: cbasemodelentity.OnIgnite
```
## RenderMode 
```lua
@type number
Read: cbasemodelentity.RenderMode
Write: cbasemodelentity.RenderMode = value
```
## RenderFX 
```lua
@type number
Read: cbasemodelentity.RenderFX
Write: cbasemodelentity.RenderFX = value
```
## AllowFadeInView 
```lua
@type boolean
Read: cbasemodelentity.AllowFadeInView
Write: cbasemodelentity.AllowFadeInView = value
```
## Render 
```lua
@type Color
Read: cbasemodelentity.Render
Write: cbasemodelentity.Render = value
```
## RenderAttributes 
```lua
@type table
Read: cbasemodelentity.RenderAttributes
Write: cbasemodelentity.RenderAttributes = value
```
## RenderToCubemaps 
```lua
@type boolean
Read: cbasemodelentity.RenderToCubemaps
Write: cbasemodelentity.RenderToCubemaps = value
```
## Collision (Read-Only)
```lua
@type CCollisionProperty
Read: cbasemodelentity.Collision
```
## Glow (Read-Only)
```lua
@type CGlowProperty
Read: cbasemodelentity.Glow
```
## GlowBackfaceMult 
```lua
@type number
Read: cbasemodelentity.GlowBackfaceMult
Write: cbasemodelentity.GlowBackfaceMult = value
```
## FadeMinDist 
```lua
@type number
Read: cbasemodelentity.FadeMinDist
Write: cbasemodelentity.FadeMinDist = value
```
## FadeMaxDist 
```lua
@type number
Read: cbasemodelentity.FadeMaxDist
Write: cbasemodelentity.FadeMaxDist = value
```
## FadeScale 
```lua
@type number
Read: cbasemodelentity.FadeScale
Write: cbasemodelentity.FadeScale = value
```
## ShadowStrength 
```lua
@type number
Read: cbasemodelentity.ShadowStrength
Write: cbasemodelentity.ShadowStrength = value
```
## ObjectCulling 
```lua
@type number
Read: cbasemodelentity.ObjectCulling
Write: cbasemodelentity.ObjectCulling = value
```
## AddDecal 
```lua
@type number
Read: cbasemodelentity.AddDecal
Write: cbasemodelentity.AddDecal = value
```
## DecalPosition 
```lua
@type Vector
Read: cbasemodelentity.DecalPosition
Write: cbasemodelentity.DecalPosition = value
```
## DecalForwardAxis 
```lua
@type Vector
Read: cbasemodelentity.DecalForwardAxis
Write: cbasemodelentity.DecalForwardAxis = value
```
## DecalHealBloodRate 
```lua
@type number
Read: cbasemodelentity.DecalHealBloodRate
Write: cbasemodelentity.DecalHealBloodRate = value
```
## DecalHealHeightRate 
```lua
@type number
Read: cbasemodelentity.DecalHealHeightRate
Write: cbasemodelentity.DecalHealHeightRate = value
```
## ConfigEntitiesToPropagateMaterialDecalsTo 
```lua
@type table
Read: cbasemodelentity.ConfigEntitiesToPropagateMaterialDecalsTo
Write: cbasemodelentity.ConfigEntitiesToPropagateMaterialDecalsTo = value
```
## ViewOffset (Read-Only)
```lua
@type CNetworkViewOffsetVector
Read: cbasemodelentity.ViewOffset
```
## Parent 
```lua
@type CBaseEntity
Read: cbasemodelentity.Parent
Write: cbasemodelentity.Parent = value
```
# Functions
## SetModel
```lua
@returns void
cbasemodelentity:SetModel(model --[[ string ]])
```
## ToPtr
```lua
@returns string
cbasemodelentity:ToPtr()
```
## IsValid
```lua
@returns bool
cbasemodelentity:IsValid()
```

:::