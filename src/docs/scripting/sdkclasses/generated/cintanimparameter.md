---
title: CIntAnimParameter
index: true
order: 2
category:
  - Guide
---

# CIntAnimParameter

::: tabs
@tab Lua
# Constructor
```lua
CIntAnimParameter(ptr --[[ string ]])
```
# Properties
## DefaultValue 
```lua
@type number
Read: cintanimparameter.DefaultValue
Write: cintanimparameter.DefaultValue = value
```
## MinValue 
```lua
@type number
Read: cintanimparameter.MinValue
Write: cintanimparameter.MinValue = value
```
## MaxValue 
```lua
@type number
Read: cintanimparameter.MaxValue
Write: cintanimparameter.MaxValue = value
```
## Parent (Read-Only)
```lua
@type CConcreteAnimParameter
Read: cintanimparameter.Parent
```
# Functions
## ToPtr
```lua
@returns string
cintanimparameter:ToPtr()
```
## IsValid
```lua
@returns bool
cintanimparameter:IsValid()
```

:::