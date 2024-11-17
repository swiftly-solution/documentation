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
--- @param ptr string
RnCapsuleDesc_t(ptr)
```
# Properties
## Capsule (Read-Only)
```lua
--- @type RnCapsule_t
Read: rncapsuledesc_t.Capsule
```
## Parent (Read-Only)
```lua
--- @type RnShapeDesc_t
Read: rncapsuledesc_t.Parent
```
# Functions
## ToPtr
```lua
--- @return string
rncapsuledesc_t:ToPtr()
```
## IsValid
```lua
--- @return bool
rncapsuledesc_t:IsValid()
```

:::