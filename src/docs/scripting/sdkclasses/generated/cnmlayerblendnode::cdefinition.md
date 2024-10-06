---
title: CNmLayerBlendNode::CDefinition
index: true
order: 2
category:
  - Guide
---

# CNmLayerBlendNode::CDefinition

::: tabs
@tab Lua
# Constructor
```lua
CNmLayerBlendNode::CDefinition(ptr --[[ string ]])
```
# Properties
## BaseNodeIdx 
```lua
@type number
Read: cnmlayerblendnode::cdefinition.BaseNodeIdx
Write: cnmlayerblendnode::cdefinition.BaseNodeIdx = value
```
## OnlySampleBaseRootMotion 
```lua
@type boolean
Read: cnmlayerblendnode::cdefinition.OnlySampleBaseRootMotion
Write: cnmlayerblendnode::cdefinition.OnlySampleBaseRootMotion = value
```
## Parent (Read-Only)
```lua
@type CNmPoseNode::CDefinition
Read: cnmlayerblendnode::cdefinition.Parent
```
# Functions
## ToPtr
```lua
@returns string
cnmlayerblendnode::cdefinition:ToPtr()
```
## IsValid
```lua
@returns bool
cnmlayerblendnode::cdefinition:IsValid()
```

:::