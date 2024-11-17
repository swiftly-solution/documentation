---
title: WeightList
index: true
order: 2
category:
  - Guide
---

# WeightList

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
WeightList(ptr)
```
# Properties
## Name 
```lua
--- @type string
Read: weightlist.Name
Write: weightlist.Name = value
```
## Weights (Read-Only)
```lua
--- @type table
Read: weightlist.Weights
```
# Functions
## ToPtr
```lua
--- @return string
weightlist:ToPtr()
```
## IsValid
```lua
--- @return bool
weightlist:IsValid()
```

:::