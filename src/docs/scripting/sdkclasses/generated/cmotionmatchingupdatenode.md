---
title: CMotionMatchingUpdateNode
index: true
order: 2
category:
  - Guide
---

# CMotionMatchingUpdateNode

::: tabs
@tab Lua
# Constructor
```lua
CMotionMatchingUpdateNode(ptr)
```
# Properties
## DataSet (Read-Only)
```lua
--- @type CMotionDataSet
Read: cmotionmatchingupdatenode.DataSet
```
## Weights (Read-Only)
```lua
--- @type table
Read: cmotionmatchingupdatenode.Weights
```
## SearchEveryTick 
```lua
--- @type boolean
Read: cmotionmatchingupdatenode.SearchEveryTick
Write: cmotionmatchingupdatenode.SearchEveryTick = value
```
## SearchInterval 
```lua
--- @type number
Read: cmotionmatchingupdatenode.SearchInterval
Write: cmotionmatchingupdatenode.SearchInterval = value
```
## SearchWhenClipEnds 
```lua
--- @type boolean
Read: cmotionmatchingupdatenode.SearchWhenClipEnds
Write: cmotionmatchingupdatenode.SearchWhenClipEnds = value
```
## SearchWhenGoalChanges 
```lua
--- @type boolean
Read: cmotionmatchingupdatenode.SearchWhenGoalChanges
Write: cmotionmatchingupdatenode.SearchWhenGoalChanges = value
```
## BlendCurve (Read-Only)
```lua
--- @type CBlendCurve
Read: cmotionmatchingupdatenode.BlendCurve
```
## SampleRate 
```lua
--- @type number
Read: cmotionmatchingupdatenode.SampleRate
Write: cmotionmatchingupdatenode.SampleRate = value
```
## BlendTime 
```lua
--- @type number
Read: cmotionmatchingupdatenode.BlendTime
Write: cmotionmatchingupdatenode.BlendTime = value
```
## LockClipWhenWaning 
```lua
--- @type boolean
Read: cmotionmatchingupdatenode.LockClipWhenWaning
Write: cmotionmatchingupdatenode.LockClipWhenWaning = value
```
## SelectionThreshold 
```lua
--- @type number
Read: cmotionmatchingupdatenode.SelectionThreshold
Write: cmotionmatchingupdatenode.SelectionThreshold = value
```
## ReselectionTimeWindow 
```lua
--- @type number
Read: cmotionmatchingupdatenode.ReselectionTimeWindow
Write: cmotionmatchingupdatenode.ReselectionTimeWindow = value
```
## EnableRotationCorrection 
```lua
--- @type boolean
Read: cmotionmatchingupdatenode.EnableRotationCorrection
Write: cmotionmatchingupdatenode.EnableRotationCorrection = value
```
## GoalAssist 
```lua
--- @type boolean
Read: cmotionmatchingupdatenode.GoalAssist
Write: cmotionmatchingupdatenode.GoalAssist = value
```
## GoalAssistDistance 
```lua
--- @type number
Read: cmotionmatchingupdatenode.GoalAssistDistance
Write: cmotionmatchingupdatenode.GoalAssistDistance = value
```
## GoalAssistTolerance 
```lua
--- @type number
Read: cmotionmatchingupdatenode.GoalAssistTolerance
Write: cmotionmatchingupdatenode.GoalAssistTolerance = value
```
## DistanceScale_Damping (Read-Only)
```lua
--- @type CAnimInputDamping
Read: cmotionmatchingupdatenode.DistanceScale_Damping
```
## DistanceScale_OuterRadius 
```lua
--- @type number
Read: cmotionmatchingupdatenode.DistanceScale_OuterRadius
Write: cmotionmatchingupdatenode.DistanceScale_OuterRadius = value
```
## DistanceScale_InnerRadius 
```lua
--- @type number
Read: cmotionmatchingupdatenode.DistanceScale_InnerRadius
Write: cmotionmatchingupdatenode.DistanceScale_InnerRadius = value
```
## DistanceScale_MaxScale 
```lua
--- @type number
Read: cmotionmatchingupdatenode.DistanceScale_MaxScale
Write: cmotionmatchingupdatenode.DistanceScale_MaxScale = value
```
## DistanceScale_MinScale 
```lua
--- @type number
Read: cmotionmatchingupdatenode.DistanceScale_MinScale
Write: cmotionmatchingupdatenode.DistanceScale_MinScale = value
```
## EnableDistanceScaling 
```lua
--- @type boolean
Read: cmotionmatchingupdatenode.EnableDistanceScaling
Write: cmotionmatchingupdatenode.EnableDistanceScaling = value
```
## Parent (Read-Only)
```lua
--- @type CLeafUpdateNode
Read: cmotionmatchingupdatenode.Parent
```
# Functions
## ToPtr
```lua
@returns string
cmotionmatchingupdatenode:ToPtr()
```
## IsValid
```lua
@returns bool
cmotionmatchingupdatenode:IsValid()
```

:::