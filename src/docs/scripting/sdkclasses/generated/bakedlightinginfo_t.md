---
title: BakedLightingInfo_t
index: true
order: 2
category:
  - Guide
---

# BakedLightingInfo_t

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
BakedLightingInfo_t(ptr)
```
# Properties
## LightmapVersionNumber 
```lua
--- @type number
Read: bakedlightinginfo_t.LightmapVersionNumber
Write: bakedlightinginfo_t.LightmapVersionNumber = value
```
## LightmapGameVersionNumber 
```lua
--- @type number
Read: bakedlightinginfo_t.LightmapGameVersionNumber
Write: bakedlightinginfo_t.LightmapGameVersionNumber = value
```
## LightmapUvScale 
```lua
--- @type Vector2D
Read: bakedlightinginfo_t.LightmapUvScale
Write: bakedlightinginfo_t.LightmapUvScale = value
```
## HasLightmaps 
```lua
--- @type boolean
Read: bakedlightinginfo_t.HasLightmaps
Write: bakedlightinginfo_t.HasLightmaps = value
```
## BakedShadowsGamma20 
```lua
--- @type boolean
Read: bakedlightinginfo_t.BakedShadowsGamma20
Write: bakedlightinginfo_t.BakedShadowsGamma20 = value
```
## CompressionEnabled 
```lua
--- @type boolean
Read: bakedlightinginfo_t.CompressionEnabled
Write: bakedlightinginfo_t.CompressionEnabled = value
```
## ChartPackIterations 
```lua
--- @type number
Read: bakedlightinginfo_t.ChartPackIterations
Write: bakedlightinginfo_t.ChartPackIterations = value
```
## VradQuality 
```lua
--- @type number
Read: bakedlightinginfo_t.VradQuality
Write: bakedlightinginfo_t.VradQuality = value
```
# Functions
## ToPtr
```lua
--- @return string
bakedlightinginfo_t:ToPtr()
```
## IsValid
```lua
--- @return bool
bakedlightinginfo_t:IsValid()
```

:::