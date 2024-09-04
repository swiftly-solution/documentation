---
title: CFootMotion
index: true
order: 2
category:
  - Guide
---

# CFootMotion

::: tabs
@tab Lua
# Constructor
```lua
CFootMotion(ptr --[[ string ]])
```
# Properties
## Strides (Read-Only)
```lua
@type table
Read: cfootmotion.Strides
```
## Name 
```lua
@type string
Read: cfootmotion.Name
Write: cfootmotion.Name = value
```
## Additive 
```lua
@type boolean
Read: cfootmotion.Additive
Write: cfootmotion.Additive = value
```
# Functions
## ToPtr
```lua
@returns string
cfootmotion:ToPtr()
```
## IsValid
```lua
@returns bool
cfootmotion:IsValid()
```

:::