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
--- @param ptr string
CFootMotion(ptr)
```
# Properties
## Strides (Read-Only)
```lua
--- @type table
Read: cfootmotion.Strides
```
## Name 
```lua
--- @type string
Read: cfootmotion.Name
Write: cfootmotion.Name = value
```
## Additive 
```lua
--- @type boolean
Read: cfootmotion.Additive
Write: cfootmotion.Additive = value
```
# Functions
## ToPtr
```lua
--- @return string
cfootmotion:ToPtr()
```
## IsValid
```lua
--- @return bool
cfootmotion:IsValid()
```

:::