---
title: CNmIDComparisonNode::CDefinition
index: true
order: 2
category:
  - Guide
---

# CNmIDComparisonNode::CDefinition

::: tabs
@tab Lua
# Constructor
```lua
CNmIDComparisonNode::CDefinition(ptr --[[ string ]])
```
# Properties
## InputValueNodeIdx 
```lua
@type number
Read: cnmidcomparisonnode::cdefinition.InputValueNodeIdx
Write: cnmidcomparisonnode::cdefinition.InputValueNodeIdx = value
```
## Comparison 
```lua
@type number
Read: cnmidcomparisonnode::cdefinition.Comparison
Write: cnmidcomparisonnode::cdefinition.Comparison = value
```
## Parent (Read-Only)
```lua
@type CNmBoolValueNode::CDefinition
Read: cnmidcomparisonnode::cdefinition.Parent
```
# Functions
## ToPtr
```lua
@returns string
cnmidcomparisonnode::cdefinition:ToPtr()
```
## IsValid
```lua
@returns bool
cnmidcomparisonnode::cdefinition:IsValid()
```

:::