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
--- @param ptr string
CFloatAnimParameter(ptr)
```
# Properties
## DefaultValue 
```lua
--- @type number
Read: cfloatanimparameter.DefaultValue
Write: cfloatanimparameter.DefaultValue = value
```
## MinValue 
```lua
--- @type number
Read: cfloatanimparameter.MinValue
Write: cfloatanimparameter.MinValue = value
```
## MaxValue 
```lua
--- @type number
Read: cfloatanimparameter.MaxValue
Write: cfloatanimparameter.MaxValue = value
```
## Interpolate 
```lua
--- @type boolean
Read: cfloatanimparameter.Interpolate
Write: cfloatanimparameter.Interpolate = value
```
## Parent (Read-Only)
```lua
--- @type CConcreteAnimParameter
Read: cfloatanimparameter.Parent
```
# Functions
## ToPtr
```lua
--- @return string
cfloatanimparameter:ToPtr()
```
## IsValid
```lua
--- @return bool
cfloatanimparameter:IsValid()
```

:::