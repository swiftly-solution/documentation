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
CVirtualAnimParameter(ptr --[[ string ]])
```
# Properties
## ExpressionString 
```lua
@type string
Read: cvirtualanimparameter.ExpressionString
Write: cvirtualanimparameter.ExpressionString = value
```
## ParamType 
```lua
@type number
Read: cvirtualanimparameter.ParamType
Write: cvirtualanimparameter.ParamType = value
```
## Parent 
```lua
@type CAnimParameterBase
Read: cvirtualanimparameter.Parent
Write: cvirtualanimparameter.Parent = value
```
# Functions
## ToPtr
```lua
@returns string
cvirtualanimparameter:ToPtr()
```
## IsValid
```lua
@returns bool
cvirtualanimparameter:IsValid()
```

:::