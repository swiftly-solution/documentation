---
title: CNmTargetWarpNode::CDefinition
index: true
order: 2
category:
  - Guide
---

# CNmTargetWarpNode::CDefinition

::: tabs
@tab Lua
# Constructor
```lua
CNmTargetWarpNode::CDefinition(ptr --[[ string ]])
```
# Properties
## ClipReferenceNodeIdx 
```lua
@type number
Read: cnmtargetwarpnode::cdefinition.ClipReferenceNodeIdx
Write: cnmtargetwarpnode::cdefinition.ClipReferenceNodeIdx = value
```
## TargetValueNodeIdx 
```lua
@type number
Read: cnmtargetwarpnode::cdefinition.TargetValueNodeIdx
Write: cnmtargetwarpnode::cdefinition.TargetValueNodeIdx = value
```
## SamplingMode (Read-Only)
```lua
@type uint8_t
Read: cnmtargetwarpnode::cdefinition.SamplingMode
```
## AllowTargetUpdate 
```lua
@type boolean
Read: cnmtargetwarpnode::cdefinition.AllowTargetUpdate
Write: cnmtargetwarpnode::cdefinition.AllowTargetUpdate = value
```
## SamplingPositionErrorThresholdSq 
```lua
@type number
Read: cnmtargetwarpnode::cdefinition.SamplingPositionErrorThresholdSq
Write: cnmtargetwarpnode::cdefinition.SamplingPositionErrorThresholdSq = value
```
## MaxTangentLength 
```lua
@type number
Read: cnmtargetwarpnode::cdefinition.MaxTangentLength
Write: cnmtargetwarpnode::cdefinition.MaxTangentLength = value
```
## LerpFallbackDistanceThreshold 
```lua
@type number
Read: cnmtargetwarpnode::cdefinition.LerpFallbackDistanceThreshold
Write: cnmtargetwarpnode::cdefinition.LerpFallbackDistanceThreshold = value
```
## TargetUpdateDistanceThreshold 
```lua
@type number
Read: cnmtargetwarpnode::cdefinition.TargetUpdateDistanceThreshold
Write: cnmtargetwarpnode::cdefinition.TargetUpdateDistanceThreshold = value
```
## TargetUpdateAngleThresholdRadians 
```lua
@type number
Read: cnmtargetwarpnode::cdefinition.TargetUpdateAngleThresholdRadians
Write: cnmtargetwarpnode::cdefinition.TargetUpdateAngleThresholdRadians = value
```
## Parent (Read-Only)
```lua
@type CNmPoseNode::CDefinition
Read: cnmtargetwarpnode::cdefinition.Parent
```
# Functions
## ToPtr
```lua
@returns string
cnmtargetwarpnode::cdefinition:ToPtr()
```
## IsValid
```lua
@returns bool
cnmtargetwarpnode::cdefinition:IsValid()
```

:::