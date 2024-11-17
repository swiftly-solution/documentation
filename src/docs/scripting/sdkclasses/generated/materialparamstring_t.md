---
title: MaterialParamString_t
index: true
order: 2
category:
  - Guide
---

# MaterialParamString_t

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
MaterialParamString_t(ptr)
```
# Properties
## Value 
```lua
--- @type string
Read: materialparamstring_t.Value
Write: materialparamstring_t.Value = value
```
## Parent (Read-Only)
```lua
--- @type MaterialParam_t
Read: materialparamstring_t.Parent
```
# Functions
## ToPtr
```lua
--- @return string
materialparamstring_t:ToPtr()
```
## IsValid
```lua
--- @return bool
materialparamstring_t:IsValid()
```

:::