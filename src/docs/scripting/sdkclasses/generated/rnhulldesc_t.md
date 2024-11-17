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
--- @param ptr string
RnHullDesc_t(ptr)
```
# Properties
## Hull (Read-Only)
```lua
--- @type Rnuint32_t
Read: rnhulldesc_t.Hull
```
## Parent (Read-Only)
```lua
--- @type RnShapeDesc_t
Read: rnhulldesc_t.Parent
```
# Functions
## ToPtr
```lua
--- @return string
rnhulldesc_t:ToPtr()
```
## IsValid
```lua
--- @return bool
rnhulldesc_t:IsValid()
```

:::