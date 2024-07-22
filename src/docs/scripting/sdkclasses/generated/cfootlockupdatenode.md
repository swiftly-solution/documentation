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
CFootLockUpdateNode(ptr --[[ string ]])
```
# Properties
## OpFixedSettings (Read-Only)
```lua
@type FootLockPoseOpFixedSettings
Read: cfootlockupdatenode.OpFixedSettings
```
## FootSettings 
```lua
@type table
Read: cfootlockupdatenode.FootSettings
Write: cfootlockupdatenode.FootSettings = value
```
## HipShiftDamping (Read-Only)
```lua
@type CAnimInputDamping
Read: cfootlockupdatenode.HipShiftDamping
```
## RootHeightDamping (Read-Only)
```lua
@type CAnimInputDamping
Read: cfootlockupdatenode.RootHeightDamping
```
## StrideCurveScale 
```lua
@type number
Read: cfootlockupdatenode.StrideCurveScale
Write: cfootlockupdatenode.StrideCurveScale = value
```
## StrideCurveLimitScale 
```lua
@type number
Read: cfootlockupdatenode.StrideCurveLimitScale
Write: cfootlockupdatenode.StrideCurveLimitScale = value
```
## StepHeightIncreaseScale 
```lua
@type number
Read: cfootlockupdatenode.StepHeightIncreaseScale
Write: cfootlockupdatenode.StepHeightIncreaseScale = value
```
## StepHeightDecreaseScale 
```lua
@type number
Read: cfootlockupdatenode.StepHeightDecreaseScale
Write: cfootlockupdatenode.StepHeightDecreaseScale = value
```
## HipShiftScale 
```lua
@type number
Read: cfootlockupdatenode.HipShiftScale
Write: cfootlockupdatenode.HipShiftScale = value
```
## BlendTime 
```lua
@type number
Read: cfootlockupdatenode.BlendTime
Write: cfootlockupdatenode.BlendTime = value
```
## MaxRootHeightOffset 
```lua
@type number
Read: cfootlockupdatenode.MaxRootHeightOffset
Write: cfootlockupdatenode.MaxRootHeightOffset = value
```
## MinRootHeightOffset 
```lua
@type number
Read: cfootlockupdatenode.MinRootHeightOffset
Write: cfootlockupdatenode.MinRootHeightOffset = value
```
## TiltPlanePitchSpringStrength 
```lua
@type number
Read: cfootlockupdatenode.TiltPlanePitchSpringStrength
Write: cfootlockupdatenode.TiltPlanePitchSpringStrength = value
```
## TiltPlaneRollSpringStrength 
```lua
@type number
Read: cfootlockupdatenode.TiltPlaneRollSpringStrength
Write: cfootlockupdatenode.TiltPlaneRollSpringStrength = value
```
## ApplyFootRotationLimits 
```lua
@type boolean
Read: cfootlockupdatenode.ApplyFootRotationLimits
Write: cfootlockupdatenode.ApplyFootRotationLimits = value
```
## ApplyHipShift 
```lua
@type boolean
Read: cfootlockupdatenode.ApplyHipShift
Write: cfootlockupdatenode.ApplyHipShift = value
```
## ModulateStepHeight 
```lua
@type boolean
Read: cfootlockupdatenode.ModulateStepHeight
Write: cfootlockupdatenode.ModulateStepHeight = value
```
## ResetChild 
```lua
@type boolean
Read: cfootlockupdatenode.ResetChild
Write: cfootlockupdatenode.ResetChild = value
```
## EnableVerticalCurvedPaths 
```lua
@type boolean
Read: cfootlockupdatenode.EnableVerticalCurvedPaths
Write: cfootlockupdatenode.EnableVerticalCurvedPaths = value
```
## EnableRootHeightDamping 
```lua
@type boolean
Read: cfootlockupdatenode.EnableRootHeightDamping
Write: cfootlockupdatenode.EnableRootHeightDamping = value
```
## Parent 
```lua
@type CUnaryUpdateNode
Read: cfootlockupdatenode.Parent
Write: cfootlockupdatenode.Parent = value
```
# Functions
## ToPtr
```lua
@returns string
cfootlockupdatenode:ToPtr()
```
## IsValid
```lua
@returns bool
cfootlockupdatenode:IsValid()
```

:::