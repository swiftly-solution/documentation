---
title: CVirtualAnimParameter
index: true
order: 2
category:
  - Guide
---

# CVirtualAnimParameter

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
CVirtualAnimParameter(ptr)
```
# Properties
## ExpressionString 
```lua
--- @type string
Read: cvirtualanimparameter.ExpressionString
Write: cvirtualanimparameter.ExpressionString = value
```
## ParamType 
```lua
--- @type number
Read: cvirtualanimparameter.ParamType
Write: cvirtualanimparameter.ParamType = value
```
## Parent (Read-Only)
```lua
--- @type CAnimParameterBase
Read: cvirtualanimparameter.Parent
```
# Functions
## ToPtr
```lua
--- @return string
cvirtualanimparameter:ToPtr()
```
## IsValid
```lua
--- @return bool
cvirtualanimparameter:IsValid()
```

:::