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
## Capsule 
```lua
@type RnCapsule_t
Read: rncapsuledesc_t.Capsule
Write: rncapsuledesc_t.Capsule = value
```
## Parent 
```lua
@type RnShapeDesc_t
Read: rncapsuledesc_t.Parent
Write: rncapsuledesc_t.Parent = value
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