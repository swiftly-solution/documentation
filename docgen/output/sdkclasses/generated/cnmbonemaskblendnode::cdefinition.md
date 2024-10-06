---
title: CNmBoneMaskBlendNode::CDefinition
index: true
order: 2
category:
  - Guide
---

# CNmBoneMaskBlendNode::CDefinition

::: tabs
@tab Lua
# Constructor
```lua
CNmBoneMaskBlendNode::CDefinition(ptr --[[ string ]])
```
# Properties
## SourceMaskNodeIdx 
```lua
@type number
Read: cnmbonemaskblendnode::cdefinition.SourceMaskNodeIdx
Write: cnmbonemaskblendnode::cdefinition.SourceMaskNodeIdx = value
```
## TargetMaskNodeIdx 
```lua
@type number
Read: cnmbonemaskblendnode::cdefinition.TargetMaskNodeIdx
Write: cnmbonemaskblendnode::cdefinition.TargetMaskNodeIdx = value
```
## BlendWeightValueNodeIdx 
```lua
@type number
Read: cnmbonemaskblendnode::cdefinition.BlendWeightValueNodeIdx
Write: cnmbonemaskblendnode::cdefinition.BlendWeightValueNodeIdx = value
```
## Parent (Read-Only)
```lua
@type CNmBoneMaskValueNode::CDefinition
Read: cnmbonemaskblendnode::cdefinition.Parent
```
# Functions
## ToPtr
```lua
@returns string
cnmbonemaskblendnode::cdefinition:ToPtr()
```
## IsValid
```lua
@returns bool
cnmbonemaskblendnode::cdefinition:IsValid()
```

:::