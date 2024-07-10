---
title: TwoBoneIKSettings_t
index: true
order: 2
category:
  - Guide
---

# TwoBoneIKSettings_t

::: tabs
@tab Lua
# Constructor
```lua
TwoBoneIKSettings_t(ptr --[[ string ]])
```
# Properties
## EndEffectorType 
```lua
@type number
Read: twoboneiksettings_t.EndEffectorType
Write: twoboneiksettings_t.EndEffectorType = value
```
## EndEffectorAttachment 
```lua
@type CAnimAttachment
Read: twoboneiksettings_t.EndEffectorAttachment
Write: twoboneiksettings_t.EndEffectorAttachment = value
```
## TargetType 
```lua
@type number
Read: twoboneiksettings_t.TargetType
Write: twoboneiksettings_t.TargetType = value
```
## TargetAttachment 
```lua
@type CAnimAttachment
Read: twoboneiksettings_t.TargetAttachment
Write: twoboneiksettings_t.TargetAttachment = value
```
## TargetBoneIndex 
```lua
@type number
Read: twoboneiksettings_t.TargetBoneIndex
Write: twoboneiksettings_t.TargetBoneIndex = value
```
## PositionParam 
```lua
@type CAnimParamHandle
Read: twoboneiksettings_t.PositionParam
Write: twoboneiksettings_t.PositionParam = value
```
## RotationParam 
```lua
@type CAnimParamHandle
Read: twoboneiksettings_t.RotationParam
Write: twoboneiksettings_t.RotationParam = value
```
## AlwaysUseFallbackHinge 
```lua
@type boolean
Read: twoboneiksettings_t.AlwaysUseFallbackHinge
Write: twoboneiksettings_t.AlwaysUseFallbackHinge = value
```
## LsFallbackHingeAxis 
```lua
@type Vector
Read: twoboneiksettings_t.LsFallbackHingeAxis
Write: twoboneiksettings_t.LsFallbackHingeAxis = value
```
## FixedBoneIndex 
```lua
@type number
Read: twoboneiksettings_t.FixedBoneIndex
Write: twoboneiksettings_t.FixedBoneIndex = value
```
## MiddleBoneIndex 
```lua
@type number
Read: twoboneiksettings_t.MiddleBoneIndex
Write: twoboneiksettings_t.MiddleBoneIndex = value
```
## EndBoneIndex 
```lua
@type number
Read: twoboneiksettings_t.EndBoneIndex
Write: twoboneiksettings_t.EndBoneIndex = value
```
## MatchTargetOrientation 
```lua
@type boolean
Read: twoboneiksettings_t.MatchTargetOrientation
Write: twoboneiksettings_t.MatchTargetOrientation = value
```
## ConstrainTwist 
```lua
@type boolean
Read: twoboneiksettings_t.ConstrainTwist
Write: twoboneiksettings_t.ConstrainTwist = value
```
## MaxTwist 
```lua
@type number
Read: twoboneiksettings_t.MaxTwist
Write: twoboneiksettings_t.MaxTwist = value
```
# Functions
## ToPtr
```lua
@returns string
twoboneiksettings_t:ToPtr()
```
## IsValid
```lua
@returns bool
twoboneiksettings_t:IsValid()
```

:::