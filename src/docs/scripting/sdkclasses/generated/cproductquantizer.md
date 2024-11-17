---
title: CProductQuantizer
index: true
order: 2
category:
  - Guide
---

# CProductQuantizer

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
CProductQuantizer(ptr)
```
# Properties
## SubQuantizers (Read-Only)
```lua
--- @type table
Read: cproductquantizer.SubQuantizers
```
## Dimensions 
```lua
--- @type number
Read: cproductquantizer.Dimensions
Write: cproductquantizer.Dimensions = value
```
# Functions
## ToPtr
```lua
--- @return string
cproductquantizer:ToPtr()
```
## IsValid
```lua
--- @return bool
cproductquantizer:IsValid()
```

:::