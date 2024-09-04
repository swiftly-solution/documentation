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
## Followup_concept (Read-Only)
```lua
@type string
Read: responsefollowup.Followup_concept
```
## Followup_contexts (Read-Only)
```lua
@type string
Read: responsefollowup.Followup_contexts
```
## Followup_delay 
```lua
@type number
Read: responsefollowup.Followup_delay
Write: responsefollowup.Followup_delay = value
```
## Followup_target (Read-Only)
```lua
@type string
Read: responsefollowup.Followup_target
```
## Followup_entityiotarget (Read-Only)
```lua
@type string
Read: responsefollowup.Followup_entityiotarget
```
## Followup_entityioinput (Read-Only)
```lua
@type string
Read: responsefollowup.Followup_entityioinput
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