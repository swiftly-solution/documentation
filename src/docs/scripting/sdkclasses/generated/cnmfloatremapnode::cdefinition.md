---
title: CNmFloatRemapNode::CDefinition
index: true
order: 2
category:
  - Guide
---

# CNmFloatRemapNode::CDefinition

::: tabs
@tab Lua
# Constructor
```lua
CNmFloatRemapNode::CDefinition(ptr --[[ string ]])
```
# Properties
## InputValueNodeIdx 
```lua
@type number
Read: cnmfloatremapnode::cdefinition.InputValueNodeIdx
Write: cnmfloatremapnode::cdefinition.InputValueNodeIdx = value
```
## InputRange (Read-Only)
```lua
@type CNmFloatRemapNode::RemapRange_t
Read: cnmfloatremapnode::cdefinition.InputRange
```
## OutputRange (Read-Only)
```lua
@type CNmFloatRemapNode::RemapRange_t
Read: cnmfloatremapnode::cdefinition.OutputRange
```
## Parent (Read-Only)
```lua
@type CNmFloatValueNode::CDefinition
Read: cnmfloatremapnode::cdefinition.Parent
```
# Functions
## ToPtr
```lua
@returns string
cnmfloatremapnode::cdefinition:ToPtr()
```
## IsValid
```lua
@returns bool
cnmfloatremapnode::cdefinition:IsValid()
```

:::