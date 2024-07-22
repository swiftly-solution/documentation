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
## SampleTimes 
```lua
@type table
Read: cplayerinputanimmotorupdater.SampleTimes
Write: cplayerinputanimmotorupdater.SampleTimes = value
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
## Parent 
```lua
@type CAnimMotorUpdaterBase
Read: cplayerinputanimmotorupdater.Parent
Write: cplayerinputanimmotorupdater.Parent = value
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