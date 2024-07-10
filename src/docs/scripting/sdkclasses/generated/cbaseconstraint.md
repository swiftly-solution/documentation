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
## Slaves 
```lua
@type table
Read: cbaseconstraint.Slaves
Write: cbaseconstraint.Slaves = value
```
## Targets 
```lua
@type table
Read: cbaseconstraint.Targets
Write: cbaseconstraint.Targets = value
```
## Parent 
```lua
@type CBoneConstraintBase
Read: cbaseconstraint.Parent
Write: cbaseconstraint.Parent = value
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