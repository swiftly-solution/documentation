---
title: AnimationSnapshotBase_t
index: true
order: 2
category:
  - Guide
---

# AnimationSnapshotBase_t

::: tabs
@tab Lua
# Constructor
```lua
AnimationSnapshotBase_t(ptr --[[ string ]])
```
# Properties
## RealTime 
```lua
@type number
Read: animationsnapshotbase_t.RealTime
Write: animationsnapshotbase_t.RealTime = value
```
## BonesInWorldSpace 
```lua
@type boolean
Read: animationsnapshotbase_t.BonesInWorldSpace
Write: animationsnapshotbase_t.BonesInWorldSpace = value
```
## BoneSetupMask 
```lua
@type table
Read: animationsnapshotbase_t.BoneSetupMask
Write: animationsnapshotbase_t.BoneSetupMask = value
```
## FlexControllers 
```lua
@type table
Read: animationsnapshotbase_t.FlexControllers
Write: animationsnapshotbase_t.FlexControllers = value
```
## SnapshotType 
```lua
@type number
Read: animationsnapshotbase_t.SnapshotType
Write: animationsnapshotbase_t.SnapshotType = value
```
## HasDecodeDump 
```lua
@type boolean
Read: animationsnapshotbase_t.HasDecodeDump
Write: animationsnapshotbase_t.HasDecodeDump = value
```
## DecodeDump (Read-Only)
```lua
@type AnimationDecodeDebugDumpElement_t
Read: animationsnapshotbase_t.DecodeDump
```
# Functions
## ToPtr
```lua
@returns string
animationsnapshotbase_t:ToPtr()
```
## IsValid
```lua
@returns bool
animationsnapshotbase_t:IsValid()
```

:::