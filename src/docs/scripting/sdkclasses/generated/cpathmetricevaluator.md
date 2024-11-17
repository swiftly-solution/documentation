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
--- @param ptr string
CPathMetricEvaluator(ptr)
```
# Properties
## PathTimeSamples (Read-Only)
```lua
--- @type table
Read: cpathmetricevaluator.PathTimeSamples
```
## Distance 
```lua
--- @type number
Read: cpathmetricevaluator.Distance
Write: cpathmetricevaluator.Distance = value
```
## ExtrapolateMovement 
```lua
--- @type boolean
Read: cpathmetricevaluator.ExtrapolateMovement
Write: cpathmetricevaluator.ExtrapolateMovement = value
```
## MinExtrapolationSpeed 
```lua
--- @type number
Read: cpathmetricevaluator.MinExtrapolationSpeed
Write: cpathmetricevaluator.MinExtrapolationSpeed = value
```
## Parent (Read-Only)
```lua
--- @type CMotionMetricEvaluator
Read: cpathmetricevaluator.Parent
```
# Functions
## ToPtr
```lua
--- @return string
cpathmetricevaluator:ToPtr()
```
## IsValid
```lua
--- @return bool
cpathmetricevaluator:IsValid()
```

:::