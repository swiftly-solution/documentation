---
title: CNmStateNode::CDefinition
index: true
order: 2
category:
  - Guide
---

# CNmStateNode::CDefinition

::: tabs
@tab Lua
# Constructor
```lua
CNmStateNode::CDefinition(ptr --[[ string ]])
```
# Properties
## ChildNodeIdx 
```lua
@type number
Read: cnmstatenode::cdefinition.ChildNodeIdx
Write: cnmstatenode::cdefinition.ChildNodeIdx = value
```
## LayerWeightNodeIdx 
```lua
@type number
Read: cnmstatenode::cdefinition.LayerWeightNodeIdx
Write: cnmstatenode::cdefinition.LayerWeightNodeIdx = value
```
## LayerRootMotionWeightNodeIdx 
```lua
@type number
Read: cnmstatenode::cdefinition.LayerRootMotionWeightNodeIdx
Write: cnmstatenode::cdefinition.LayerRootMotionWeightNodeIdx = value
```
## LayerBoneMaskNodeIdx 
```lua
@type number
Read: cnmstatenode::cdefinition.LayerBoneMaskNodeIdx
Write: cnmstatenode::cdefinition.LayerBoneMaskNodeIdx = value
```
## IsOffState 
```lua
@type boolean
Read: cnmstatenode::cdefinition.IsOffState
Write: cnmstatenode::cdefinition.IsOffState = value
```
## Parent (Read-Only)
```lua
@type CNmPoseNode::CDefinition
Read: cnmstatenode::cdefinition.Parent
```
# Functions
## ToPtr
```lua
@returns string
cnmstatenode::cdefinition:ToPtr()
```
## IsValid
```lua
@returns bool
cnmstatenode::cdefinition:IsValid()
```

:::