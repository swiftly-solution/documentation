---
title: MaterialParamFloat_t
index: true
order: 2
category:
  - Guide
---

# MaterialParamFloat_t

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
MaterialParamFloat_t(ptr)
```
# Properties
## Value 
```lua
--- @type number
Read: materialparamfloat_t.Value
Write: materialparamfloat_t.Value = value
```
## Parent (Read-Only)
```lua
--- @type MaterialParam_t
Read: materialparamfloat_t.Parent
```
# Functions
## ToPtr
```lua
--- @return string
materialparamfloat_t:ToPtr()
```
## IsValid
```lua
--- @return bool
materialparamfloat_t:IsValid()
```

:::