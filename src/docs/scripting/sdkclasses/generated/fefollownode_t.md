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
--- @param ptr string
FeFollowNode_t(ptr)
```
# Properties
## ParentNode 
```lua
--- @type number
Read: fefollownode_t.ParentNode
Write: fefollownode_t.ParentNode = value
```
## ChildNode 
```lua
--- @type number
Read: fefollownode_t.ChildNode
Write: fefollownode_t.ChildNode = value
```
## Weight 
```lua
--- @type number
Read: fefollownode_t.Weight
Write: fefollownode_t.Weight = value
```
# Functions
## ToPtr
```lua
--- @return string
fefollownode_t:ToPtr()
```
## IsValid
```lua
--- @return bool
fefollownode_t:IsValid()
```

:::