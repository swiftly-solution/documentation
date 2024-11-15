---
title: MaterialVariable_t
index: true
order: 2
category:
  - Guide
---

# MaterialVariable_t

::: tabs
@tab Lua
# Constructor
```lua
MaterialVariable_t(ptr)
```
# Properties
## StrVariable 
```lua
--- @type string
Read: materialvariable_t.StrVariable
Write: materialvariable_t.StrVariable = value
```
## VariableField (Read-Only)
```lua
--- @type ParticleAttributeIndex_t
Read: materialvariable_t.VariableField
```
## Scale 
```lua
--- @type number
Read: materialvariable_t.Scale
Write: materialvariable_t.Scale = value
```
# Functions
## ToPtr
```lua
@returns string
materialvariable_t:ToPtr()
```
## IsValid
```lua
@returns bool
materialvariable_t:IsValid()
```

:::