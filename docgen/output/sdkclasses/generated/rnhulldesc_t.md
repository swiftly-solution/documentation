---
title: RnHullDesc_t
index: true
order: 2
category:
  - Guide
---

# RnHullDesc_t

::: tabs
@tab Lua
# Constructor
```lua
RnHullDesc_t(ptr --[[ string ]])
```
# Properties
## Hull (Read-Only)
```lua
@type RnHull_t
Read: rnhulldesc_t.Hull
```
## Parent 
```lua
@type RnShapeDesc_t
Read: rnhulldesc_t.Parent
Write: rnhulldesc_t.Parent = value
```
# Functions
## ToPtr
```lua
@returns string
rnhulldesc_t:ToPtr()
```
## IsValid
```lua
@returns bool
rnhulldesc_t:IsValid()
```

:::