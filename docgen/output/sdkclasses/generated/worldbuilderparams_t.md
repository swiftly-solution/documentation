---
title: WorldBuilderParams_t
index: true
order: 2
category:
  - Guide
---

# WorldBuilderParams_t

::: tabs
@tab Lua
# Constructor
```lua
WorldBuilderParams_t(ptr --[[ string ]])
```
# Properties
## MinDrawVolumeSize 
```lua
@type number
Read: worldbuilderparams_t.MinDrawVolumeSize
Write: worldbuilderparams_t.MinDrawVolumeSize = value
```
## BuildBakedLighting 
```lua
@type boolean
Read: worldbuilderparams_t.BuildBakedLighting
Write: worldbuilderparams_t.BuildBakedLighting = value
```
## BakedLightingInfo (Read-Only)
```lua
@type BakedLightingInfo_t
Read: worldbuilderparams_t.BakedLightingInfo
```
## CompileTimestamp 
```lua
@type number
Read: worldbuilderparams_t.CompileTimestamp
Write: worldbuilderparams_t.CompileTimestamp = value
```
## CompileFingerprint 
```lua
@type number
Read: worldbuilderparams_t.CompileFingerprint
Write: worldbuilderparams_t.CompileFingerprint = value
```
# Functions
## ToPtr
```lua
@returns string
worldbuilderparams_t:ToPtr()
```
## IsValid
```lua
@returns bool
worldbuilderparams_t:IsValid()
```

:::