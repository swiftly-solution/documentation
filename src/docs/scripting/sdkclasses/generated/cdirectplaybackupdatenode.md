---
title: CDirectPlaybackUpdateNode
index: true
order: 2
category:
  - Guide
---

# CDirectPlaybackUpdateNode

::: tabs
@tab Lua
# Constructor
```lua
CDirectPlaybackUpdateNode(ptr)
```
# Properties
## FinishEarly 
```lua
--- @type boolean
Read: cdirectplaybackupdatenode.FinishEarly
Write: cdirectplaybackupdatenode.FinishEarly = value
```
## ResetOnFinish 
```lua
--- @type boolean
Read: cdirectplaybackupdatenode.ResetOnFinish
Write: cdirectplaybackupdatenode.ResetOnFinish = value
```
## AllTags (Read-Only)
```lua
--- @type table
Read: cdirectplaybackupdatenode.AllTags
```
## Parent (Read-Only)
```lua
--- @type CUnaryUpdateNode
Read: cdirectplaybackupdatenode.Parent
```
# Functions
## ToPtr
```lua
@returns string
cdirectplaybackupdatenode:ToPtr()
```
## IsValid
```lua
@returns bool
cdirectplaybackupdatenode:IsValid()
```

:::