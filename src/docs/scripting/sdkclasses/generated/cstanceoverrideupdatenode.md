---
title: CStanceOverrideUpdateNode
index: true
order: 2
category:
  - Guide
---

# CStanceOverrideUpdateNode

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
CStanceOverrideUpdateNode(ptr)
```
# Properties
## FootStanceInfo (Read-Only)
```lua
--- @type table
Read: cstanceoverrideupdatenode.FootStanceInfo
```
## StanceSourceNode (Read-Only)
```lua
--- @type CAnimUpdateNodeRef
Read: cstanceoverrideupdatenode.StanceSourceNode
```
## Parameter (Read-Only)
```lua
--- @type CAnimParamHandle
Read: cstanceoverrideupdatenode.Parameter
```
## Mode 
```lua
--- @type number
Read: cstanceoverrideupdatenode.Mode
Write: cstanceoverrideupdatenode.Mode = value
```
## Parent (Read-Only)
```lua
--- @type CUnaryUpdateNode
Read: cstanceoverrideupdatenode.Parent
```
# Functions
## ToPtr
```lua
--- @return string
cstanceoverrideupdatenode:ToPtr()
```
## IsValid
```lua
--- @return bool
cstanceoverrideupdatenode:IsValid()
```

:::