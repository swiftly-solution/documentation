---
title: CBtNodeConditionInactive
index: true
order: 2
category:
  - Guide
---

# CBtNodeConditionInactive

::: tabs
@tab Lua
# Constructor
```lua
CBtNodeConditionInactive(ptr --[[ string ]])
```
# Properties
## RoundStartThresholdSeconds 
```lua
@type number
Read: cbtnodeconditioninactive.RoundStartThresholdSeconds
Write: cbtnodeconditioninactive.RoundStartThresholdSeconds = value
```
## SensorInactivityThresholdSeconds 
```lua
@type number
Read: cbtnodeconditioninactive.SensorInactivityThresholdSeconds
Write: cbtnodeconditioninactive.SensorInactivityThresholdSeconds = value
```
## SensorInactivityTimer (Read-Only)
```lua
@type CountdownTimer
Read: cbtnodeconditioninactive.SensorInactivityTimer
```
## Parent 
```lua
@type CBtNodeCondition
Read: cbtnodeconditioninactive.Parent
Write: cbtnodeconditioninactive.Parent = value
```
# Functions
## ToPtr
```lua
@returns string
cbtnodeconditioninactive:ToPtr()
```
## IsValid
```lua
@returns bool
cbtnodeconditioninactive:IsValid()
```

:::