---
title: ModelSkeletonData_t
index: true
order: 2
category:
  - Guide
---

# ModelSkeletonData_t

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
ModelSkeletonData_t(ptr)
```
# Properties
## BoneName (Read-Only)
```lua
--- @type table
Read: modelskeletondata_t.BoneName
```
## Parent (Read-Only)
```lua
--- @type table
Read: modelskeletondata_t.Parent
```
## BoneSphere (Read-Only)
```lua
--- @type table
Read: modelskeletondata_t.BoneSphere
```
## Flag (Read-Only)
```lua
--- @type table
Read: modelskeletondata_t.Flag
```
## BonePosParent (Read-Only)
```lua
--- @type table
Read: modelskeletondata_t.BonePosParent
```
## BoneScaleParent (Read-Only)
```lua
--- @type table
Read: modelskeletondata_t.BoneScaleParent
```
# Functions
## ToPtr
```lua
--- @return string
modelskeletondata_t:ToPtr()
```
## IsValid
```lua
--- @return bool
modelskeletondata_t:IsValid()
```

:::