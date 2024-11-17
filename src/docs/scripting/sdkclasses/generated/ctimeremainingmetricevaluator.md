---
title: CTimeRemainingMetricEvaluator
index: true
order: 2
category:
  - Guide
---

# CTimeRemainingMetricEvaluator

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
CTimeRemainingMetricEvaluator(ptr)
```
# Properties
## MatchByTimeRemaining 
```lua
--- @type boolean
Read: ctimeremainingmetricevaluator.MatchByTimeRemaining
Write: ctimeremainingmetricevaluator.MatchByTimeRemaining = value
```
## MaxTimeRemaining 
```lua
--- @type number
Read: ctimeremainingmetricevaluator.MaxTimeRemaining
Write: ctimeremainingmetricevaluator.MaxTimeRemaining = value
```
## FilterByTimeRemaining 
```lua
--- @type boolean
Read: ctimeremainingmetricevaluator.FilterByTimeRemaining
Write: ctimeremainingmetricevaluator.FilterByTimeRemaining = value
```
## MinTimeRemaining 
```lua
--- @type number
Read: ctimeremainingmetricevaluator.MinTimeRemaining
Write: ctimeremainingmetricevaluator.MinTimeRemaining = value
```
## Parent (Read-Only)
```lua
--- @type CMotionMetricEvaluator
Read: ctimeremainingmetricevaluator.Parent
```
# Functions
## ToPtr
```lua
--- @return string
ctimeremainingmetricevaluator:ToPtr()
```
## IsValid
```lua
--- @return bool
ctimeremainingmetricevaluator:IsValid()
```

:::