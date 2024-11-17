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
--- @param ptr string
VMixPannerDesc_t(ptr)
```
# Properties
## Type 
```lua
--- @type number
Read: vmixpannerdesc_t.Type
Write: vmixpannerdesc_t.Type = value
```
## Strength 
```lua
--- @type number
Read: vmixpannerdesc_t.Strength
Write: vmixpannerdesc_t.Strength = value
```
# Functions
## ToPtr
```lua
--- @return string
vmixpannerdesc_t:ToPtr()
```
## IsValid
```lua
--- @return bool
vmixpannerdesc_t:IsValid()
```

:::