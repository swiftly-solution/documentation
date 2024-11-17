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
--- @param ptr string
CMotionMetricEvaluator(ptr)
```
# Properties
## Means (Read-Only)
```lua
--- @type table
Read: cmotionmetricevaluator.Means
```
## StandardDeviations (Read-Only)
```lua
--- @type table
Read: cmotionmetricevaluator.StandardDeviations
```
## Weight 
```lua
--- @type number
Read: cmotionmetricevaluator.Weight
Write: cmotionmetricevaluator.Weight = value
```
## DimensionStartIndex 
```lua
--- @type number
Read: cmotionmetricevaluator.DimensionStartIndex
Write: cmotionmetricevaluator.DimensionStartIndex = value
```
# Functions
## ToPtr
```lua
--- @return string
cmotionmetricevaluator:ToPtr()
```
## IsValid
```lua
--- @return bool
cmotionmetricevaluator:IsValid()
```

:::