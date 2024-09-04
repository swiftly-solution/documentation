---
title: CPlayerInputAnimMotorUpdater
index: true
order: 2
category:
  - Guide
---

# CPlayerInputAnimMotorUpdater

::: tabs
@tab Lua
# Constructor
```lua
CPlayerInputAnimMotorUpdater(ptr --[[ string ]])
```
# Properties
## SampleTimes (Read-Only)
```lua
@type table
Read: cplayerinputanimmotorupdater.SampleTimes
```
## SpringConstant 
```lua
@type number
Read: cplayerinputanimmotorupdater.SpringConstant
Write: cplayerinputanimmotorupdater.SpringConstant = value
```
## AnticipationDistance 
```lua
@type number
Read: cplayerinputanimmotorupdater.AnticipationDistance
Write: cplayerinputanimmotorupdater.AnticipationDistance = value
```
## AnticipationPosParam (Read-Only)
```lua
@type CAnimParamHandle
Read: cplayerinputanimmotorupdater.AnticipationPosParam
```
## AnticipationHeadingParam (Read-Only)
```lua
@type CAnimParamHandle
Read: cplayerinputanimmotorupdater.AnticipationHeadingParam
```
## UseAcceleration 
```lua
@type boolean
Read: cplayerinputanimmotorupdater.UseAcceleration
Write: cplayerinputanimmotorupdater.UseAcceleration = value
```
## Parent (Read-Only)
```lua
@type CAnimMotorUpdaterBase
Read: cplayerinputanimmotorupdater.Parent
```
# Functions
## ToPtr
```lua
@returns string
cplayerinputanimmotorupdater:ToPtr()
```
## IsValid
```lua
@returns bool
cplayerinputanimmotorupdater:IsValid()
```

:::