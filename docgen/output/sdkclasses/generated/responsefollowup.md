---
title: ResponseFollowup
index: true
order: 2
category:
  - Guide
---

# ResponseFollowup

::: tabs
@tab Lua
# Constructor
```lua
ResponseFollowup(ptr --[[ string ]])
```
# Properties
## Followup_concept 
```lua
@type string
Read: responsefollowup.Followup_concept
Write: responsefollowup.Followup_concept = value
```
## Followup_contexts 
```lua
@type string
Read: responsefollowup.Followup_contexts
Write: responsefollowup.Followup_contexts = value
```
## Followup_delay 
```lua
@type number
Read: responsefollowup.Followup_delay
Write: responsefollowup.Followup_delay = value
```
## Followup_target 
```lua
@type string
Read: responsefollowup.Followup_target
Write: responsefollowup.Followup_target = value
```
## Followup_entityiotarget 
```lua
@type string
Read: responsefollowup.Followup_entityiotarget
Write: responsefollowup.Followup_entityiotarget = value
```
## Followup_entityioinput 
```lua
@type string
Read: responsefollowup.Followup_entityioinput
Write: responsefollowup.Followup_entityioinput = value
```
## Followup_entityiodelay 
```lua
@type number
Read: responsefollowup.Followup_entityiodelay
Write: responsefollowup.Followup_entityiodelay = value
```
## Fired 
```lua
@type boolean
Read: responsefollowup.Fired
Write: responsefollowup.Fired = value
```
# Functions
## ToPtr
```lua
@returns string
responsefollowup:ToPtr()
```
## IsValid
```lua
@returns bool
responsefollowup:IsValid()
```

:::