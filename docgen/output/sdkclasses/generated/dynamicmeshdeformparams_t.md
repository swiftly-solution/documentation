---
title: DynamicMeshDeformParams_t
index: true
order: 2
category:
  - Guide
---

# DynamicMeshDeformParams_t

::: tabs
@tab Lua
# Constructor
```lua
DynamicMeshDeformParams_t(ptr --[[ string ]])
```
# Properties
## TensionCompressScale 
```lua
@type number
Read: dynamicmeshdeformparams_t.TensionCompressScale
Write: dynamicmeshdeformparams_t.TensionCompressScale = value
```
## TensionStretchScale 
```lua
@type number
Read: dynamicmeshdeformparams_t.TensionStretchScale
Write: dynamicmeshdeformparams_t.TensionStretchScale = value
```
## RecomputeSmoothNormalsAfterAnimation 
```lua
@type boolean
Read: dynamicmeshdeformparams_t.RecomputeSmoothNormalsAfterAnimation
Write: dynamicmeshdeformparams_t.RecomputeSmoothNormalsAfterAnimation = value
```
## ComputeDynamicMeshTensionAfterAnimation 
```lua
@type boolean
Read: dynamicmeshdeformparams_t.ComputeDynamicMeshTensionAfterAnimation
Write: dynamicmeshdeformparams_t.ComputeDynamicMeshTensionAfterAnimation = value
```
## SmoothNormalsAcrossUvSeams 
```lua
@type boolean
Read: dynamicmeshdeformparams_t.SmoothNormalsAcrossUvSeams
Write: dynamicmeshdeformparams_t.SmoothNormalsAcrossUvSeams = value
```
# Functions
## ToPtr
```lua
@returns string
dynamicmeshdeformparams_t:ToPtr()
```
## IsValid
```lua
@returns bool
dynamicmeshdeformparams_t:IsValid()
```

:::