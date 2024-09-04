---
title: CBaseConstraint
index: true
order: 2
category:
  - Guide
---

# CBaseConstraint

::: tabs
@tab Lua
# Constructor
```lua
CBaseConstraint(ptr --[[ string ]])
```
# Properties
## Name 
```lua
@type string
Read: cbaseconstraint.Name
Write: cbaseconstraint.Name = value
```
## UpVector 
```lua
@type Vector
Read: cbaseconstraint.UpVector
Write: cbaseconstraint.UpVector = value
```
## Slaves (Read-Only)
```lua
@type table
Read: cbaseconstraint.Slaves
```
## Targets (Read-Only)
```lua
@type table
Read: cbaseconstraint.Targets
```
## Parent (Read-Only)
```lua
@type CBoneConstraintBase
Read: cbaseconstraint.Parent
```
# Functions
## ToPtr
```lua
@returns string
cbaseconstraint:ToPtr()
```
## IsValid
```lua
@returns bool
cbaseconstraint:IsValid()
```

:::