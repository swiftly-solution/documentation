---
title: AABB_t
index: true
order: 2
category:
  - Guide
---

# AABB_t

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
AABB_t(ptr)
```
# Properties
## MinBounds 
```lua
--- @type Vector
Read: aabb_t.MinBounds
Write: aabb_t.MinBounds = value
```
## MaxBounds 
```lua
--- @type Vector
Read: aabb_t.MaxBounds
Write: aabb_t.MaxBounds = value
```
# Functions
## ToPtr
```lua
--- @return string
aabb_t:ToPtr()
```
## IsValid
```lua
--- @return bool
aabb_t:IsValid()
```

:::