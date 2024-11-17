---
title: CFootLockUpdateNode
index: true
order: 2
category:
  - Guide
---

# CFootLockUpdateNode

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
CFootLockUpdateNode(ptr)
```
# Properties
## OpFixedSettings (Read-Only)
```lua
--- @type FootLockPoseOpFixedSettings
Read: cfootlockupdatenode.OpFixedSettings
```
## FootSettings (Read-Only)
```lua
--- @type table
Read: cfootlockupdatenode.FootSettings
```
## HipShiftDamping (Read-Only)
```lua
--- @type CAnimInputDamping
Read: cfootlockupdatenode.HipShiftDamping
```
## RootHeightDamping (Read-Only)
```lua
--- @type CAnimInputDamping
Read: cfootlockupdatenode.RootHeightDamping
```
## StrideCurveScale 
```lua
--- @type number
Read: cfootlockupdatenode.StrideCurveScale
Write: cfootlockupdatenode.StrideCurveScale = value
```
## StrideCurveLimitScale 
```lua
--- @type number
Read: cfootlockupdatenode.StrideCurveLimitScale
Write: cfootlockupdatenode.StrideCurveLimitScale = value
```
## StepHeightIncreaseScale 
```lua
--- @type number
Read: cfootlockupdatenode.StepHeightIncreaseScale
Write: cfootlockupdatenode.StepHeightIncreaseScale = value
```
## StepHeightDecreaseScale 
```lua
--- @type number
Read: cfootlockupdatenode.StepHeightDecreaseScale
Write: cfootlockupdatenode.StepHeightDecreaseScale = value
```
## HipShiftScale 
```lua
--- @type number
Read: cfootlockupdatenode.HipShiftScale
Write: cfootlockupdatenode.HipShiftScale = value
```
## BlendTime 
```lua
--- @type number
Read: cfootlockupdatenode.BlendTime
Write: cfootlockupdatenode.BlendTime = value
```
## MaxRootHeightOffset 
```lua
--- @type number
Read: cfootlockupdatenode.MaxRootHeightOffset
Write: cfootlockupdatenode.MaxRootHeightOffset = value
```
## MinRootHeightOffset 
```lua
--- @type number
Read: cfootlockupdatenode.MinRootHeightOffset
Write: cfootlockupdatenode.MinRootHeightOffset = value
```
## TiltPlanePitchSpringStrength 
```lua
--- @type number
Read: cfootlockupdatenode.TiltPlanePitchSpringStrength
Write: cfootlockupdatenode.TiltPlanePitchSpringStrength = value
```
## TiltPlaneRollSpringStrength 
```lua
--- @type number
Read: cfootlockupdatenode.TiltPlaneRollSpringStrength
Write: cfootlockupdatenode.TiltPlaneRollSpringStrength = value
```
## ApplyFootRotationLimits 
```lua
--- @type boolean
Read: cfootlockupdatenode.ApplyFootRotationLimits
Write: cfootlockupdatenode.ApplyFootRotationLimits = value
```
## ApplyHipShift 
```lua
--- @type boolean
Read: cfootlockupdatenode.ApplyHipShift
Write: cfootlockupdatenode.ApplyHipShift = value
```
## ModulateStepHeight 
```lua
--- @type boolean
Read: cfootlockupdatenode.ModulateStepHeight
Write: cfootlockupdatenode.ModulateStepHeight = value
```
## ResetChild 
```lua
--- @type boolean
Read: cfootlockupdatenode.ResetChild
Write: cfootlockupdatenode.ResetChild = value
```
## EnableVerticalCurvedPaths 
```lua
--- @type boolean
Read: cfootlockupdatenode.EnableVerticalCurvedPaths
Write: cfootlockupdatenode.EnableVerticalCurvedPaths = value
```
## EnableRootHeightDamping 
```lua
--- @type boolean
Read: cfootlockupdatenode.EnableRootHeightDamping
Write: cfootlockupdatenode.EnableRootHeightDamping = value
```
## Parent (Read-Only)
```lua
--- @type CUnaryUpdateNode
Read: cfootlockupdatenode.Parent
```
# Functions
## ToPtr
```lua
--- @return string
cfootlockupdatenode:ToPtr()
```
## IsValid
```lua
--- @return bool
cfootlockupdatenode:IsValid()
```

:::