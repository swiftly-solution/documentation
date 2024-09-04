---
title: CItemDefuser
index: true
order: 2
category:
  - Guide
---

# CItemDefuser

::: tabs
@tab Lua
# Constructor
```lua
CItemDefuser(ptr --[[ string ]])
```
# Properties
## EntitySpottedState (Read-Only)
```lua
@type EntitySpottedState_t
Read: citemdefuser.EntitySpottedState
```
## SpotRules 
```lua
@type number
Read: citemdefuser.SpotRules
Write: citemdefuser.SpotRules = value
```
## Parent (Read-Only)
```lua
@type CItem
Read: citemdefuser.Parent
```
# Functions
## ToPtr
```lua
@returns string
citemdefuser:ToPtr()
```
## IsValid
```lua
@returns bool
citemdefuser:IsValid()
```

:::