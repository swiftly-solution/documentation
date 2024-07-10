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
## SplashSize 
```lua
@type CRangeInt
Read: ammotypeinfo_t.SplashSize
Write: ammotypeinfo_t.SplashSize = value
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
## Speed 
```lua
@type CRangeFloat
Read: ammotypeinfo_t.Speed
Write: ammotypeinfo_t.Speed = value
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