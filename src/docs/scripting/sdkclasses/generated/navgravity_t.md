---
title: NavGravity_t
index: true
order: 2
category:
  - Guide
---

# NavGravity_t

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
NavGravity_t(ptr)
```
# Properties
## Gravity 
```lua
--- @type Vector
Read: navgravity_t.Gravity
Write: navgravity_t.Gravity = value
```
## Default 
```lua
--- @type boolean
Read: navgravity_t.Default
Write: navgravity_t.Default = value
```
# Functions
## ToPtr
```lua
--- @return string
navgravity_t:ToPtr()
```
## IsValid
```lua
--- @return bool
navgravity_t:IsValid()
```

:::