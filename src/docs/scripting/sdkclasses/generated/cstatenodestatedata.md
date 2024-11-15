---
title: CStateNodeStateData
index: true
order: 2
category:
  - Guide
---

# CStateNodeStateData

::: tabs
@tab Lua
# Constructor
```lua
CStateNodeStateData(ptr)
```
# Properties
## Child (Read-Only)
```lua
--- @type CAnimUpdateNodeRef
Read: cstatenodestatedata.Child
```
## ExclusiveRootMotion 
```lua
--- @type bitfield:1
Read: cstatenodestatedata.ExclusiveRootMotion
Write: cstatenodestatedata.ExclusiveRootMotion = value
```
## ExclusiveRootMotionFirstFrame 
```lua
--- @type bitfield:1
Read: cstatenodestatedata.ExclusiveRootMotionFirstFrame
Write: cstatenodestatedata.ExclusiveRootMotionFirstFrame = value
```
# Functions
## ToPtr
```lua
@returns string
cstatenodestatedata:ToPtr()
```
## IsValid
```lua
@returns bool
cstatenodestatedata:IsValid()
```

:::