---
title: RenderSkeletonBone_t
index: true
order: 2
category:
  - Guide
---

# RenderSkeletonBone_t

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
RenderSkeletonBone_t(ptr)
```
# Properties
## BoneName 
```lua
--- @type string
Read: renderskeletonbone_t.BoneName
Write: renderskeletonbone_t.BoneName = value
```
## ParentName 
```lua
--- @type string
Read: renderskeletonbone_t.ParentName
Write: renderskeletonbone_t.ParentName = value
```
## Bbox (Read-Only)
```lua
--- @type SkeletonBoneBounds_t
Read: renderskeletonbone_t.Bbox
```
## SphereRadius 
```lua
--- @type number
Read: renderskeletonbone_t.SphereRadius
Write: renderskeletonbone_t.SphereRadius = value
```
# Functions
## ToPtr
```lua
--- @return string
renderskeletonbone_t:ToPtr()
```
## IsValid
```lua
--- @return bool
renderskeletonbone_t:IsValid()
```

:::