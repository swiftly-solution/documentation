---
title: CFootPositionMetricEvaluator
index: true
order: 2
category:
  - Guide
---

# CFootPositionMetricEvaluator

::: tabs
@tab Lua
# Constructor
```lua
CFootPositionMetricEvaluator(ptr --[[ string ]])
```
# Properties
## FootIndices (Read-Only)
```lua
@type table
Read: cfootpositionmetricevaluator.FootIndices
```
## IgnoreSlope 
```lua
@type boolean
Read: cfootpositionmetricevaluator.IgnoreSlope
Write: cfootpositionmetricevaluator.IgnoreSlope = value
```
## Parent (Read-Only)
```lua
@type CMotionMetricEvaluator
Read: cfootpositionmetricevaluator.Parent
```
# Functions
## ToPtr
```lua
@returns string
cfootpositionmetricevaluator:ToPtr()
```
## IsValid
```lua
@returns bool
cfootpositionmetricevaluator:IsValid()
```

:::