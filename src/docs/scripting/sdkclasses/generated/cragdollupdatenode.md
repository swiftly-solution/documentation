---
title: CRagdollUpdateNode
index: true
order: 2
category:
  - Guide
---

# CRagdollUpdateNode

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
CRagdollUpdateNode(ptr)
```
# Properties
## WeightListIndex 
```lua
--- @type number
Read: cragdollupdatenode.WeightListIndex
Write: cragdollupdatenode.WeightListIndex = value
```
## PoseControlMethod 
```lua
--- @type number
Read: cragdollupdatenode.PoseControlMethod
Write: cragdollupdatenode.PoseControlMethod = value
```
## Parent (Read-Only)
```lua
--- @type CUnaryUpdateNode
Read: cragdollupdatenode.Parent
```
# Functions
## ToPtr
```lua
--- @return string
cragdollupdatenode:ToPtr()
```
## IsValid
```lua
--- @return bool
cragdollupdatenode:IsValid()
```

:::