---
title: MaterialParamVector_t
index: true
order: 2
category:
  - Guide
---

# MaterialParamVector_t

::: tabs
@tab Lua
# Constructor
```lua
MaterialParamVector_t(ptr --[[ string ]])
```
# Properties
## Value 
```lua
@type Vector4D
Read: materialparamvector_t.Value
Write: materialparamvector_t.Value = value
```
## Parent 
```lua
@type MaterialParam_t
Read: materialparamvector_t.Parent
Write: materialparamvector_t.Parent = value
```
# Functions
## ToPtr
```lua
@returns string
materialparamvector_t:ToPtr()
```
## IsValid
```lua
@returns bool
materialparamvector_t:IsValid()
```

:::