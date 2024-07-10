---
title: LookAtOpFixedSettings_t
index: true
order: 2
category:
  - Guide
---

# LookAtOpFixedSettings_t

::: tabs
@tab Lua
# Constructor
```lua
LookAtOpFixedSettings_t(ptr --[[ string ]])
```
# Properties
## Attachment 
```lua
@type CAnimAttachment
Read: lookatopfixedsettings_t.Attachment
Write: lookatopfixedsettings_t.Attachment = value
```
## Damping 
```lua
@type CAnimInputDamping
Read: lookatopfixedsettings_t.Damping
Write: lookatopfixedsettings_t.Damping = value
```
## Bones 
```lua
@type table
Read: lookatopfixedsettings_t.Bones
Write: lookatopfixedsettings_t.Bones = value
```
## YawLimit 
```lua
@type number
Read: lookatopfixedsettings_t.YawLimit
Write: lookatopfixedsettings_t.YawLimit = value
```
## PitchLimit 
```lua
@type number
Read: lookatopfixedsettings_t.PitchLimit
Write: lookatopfixedsettings_t.PitchLimit = value
```
## HysteresisInnerAngle 
```lua
@type number
Read: lookatopfixedsettings_t.HysteresisInnerAngle
Write: lookatopfixedsettings_t.HysteresisInnerAngle = value
```
## HysteresisOuterAngle 
```lua
@type number
Read: lookatopfixedsettings_t.HysteresisOuterAngle
Write: lookatopfixedsettings_t.HysteresisOuterAngle = value
```
## RotateYawForward 
```lua
@type boolean
Read: lookatopfixedsettings_t.RotateYawForward
Write: lookatopfixedsettings_t.RotateYawForward = value
```
## MaintainUpDirection 
```lua
@type boolean
Read: lookatopfixedsettings_t.MaintainUpDirection
Write: lookatopfixedsettings_t.MaintainUpDirection = value
```
## TargetIsPosition 
```lua
@type boolean
Read: lookatopfixedsettings_t.TargetIsPosition
Write: lookatopfixedsettings_t.TargetIsPosition = value
```
## UseHysteresis 
```lua
@type boolean
Read: lookatopfixedsettings_t.UseHysteresis
Write: lookatopfixedsettings_t.UseHysteresis = value
```
# Functions
## ToPtr
```lua
@returns string
lookatopfixedsettings_t:ToPtr()
```
## IsValid
```lua
@returns bool
lookatopfixedsettings_t:IsValid()
```

:::