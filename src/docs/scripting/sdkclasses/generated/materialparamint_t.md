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
MaterialParamInt_t(ptr --[[ string ]])
```
# Properties
## Value 
```lua
@type number
Read: materialparamint_t.Value
Write: materialparamint_t.Value = value
```
## Parent (Read-Only)
```lua
@type MaterialParam_t
Read: materialparamint_t.Parent
```
# Functions
## ToPtr
```lua
@returns string
materialparamint_t:ToPtr()
```
## IsValid
```lua
@returns bool
materialparamint_t:IsValid()
```

:::