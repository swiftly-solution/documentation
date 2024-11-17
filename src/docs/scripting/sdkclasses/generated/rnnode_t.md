---
title: RnNode_t
index: true
order: 2
category:
  - Guide
---

# RnNode_t

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
RnNode_t(ptr)
```
# Properties
## Min 
```lua
--- @type Vector
Read: rnnode_t.Min
Write: rnnode_t.Min = value
```
## Children 
```lua
--- @type number
Read: rnnode_t.Children
Write: rnnode_t.Children = value
```
## Max 
```lua
--- @type Vector
Read: rnnode_t.Max
Write: rnnode_t.Max = value
```
## TriangleOffset 
```lua
--- @type number
Read: rnnode_t.TriangleOffset
Write: rnnode_t.TriangleOffset = value
```
# Functions
## ToPtr
```lua
--- @return string
rnnode_t:ToPtr()
```
## IsValid
```lua
--- @return bool
rnnode_t:IsValid()
```

:::