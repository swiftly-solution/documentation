---
title: CStepsRemainingMetricEvaluator
index: true
order: 2
category:
  - Guide
---

# CStepsRemainingMetricEvaluator

::: tabs
@tab Lua
# Constructor
```lua
CStepsRemainingMetricEvaluator(ptr --[[ string ]])
```
# Properties
## FootIndices (Read-Only)
```lua
@type table
Read: cstepsremainingmetricevaluator.FootIndices
```
## MinStepsRemaining 
```lua
@type number
Read: cstepsremainingmetricevaluator.MinStepsRemaining
Write: cstepsremainingmetricevaluator.MinStepsRemaining = value
```
## Parent (Read-Only)
```lua
@type CMotionMetricEvaluator
Read: cstepsremainingmetricevaluator.Parent
```
# Functions
## ToPtr
```lua
@returns string
cstepsremainingmetricevaluator:ToPtr()
```
## IsValid
```lua
@returns bool
cstepsremainingmetricevaluator:IsValid()
```

:::