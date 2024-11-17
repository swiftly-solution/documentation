---
title: CAnimNodePath
index: true
order: 2
category:
  - Guide
---

# CAnimNodePath

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
CAnimNodePath(ptr)
```
# Properties
## Path (Read-Only)
```lua
--- @type table
Read: canimnodepath.Path
```
## Count 
```lua
--- @type number
Read: canimnodepath.Count
Write: canimnodepath.Count = value
```
# Functions
## ToPtr
```lua
--- @return string
canimnodepath:ToPtr()
```
## IsValid
```lua
--- @return bool
canimnodepath:IsValid()
```

:::