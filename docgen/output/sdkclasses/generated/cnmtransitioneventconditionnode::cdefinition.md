---
title: CNmTransitionEventConditionNode::CDefinition
index: true
order: 2
category:
  - Guide
---

# CNmTransitionEventConditionNode::CDefinition

::: tabs
@tab Lua
# Constructor
```lua
CNmTransitionEventConditionNode::CDefinition(ptr --[[ string ]])
```
# Properties
## EventConditionRules (Read-Only)
```lua
@type CNmBitFlags
Read: cnmtransitioneventconditionnode::cdefinition.EventConditionRules
```
## SourceStateNodeIdx 
```lua
@type number
Read: cnmtransitioneventconditionnode::cdefinition.SourceStateNodeIdx
Write: cnmtransitioneventconditionnode::cdefinition.SourceStateNodeIdx = value
```
## RuleCondition 
```lua
@type number
Read: cnmtransitioneventconditionnode::cdefinition.RuleCondition
Write: cnmtransitioneventconditionnode::cdefinition.RuleCondition = value
```
## Parent (Read-Only)
```lua
@type CNmBoolValueNode::CDefinition
Read: cnmtransitioneventconditionnode::cdefinition.Parent
```
# Functions
## ToPtr
```lua
@returns string
cnmtransitioneventconditionnode::cdefinition:ToPtr()
```
## IsValid
```lua
@returns bool
cnmtransitioneventconditionnode::cdefinition:IsValid()
```

:::