---
title: CDecalInfo
index: true
order: 2
category:
  - Guide
---

# CDecalInfo

::: tabs
@tab Lua
# Constructor
```lua
CDecalInfo(ptr)
```
# Properties
## AnimationScale 
```lua
--- @type number
Read: cdecalinfo.AnimationScale
Write: cdecalinfo.AnimationScale = value
```
## AnimationLifeSpan 
```lua
--- @type number
Read: cdecalinfo.AnimationLifeSpan
Write: cdecalinfo.AnimationLifeSpan = value
```
## PlaceTime 
```lua
--- @type number
Read: cdecalinfo.PlaceTime
Write: cdecalinfo.PlaceTime = value
```
## FadeStartTime 
```lua
--- @type number
Read: cdecalinfo.FadeStartTime
Write: cdecalinfo.FadeStartTime = value
```
## FadeDuration 
```lua
--- @type number
Read: cdecalinfo.FadeDuration
Write: cdecalinfo.FadeDuration = value
```
## VBSlot 
```lua
--- @type number
Read: cdecalinfo.VBSlot
Write: cdecalinfo.VBSlot = value
```
## BoneIndex 
```lua
--- @type number
Read: cdecalinfo.BoneIndex
Write: cdecalinfo.BoneIndex = value
```
## Position 
```lua
--- @type Vector
Read: cdecalinfo.Position
Write: cdecalinfo.Position = value
```
## BoundingRadiusSqr 
```lua
--- @type number
Read: cdecalinfo.BoundingRadiusSqr
Write: cdecalinfo.BoundingRadiusSqr = value
```
## Next (Read-Only)
```lua
--- @type CDecalInfo
Read: cdecalinfo.Next
```
## Prev (Read-Only)
```lua
--- @type CDecalInfo
Read: cdecalinfo.Prev
```
## DecalMaterialIndex 
```lua
--- @type number
Read: cdecalinfo.DecalMaterialIndex
Write: cdecalinfo.DecalMaterialIndex = value
```
# Functions
## ToPtr
```lua
@returns string
cdecalinfo:ToPtr()
```
## IsValid
```lua
@returns bool
cdecalinfo:IsValid()
```

:::