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
CDirectPlaybackUpdateNode(ptr --[[ string ]])
```
# Properties
## FinishEarly 
```lua
@type boolean
Read: cdirectplaybackupdatenode.FinishEarly
Write: cdirectplaybackupdatenode.FinishEarly = value
```
## ResetOnFinish 
```lua
@type boolean
Read: cdirectplaybackupdatenode.ResetOnFinish
Write: cdirectplaybackupdatenode.ResetOnFinish = value
```
## AllTags 
```lua
@type table
Read: cdirectplaybackupdatenode.AllTags
Write: cdirectplaybackupdatenode.AllTags = value
```
## Parent 
```lua
@type CUnaryUpdateNode
Read: cdirectplaybackupdatenode.Parent
Write: cdirectplaybackupdatenode.Parent = value
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