---
title: CFireSmoke
index: true
order: 2
category:
  - Guide
---

# CFireSmoke

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
CFireSmoke(ptr)
```
# Properties
## FlameModelIndex 
```lua
--- @type number
Read: cfiresmoke.FlameModelIndex
Write: cfiresmoke.FlameModelIndex = value
```
## FlameFromAboveModelIndex 
```lua
--- @type number
Read: cfiresmoke.FlameFromAboveModelIndex
Write: cfiresmoke.FlameFromAboveModelIndex = value
```
## Parent (Read-Only)
```lua
--- @type CBaseFire
Read: cfiresmoke.Parent
```
# Functions
## ToPtr
```lua
--- @return string
cfiresmoke:ToPtr()
```
## IsValid
```lua
--- @return bool
cfiresmoke:IsValid()
```

:::