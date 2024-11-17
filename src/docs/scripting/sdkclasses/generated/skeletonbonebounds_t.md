---
title: SkeletonBoneBounds_t
index: true
order: 2
category:
  - Guide
---

# SkeletonBoneBounds_t

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
SkeletonBoneBounds_t(ptr)
```
# Properties
## Center 
```lua
--- @type Vector
Read: skeletonbonebounds_t.Center
Write: skeletonbonebounds_t.Center = value
```
## Size 
```lua
--- @type Vector
Read: skeletonbonebounds_t.Size
Write: skeletonbonebounds_t.Size = value
```
# Functions
## ToPtr
```lua
--- @return string
skeletonbonebounds_t:ToPtr()
```
## IsValid
```lua
--- @return bool
skeletonbonebounds_t:IsValid()
```

:::