---
title: CNmTransitionNode
index: true
order: 2
category:
  - Guide
---

# CNmTransitionNode

::: tabs
@tab Lua
# Constructor
```lua
CNmTransitionNode(ptr --[[ string ]])
```
# Properties
## TargetCNmStateNodeIdx 
```lua
@type number
Read: cnmtransitionnode.TargetCNmStateNodeIdx
Write: cnmtransitionnode.TargetCNmStateNodeIdx = value
```
## DurationOverrideNodeIdx 
```lua
@type number
Read: cnmtransitionnode.DurationOverrideNodeIdx
Write: cnmtransitionnode.DurationOverrideNodeIdx = value
```
## SyncEventOffsetOverrideNodeIdx 
```lua
@type number
Read: cnmtransitionnode.SyncEventOffsetOverrideNodeIdx
Write: cnmtransitionnode.SyncEventOffsetOverrideNodeIdx = value
```
## StartBoneMaskNodeIdx 
```lua
@type number
Read: cnmtransitionnode.StartBoneMaskNodeIdx
Write: cnmtransitionnode.StartBoneMaskNodeIdx = value
```
## Duration 
```lua
@type number
Read: cnmtransitionnode.Duration
Write: cnmtransitionnode.Duration = value
```
## BoneMaskBlendInTimePercentage 
```lua
@type NmPercent_t
Read: cnmtransitionnode.BoneMaskBlendInTimePercentage
Write: cnmtransitionnode.BoneMaskBlendInTimePercentage = value
```
## SyncEventOffset 
```lua
@type number
Read: cnmtransitionnode.SyncEventOffset
Write: cnmtransitionnode.SyncEventOffset = value
```
## TransitionOptions 
```lua
@type CNmTransitionNode
Read: cnmtransitionnode.TransitionOptions
Write: cnmtransitionnode.TransitionOptions = value
```
## TargetSyncIDNodeIdx 
```lua
@type number
Read: cnmtransitionnode.TargetSyncIDNodeIdx
Write: cnmtransitionnode.TargetSyncIDNodeIdx = value
```
## BlendWeightEasing 
```lua
@type number
Read: cnmtransitionnode.BlendWeightEasing
Write: cnmtransitionnode.BlendWeightEasing = value
```
## RootMotionBlend 
```lua
@type number
Read: cnmtransitionnode.RootMotionBlend
Write: cnmtransitionnode.RootMotionBlend = value
```
## Parent 
```lua
@type CNmPoseNode
Read: cnmtransitionnode.Parent
Write: cnmtransitionnode.Parent = value
```
# Functions
## ToPtr
```lua
@returns string
cnmtransitionnode:ToPtr()
```
## IsValid
```lua
@returns bool
cnmtransitionnode:IsValid()
```

:::