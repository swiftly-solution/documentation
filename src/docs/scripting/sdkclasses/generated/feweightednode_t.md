---
title: FeWeightedNode_t
index: true
order: 2
category:
  - Guide
---

# FeWeightedNode_t

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
FeWeightedNode_t(ptr)
```
# Properties
## Node 
```lua
--- @type number
Read: feweightednode_t.Node
Write: feweightednode_t.Node = value
```
## Weight 
```lua
--- @type number
Read: feweightednode_t.Weight
Write: feweightednode_t.Weight = value
```
# Functions
## ToPtr
```lua
--- @return string
feweightednode_t:ToPtr()
```
## IsValid
```lua
--- @return bool
feweightednode_t:IsValid()
```

:::