---
title: AmmoTypeInfo_t
index: true
order: 2
category:
  - Guide
---

# AmmoTypeInfo_t

::: tabs
@tab Lua
# Constructor
```lua
AmmoTypeInfo_t(ptr --[[ string ]])
```
# Properties
## MaxCarry 
```lua
@type number
Read: ammotypeinfo_t.MaxCarry
Write: ammotypeinfo_t.MaxCarry = value
```
## SplashSize (Read-Only)
```lua
@type CRangeInt
Read: ammotypeinfo_t.SplashSize
```
## Flags 
```lua
@type number
Read: ammotypeinfo_t.Flags
Write: ammotypeinfo_t.Flags = value
```
## Mass 
```lua
@type number
Read: ammotypeinfo_t.Mass
Write: ammotypeinfo_t.Mass = value
```
## Speed (Read-Only)
```lua
@type CRangeFloat
Read: ammotypeinfo_t.Speed
```
# Functions
## ToPtr
```lua
@returns string
ammotypeinfo_t:ToPtr()
```
## IsValid
```lua
@returns bool
ammotypeinfo_t:IsValid()
```

:::