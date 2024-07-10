---
title: CFloatAnimParameter
index: true
order: 2
category:
  - Guide
---

# CFloatAnimParameter

::: tabs
@tab Lua
# Constructor
```lua
CFloatAnimParameter(ptr --[[ string ]])
```
# Properties
## DefaultValue 
```lua
@type number
Read: cfloatanimparameter.DefaultValue
Write: cfloatanimparameter.DefaultValue = value
```
## MinValue 
```lua
@type number
Read: cfloatanimparameter.MinValue
Write: cfloatanimparameter.MinValue = value
```
## MaxValue 
```lua
@type number
Read: cfloatanimparameter.MaxValue
Write: cfloatanimparameter.MaxValue = value
```
## Interpolate 
```lua
@type boolean
Read: cfloatanimparameter.Interpolate
Write: cfloatanimparameter.Interpolate = value
```
## Parent 
```lua
@type CConcreteAnimParameter
Read: cfloatanimparameter.Parent
Write: cfloatanimparameter.Parent = value
```
# Functions
## ToPtr
```lua
@returns string
cfloatanimparameter:ToPtr()
```
## IsValid
```lua
@returns bool
cfloatanimparameter:IsValid()
```

:::