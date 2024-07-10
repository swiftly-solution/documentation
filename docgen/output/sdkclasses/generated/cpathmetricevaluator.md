---
title: CPathMetricEvaluator
index: true
order: 2
category:
  - Guide
---

# CPathMetricEvaluator

::: tabs
@tab Lua
# Constructor
```lua
CPathMetricEvaluator(ptr --[[ string ]])
```
# Properties
## PathTimeSamples 
```lua
@type table
Read: cpathmetricevaluator.PathTimeSamples
Write: cpathmetricevaluator.PathTimeSamples = value
```
## Distance 
```lua
@type number
Read: cpathmetricevaluator.Distance
Write: cpathmetricevaluator.Distance = value
```
## ExtrapolateMovement 
```lua
@type boolean
Read: cpathmetricevaluator.ExtrapolateMovement
Write: cpathmetricevaluator.ExtrapolateMovement = value
```
## MinExtrapolationSpeed 
```lua
@type number
Read: cpathmetricevaluator.MinExtrapolationSpeed
Write: cpathmetricevaluator.MinExtrapolationSpeed = value
```
## Parent 
```lua
@type CMotionMetricEvaluator
Read: cpathmetricevaluator.Parent
Write: cpathmetricevaluator.Parent = value
```
# Functions
## ToPtr
```lua
@returns string
cpathmetricevaluator:ToPtr()
```
## IsValid
```lua
@returns bool
cpathmetricevaluator:IsValid()
```

:::