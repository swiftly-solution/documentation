---
title: CBodyGroupAnimTag
index: true
order: 2
category:
  - Guide
---

# CBodyGroupAnimTag

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
CBodyGroupAnimTag(ptr)
```
# Properties
## Priority 
```lua
--- @type number
Read: cbodygroupanimtag.Priority
Write: cbodygroupanimtag.Priority = value
```
## BodyGroupSettings (Read-Only)
```lua
--- @type table
Read: cbodygroupanimtag.BodyGroupSettings
```
## Parent (Read-Only)
```lua
--- @type CAnimTagBase
Read: cbodygroupanimtag.Parent
```
# Functions
## ToPtr
```lua
--- @return string
cbodygroupanimtag:ToPtr()
```
## IsValid
```lua
--- @return bool
cbodygroupanimtag:IsValid()
```

:::