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
CRegionSVM(ptr --[[ string ]])
```
# Properties
## Planes 
```lua
@type table
Read: cregionsvm.Planes
Write: cregionsvm.Planes = value
```
## Nodes 
```lua
@type table
Read: cregionsvm.Nodes
Write: cregionsvm.Nodes = value
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