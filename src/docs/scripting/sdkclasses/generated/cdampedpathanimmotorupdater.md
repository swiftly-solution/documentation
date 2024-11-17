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
--- @param ptr string
CDampedPathAnimMotorUpdater(ptr)
```
# Properties
## AnticipationTime 
```lua
--- @type number
Read: cdampedpathanimmotorupdater.AnticipationTime
Write: cdampedpathanimmotorupdater.AnticipationTime = value
```
## MinSpeedScale 
```lua
--- @type number
Read: cdampedpathanimmotorupdater.MinSpeedScale
Write: cdampedpathanimmotorupdater.MinSpeedScale = value
```
## AnticipationPosParam (Read-Only)
```lua
--- @type CAnimParamHandle
Read: cdampedpathanimmotorupdater.AnticipationPosParam
```
## AnticipationHeadingParam (Read-Only)
```lua
--- @type CAnimParamHandle
Read: cdampedpathanimmotorupdater.AnticipationHeadingParam
```
## SpringConstant 
```lua
--- @type number
Read: cdampedpathanimmotorupdater.SpringConstant
Write: cdampedpathanimmotorupdater.SpringConstant = value
```
## MinSpringTension 
```lua
--- @type number
Read: cdampedpathanimmotorupdater.MinSpringTension
Write: cdampedpathanimmotorupdater.MinSpringTension = value
```
## MaxSpringTension 
```lua
--- @type number
Read: cdampedpathanimmotorupdater.MaxSpringTension
Write: cdampedpathanimmotorupdater.MaxSpringTension = value
```
## Parent (Read-Only)
```lua
--- @type CPathAnimMotorUpdaterBase
Read: cdampedpathanimmotorupdater.Parent
```
# Functions
## ToPtr
```lua
--- @return string
cdampedpathanimmotorupdater:ToPtr()
```
## IsValid
```lua
--- @return bool
cdampedpathanimmotorupdater:IsValid()
```

:::