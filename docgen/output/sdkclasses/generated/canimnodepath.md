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
CAnimNodePath(ptr --[[ string ]])
```
# Properties
## Path 
```lua
@type table
Read: canimnodepath.Path
Write: canimnodepath.Path = value
```
## Count 
```lua
@type number
Read: canimnodepath.Count
Write: canimnodepath.Count = value
```
# Functions
## ToPtr
```lua
@returns string
canimnodepath:ToPtr()
```
## IsValid
```lua
@returns bool
canimnodepath:IsValid()
```

:::