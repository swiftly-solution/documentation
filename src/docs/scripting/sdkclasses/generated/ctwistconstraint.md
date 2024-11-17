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
--- @param ptr string
CTwistConstraint(ptr)
```
# Properties
## Inverse 
```lua
--- @type boolean
Read: ctwistconstraint.Inverse
Write: ctwistconstraint.Inverse = value
```
## Parent (Read-Only)
```lua
--- @type CBaseConstraint
Read: ctwistconstraint.Parent
```
# Functions
## ToPtr
```lua
--- @return string
ctwistconstraint:ToPtr()
```
## IsValid
```lua
--- @return bool
ctwistconstraint:IsValid()
```

:::