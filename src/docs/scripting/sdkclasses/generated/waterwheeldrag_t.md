---
title: WaterWheelDrag_t
index: true
order: 2
category:
  - Guide
---

# WaterWheelDrag_t

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
WaterWheelDrag_t(ptr)
```
# Properties
## FractionOfWheelSubmerged 
```lua
--- @type number
Read: waterwheeldrag_t.FractionOfWheelSubmerged
Write: waterwheeldrag_t.FractionOfWheelSubmerged = value
```
## WheelDrag 
```lua
--- @type number
Read: waterwheeldrag_t.WheelDrag
Write: waterwheeldrag_t.WheelDrag = value
```
# Functions
## ToPtr
```lua
--- @return string
waterwheeldrag_t:ToPtr()
```
## IsValid
```lua
--- @return bool
waterwheeldrag_t:IsValid()
```

:::