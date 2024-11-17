---
title: CMathColorBlend
index: true
order: 2
category:
  - Guide
---

# CMathColorBlend

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
CMathColorBlend(ptr)
```
# Properties
## InMin 
```lua
--- @type number
Read: cmathcolorblend.InMin
Write: cmathcolorblend.InMin = value
```
## InMax 
```lua
--- @type number
Read: cmathcolorblend.InMax
Write: cmathcolorblend.InMax = value
```
## OutColor1 
```lua
--- @type Color
Read: cmathcolorblend.OutColor1
Write: cmathcolorblend.OutColor1 = value
```
## OutColor2 
```lua
--- @type Color
Read: cmathcolorblend.OutColor2
Write: cmathcolorblend.OutColor2 = value
```
## Parent (Read-Only)
```lua
--- @type CLogicalEntity
Read: cmathcolorblend.Parent
```
# Functions
## ToPtr
```lua
--- @return string
cmathcolorblend:ToPtr()
```
## IsValid
```lua
--- @return bool
cmathcolorblend:IsValid()
```

:::