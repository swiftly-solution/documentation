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
--- @param ptr string
CBaseDMStart(ptr)
```
# Properties
## Master 
```lua
--- @type string
Read: cbasedmstart.Master
Write: cbasedmstart.Master = value
```
## Parent (Read-Only)
```lua
--- @type CPointEntity
Read: cbasedmstart.Parent
```
# Functions
## ToPtr
```lua
--- @return string
cbasedmstart:ToPtr()
```
## IsValid
```lua
--- @return bool
cbasedmstart:IsValid()
```

:::