---
title: CSelectorUpdateNode
index: true
order: 2
category:
  - Guide
---

# CSelectorUpdateNode

::: tabs
@tab Lua
# Constructor
```lua
CSelectorUpdateNode(ptr --[[ string ]])
```
# Properties
## Children 
```lua
@type table
Read: cselectorupdatenode.Children
Write: cselectorupdatenode.Children = value
```
## Tags 
```lua
@type table
Read: cselectorupdatenode.Tags
Write: cselectorupdatenode.Tags = value
```
## BlendCurve (Read-Only)
```lua
@type CBlendCurve
Read: cselectorupdatenode.BlendCurve
```
## Parameter (Read-Only)
```lua
@type CAnimParamHandle
Read: cselectorupdatenode.Parameter
```
## TagIndex 
```lua
@type number
Read: cselectorupdatenode.TagIndex
Write: cselectorupdatenode.TagIndex = value
```
## TagBehavior 
```lua
@type number
Read: cselectorupdatenode.TagBehavior
Write: cselectorupdatenode.TagBehavior = value
```
## ResetOnChange 
```lua
@type boolean
Read: cselectorupdatenode.ResetOnChange
Write: cselectorupdatenode.ResetOnChange = value
```
## LockWhenWaning 
```lua
@type boolean
Read: cselectorupdatenode.LockWhenWaning
Write: cselectorupdatenode.LockWhenWaning = value
```
## SyncCyclesOnChange 
```lua
@type boolean
Read: cselectorupdatenode.SyncCyclesOnChange
Write: cselectorupdatenode.SyncCyclesOnChange = value
```
## Parent 
```lua
@type CAnimUpdateNodeBase
Read: cselectorupdatenode.Parent
Write: cselectorupdatenode.Parent = value
```
# Functions
## ToPtr
```lua
@returns string
cselectorupdatenode:ToPtr()
```
## IsValid
```lua
@returns bool
cselectorupdatenode:IsValid()
```

:::