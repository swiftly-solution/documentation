---
title: RnShapeDesc_t
index: true
order: 2
category:
  - Guide
---

# RnShapeDesc_t

::: tabs
@tab Lua
# Constructor
```lua
RnShapeDesc_t(ptr --[[ string ]])
```
# Properties
## CollisionAttributeIndex 
```lua
@type number
Read: rnshapedesc_t.CollisionAttributeIndex
Write: rnshapedesc_t.CollisionAttributeIndex = value
```
## SurfacePropertyIndex 
```lua
@type number
Read: rnshapedesc_t.SurfacePropertyIndex
Write: rnshapedesc_t.SurfacePropertyIndex = value
```
## UserFriendlyName 
```lua
@type string
Read: rnshapedesc_t.UserFriendlyName
Write: rnshapedesc_t.UserFriendlyName = value
```
# Functions
## ToPtr
```lua
@returns string
rnshapedesc_t:ToPtr()
```
## IsValid
```lua
@returns bool
rnshapedesc_t:IsValid()
```

:::