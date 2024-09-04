---
title: CBaseAnimGraphController
index: true
order: 2
category:
  - Guide
---

# CBaseAnimGraphController

::: tabs
@tab Lua
# Constructor
```lua
CBaseAnimGraphController(ptr --[[ string ]])
```
# Properties
## AnimGraphNetworkedVars (Read-Only)
```lua
@type CAnimGraphNetworkedVariables
Read: cbaseanimgraphcontroller.AnimGraphNetworkedVars
```
## SequenceFinished 
```lua
@type boolean
Read: cbaseanimgraphcontroller.SequenceFinished
Write: cbaseanimgraphcontroller.SequenceFinished = value
```
## SoundSyncTime 
```lua
@type number
Read: cbaseanimgraphcontroller.SoundSyncTime
Write: cbaseanimgraphcontroller.SoundSyncTime = value
```
## ActiveIKChainMask 
```lua
@type number
Read: cbaseanimgraphcontroller.ActiveIKChainMask
Write: cbaseanimgraphcontroller.ActiveIKChainMask = value
```
## SeqStartTime 
```lua
@type number
Read: cbaseanimgraphcontroller.SeqStartTime
Write: cbaseanimgraphcontroller.SeqStartTime = value
```
## SeqFixedCycle 
```lua
@type number
Read: cbaseanimgraphcontroller.SeqFixedCycle
Write: cbaseanimgraphcontroller.SeqFixedCycle = value
```
## AnimLoopMode 
```lua
@type number
Read: cbaseanimgraphcontroller.AnimLoopMode
Write: cbaseanimgraphcontroller.AnimLoopMode = value
```
## PlaybackRate 
```lua
@type number
Read: cbaseanimgraphcontroller.PlaybackRate
Write: cbaseanimgraphcontroller.PlaybackRate = value
```
## NotifyState 
```lua
@type number
Read: cbaseanimgraphcontroller.NotifyState
Write: cbaseanimgraphcontroller.NotifyState = value
```
## NetworkedAnimationInputsChanged 
```lua
@type boolean
Read: cbaseanimgraphcontroller.NetworkedAnimationInputsChanged
Write: cbaseanimgraphcontroller.NetworkedAnimationInputsChanged = value
```
## NetworkedSequenceChanged 
```lua
@type boolean
Read: cbaseanimgraphcontroller.NetworkedSequenceChanged
Write: cbaseanimgraphcontroller.NetworkedSequenceChanged = value
```
## LastUpdateSkipped 
```lua
@type boolean
Read: cbaseanimgraphcontroller.LastUpdateSkipped
Write: cbaseanimgraphcontroller.LastUpdateSkipped = value
```
## PrevAnimUpdateTime 
```lua
@type number
Read: cbaseanimgraphcontroller.PrevAnimUpdateTime
Write: cbaseanimgraphcontroller.PrevAnimUpdateTime = value
```
## Parent (Read-Only)
```lua
@type CSkeletonAnimationController
Read: cbaseanimgraphcontroller.Parent
```
# Functions
## ToPtr
```lua
@returns string
cbaseanimgraphcontroller:ToPtr()
```
## IsValid
```lua
@returns bool
cbaseanimgraphcontroller:IsValid()
```

:::