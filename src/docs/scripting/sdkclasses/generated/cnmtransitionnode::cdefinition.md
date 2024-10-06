---
title: CNmTransitionNode::CDefinition
index: true
order: 2
category:
  - Guide
---

# CNmTransitionNode::CDefinition

::: tabs
@tab Lua
# Constructor
```lua
CNmTransitionNode::CDefinition(ptr --[[ string ]])
```
# Properties
## TargetStateNodeIdx 
```lua
@type number
Read: cnmtransitionnode::cdefinition.TargetStateNodeIdx
Write: cnmtransitionnode::cdefinition.TargetStateNodeIdx = value
```
## DurationOverrideNodeIdx 
```lua
@type number
Read: cnmtransitionnode::cdefinition.DurationOverrideNodeIdx
Write: cnmtransitionnode::cdefinition.DurationOverrideNodeIdx = value
```
## SyncEventOffsetOverrideNodeIdx 
```lua
@type number
Read: cnmtransitionnode::cdefinition.SyncEventOffsetOverrideNodeIdx
Write: cnmtransitionnode::cdefinition.SyncEventOffsetOverrideNodeIdx = value
```
## StartBoneMaskNodeIdx 
```lua
@type number
Read: cnmtransitionnode::cdefinition.StartBoneMaskNodeIdx
Write: cnmtransitionnode::cdefinition.StartBoneMaskNodeIdx = value
```
## Duration 
```lua
@type number
Read: cnmtransitionnode::cdefinition.Duration
Write: cnmtransitionnode::cdefinition.Duration = value
```
## BoneMaskBlendInTimePercentage (Read-Only)
```lua
@type NmPercent_t
Read: cnmtransitionnode::cdefinition.BoneMaskBlendInTimePercentage
```
## SyncEventOffset 
```lua
@type number
Read: cnmtransitionnode::cdefinition.SyncEventOffset
Write: cnmtransitionnode::cdefinition.SyncEventOffset = value
```
## TransitionOptions (Read-Only)
```lua
@type CNmBitFlags
Read: cnmtransitionnode::cdefinition.TransitionOptions
```
## TargetSyncIDNodeIdx 
```lua
@type number
Read: cnmtransitionnode::cdefinition.TargetSyncIDNodeIdx
Write: cnmtransitionnode::cdefinition.TargetSyncIDNodeIdx = value
```
## BlendWeightEasing 
```lua
@type number
Read: cnmtransitionnode::cdefinition.BlendWeightEasing
Write: cnmtransitionnode::cdefinition.BlendWeightEasing = value
```
## RootMotionBlend 
```lua
@type number
Read: cnmtransitionnode::cdefinition.RootMotionBlend
Write: cnmtransitionnode::cdefinition.RootMotionBlend = value
```
## Parent (Read-Only)
```lua
@type CNmPoseNode::CDefinition
Read: cnmtransitionnode::cdefinition.Parent
```
# Functions
## ToPtr
```lua
@returns string
cnmtransitionnode::cdefinition:ToPtr()
```
## IsValid
```lua
@returns bool
cnmtransitionnode::cdefinition:IsValid()
```

:::