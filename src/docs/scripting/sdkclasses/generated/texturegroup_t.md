---
title: TextureGroup_t
index: true
order: 2
category:
  - Guide
---

# TextureGroup_t

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
TextureGroup_t(ptr)
```
# Properties
## Enabled 
```lua
--- @type boolean
Read: texturegroup_t.Enabled
Write: texturegroup_t.Enabled = value
```
## ReplaceTextureWithGradient 
```lua
--- @type boolean
Read: texturegroup_t.ReplaceTextureWithGradient
Write: texturegroup_t.ReplaceTextureWithGradient = value
```
## TextureType 
```lua
--- @type number
Read: texturegroup_t.TextureType
Write: texturegroup_t.TextureType = value
```
## TextureChannels 
```lua
--- @type number
Read: texturegroup_t.TextureChannels
Write: texturegroup_t.TextureChannels = value
```
## TextureBlendMode 
```lua
--- @type number
Read: texturegroup_t.TextureBlendMode
Write: texturegroup_t.TextureBlendMode = value
```
## TextureBlend (Read-Only)
```lua
--- @type CParticleCollectionRendererFloatInput
Read: texturegroup_t.TextureBlend
```
## TextureControls (Read-Only)
```lua
--- @type TextureControls_t
Read: texturegroup_t.TextureControls
```
# Functions
## ToPtr
```lua
--- @return string
texturegroup_t:ToPtr()
```
## IsValid
```lua
--- @return bool
texturegroup_t:IsValid()
```

:::