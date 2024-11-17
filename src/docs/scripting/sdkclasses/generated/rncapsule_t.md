---
title: RnCapsule_t
index: true
order: 2
category:
  - Guide
---

# RnCapsule_t

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
RnCapsule_t(ptr)
```
# Properties
## Center 
```lua
--- @type table
Read: rncapsule_t.Center
Write: rncapsule_t.Center = value
```
## Radius 
```lua
--- @type number
Read: rncapsule_t.Radius
Write: rncapsule_t.Radius = value
```
# Functions
## ToPtr
```lua
--- @return string
rncapsule_t:ToPtr()
```
## IsValid
```lua
--- @return bool
rncapsule_t:IsValid()
```

:::