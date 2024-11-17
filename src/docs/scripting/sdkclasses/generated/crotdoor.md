---
title: CRotDoor
index: true
order: 2
category:
  - Guide
---

# CRotDoor

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
CRotDoor(ptr)
```
# Properties
## SolidBsp 
```lua
--- @type boolean
Read: crotdoor.SolidBsp
Write: crotdoor.SolidBsp = value
```
## Parent (Read-Only)
```lua
--- @type CBaseDoor
Read: crotdoor.Parent
```
# Functions
## ToPtr
```lua
--- @return string
crotdoor:ToPtr()
```
## IsValid
```lua
--- @return bool
crotdoor:IsValid()
```

:::