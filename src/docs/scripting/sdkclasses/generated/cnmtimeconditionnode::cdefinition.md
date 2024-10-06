---
title: CNmTimeConditionNode::CDefinition
index: true
order: 2
category:
  - Guide
---

# CNmTimeConditionNode::CDefinition

::: tabs
@tab Lua
# Constructor
```lua
CNmTimeConditionNode::CDefinition(ptr --[[ string ]])
```
# Properties
## SourceStateNodeIdx 
```lua
@type number
Read: cnmtimeconditionnode::cdefinition.SourceStateNodeIdx
Write: cnmtimeconditionnode::cdefinition.SourceStateNodeIdx = value
```
## InputValueNodeIdx 
```lua
@type number
Read: cnmtimeconditionnode::cdefinition.InputValueNodeIdx
Write: cnmtimeconditionnode::cdefinition.InputValueNodeIdx = value
```
## Comparand 
```lua
@type number
Read: cnmtimeconditionnode::cdefinition.Comparand
Write: cnmtimeconditionnode::cdefinition.Comparand = value
```
## Type 
```lua
@type number
Read: cnmtimeconditionnode::cdefinition.Type
Write: cnmtimeconditionnode::cdefinition.Type = value
```
## Operator 
```lua
@type number
Read: cnmtimeconditionnode::cdefinition.Operator
Write: cnmtimeconditionnode::cdefinition.Operator = value
```
## Parent (Read-Only)
```lua
@type CNmBoolValueNode::CDefinition
Read: cnmtimeconditionnode::cdefinition.Parent
```
# Functions
## ToPtr
```lua
@returns string
cnmtimeconditionnode::cdefinition:ToPtr()
```
## IsValid
```lua
@returns bool
cnmtimeconditionnode::cdefinition:IsValid()
```

:::