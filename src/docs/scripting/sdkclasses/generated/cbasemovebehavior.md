---
title: CBaseMoveBehavior
index: true
order: 2
category:
  - Guide
---

# CBaseMoveBehavior

::: tabs
@tab Lua
# Constructor
```lua
CBaseMoveBehavior(ptr --[[ string ]])
```
# Properties
## PositionInterpolator 
```lua
@type number
Read: cbasemovebehavior.PositionInterpolator
Write: cbasemovebehavior.PositionInterpolator = value
```
## RotationInterpolator 
```lua
@type number
Read: cbasemovebehavior.RotationInterpolator
Write: cbasemovebehavior.RotationInterpolator = value
```
## AnimStartTime 
```lua
@type number
Read: cbasemovebehavior.AnimStartTime
Write: cbasemovebehavior.AnimStartTime = value
```
## AnimEndTime 
```lua
@type number
Read: cbasemovebehavior.AnimEndTime
Write: cbasemovebehavior.AnimEndTime = value
```
## AverageSpeedAcrossFrame 
```lua
@type number
Read: cbasemovebehavior.AverageSpeedAcrossFrame
Write: cbasemovebehavior.AverageSpeedAcrossFrame = value
```
## CurrentKeyFrame (Read-Only)
```lua
@type CPathKeyFrame
Read: cbasemovebehavior.CurrentKeyFrame
```
## TargetKeyFrame (Read-Only)
```lua
@type CPathKeyFrame
Read: cbasemovebehavior.TargetKeyFrame
```
## PreKeyFrame (Read-Only)
```lua
@type CPathKeyFrame
Read: cbasemovebehavior.PreKeyFrame
```
## PostKeyFrame (Read-Only)
```lua
@type CPathKeyFrame
Read: cbasemovebehavior.PostKeyFrame
```
## TimeIntoFrame 
```lua
@type number
Read: cbasemovebehavior.TimeIntoFrame
Write: cbasemovebehavior.TimeIntoFrame = value
```
## Direction 
```lua
@type number
Read: cbasemovebehavior.Direction
Write: cbasemovebehavior.Direction = value
```
## Parent 
```lua
@type CPathKeyFrame
Read: cbasemovebehavior.Parent
Write: cbasemovebehavior.Parent = value
```
# Functions
## ToPtr
```lua
@returns string
cbasemovebehavior:ToPtr()
```
## IsValid
```lua
@returns bool
cbasemovebehavior:IsValid()
```

:::