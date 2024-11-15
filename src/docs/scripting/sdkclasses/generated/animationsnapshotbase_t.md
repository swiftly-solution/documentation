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
AnimationSnapshotBase_t(ptr)
```
# Properties
## RealTime 
```lua
--- @type number
Read: animationsnapshotbase_t.RealTime
Write: animationsnapshotbase_t.RealTime = value
```
## BonesInWorldSpace 
```lua
--- @type boolean
Read: animationsnapshotbase_t.BonesInWorldSpace
Write: animationsnapshotbase_t.BonesInWorldSpace = value
```
## BoneSetupMask (Read-Only)
```lua
--- @type table
Read: animationsnapshotbase_t.BoneSetupMask
```
## FlexControllers (Read-Only)
```lua
--- @type table
Read: animationsnapshotbase_t.FlexControllers
```
## SnapshotType 
```lua
--- @type number
Read: animationsnapshotbase_t.SnapshotType
Write: animationsnapshotbase_t.SnapshotType = value
```
## HasDecodeDump 
```lua
--- @type boolean
Read: animationsnapshotbase_t.HasDecodeDump
Write: animationsnapshotbase_t.HasDecodeDump = value
```
## DecodeDump (Read-Only)
```lua
--- @type AnimationDecodeDebugDumpElement_t
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