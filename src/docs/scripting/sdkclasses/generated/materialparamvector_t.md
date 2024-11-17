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
--- @param ptr string
MaterialParamVector_t(ptr)
```
# Properties
## Value 
```lua
--- @type Vector4D
Read: materialparamvector_t.Value
Write: materialparamvector_t.Value = value
```
## Parent (Read-Only)
```lua
--- @type MaterialParam_t
Read: materialparamvector_t.Parent
```
# Functions
## ToPtr
```lua
--- @return string
materialparamvector_t:ToPtr()
```
## IsValid
```lua
--- @return bool
materialparamvector_t:IsValid()
```

:::