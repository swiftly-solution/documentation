---
title: CAnimUpdateNodeBase
index: true
order: 2
category:
  - Guide
---

# CAnimUpdateNodeBase

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
CAnimUpdateNodeBase(ptr)
```
# Properties
## NodePath (Read-Only)
```lua
--- @type CAnimNodePath
Read: canimupdatenodebase.NodePath
```
## NetworkMode 
```lua
--- @type number
Read: canimupdatenodebase.NetworkMode
Write: canimupdatenodebase.NetworkMode = value
```
## Name 
```lua
--- @type string
Read: canimupdatenodebase.Name
Write: canimupdatenodebase.Name = value
```
# Functions
## ToPtr
```lua
--- @return string
canimupdatenodebase:ToPtr()
```
## IsValid
```lua
--- @return bool
canimupdatenodebase:IsValid()
```

:::