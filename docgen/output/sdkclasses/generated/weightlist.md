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
WeightList(ptr --[[ string ]])
```
# Properties
## Name 
```lua
@type string
Read: weightlist.Name
Write: weightlist.Name = value
```
## Weights (Read-Only)
```lua
@type table
Read: weightlist.Weights
```
# Functions
## ToPtr
```lua
@returns string
weightlist:ToPtr()
```
## IsValid
```lua
@returns bool
weightlist:IsValid()
```

:::