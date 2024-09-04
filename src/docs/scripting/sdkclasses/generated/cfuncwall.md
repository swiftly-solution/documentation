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
CFuncWall(ptr --[[ string ]])
```
# Properties
## State 
```lua
@type number
Read: cfuncwall.State
Write: cfuncwall.State = value
```
## Parent (Read-Only)
```lua
@type CBaseModelEntity
Read: cfuncwall.Parent
```
# Functions
## ToPtr
```lua
@returns string
cfuncwall:ToPtr()
```
## IsValid
```lua
@returns bool
cfuncwall:IsValid()
```

:::