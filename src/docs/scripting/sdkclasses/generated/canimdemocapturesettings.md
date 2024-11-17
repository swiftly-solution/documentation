---
title: CAnimDemoCaptureSettings
index: true
order: 2
category:
  - Guide
---

# CAnimDemoCaptureSettings

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
CAnimDemoCaptureSettings(ptr)
```
# Properties
## ErrorRangeSplineRotation 
```lua
--- @type Vector2D
Read: canimdemocapturesettings.ErrorRangeSplineRotation
Write: canimdemocapturesettings.ErrorRangeSplineRotation = value
```
## ErrorRangeSplineTranslation 
```lua
--- @type Vector2D
Read: canimdemocapturesettings.ErrorRangeSplineTranslation
Write: canimdemocapturesettings.ErrorRangeSplineTranslation = value
```
## ErrorRangeSplineScale 
```lua
--- @type Vector2D
Read: canimdemocapturesettings.ErrorRangeSplineScale
Write: canimdemocapturesettings.ErrorRangeSplineScale = value
```
## IkRotation_MaxSplineError 
```lua
--- @type number
Read: canimdemocapturesettings.IkRotation_MaxSplineError
Write: canimdemocapturesettings.IkRotation_MaxSplineError = value
```
## IkTranslation_MaxSplineError 
```lua
--- @type number
Read: canimdemocapturesettings.IkTranslation_MaxSplineError
Write: canimdemocapturesettings.IkTranslation_MaxSplineError = value
```
## ErrorRangeQuantizationRotation 
```lua
--- @type Vector2D
Read: canimdemocapturesettings.ErrorRangeQuantizationRotation
Write: canimdemocapturesettings.ErrorRangeQuantizationRotation = value
```
## ErrorRangeQuantizationTranslation 
```lua
--- @type Vector2D
Read: canimdemocapturesettings.ErrorRangeQuantizationTranslation
Write: canimdemocapturesettings.ErrorRangeQuantizationTranslation = value
```
## ErrorRangeQuantizationScale 
```lua
--- @type Vector2D
Read: canimdemocapturesettings.ErrorRangeQuantizationScale
Write: canimdemocapturesettings.ErrorRangeQuantizationScale = value
```
## IkRotation_MaxQuantizationError 
```lua
--- @type number
Read: canimdemocapturesettings.IkRotation_MaxQuantizationError
Write: canimdemocapturesettings.IkRotation_MaxQuantizationError = value
```
## IkTranslation_MaxQuantizationError 
```lua
--- @type number
Read: canimdemocapturesettings.IkTranslation_MaxQuantizationError
Write: canimdemocapturesettings.IkTranslation_MaxQuantizationError = value
```
## BaseSequence 
```lua
--- @type string
Read: canimdemocapturesettings.BaseSequence
Write: canimdemocapturesettings.BaseSequence = value
```
## BaseSequenceFrame 
```lua
--- @type number
Read: canimdemocapturesettings.BaseSequenceFrame
Write: canimdemocapturesettings.BaseSequenceFrame = value
```
## BoneSelectionMode 
```lua
--- @type number
Read: canimdemocapturesettings.BoneSelectionMode
Write: canimdemocapturesettings.BoneSelectionMode = value
```
## Bones (Read-Only)
```lua
--- @type table
Read: canimdemocapturesettings.Bones
```
## IkChains (Read-Only)
```lua
--- @type table
Read: canimdemocapturesettings.IkChains
```
# Functions
## ToPtr
```lua
--- @return string
canimdemocapturesettings:ToPtr()
```
## IsValid
```lua
--- @return bool
canimdemocapturesettings:IsValid()
```

:::