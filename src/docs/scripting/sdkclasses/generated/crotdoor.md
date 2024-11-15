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
@returns string
crotdoor:ToPtr()
```
## IsValid
```lua
@returns bool
crotdoor:IsValid()
```

:::