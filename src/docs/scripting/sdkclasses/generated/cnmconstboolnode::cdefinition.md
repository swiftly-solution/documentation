---
title: CNmConstBoolNode::CDefinition
index: true
order: 2
category:
  - Guide
---

# CNmConstBoolNode::CDefinition

::: tabs
@tab Lua
# Constructor
```lua
CNmConstBoolNode::CDefinition(ptr --[[ string ]])
```
# Properties
## Value 
```lua
@type boolean
Read: cnmconstboolnode::cdefinition.Value
Write: cnmconstboolnode::cdefinition.Value = value
```
## Parent (Read-Only)
```lua
@type CNmBoolValueNode::CDefinition
Read: cnmconstboolnode::cdefinition.Parent
```
# Functions
## ToPtr
```lua
@returns string
cnmconstboolnode::cdefinition:ToPtr()
```
## IsValid
```lua
@returns bool
cnmconstboolnode::cdefinition:IsValid()
```

:::