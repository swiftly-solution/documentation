---
title: CCSPlace
index: true
order: 2
category:
  - Guide
---

# CCSPlace

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
CCSPlace(ptr)
```
# Properties
## Name 
```lua
--- @type string
Read: ccsplace.Name
Write: ccsplace.Name = value
```
## Parent (Read-Only)
```lua
--- @type CServerOnlyModelEntity
Read: ccsplace.Parent
```
# Functions
## ToPtr
```lua
--- @return string
ccsplace:ToPtr()
```
## IsValid
```lua
--- @return bool
ccsplace:IsValid()
```

:::