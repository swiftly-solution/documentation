---
title: CDampedPathAnimMotorUpdater
index: true
order: 2
category:
  - Guide
---

# CDampedPathAnimMotorUpdater

::: tabs
@tab Lua
# Constructor
```lua
CDampedPathAnimMotorUpdater(ptr --[[ string ]])
```
# Properties
## AnticipationTime 
```lua
@type number
Read: cdampedpathanimmotorupdater.AnticipationTime
Write: cdampedpathanimmotorupdater.AnticipationTime = value
```
## MinSpeedScale 
```lua
@type number
Read: cdampedpathanimmotorupdater.MinSpeedScale
Write: cdampedpathanimmotorupdater.MinSpeedScale = value
```
## AnticipationPosParam (Read-Only)
```lua
@type CAnimParamHandle
Read: cdampedpathanimmotorupdater.AnticipationPosParam
```
## AnticipationHeadingParam (Read-Only)
```lua
@type CAnimParamHandle
Read: cdampedpathanimmotorupdater.AnticipationHeadingParam
```
## SpringConstant 
```lua
@type number
Read: cdampedpathanimmotorupdater.SpringConstant
Write: cdampedpathanimmotorupdater.SpringConstant = value
```
## MinSpringTension 
```lua
@type number
Read: cdampedpathanimmotorupdater.MinSpringTension
Write: cdampedpathanimmotorupdater.MinSpringTension = value
```
## MaxSpringTension 
```lua
@type number
Read: cdampedpathanimmotorupdater.MaxSpringTension
Write: cdampedpathanimmotorupdater.MaxSpringTension = value
```
## Parent 
```lua
@type CPathAnimMotorUpdaterBase
Read: cdampedpathanimmotorupdater.Parent
Write: cdampedpathanimmotorupdater.Parent = value
```
# Functions
## ToPtr
```lua
@returns string
cdampedpathanimmotorupdater:ToPtr()
```
## IsValid
```lua
@returns bool
cdampedpathanimmotorupdater:IsValid()
```

:::