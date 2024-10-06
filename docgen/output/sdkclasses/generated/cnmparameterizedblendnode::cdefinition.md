---
title: CNmParameterizedBlendNode::CDefinition
index: true
order: 2
category:
  - Guide
---

# CNmParameterizedBlendNode::CDefinition

::: tabs
@tab Lua
# Constructor
```lua
CNmParameterizedBlendNode::CDefinition(ptr --[[ string ]])
```
# Properties
## InputParameterValueNodeIdx 
```lua
@type number
Read: cnmparameterizedblendnode::cdefinition.InputParameterValueNodeIdx
Write: cnmparameterizedblendnode::cdefinition.InputParameterValueNodeIdx = value
```
## AllowLooping 
```lua
@type boolean
Read: cnmparameterizedblendnode::cdefinition.AllowLooping
Write: cnmparameterizedblendnode::cdefinition.AllowLooping = value
```
## Parent (Read-Only)
```lua
@type CNmPoseNode::CDefinition
Read: cnmparameterizedblendnode::cdefinition.Parent
```
# Functions
## ToPtr
```lua
@returns string
cnmparameterizedblendnode::cdefinition:ToPtr()
```
## IsValid
```lua
@returns bool
cnmparameterizedblendnode::cdefinition:IsValid()
```

:::