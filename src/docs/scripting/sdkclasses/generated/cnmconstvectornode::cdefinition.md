---
title: CNmConstVectorNode::CDefinition
index: true
order: 2
category:
  - Guide
---

# CNmConstVectorNode::CDefinition

::: tabs
@tab Lua
# Constructor
```lua
CNmConstVectorNode::CDefinition(ptr --[[ string ]])
```
# Properties
## Value 
```lua
@type Vector
Read: cnmconstvectornode::cdefinition.Value
Write: cnmconstvectornode::cdefinition.Value = value
```
## Parent (Read-Only)
```lua
@type CNmVectorValueNode::CDefinition
Read: cnmconstvectornode::cdefinition.Parent
```
# Functions
## ToPtr
```lua
@returns string
cnmconstvectornode::cdefinition:ToPtr()
```
## IsValid
```lua
@returns bool
cnmconstvectornode::cdefinition:IsValid()
```

:::