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
--- @param ptr string
CStepsRemainingMetricEvaluator(ptr)
```
# Properties
## FootIndices (Read-Only)
```lua
--- @type table
Read: cstepsremainingmetricevaluator.FootIndices
```
## MinStepsRemaining 
```lua
--- @type number
Read: cstepsremainingmetricevaluator.MinStepsRemaining
Write: cstepsremainingmetricevaluator.MinStepsRemaining = value
```
## Parent (Read-Only)
```lua
--- @type CMotionMetricEvaluator
Read: cstepsremainingmetricevaluator.Parent
```
# Functions
## ToPtr
```lua
--- @return string
cstepsremainingmetricevaluator:ToPtr()
```
## IsValid
```lua
--- @return bool
cstepsremainingmetricevaluator:IsValid()
```

:::