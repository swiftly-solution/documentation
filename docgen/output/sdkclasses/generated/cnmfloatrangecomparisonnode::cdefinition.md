---
title: CNmFloatRangeComparisonNode::CDefinition
index: true
order: 2
category:
  - Guide
---

# CNmFloatRangeComparisonNode::CDefinition

::: tabs
@tab Lua
# Constructor
```lua
CNmFloatRangeComparisonNode::CDefinition(ptr --[[ string ]])
```
# Properties
## Range 
```lua
@type Range_t
Read: cnmfloatrangecomparisonnode::cdefinition.Range
Write: cnmfloatrangecomparisonnode::cdefinition.Range = value
```
## InputValueNodeIdx 
```lua
@type number
Read: cnmfloatrangecomparisonnode::cdefinition.InputValueNodeIdx
Write: cnmfloatrangecomparisonnode::cdefinition.InputValueNodeIdx = value
```
## IsInclusiveCheck 
```lua
@type boolean
Read: cnmfloatrangecomparisonnode::cdefinition.IsInclusiveCheck
Write: cnmfloatrangecomparisonnode::cdefinition.IsInclusiveCheck = value
```
## Parent (Read-Only)
```lua
@type CNmBoolValueNode::CDefinition
Read: cnmfloatrangecomparisonnode::cdefinition.Parent
```
# Functions
## ToPtr
```lua
@returns string
cnmfloatrangecomparisonnode::cdefinition:ToPtr()
```
## IsValid
```lua
@returns bool
cnmfloatrangecomparisonnode::cdefinition:IsValid()
```

:::