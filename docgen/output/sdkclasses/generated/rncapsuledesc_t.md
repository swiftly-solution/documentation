---
title: RnCapsuleDesc_t
index: true
order: 2
category:
  - Guide
---

# RnCapsuleDesc_t

::: tabs
@tab Lua
# Constructor
```lua
RnCapsuleDesc_t(ptr --[[ string ]])
```
# Properties
## Capsule (Read-Only)
```lua
@type RnCapsule_t
Read: rncapsuledesc_t.Capsule
```
## Parent (Read-Only)
```lua
@type RnShapeDesc_t
Read: rncapsuledesc_t.Parent
```
# Functions
## ToPtr
```lua
@returns string
rncapsuledesc_t:ToPtr()
```
## IsValid
```lua
@returns bool
rncapsuledesc_t:IsValid()
```

:::