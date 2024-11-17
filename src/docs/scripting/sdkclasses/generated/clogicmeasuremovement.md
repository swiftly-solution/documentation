---
title: CLogicMeasureMovement
index: true
order: 2
category:
  - Guide
---

# CLogicMeasureMovement

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
CLogicMeasureMovement(ptr)
```
# Properties
## StrMeasureTarget 
```lua
--- @type string
Read: clogicmeasuremovement.StrMeasureTarget
Write: clogicmeasuremovement.StrMeasureTarget = value
```
## StrMeasureReference 
```lua
--- @type string
Read: clogicmeasuremovement.StrMeasureReference
Write: clogicmeasuremovement.StrMeasureReference = value
```
## StrTargetReference 
```lua
--- @type string
Read: clogicmeasuremovement.StrTargetReference
Write: clogicmeasuremovement.StrTargetReference = value
```
## MeasureTarget (Read-Only)
```lua
--- @type CBaseEntity
Read: clogicmeasuremovement.MeasureTarget
```
## MeasureReference (Read-Only)
```lua
--- @type CBaseEntity
Read: clogicmeasuremovement.MeasureReference
```
## Target (Read-Only)
```lua
--- @type CBaseEntity
Read: clogicmeasuremovement.Target
```
## TargetReference (Read-Only)
```lua
--- @type CBaseEntity
Read: clogicmeasuremovement.TargetReference
```
## Scale 
```lua
--- @type number
Read: clogicmeasuremovement.Scale
Write: clogicmeasuremovement.Scale = value
```
## MeasureType 
```lua
--- @type number
Read: clogicmeasuremovement.MeasureType
Write: clogicmeasuremovement.MeasureType = value
```
## Parent (Read-Only)
```lua
--- @type CLogicalEntity
Read: clogicmeasuremovement.Parent
```
# Functions
## ToPtr
```lua
--- @return string
clogicmeasuremovement:ToPtr()
```
## IsValid
```lua
--- @return bool
clogicmeasuremovement:IsValid()
```

:::