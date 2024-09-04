---
title: CSmartPropOperation_Trace
index: true
order: 2
category:
  - Guide
---

# CSmartPropOperation_Trace

::: tabs
@tab Lua
# Constructor
```lua
CSmartPropOperation_Trace(ptr --[[ string ]])
```
# Properties
## Origin 
```lua
@type CSmartPropAttributeVector
Read: csmartpropoperation_trace.Origin
Write: csmartpropoperation_trace.Origin = value
```
## OriginSpace (Read-Only)
```lua
@type CSmartPropAttributeCoordinateSpace
Read: csmartpropoperation_trace.OriginSpace
```
## OriginOffset 
```lua
@type CSmartPropAttributeFloat
Read: csmartpropoperation_trace.OriginOffset
Write: csmartpropoperation_trace.OriginOffset = value
```
## SurfaceUpInfluence 
```lua
@type CSmartPropAttributeFloat
Read: csmartpropoperation_trace.SurfaceUpInfluence
Write: csmartpropoperation_trace.SurfaceUpInfluence = value
```
## NoHitResult (Read-Only)
```lua
@type CSmartPropAttributeTraceNoHit
Read: csmartpropoperation_trace.NoHitResult
```
## IgnoreToolMaterials 
```lua
@type CSmartPropAttributeBool
Read: csmartpropoperation_trace.IgnoreToolMaterials
Write: csmartpropoperation_trace.IgnoreToolMaterials = value
```
## IgnoreSky 
```lua
@type CSmartPropAttributeBool
Read: csmartpropoperation_trace.IgnoreSky
Write: csmartpropoperation_trace.IgnoreSky = value
```
## IgnoreNoDraw 
```lua
@type CSmartPropAttributeBool
Read: csmartpropoperation_trace.IgnoreNoDraw
Write: csmartpropoperation_trace.IgnoreNoDraw = value
```
## IgnoreTranslucent 
```lua
@type CSmartPropAttributeBool
Read: csmartpropoperation_trace.IgnoreTranslucent
Write: csmartpropoperation_trace.IgnoreTranslucent = value
```
## IgnoreModels 
```lua
@type CSmartPropAttributeBool
Read: csmartpropoperation_trace.IgnoreModels
Write: csmartpropoperation_trace.IgnoreModels = value
```
## IgnoreEntities 
```lua
@type CSmartPropAttributeBool
Read: csmartpropoperation_trace.IgnoreEntities
Write: csmartpropoperation_trace.IgnoreEntities = value
```
## Parent (Read-Only)
```lua
@type CSmartPropTransformOperation
Read: csmartpropoperation_trace.Parent
```
# Functions
## ToPtr
```lua
@returns string
csmartpropoperation_trace:ToPtr()
```
## IsValid
```lua
@returns bool
csmartpropoperation_trace:IsValid()
```

:::