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
## Children (Read-Only)
```lua
@type table
Read: cselectorupdatenode.Children
```
## Tags (Read-Only)
```lua
@type table
Read: cselectorupdatenode.Tags
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
## Parent (Read-Only)
```lua
@type CAnimUpdateNodeBase
Read: cselectorupdatenode.Parent
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