---
title: CLogicActiveAutosave
index: true
order: 2
category:
  - Guide
---

# CLogicActiveAutosave

::: tabs
@tab Lua
# Constructor
```lua
CLogicActiveAutosave(ptr --[[ string ]])
```
# Properties
## TriggerHitPoints 
```lua
@type number
Read: clogicactiveautosave.TriggerHitPoints
Write: clogicactiveautosave.TriggerHitPoints = value
```
## TimeToTrigger 
```lua
@type number
Read: clogicactiveautosave.TimeToTrigger
Write: clogicactiveautosave.TimeToTrigger = value
```
## StartTime 
```lua
@type number
Read: clogicactiveautosave.StartTime
Write: clogicactiveautosave.StartTime = value
```
## DangerousTime 
```lua
@type number
Read: clogicactiveautosave.DangerousTime
Write: clogicactiveautosave.DangerousTime = value
```
## Parent 
```lua
@type CLogicAutosave
Read: clogicactiveautosave.Parent
Write: clogicactiveautosave.Parent = value
```
# Functions
## ToPtr
```lua
@returns string
clogicactiveautosave:ToPtr()
```
## IsValid
```lua
@returns bool
clogicactiveautosave:IsValid()
```

:::