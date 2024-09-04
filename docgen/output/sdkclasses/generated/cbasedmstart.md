---
title: CBaseDMStart
index: true
order: 2
category:
  - Guide
---

# CBaseDMStart

::: tabs
@tab Lua
# Constructor
```lua
CBaseDMStart(ptr --[[ string ]])
```
# Properties
## Master 
```lua
@type string
Read: cbasedmstart.Master
Write: cbasedmstart.Master = value
```
## Parent (Read-Only)
```lua
@type CPointEntity
Read: cbasedmstart.Parent
```
# Functions
## ToPtr
```lua
@returns string
cbasedmstart:ToPtr()
```
## IsValid
```lua
@returns bool
cbasedmstart:IsValid()
```

:::