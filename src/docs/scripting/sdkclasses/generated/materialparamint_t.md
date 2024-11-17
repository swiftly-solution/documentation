---
title: MaterialParamInt_t
index: true
order: 2
category:
  - Guide
---

# MaterialParamInt_t

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
MaterialParamInt_t(ptr)
```
# Properties
## Value 
```lua
--- @type number
Read: materialparamint_t.Value
Write: materialparamint_t.Value = value
```
## Parent (Read-Only)
```lua
--- @type MaterialParam_t
Read: materialparamint_t.Parent
```
# Functions
## ToPtr
```lua
--- @return string
materialparamint_t:ToPtr()
```
## IsValid
```lua
--- @return bool
materialparamint_t:IsValid()
```

:::