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
--- @param ptr string
EntitySpottedState_t(ptr)
```
# Properties
## Spotted 
```lua
--- @type boolean
Read: entityspottedstate_t.Spotted
Write: entityspottedstate_t.Spotted = value
```
## SpottedByMask 
```lua
--- @type table
Read: entityspottedstate_t.SpottedByMask
Write: entityspottedstate_t.SpottedByMask = value
```
# Functions
## ToPtr
```lua
--- @return string
entityspottedstate_t:ToPtr()
```
## IsValid
```lua
--- @return bool
entityspottedstate_t:IsValid()
```

:::