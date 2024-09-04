---
title: ColorChoice_t
index: true
order: 2
category:
  - Guide
---

# ColorChoice_t

::: tabs
@tab Lua
# Constructor
```lua
ColorChoice_t(ptr --[[ string ]])
```
# Properties
## Color 
```lua
@type CSmartPropAttributeColor
Read: colorchoice_t.Color
Write: colorchoice_t.Color = value
```
## Weight 
```lua
@type CSmartPropAttributeFloat
Read: colorchoice_t.Weight
Write: colorchoice_t.Weight = value
```
# Functions
## ToPtr
```lua
@returns string
colorchoice_t:ToPtr()
```
## IsValid
```lua
@returns bool
colorchoice_t:IsValid()
```

:::