---
title: CNmFloatComparisonNode::CDefinition
index: true
order: 2
category:
  - Guide
---

# CNmFloatComparisonNode::CDefinition

::: tabs
@tab Lua
# Constructor
```lua
CNmFloatComparisonNode::CDefinition(ptr --[[ string ]])
```
# Properties
## InputValueNodeIdx 
```lua
@type number
Read: cnmfloatcomparisonnode::cdefinition.InputValueNodeIdx
Write: cnmfloatcomparisonnode::cdefinition.InputValueNodeIdx = value
```
## ComparandValueNodeIdx 
```lua
@type number
Read: cnmfloatcomparisonnode::cdefinition.ComparandValueNodeIdx
Write: cnmfloatcomparisonnode::cdefinition.ComparandValueNodeIdx = value
```
## Comparison 
```lua
@type number
Read: cnmfloatcomparisonnode::cdefinition.Comparison
Write: cnmfloatcomparisonnode::cdefinition.Comparison = value
```
## Epsilon 
```lua
@type number
Read: cnmfloatcomparisonnode::cdefinition.Epsilon
Write: cnmfloatcomparisonnode::cdefinition.Epsilon = value
```
## ComparisonValue 
```lua
@type number
Read: cnmfloatcomparisonnode::cdefinition.ComparisonValue
Write: cnmfloatcomparisonnode::cdefinition.ComparisonValue = value
```
## Parent (Read-Only)
```lua
@type CNmBoolValueNode::CDefinition
Read: cnmfloatcomparisonnode::cdefinition.Parent
```
# Functions
## ToPtr
```lua
@returns string
cnmfloatcomparisonnode::cdefinition:ToPtr()
```
## IsValid
```lua
@returns bool
cnmfloatcomparisonnode::cdefinition:IsValid()
```

:::