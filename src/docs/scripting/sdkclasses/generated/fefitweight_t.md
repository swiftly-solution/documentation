---
title: FeFitWeight_t
index: true
order: 2
category:
  - Guide
---

# FeFitWeight_t

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
FeFitWeight_t(ptr)
```
# Properties
## Weight 
```lua
--- @type number
Read: fefitweight_t.Weight
Write: fefitweight_t.Weight = value
```
## Node 
```lua
--- @type number
Read: fefitweight_t.Node
Write: fefitweight_t.Node = value
```
## Dummy 
```lua
--- @type number
Read: fefitweight_t.Dummy
Write: fefitweight_t.Dummy = value
```
# Functions
## ToPtr
```lua
--- @return string
fefitweight_t:ToPtr()
```
## IsValid
```lua
--- @return bool
fefitweight_t:IsValid()
```

:::