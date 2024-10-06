---
title: CNmFloatClampNode::CDefinition
index: true
order: 2
category:
  - Guide
---

# CNmFloatClampNode::CDefinition

::: tabs
@tab Lua
# Constructor
```lua
CNmFloatClampNode::CDefinition(ptr --[[ string ]])
```
# Properties
## InputValueNodeIdx 
```lua
@type number
Read: cnmfloatclampnode::cdefinition.InputValueNodeIdx
Write: cnmfloatclampnode::cdefinition.InputValueNodeIdx = value
```
## ClampRange 
```lua
@type Range_t
Read: cnmfloatclampnode::cdefinition.ClampRange
Write: cnmfloatclampnode::cdefinition.ClampRange = value
```
## Parent (Read-Only)
```lua
@type CNmFloatValueNode::CDefinition
Read: cnmfloatclampnode::cdefinition.Parent
```
# Functions
## ToPtr
```lua
@returns string
cnmfloatclampnode::cdefinition:ToPtr()
```
## IsValid
```lua
@returns bool
cnmfloatclampnode::cdefinition:IsValid()
```

:::