---
title: FeEffectDesc_t
index: true
order: 2
category:
  - Guide
---

# FeEffectDesc_t

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
FeEffectDesc_t(ptr)
```
# Properties
## Name 
```lua
--- @type string
Read: feeffectdesc_t.Name
Write: feeffectdesc_t.Name = value
```
## NameHash 
```lua
--- @type number
Read: feeffectdesc_t.NameHash
Write: feeffectdesc_t.NameHash = value
```
## Type 
```lua
--- @type number
Read: feeffectdesc_t.Type
Write: feeffectdesc_t.Type = value
```
# Functions
## ToPtr
```lua
--- @return string
feeffectdesc_t:ToPtr()
```
## IsValid
```lua
--- @return bool
feeffectdesc_t:IsValid()
```

:::