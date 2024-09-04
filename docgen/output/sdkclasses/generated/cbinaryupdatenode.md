---
title: CBinaryUpdateNode
index: true
order: 2
category:
  - Guide
---

# CBinaryUpdateNode

::: tabs
@tab Lua
# Constructor
```lua
CBinaryUpdateNode(ptr --[[ string ]])
```
# Properties
## Child1 (Read-Only)
```lua
@type CAnimUpdateNodeRef
Read: cbinaryupdatenode.Child1
```
## Child2 (Read-Only)
```lua
@type CAnimUpdateNodeRef
Read: cbinaryupdatenode.Child2
```
## TimingBehavior 
```lua
@type number
Read: cbinaryupdatenode.TimingBehavior
Write: cbinaryupdatenode.TimingBehavior = value
```
## TimingBlend 
```lua
@type number
Read: cbinaryupdatenode.TimingBlend
Write: cbinaryupdatenode.TimingBlend = value
```
## ResetChild1 
```lua
@type boolean
Read: cbinaryupdatenode.ResetChild1
Write: cbinaryupdatenode.ResetChild1 = value
```
## ResetChild2 
```lua
@type boolean
Read: cbinaryupdatenode.ResetChild2
Write: cbinaryupdatenode.ResetChild2 = value
```
## Parent (Read-Only)
```lua
@type CAnimUpdateNodeBase
Read: cbinaryupdatenode.Parent
```
# Functions
## ToPtr
```lua
@returns string
cbinaryupdatenode:ToPtr()
```
## IsValid
```lua
@returns bool
cbinaryupdatenode:IsValid()
```

:::