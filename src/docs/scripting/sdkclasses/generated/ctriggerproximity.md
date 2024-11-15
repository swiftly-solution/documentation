---
title: CTriggerProximity
index: true
order: 2
category:
  - Guide
---

# CTriggerProximity

::: tabs
@tab Lua
# Constructor
```lua
CTriggerProximity(ptr)
```
# Properties
## MeasureTarget (Read-Only)
```lua
--- @type CBaseEntity
Read: ctriggerproximity.MeasureTarget
```
## MeasureTarget1 
```lua
--- @type string
Read: ctriggerproximity.MeasureTarget1
Write: ctriggerproximity.MeasureTarget1 = value
```
## Radius 
```lua
--- @type number
Read: ctriggerproximity.Radius
Write: ctriggerproximity.Radius = value
```
## Touchers 
```lua
--- @type number
Read: ctriggerproximity.Touchers
Write: ctriggerproximity.Touchers = value
```
## Parent (Read-Only)
```lua
--- @type CBaseTrigger
Read: ctriggerproximity.Parent
```
# Functions
## ToPtr
```lua
@returns string
ctriggerproximity:ToPtr()
```
## IsValid
```lua
@returns bool
ctriggerproximity:IsValid()
```

:::