---
title: EntitySpottedState_t
index: true
order: 2
category:
  - Guide
---

# EntitySpottedState_t

::: tabs
@tab Lua
# Constructor
```lua
EntitySpottedState_t(ptr --[[ string ]])
```
# Properties
## Spotted 
```lua
@type boolean
Read: entityspottedstate_t.Spotted
Write: entityspottedstate_t.Spotted = value
```
## SpottedByMask 
```lua
@type table
Read: entityspottedstate_t.SpottedByMask
Write: entityspottedstate_t.SpottedByMask = value
```
# Functions
## ToPtr
```lua
@returns string
entityspottedstate_t:ToPtr()
```
## IsValid
```lua
@returns bool
entityspottedstate_t:IsValid()
```

:::