---
title: FootLockPoseOpFixedSettings
index: true
order: 2
category:
  - Guide
---

# FootLockPoseOpFixedSettings

::: tabs
@tab Lua
# Constructor
```lua
FootLockPoseOpFixedSettings(ptr)
```
# Properties
## FootInfo (Read-Only)
```lua
--- @type table
Read: footlockposeopfixedsettings.FootInfo
```
## HipDampingSettings (Read-Only)
```lua
--- @type CAnimInputDamping
Read: footlockposeopfixedsettings.HipDampingSettings
```
## HipBoneIndex 
```lua
--- @type number
Read: footlockposeopfixedsettings.HipBoneIndex
Write: footlockposeopfixedsettings.HipBoneIndex = value
```
## IkSolverType 
```lua
--- @type number
Read: footlockposeopfixedsettings.IkSolverType
Write: footlockposeopfixedsettings.IkSolverType = value
```
## ApplyTilt 
```lua
--- @type boolean
Read: footlockposeopfixedsettings.ApplyTilt
Write: footlockposeopfixedsettings.ApplyTilt = value
```
## ApplyHipDrop 
```lua
--- @type boolean
Read: footlockposeopfixedsettings.ApplyHipDrop
Write: footlockposeopfixedsettings.ApplyHipDrop = value
```
## AlwaysUseFallbackHinge 
```lua
--- @type boolean
Read: footlockposeopfixedsettings.AlwaysUseFallbackHinge
Write: footlockposeopfixedsettings.AlwaysUseFallbackHinge = value
```
## ApplyFootRotationLimits 
```lua
--- @type boolean
Read: footlockposeopfixedsettings.ApplyFootRotationLimits
Write: footlockposeopfixedsettings.ApplyFootRotationLimits = value
```
## ApplyLegTwistLimits 
```lua
--- @type boolean
Read: footlockposeopfixedsettings.ApplyLegTwistLimits
Write: footlockposeopfixedsettings.ApplyLegTwistLimits = value
```
## MaxFootHeight 
```lua
--- @type number
Read: footlockposeopfixedsettings.MaxFootHeight
Write: footlockposeopfixedsettings.MaxFootHeight = value
```
## ExtensionScale 
```lua
--- @type number
Read: footlockposeopfixedsettings.ExtensionScale
Write: footlockposeopfixedsettings.ExtensionScale = value
```
## MaxLegTwist 
```lua
--- @type number
Read: footlockposeopfixedsettings.MaxLegTwist
Write: footlockposeopfixedsettings.MaxLegTwist = value
```
## EnableLockBreaking 
```lua
--- @type boolean
Read: footlockposeopfixedsettings.EnableLockBreaking
Write: footlockposeopfixedsettings.EnableLockBreaking = value
```
## LockBreakTolerance 
```lua
--- @type number
Read: footlockposeopfixedsettings.LockBreakTolerance
Write: footlockposeopfixedsettings.LockBreakTolerance = value
```
## LockBlendTime 
```lua
--- @type number
Read: footlockposeopfixedsettings.LockBlendTime
Write: footlockposeopfixedsettings.LockBlendTime = value
```
## EnableStretching 
```lua
--- @type boolean
Read: footlockposeopfixedsettings.EnableStretching
Write: footlockposeopfixedsettings.EnableStretching = value
```
## MaxStretchAmount 
```lua
--- @type number
Read: footlockposeopfixedsettings.MaxStretchAmount
Write: footlockposeopfixedsettings.MaxStretchAmount = value
```
## StretchExtensionScale 
```lua
--- @type number
Read: footlockposeopfixedsettings.StretchExtensionScale
Write: footlockposeopfixedsettings.StretchExtensionScale = value
```
# Functions
## ToPtr
```lua
@returns string
footlockposeopfixedsettings:ToPtr()
```
## IsValid
```lua
@returns bool
footlockposeopfixedsettings:IsValid()
```

:::