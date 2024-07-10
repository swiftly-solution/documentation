---
title: CBaseFlex
index: true
order: 2
category:
  - Guide
---

# CBaseFlex

::: tabs
@tab Lua
# Constructor
```lua
CBaseFlex(ptr --[[ string ]])
```
# Properties
## FlexWeight 
```lua
@type table
Read: cbaseflex.FlexWeight
Write: cbaseflex.FlexWeight = value
```
## LookTargetPosition 
```lua
@type Vector
Read: cbaseflex.LookTargetPosition
Write: cbaseflex.LookTargetPosition = value
```
## Blinktoggle 
```lua
@type boolean
Read: cbaseflex.Blinktoggle
Write: cbaseflex.Blinktoggle = value
```
## AllowResponsesEndTime 
```lua
@type number
Read: cbaseflex.AllowResponsesEndTime
Write: cbaseflex.AllowResponsesEndTime = value
```
## LastFlexAnimationTime 
```lua
@type number
Read: cbaseflex.LastFlexAnimationTime
Write: cbaseflex.LastFlexAnimationTime = value
```
## NextSceneEventId 
```lua
@type SceneEventId_t
Read: cbaseflex.NextSceneEventId
Write: cbaseflex.NextSceneEventId = value
```
## UpdateLayerPriorities 
```lua
@type boolean
Read: cbaseflex.UpdateLayerPriorities
Write: cbaseflex.UpdateLayerPriorities = value
```
## Parent 
```lua
@type CBaseAnimGraph
Read: cbaseflex.Parent
Write: cbaseflex.Parent = value
```
# Functions
## ToPtr
```lua
@returns string
cbaseflex:ToPtr()
```
## IsValid
```lua
@returns bool
cbaseflex:IsValid()
```

:::