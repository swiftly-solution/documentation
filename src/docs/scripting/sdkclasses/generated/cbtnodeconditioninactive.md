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
--- @param ptr string
CBtNodeConditionInactive(ptr)
```
# Properties
## RoundStartThresholdSeconds 
```lua
--- @type number
Read: cbtnodeconditioninactive.RoundStartThresholdSeconds
Write: cbtnodeconditioninactive.RoundStartThresholdSeconds = value
```
## SensorInactivityThresholdSeconds 
```lua
--- @type number
Read: cbtnodeconditioninactive.SensorInactivityThresholdSeconds
Write: cbtnodeconditioninactive.SensorInactivityThresholdSeconds = value
```
## SensorInactivityTimer (Read-Only)
```lua
--- @type CountdownTimer
Read: cbtnodeconditioninactive.SensorInactivityTimer
```
## Parent (Read-Only)
```lua
--- @type CBtNodeCondition
Read: cbtnodeconditioninactive.Parent
```
# Functions
## ToPtr
```lua
--- @return string
cbtnodeconditioninactive:ToPtr()
```
## IsValid
```lua
--- @return bool
cbtnodeconditioninactive:IsValid()
```

:::