---
title: CTwistConstraint
index: true
order: 2
category:
  - Guide
---

# CTwistConstraint

::: tabs
@tab Lua
# Constructor
```lua
CTwistConstraint(ptr --[[ string ]])
```
# Properties
## Inverse 
```lua
@type boolean
Read: ctwistconstraint.Inverse
Write: ctwistconstraint.Inverse = value
```
## Parent (Read-Only)
```lua
@type CBaseConstraint
Read: ctwistconstraint.Parent
```
# Functions
## ToPtr
```lua
@returns string
ctwistconstraint:ToPtr()
```
## IsValid
```lua
@returns bool
ctwistconstraint:IsValid()
```

:::