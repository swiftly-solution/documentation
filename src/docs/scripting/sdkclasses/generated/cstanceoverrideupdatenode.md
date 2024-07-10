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
CStanceOverrideUpdateNode(ptr --[[ string ]])
```
# Properties
## FootStanceInfo 
```lua
@type table
Read: cstanceoverrideupdatenode.FootStanceInfo
Write: cstanceoverrideupdatenode.FootStanceInfo = value
```
## StanceSourceNode 
```lua
@type CAnimUpdateNodeRef
Read: cstanceoverrideupdatenode.StanceSourceNode
Write: cstanceoverrideupdatenode.StanceSourceNode = value
```
## Parameter 
```lua
@type CAnimParamHandle
Read: cstanceoverrideupdatenode.Parameter
Write: cstanceoverrideupdatenode.Parameter = value
```
## Mode 
```lua
@type number
Read: cstanceoverrideupdatenode.Mode
Write: cstanceoverrideupdatenode.Mode = value
```
## Parent 
```lua
@type CUnaryUpdateNode
Read: cstanceoverrideupdatenode.Parent
Write: cstanceoverrideupdatenode.Parent = value
```
# Functions
## ToPtr
```lua
@returns string
cstanceoverrideupdatenode:ToPtr()
```
## IsValid
```lua
@returns bool
cstanceoverrideupdatenode:IsValid()
```

:::