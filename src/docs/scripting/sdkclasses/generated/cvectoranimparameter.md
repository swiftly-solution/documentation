---
title: CVectorAnimParameter
index: true
order: 2
category:
  - Guide
---

# CVectorAnimParameter

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
CVectorAnimParameter(ptr)
```
# Properties
## DefaultValue 
```lua
--- @type Vector
Read: cvectoranimparameter.DefaultValue
Write: cvectoranimparameter.DefaultValue = value
```
## Interpolate 
```lua
--- @type boolean
Read: cvectoranimparameter.Interpolate
Write: cvectoranimparameter.Interpolate = value
```
## Parent (Read-Only)
```lua
--- @type CConcreteAnimParameter
Read: cvectoranimparameter.Parent
```
# Functions
## ToPtr
```lua
--- @return string
cvectoranimparameter:ToPtr()
```
## IsValid
```lua
--- @return bool
cvectoranimparameter:IsValid()
```

:::