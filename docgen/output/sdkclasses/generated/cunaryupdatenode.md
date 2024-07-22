---
title: CUnaryUpdateNode
index: true
order: 2
category:
  - Guide
---

# CUnaryUpdateNode

::: tabs
@tab Lua
# Constructor
```lua
CUnaryUpdateNode(ptr --[[ string ]])
```
# Properties
## ChildNode (Read-Only)
```lua
@type CAnimUpdateNodeRef
Read: cunaryupdatenode.ChildNode
```
## Parent 
```lua
@type CAnimUpdateNodeBase
Read: cunaryupdatenode.Parent
Write: cunaryupdatenode.Parent = value
```
# Functions
## ToPtr
```lua
@returns string
cunaryupdatenode:ToPtr()
```
## IsValid
```lua
@returns bool
cunaryupdatenode:IsValid()
```

:::