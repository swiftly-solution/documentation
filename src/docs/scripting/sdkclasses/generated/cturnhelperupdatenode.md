---
title: CTurnHelperUpdateNode
index: true
order: 2
category:
  - Guide
---

# CTurnHelperUpdateNode

::: tabs
@tab Lua
# Constructor
```lua
CTurnHelperUpdateNode(ptr --[[ string ]])
```
# Properties
## FacingTarget 
```lua
@type number
Read: cturnhelperupdatenode.FacingTarget
Write: cturnhelperupdatenode.FacingTarget = value
```
## TurnStartTimeOffset 
```lua
@type number
Read: cturnhelperupdatenode.TurnStartTimeOffset
Write: cturnhelperupdatenode.TurnStartTimeOffset = value
```
## TurnDuration 
```lua
@type number
Read: cturnhelperupdatenode.TurnDuration
Write: cturnhelperupdatenode.TurnDuration = value
```
## MatchChildDuration 
```lua
@type boolean
Read: cturnhelperupdatenode.MatchChildDuration
Write: cturnhelperupdatenode.MatchChildDuration = value
```
## ManualTurnOffset 
```lua
@type number
Read: cturnhelperupdatenode.ManualTurnOffset
Write: cturnhelperupdatenode.ManualTurnOffset = value
```
## UseManualTurnOffset 
```lua
@type boolean
Read: cturnhelperupdatenode.UseManualTurnOffset
Write: cturnhelperupdatenode.UseManualTurnOffset = value
```
## Parent (Read-Only)
```lua
@type CUnaryUpdateNode
Read: cturnhelperupdatenode.Parent
```
# Functions
## ToPtr
```lua
@returns string
cturnhelperupdatenode:ToPtr()
```
## IsValid
```lua
@returns bool
cturnhelperupdatenode:IsValid()
```

:::