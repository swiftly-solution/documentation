---
title: CSoundOpvarSetPointEntity
index: true
order: 2
category:
  - Guide
---

# CSoundOpvarSetPointEntity

::: tabs
@tab Lua
# Constructor
```lua
CSoundOpvarSetPointEntity(ptr)
```
# Properties
## OnEnter (Read-Only)
```lua
--- @type CEntityIOOutput
Read: csoundopvarsetpointentity.OnEnter
```
## OnExit (Read-Only)
```lua
--- @type CEntityIOOutput
Read: csoundopvarsetpointentity.OnExit
```
## AutoDisable 
```lua
--- @type boolean
Read: csoundopvarsetpointentity.AutoDisable
Write: csoundopvarsetpointentity.AutoDisable = value
```
## DistanceMin 
```lua
--- @type number
Read: csoundopvarsetpointentity.DistanceMin
Write: csoundopvarsetpointentity.DistanceMin = value
```
## DistanceMax 
```lua
--- @type number
Read: csoundopvarsetpointentity.DistanceMax
Write: csoundopvarsetpointentity.DistanceMax = value
```
## DistanceMapMin 
```lua
--- @type number
Read: csoundopvarsetpointentity.DistanceMapMin
Write: csoundopvarsetpointentity.DistanceMapMin = value
```
## DistanceMapMax 
```lua
--- @type number
Read: csoundopvarsetpointentity.DistanceMapMax
Write: csoundopvarsetpointentity.DistanceMapMax = value
```
## OcclusionRadius 
```lua
--- @type number
Read: csoundopvarsetpointentity.OcclusionRadius
Write: csoundopvarsetpointentity.OcclusionRadius = value
```
## OcclusionMin 
```lua
--- @type number
Read: csoundopvarsetpointentity.OcclusionMin
Write: csoundopvarsetpointentity.OcclusionMin = value
```
## OcclusionMax 
```lua
--- @type number
Read: csoundopvarsetpointentity.OcclusionMax
Write: csoundopvarsetpointentity.OcclusionMax = value
```
## ValSetOnDisable 
```lua
--- @type number
Read: csoundopvarsetpointentity.ValSetOnDisable
Write: csoundopvarsetpointentity.ValSetOnDisable = value
```
## SetValueOnDisable 
```lua
--- @type boolean
Read: csoundopvarsetpointentity.SetValueOnDisable
Write: csoundopvarsetpointentity.SetValueOnDisable = value
```
## Reloading 
```lua
--- @type boolean
Read: csoundopvarsetpointentity.Reloading
Write: csoundopvarsetpointentity.Reloading = value
```
## SimulationMode 
```lua
--- @type number
Read: csoundopvarsetpointentity.SimulationMode
Write: csoundopvarsetpointentity.SimulationMode = value
```
## VisibilitySamples 
```lua
--- @type number
Read: csoundopvarsetpointentity.VisibilitySamples
Write: csoundopvarsetpointentity.VisibilitySamples = value
```
## DynamicProxyPoint 
```lua
--- @type Vector
Read: csoundopvarsetpointentity.DynamicProxyPoint
Write: csoundopvarsetpointentity.DynamicProxyPoint = value
```
## DynamicMaximumOcclusion 
```lua
--- @type number
Read: csoundopvarsetpointentity.DynamicMaximumOcclusion
Write: csoundopvarsetpointentity.DynamicMaximumOcclusion = value
```
## DynamicEntity (Read-Only)
```lua
--- @type CEntityInstance
Read: csoundopvarsetpointentity.DynamicEntity
```
## DynamicEntityName 
```lua
--- @type string
Read: csoundopvarsetpointentity.DynamicEntityName
Write: csoundopvarsetpointentity.DynamicEntityName = value
```
## PathingDistanceNormFactor 
```lua
--- @type number
Read: csoundopvarsetpointentity.PathingDistanceNormFactor
Write: csoundopvarsetpointentity.PathingDistanceNormFactor = value
```
## PathingSourcePos 
```lua
--- @type Vector
Read: csoundopvarsetpointentity.PathingSourcePos
Write: csoundopvarsetpointentity.PathingSourcePos = value
```
## PathingListenerPos 
```lua
--- @type Vector
Read: csoundopvarsetpointentity.PathingListenerPos
Write: csoundopvarsetpointentity.PathingListenerPos = value
```
## PathingDirection 
```lua
--- @type Vector
Read: csoundopvarsetpointentity.PathingDirection
Write: csoundopvarsetpointentity.PathingDirection = value
```
## PathingSourceIndex 
```lua
--- @type number
Read: csoundopvarsetpointentity.PathingSourceIndex
Write: csoundopvarsetpointentity.PathingSourceIndex = value
```
## Parent (Read-Only)
```lua
--- @type CSoundOpvarSetPointBase
Read: csoundopvarsetpointentity.Parent
```
# Functions
## ToPtr
```lua
@returns string
csoundopvarsetpointentity:ToPtr()
```
## IsValid
```lua
@returns bool
csoundopvarsetpointentity:IsValid()
```

:::