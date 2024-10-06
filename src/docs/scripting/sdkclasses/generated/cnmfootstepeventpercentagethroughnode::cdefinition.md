---
title: CNmFootstepEventPercentageThroughNode::CDefinition
index: true
order: 2
category:
  - Guide
---

# CNmFootstepEventPercentageThroughNode::CDefinition

::: tabs
@tab Lua
# Constructor
```lua
CNmFootstepEventPercentageThroughNode::CDefinition(ptr --[[ string ]])
```
# Properties
## SourceStateNodeIdx 
```lua
@type number
Read: cnmfootstepeventpercentagethroughnode::cdefinition.SourceStateNodeIdx
Write: cnmfootstepeventpercentagethroughnode::cdefinition.SourceStateNodeIdx = value
```
## PhaseCondition 
```lua
@type number
Read: cnmfootstepeventpercentagethroughnode::cdefinition.PhaseCondition
Write: cnmfootstepeventpercentagethroughnode::cdefinition.PhaseCondition = value
```
## EventConditionRules (Read-Only)
```lua
@type CNmBitFlags
Read: cnmfootstepeventpercentagethroughnode::cdefinition.EventConditionRules
```
## Parent (Read-Only)
```lua
@type CNmFloatValueNode::CDefinition
Read: cnmfootstepeventpercentagethroughnode::cdefinition.Parent
```
# Functions
## ToPtr
```lua
@returns string
cnmfootstepeventpercentagethroughnode::cdefinition:ToPtr()
```
## IsValid
```lua
@returns bool
cnmfootstepeventpercentagethroughnode::cdefinition:IsValid()
```

:::