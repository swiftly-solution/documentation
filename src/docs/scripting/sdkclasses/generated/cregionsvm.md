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
@returns string
cregionsvm:ToPtr()
```
## IsValid
```lua
@returns bool
cregionsvm:IsValid()
```

:::