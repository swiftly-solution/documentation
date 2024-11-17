---
title: CFuncWall
index: true
order: 2
category:
  - Guide
---

# CFuncWall

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
CFuncWall(ptr)
```
# Properties
## State 
```lua
--- @type number
Read: cfuncwall.State
Write: cfuncwall.State = value
```
## Parent (Read-Only)
```lua
--- @type CBaseModelEntity
Read: cfuncwall.Parent
```
# Functions
## ToPtr
```lua
--- @return string
cfuncwall:ToPtr()
```
## IsValid
```lua
--- @return bool
cfuncwall:IsValid()
```

:::