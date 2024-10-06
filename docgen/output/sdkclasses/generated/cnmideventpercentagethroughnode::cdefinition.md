---
title: CNmIDEventPercentageThroughNode::CDefinition
index: true
order: 2
category:
  - Guide
---

# CNmIDEventPercentageThroughNode::CDefinition

::: tabs
@tab Lua
# Constructor
```lua
CNmIDEventPercentageThroughNode::CDefinition(ptr --[[ string ]])
```
# Properties
## SourceStateNodeIdx 
```lua
@type number
Read: cnmideventpercentagethroughnode::cdefinition.SourceStateNodeIdx
Write: cnmideventpercentagethroughnode::cdefinition.SourceStateNodeIdx = value
```
## EventConditionRules (Read-Only)
```lua
@type CNmBitFlags
Read: cnmideventpercentagethroughnode::cdefinition.EventConditionRules
```
## Parent (Read-Only)
```lua
@type CNmBoolValueNode::CDefinition
Read: cnmideventpercentagethroughnode::cdefinition.Parent
```
# Functions
## ToPtr
```lua
@returns string
cnmideventpercentagethroughnode::cdefinition:ToPtr()
```
## IsValid
```lua
@returns bool
cnmideventpercentagethroughnode::cdefinition:IsValid()
```

:::