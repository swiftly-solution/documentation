---
title: CStaticPoseCache
index: true
order: 2
category:
  - Guide
---

# CStaticPoseCache

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
CStaticPoseCache(ptr)
```
# Properties
## Poses (Read-Only)
```lua
--- @type table
Read: cstaticposecache.Poses
```
## BoneCount 
```lua
--- @type number
Read: cstaticposecache.BoneCount
Write: cstaticposecache.BoneCount = value
```
## MorphCount 
```lua
--- @type number
Read: cstaticposecache.MorphCount
Write: cstaticposecache.MorphCount = value
```
# Functions
## ToPtr
```lua
--- @return string
cstaticposecache:ToPtr()
```
## IsValid
```lua
--- @return bool
cstaticposecache:IsValid()
```

:::