---
title: CPathMover
index: true
order: 2
category:
  - Guide
---

# CPathMover

::: tabs
@tab Lua
# Constructor
```lua
CPathMover(ptr)
```
# Properties
## PathLength 
```lua
--- @type number
Read: cpathmover.PathLength
Write: cpathmover.PathLength = value
```
## ClosedLoop 
```lua
--- @type boolean
Read: cpathmover.ClosedLoop
Write: cpathmover.ClosedLoop = value
```
## Parent (Read-Only)
```lua
--- @type CBaseEntity
Read: cpathmover.Parent
```
# Functions
## ToPtr
```lua
@returns string
cpathmover:ToPtr()
```
## IsValid
```lua
@returns bool
cpathmover:IsValid()
```

:::