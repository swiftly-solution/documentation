---
title: FeBandBendLimit_t
index: true
order: 2
category:
  - Guide
---

# FeBandBendLimit_t

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
FeBandBendLimit_t(ptr)
```
# Properties
## DistMin 
```lua
--- @type number
Read: febandbendlimit_t.DistMin
Write: febandbendlimit_t.DistMin = value
```
## DistMax 
```lua
--- @type number
Read: febandbendlimit_t.DistMax
Write: febandbendlimit_t.DistMax = value
```
## Node 
```lua
--- @type table
Read: febandbendlimit_t.Node
Write: febandbendlimit_t.Node = value
```
# Functions
## ToPtr
```lua
--- @return string
febandbendlimit_t:ToPtr()
```
## IsValid
```lua
--- @return bool
febandbendlimit_t:IsValid()
```

:::