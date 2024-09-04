---
title: CFuncTrackChange
index: true
order: 2
category:
  - Guide
---

# CFuncTrackChange

::: tabs
@tab Lua
# Constructor
```lua
CFuncTrackChange(ptr --[[ string ]])
```
# Properties
## TrackTop 
```lua
@type CPathTrack
Read: cfunctrackchange.TrackTop
Write: cfunctrackchange.TrackTop = value
```
## TrackBottom 
```lua
@type CPathTrack
Read: cfunctrackchange.TrackBottom
Write: cfunctrackchange.TrackBottom = value
```
## Train 
```lua
@type CFuncTrackTrain
Read: cfunctrackchange.Train
Write: cfunctrackchange.Train = value
```
## TrackTopName 
```lua
@type string
Read: cfunctrackchange.TrackTopName
Write: cfunctrackchange.TrackTopName = value
```
## TrackBottomName 
```lua
@type string
Read: cfunctrackchange.TrackBottomName
Write: cfunctrackchange.TrackBottomName = value
```
## TrainName 
```lua
@type string
Read: cfunctrackchange.TrainName
Write: cfunctrackchange.TrainName = value
```
## Code 
```lua
@type number
Read: cfunctrackchange.Code
Write: cfunctrackchange.Code = value
```
## TargetState 
```lua
@type number
Read: cfunctrackchange.TargetState
Write: cfunctrackchange.TargetState = value
```
## Use 
```lua
@type number
Read: cfunctrackchange.Use
Write: cfunctrackchange.Use = value
```
## Parent (Read-Only)
```lua
@type CFuncPlatRot
Read: cfunctrackchange.Parent
```
# Functions
## ToPtr
```lua
@returns string
cfunctrackchange:ToPtr()
```
## IsValid
```lua
@returns bool
cfunctrackchange:IsValid()
```

:::