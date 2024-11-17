---
title: PostProcessingResource_t
index: true
order: 2
category:
  - Guide
---

# PostProcessingResource_t

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
PostProcessingResource_t(ptr)
```
# Properties
## HasTonemapParams 
```lua
--- @type boolean
Read: postprocessingresource_t.HasTonemapParams
Write: postprocessingresource_t.HasTonemapParams = value
```
## ToneMapParams (Read-Only)
```lua
--- @type PostProcessingTonemapParameters_t
Read: postprocessingresource_t.ToneMapParams
```
## HasBloomParams 
```lua
--- @type boolean
Read: postprocessingresource_t.HasBloomParams
Write: postprocessingresource_t.HasBloomParams = value
```
## BloomParams (Read-Only)
```lua
--- @type PostProcessingBloomParameters_t
Read: postprocessingresource_t.BloomParams
```
## HasVignetteParams 
```lua
--- @type boolean
Read: postprocessingresource_t.HasVignetteParams
Write: postprocessingresource_t.HasVignetteParams = value
```
## VignetteParams (Read-Only)
```lua
--- @type PostProcessingVignetteParameters_t
Read: postprocessingresource_t.VignetteParams
```
## HasLocalContrastParams 
```lua
--- @type boolean
Read: postprocessingresource_t.HasLocalContrastParams
Write: postprocessingresource_t.HasLocalContrastParams = value
```
## LocalConstrastParams (Read-Only)
```lua
--- @type PostProcessingLocalContrastParameters_t
Read: postprocessingresource_t.LocalConstrastParams
```
## ColorCorrectionVolumeDim 
```lua
--- @type number
Read: postprocessingresource_t.ColorCorrectionVolumeDim
Write: postprocessingresource_t.ColorCorrectionVolumeDim = value
```
## HasColorCorrection 
```lua
--- @type boolean
Read: postprocessingresource_t.HasColorCorrection
Write: postprocessingresource_t.HasColorCorrection = value
```
# Functions
## ToPtr
```lua
--- @return string
postprocessingresource_t:ToPtr()
```
## IsValid
```lua
--- @return bool
postprocessingresource_t:IsValid()
```

:::