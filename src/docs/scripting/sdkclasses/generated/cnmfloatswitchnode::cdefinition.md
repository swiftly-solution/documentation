---
title: CNmFloatSwitchNode::CDefinition
index: true
order: 2
category:
  - Guide
---

# CNmFloatSwitchNode::CDefinition

::: tabs
@tab Lua
# Constructor
```lua
CNmFloatSwitchNode::CDefinition(ptr --[[ string ]])
```
# Properties
## SwitchValueNodeIdx 
```lua
@type number
Read: cnmfloatswitchnode::cdefinition.SwitchValueNodeIdx
Write: cnmfloatswitchnode::cdefinition.SwitchValueNodeIdx = value
```
## TrueValueNodeIdx 
```lua
@type number
Read: cnmfloatswitchnode::cdefinition.TrueValueNodeIdx
Write: cnmfloatswitchnode::cdefinition.TrueValueNodeIdx = value
```
## FalseValueNodeIdx 
```lua
@type number
Read: cnmfloatswitchnode::cdefinition.FalseValueNodeIdx
Write: cnmfloatswitchnode::cdefinition.FalseValueNodeIdx = value
```
## Parent (Read-Only)
```lua
@type CNmFloatValueNode::CDefinition
Read: cnmfloatswitchnode::cdefinition.Parent
```
# Functions
## ToPtr
```lua
@returns string
cnmfloatswitchnode::cdefinition:ToPtr()
```
## IsValid
```lua
@returns bool
cnmfloatswitchnode::cdefinition:IsValid()
```

:::