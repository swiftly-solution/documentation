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
--- @param ptr string
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
--- @return string
cpathmover:ToPtr()
```
## IsValid
```lua
--- @return bool
cpathmover:IsValid()
```

:::