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
RnCapsule_t(ptr --[[ string ]])
```
# Properties
## Center 
```lua
@type table
Read: rncapsule_t.Center
Write: rncapsule_t.Center = value
```
## Radius 
```lua
@type number
Read: rncapsule_t.Radius
Write: rncapsule_t.Radius = value
```
# Functions
## ToPtr
```lua
@returns string
rncapsule_t:ToPtr()
```
## IsValid
```lua
@returns bool
rncapsule_t:IsValid()
```

:::