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
@type Rnuint32_t
Read: rnhulldesc_t.Hull
```
## Parent (Read-Only)
```lua
@type RnShapeDesc_t
Read: rnhulldesc_t.Parent
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