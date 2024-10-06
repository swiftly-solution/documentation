---
title: CNmFloatEaseNode::CDefinition
index: true
order: 2
category:
  - Guide
---

# CNmFloatEaseNode::CDefinition

::: tabs
@tab Lua
# Constructor
```lua
CNmFloatEaseNode::CDefinition(ptr --[[ string ]])
```
# Properties
## EaseTime 
```lua
@type number
Read: cnmfloateasenode::cdefinition.EaseTime
Write: cnmfloateasenode::cdefinition.EaseTime = value
```
## StartValue 
```lua
@type number
Read: cnmfloateasenode::cdefinition.StartValue
Write: cnmfloateasenode::cdefinition.StartValue = value
```
## InputValueNodeIdx 
```lua
@type number
Read: cnmfloateasenode::cdefinition.InputValueNodeIdx
Write: cnmfloateasenode::cdefinition.InputValueNodeIdx = value
```
## EasingOp 
```lua
@type number
Read: cnmfloateasenode::cdefinition.EasingOp
Write: cnmfloateasenode::cdefinition.EasingOp = value
```
## UseStartValue 
```lua
@type boolean
Read: cnmfloateasenode::cdefinition.UseStartValue
Write: cnmfloateasenode::cdefinition.UseStartValue = value
```
## Parent (Read-Only)
```lua
@type CNmFloatValueNode::CDefinition
Read: cnmfloateasenode::cdefinition.Parent
```
# Functions
## ToPtr
```lua
@returns string
cnmfloateasenode::cdefinition:ToPtr()
```
## IsValid
```lua
@returns bool
cnmfloateasenode::cdefinition:IsValid()
```

:::