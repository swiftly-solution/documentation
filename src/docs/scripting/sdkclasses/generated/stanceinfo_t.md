---
title: StanceInfo_t
index: true
order: 2
category:
  - Guide
---

# StanceInfo_t

::: tabs
@tab Lua
# Constructor
```lua
StanceInfo_t(ptr)
```
# Properties
## Position 
```lua
--- @type Vector
Read: stanceinfo_t.Position
Write: stanceinfo_t.Position = value
```
## Direction 
```lua
--- @type number
Read: stanceinfo_t.Direction
Write: stanceinfo_t.Direction = value
```
# Functions
## ToPtr
```lua
@returns string
stanceinfo_t:ToPtr()
```
## IsValid
```lua
@returns bool
stanceinfo_t:IsValid()
```

:::