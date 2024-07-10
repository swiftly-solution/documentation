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
PostProcessingResource_t(ptr --[[ string ]])
```
# Properties
## HasTonemapParams 
```lua
@type boolean
Read: postprocessingresource_t.HasTonemapParams
Write: postprocessingresource_t.HasTonemapParams = value
```
## ToneMapParams 
```lua
@type PostProcessingTonemapParameters_t
Read: postprocessingresource_t.ToneMapParams
Write: postprocessingresource_t.ToneMapParams = value
```
## HasBloomParams 
```lua
@type boolean
Read: postprocessingresource_t.HasBloomParams
Write: postprocessingresource_t.HasBloomParams = value
```
## BloomParams 
```lua
@type PostProcessingBloomParameters_t
Read: postprocessingresource_t.BloomParams
Write: postprocessingresource_t.BloomParams = value
```
## HasVignetteParams 
```lua
@type boolean
Read: postprocessingresource_t.HasVignetteParams
Write: postprocessingresource_t.HasVignetteParams = value
```
## VignetteParams 
```lua
@type PostProcessingVignetteParameters_t
Read: postprocessingresource_t.VignetteParams
Write: postprocessingresource_t.VignetteParams = value
```
## HasLocalContrastParams 
```lua
@type boolean
Read: postprocessingresource_t.HasLocalContrastParams
Write: postprocessingresource_t.HasLocalContrastParams = value
```
## LocalConstrastParams 
```lua
@type PostProcessingLocalContrastParameters_t
Read: postprocessingresource_t.LocalConstrastParams
Write: postprocessingresource_t.LocalConstrastParams = value
```
## ColorCorrectionVolumeDim 
```lua
@type number
Read: postprocessingresource_t.ColorCorrectionVolumeDim
Write: postprocessingresource_t.ColorCorrectionVolumeDim = value
```
## HasColorCorrection 
```lua
@type boolean
Read: postprocessingresource_t.HasColorCorrection
Write: postprocessingresource_t.HasColorCorrection = value
```
# Functions
## ToPtr
```lua
@returns string
postprocessingresource_t:ToPtr()
```
## IsValid
```lua
@returns bool
postprocessingresource_t:IsValid()
```

:::