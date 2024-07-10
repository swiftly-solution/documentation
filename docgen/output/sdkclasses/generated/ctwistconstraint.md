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
## Parent 
```lua
@type CBaseConstraint
Read: ctwistconstraint.Parent
Write: ctwistconstraint.Parent = value
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