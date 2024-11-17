---
title: constraint_hingeparams_t
index: true
order: 2
category:
  - Guide
---

# constraint_hingeparams_t

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
constraint_hingeparams_t(ptr)
```
# Properties
## WorldPosition 
```lua
--- @type Vector
Read: constraint_hingeparams_t.WorldPosition
Write: constraint_hingeparams_t.WorldPosition = value
```
## WorldAxisDirection 
```lua
--- @type Vector
Read: constraint_hingeparams_t.WorldAxisDirection
Write: constraint_hingeparams_t.WorldAxisDirection = value
```
## HingeAxis (Read-Only)
```lua
--- @type constraint_axislimit_t
Read: constraint_hingeparams_t.HingeAxis
```
## Constraint (Read-Only)
```lua
--- @type constraint_breakableparams_t
Read: constraint_hingeparams_t.Constraint
```
# Functions
## ToPtr
```lua
--- @return string
constraint_hingeparams_t:ToPtr()
```
## IsValid
```lua
--- @return bool
constraint_hingeparams_t:IsValid()
```

:::