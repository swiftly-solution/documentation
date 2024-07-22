---
title: CFollowAttachmentUpdateNode
index: true
order: 2
category:
  - Guide
---

# CFollowAttachmentUpdateNode

::: tabs
@tab Lua
# Constructor
```lua
CFollowAttachmentUpdateNode(ptr --[[ string ]])
```
# Properties
## OpFixedData (Read-Only)
```lua
@type FollowAttachmentSettings_t
Read: cfollowattachmentupdatenode.OpFixedData
```
## Parent 
```lua
@type CUnaryUpdateNode
Read: cfollowattachmentupdatenode.Parent
Write: cfollowattachmentupdatenode.Parent = value
```
# Functions
## ToPtr
```lua
@returns string
cfollowattachmentupdatenode:ToPtr()
```
## IsValid
```lua
@returns bool
cfollowattachmentupdatenode:IsValid()
```

:::