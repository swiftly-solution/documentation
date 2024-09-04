---
title: CDistanceRemainingMetricEvaluator
index: true
order: 2
category:
  - Guide
---

# CDistanceRemainingMetricEvaluator

::: tabs
@tab Lua
# Constructor
```lua
CDistanceRemainingMetricEvaluator(ptr --[[ string ]])
```
# Properties
## MaxDistance 
```lua
@type number
Read: cdistanceremainingmetricevaluator.MaxDistance
Write: cdistanceremainingmetricevaluator.MaxDistance = value
```
## MinDistance 
```lua
@type number
Read: cdistanceremainingmetricevaluator.MinDistance
Write: cdistanceremainingmetricevaluator.MinDistance = value
```
## StartGoalFilterDistance 
```lua
@type number
Read: cdistanceremainingmetricevaluator.StartGoalFilterDistance
Write: cdistanceremainingmetricevaluator.StartGoalFilterDistance = value
```
## MaxGoalOvershootScale 
```lua
@type number
Read: cdistanceremainingmetricevaluator.MaxGoalOvershootScale
Write: cdistanceremainingmetricevaluator.MaxGoalOvershootScale = value
```
## FilterFixedMinDistance 
```lua
@type boolean
Read: cdistanceremainingmetricevaluator.FilterFixedMinDistance
Write: cdistanceremainingmetricevaluator.FilterFixedMinDistance = value
```
## FilterGoalDistance 
```lua
@type boolean
Read: cdistanceremainingmetricevaluator.FilterGoalDistance
Write: cdistanceremainingmetricevaluator.FilterGoalDistance = value
```
## FilterGoalOvershoot 
```lua
@type boolean
Read: cdistanceremainingmetricevaluator.FilterGoalOvershoot
Write: cdistanceremainingmetricevaluator.FilterGoalOvershoot = value
```
## Parent (Read-Only)
```lua
@type CMotionMetricEvaluator
Read: cdistanceremainingmetricevaluator.Parent
```
# Functions
## ToPtr
```lua
@returns string
cdistanceremainingmetricevaluator:ToPtr()
```
## IsValid
```lua
@returns bool
cdistanceremainingmetricevaluator:IsValid()
```

:::