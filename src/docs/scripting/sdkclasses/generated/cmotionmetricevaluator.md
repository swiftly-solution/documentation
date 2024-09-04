---
title: CMotionMetricEvaluator
index: true
order: 2
category:
  - Guide
---

# CMotionMetricEvaluator

::: tabs
@tab Lua
# Constructor
```lua
CMotionMetricEvaluator(ptr --[[ string ]])
```
# Properties
## Means (Read-Only)
```lua
@type table
Read: cmotionmetricevaluator.Means
```
## StandardDeviations (Read-Only)
```lua
@type table
Read: cmotionmetricevaluator.StandardDeviations
```
## Weight 
```lua
@type number
Read: cmotionmetricevaluator.Weight
Write: cmotionmetricevaluator.Weight = value
```
## DimensionStartIndex 
```lua
@type number
Read: cmotionmetricevaluator.DimensionStartIndex
Write: cmotionmetricevaluator.DimensionStartIndex = value
```
# Functions
## ToPtr
```lua
@returns string
cmotionmetricevaluator:ToPtr()
```
## IsValid
```lua
@returns bool
cmotionmetricevaluator:IsValid()
```

:::