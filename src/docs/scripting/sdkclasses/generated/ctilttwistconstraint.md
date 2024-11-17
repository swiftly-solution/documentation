---
title: CTiltTwistConstraint
index: true
order: 2
category:
  - Guide
---

# CTiltTwistConstraint

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
CTiltTwistConstraint(ptr)
```
# Properties
## TargetAxis 
```lua
--- @type number
Read: ctilttwistconstraint.TargetAxis
Write: ctilttwistconstraint.TargetAxis = value
```
## SlaveAxis 
```lua
--- @type number
Read: ctilttwistconstraint.SlaveAxis
Write: ctilttwistconstraint.SlaveAxis = value
```
## Parent (Read-Only)
```lua
--- @type CBaseConstraint
Read: ctilttwistconstraint.Parent
```
# Functions
## ToPtr
```lua
--- @return string
ctilttwistconstraint:ToPtr()
```
## IsValid
```lua
--- @return bool
ctilttwistconstraint:IsValid()
```

:::