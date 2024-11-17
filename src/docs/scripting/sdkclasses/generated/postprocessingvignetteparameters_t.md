---
title: PostProcessingVignetteParameters_t
index: true
order: 2
category:
  - Guide
---

# PostProcessingVignetteParameters_t

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
PostProcessingVignetteParameters_t(ptr)
```
# Properties
## VignetteStrength 
```lua
--- @type number
Read: postprocessingvignetteparameters_t.VignetteStrength
Write: postprocessingvignetteparameters_t.VignetteStrength = value
```
## Center 
```lua
--- @type Vector2D
Read: postprocessingvignetteparameters_t.Center
Write: postprocessingvignetteparameters_t.Center = value
```
## Radius 
```lua
--- @type number
Read: postprocessingvignetteparameters_t.Radius
Write: postprocessingvignetteparameters_t.Radius = value
```
## Roundness 
```lua
--- @type number
Read: postprocessingvignetteparameters_t.Roundness
Write: postprocessingvignetteparameters_t.Roundness = value
```
## Feather 
```lua
--- @type number
Read: postprocessingvignetteparameters_t.Feather
Write: postprocessingvignetteparameters_t.Feather = value
```
## ColorTint 
```lua
--- @type Vector
Read: postprocessingvignetteparameters_t.ColorTint
Write: postprocessingvignetteparameters_t.ColorTint = value
```
# Functions
## ToPtr
```lua
--- @return string
postprocessingvignetteparameters_t:ToPtr()
```
## IsValid
```lua
--- @return bool
postprocessingvignetteparameters_t:IsValid()
```

:::