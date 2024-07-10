---
title: VMixEnvelopeDesc_t
index: true
order: 2
category:
  - Guide
---

# VMixEnvelopeDesc_t

::: tabs
@tab Lua
# Constructor
```lua
VMixEnvelopeDesc_t(ptr --[[ string ]])
```
# Properties
## AttackTimeMS 
```lua
@type number
Read: vmixenvelopedesc_t.AttackTimeMS
Write: vmixenvelopedesc_t.AttackTimeMS = value
```
## HoldTimeMS 
```lua
@type number
Read: vmixenvelopedesc_t.HoldTimeMS
Write: vmixenvelopedesc_t.HoldTimeMS = value
```
## ReleaseTimeMS 
```lua
@type number
Read: vmixenvelopedesc_t.ReleaseTimeMS
Write: vmixenvelopedesc_t.ReleaseTimeMS = value
```
# Functions
## ToPtr
```lua
@returns string
vmixenvelopedesc_t:ToPtr()
```
## IsValid
```lua
@returns bool
vmixenvelopedesc_t:IsValid()
```

:::