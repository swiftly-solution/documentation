---
title: FeFollowNode_t
index: true
order: 2
category:
  - Guide
---

# FeFollowNode_t

::: tabs
@tab Lua
# Constructor
```lua
FeFollowNode_t(ptr --[[ string ]])
```
# Properties
## ParentNode 
```lua
@type number
Read: fefollownode_t.ParentNode
Write: fefollownode_t.ParentNode = value
```
## ChildNode 
```lua
@type number
Read: fefollownode_t.ChildNode
Write: fefollownode_t.ChildNode = value
```
## Weight 
```lua
@type number
Read: fefollownode_t.Weight
Write: fefollownode_t.Weight = value
```
# Functions
## ToPtr
```lua
@returns string
fefollownode_t:ToPtr()
```
## IsValid
```lua
@returns bool
fefollownode_t:IsValid()
```

:::