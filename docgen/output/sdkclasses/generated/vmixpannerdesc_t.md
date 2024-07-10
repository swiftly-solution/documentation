---
title: VMixPannerDesc_t
index: true
order: 2
category:
  - Guide
---

# VMixPannerDesc_t

::: tabs
@tab Lua
# Constructor
```lua
VMixPannerDesc_t(ptr --[[ string ]])
```
# Properties
## Type 
```lua
@type number
Read: vmixpannerdesc_t.Type
Write: vmixpannerdesc_t.Type = value
```
## Strength 
```lua
@type number
Read: vmixpannerdesc_t.Strength
Write: vmixpannerdesc_t.Strength = value
```
# Functions
## ToPtr
```lua
@returns string
vmixpannerdesc_t:ToPtr()
```
## IsValid
```lua
@returns bool
vmixpannerdesc_t:IsValid()
```

:::