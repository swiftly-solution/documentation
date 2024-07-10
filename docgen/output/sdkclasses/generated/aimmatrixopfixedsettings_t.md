---
title: AimMatrixOpFixedSettings_t
index: true
order: 2
category:
  - Guide
---

# AimMatrixOpFixedSettings_t

::: tabs
@tab Lua
# Constructor
```lua
AimMatrixOpFixedSettings_t(ptr --[[ string ]])
```
# Properties
## Attachment 
```lua
@type CAnimAttachment
Read: aimmatrixopfixedsettings_t.Attachment
Write: aimmatrixopfixedsettings_t.Attachment = value
```
## Damping 
```lua
@type CAnimInputDamping
Read: aimmatrixopfixedsettings_t.Damping
Write: aimmatrixopfixedsettings_t.Damping = value
```
## PoseCacheHandles 
```lua
@type table
Read: aimmatrixopfixedsettings_t.PoseCacheHandles
Write: aimmatrixopfixedsettings_t.PoseCacheHandles = value
```
## BlendMode 
```lua
@type number
Read: aimmatrixopfixedsettings_t.BlendMode
Write: aimmatrixopfixedsettings_t.BlendMode = value
```
## MaxYawAngle 
```lua
@type number
Read: aimmatrixopfixedsettings_t.MaxYawAngle
Write: aimmatrixopfixedsettings_t.MaxYawAngle = value
```
## MaxPitchAngle 
```lua
@type number
Read: aimmatrixopfixedsettings_t.MaxPitchAngle
Write: aimmatrixopfixedsettings_t.MaxPitchAngle = value
```
## SequenceMaxFrame 
```lua
@type number
Read: aimmatrixopfixedsettings_t.SequenceMaxFrame
Write: aimmatrixopfixedsettings_t.SequenceMaxFrame = value
```
## BoneMaskIndex 
```lua
@type number
Read: aimmatrixopfixedsettings_t.BoneMaskIndex
Write: aimmatrixopfixedsettings_t.BoneMaskIndex = value
```
## TargetIsPosition 
```lua
@type boolean
Read: aimmatrixopfixedsettings_t.TargetIsPosition
Write: aimmatrixopfixedsettings_t.TargetIsPosition = value
```
## UseBiasAndClamp 
```lua
@type boolean
Read: aimmatrixopfixedsettings_t.UseBiasAndClamp
Write: aimmatrixopfixedsettings_t.UseBiasAndClamp = value
```
## BiasAndClampYawOffset 
```lua
@type number
Read: aimmatrixopfixedsettings_t.BiasAndClampYawOffset
Write: aimmatrixopfixedsettings_t.BiasAndClampYawOffset = value
```
## BiasAndClampPitchOffset 
```lua
@type number
Read: aimmatrixopfixedsettings_t.BiasAndClampPitchOffset
Write: aimmatrixopfixedsettings_t.BiasAndClampPitchOffset = value
```
## BiasAndClampBlendCurve 
```lua
@type CBlendCurve
Read: aimmatrixopfixedsettings_t.BiasAndClampBlendCurve
Write: aimmatrixopfixedsettings_t.BiasAndClampBlendCurve = value
```
# Functions
## ToPtr
```lua
@returns string
aimmatrixopfixedsettings_t:ToPtr()
```
## IsValid
```lua
@returns bool
aimmatrixopfixedsettings_t:IsValid()
```

:::