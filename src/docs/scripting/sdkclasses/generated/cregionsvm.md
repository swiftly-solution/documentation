---
title: CRegionSVM
index: true
order: 2
category:
  - Guide
---

# CRegionSVM

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
CRegionSVM(ptr)
```
# Properties
## Planes (Read-Only)
```lua
--- @type table
Read: cregionsvm.Planes
```
## Nodes (Read-Only)
```lua
--- @type table
Read: cregionsvm.Nodes
```
# Functions
## ToPtr
```lua
--- @return string
cregionsvm:ToPtr()
```
## IsValid
```lua
--- @return bool
cregionsvm:IsValid()
```

:::