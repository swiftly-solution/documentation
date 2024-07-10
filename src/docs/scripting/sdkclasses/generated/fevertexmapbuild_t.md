---
title: FeVertexMapBuild_t
index: true
order: 2
category:
  - Guide
---

# FeVertexMapBuild_t

::: tabs
@tab Lua
# Constructor
```lua
FeVertexMapBuild_t(ptr --[[ string ]])
```
# Properties
## VertexMapName 
```lua
@type string
Read: fevertexmapbuild_t.VertexMapName
Write: fevertexmapbuild_t.VertexMapName = value
```
## NameHash 
```lua
@type number
Read: fevertexmapbuild_t.NameHash
Write: fevertexmapbuild_t.NameHash = value
```
## Color 
```lua
@type Color
Read: fevertexmapbuild_t.Color
Write: fevertexmapbuild_t.Color = value
```
## VolumetricSolveStrength 
```lua
@type number
Read: fevertexmapbuild_t.VolumetricSolveStrength
Write: fevertexmapbuild_t.VolumetricSolveStrength = value
```
## ScaleSourceNode 
```lua
@type number
Read: fevertexmapbuild_t.ScaleSourceNode
Write: fevertexmapbuild_t.ScaleSourceNode = value
```
## Weights 
```lua
@type table
Read: fevertexmapbuild_t.Weights
Write: fevertexmapbuild_t.Weights = value
```
# Functions
## ToPtr
```lua
@returns string
fevertexmapbuild_t:ToPtr()
```
## IsValid
```lua
@returns bool
fevertexmapbuild_t:IsValid()
```

:::