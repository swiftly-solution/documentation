---
title: CSplineConstraint
index: true
order: 2
category:
  - Guide
---

# CSplineConstraint

::: tabs
@tab Lua
# Constructor
```lua
CSplineConstraint(ptr --[[ string ]])
```
# Properties
## AnchorOffsetRestore 
```lua
@type Vector
Read: csplineconstraint.AnchorOffsetRestore
Write: csplineconstraint.AnchorOffsetRestore = value
```
## Parent 
```lua
@type CPhysConstraint
Read: csplineconstraint.Parent
Write: csplineconstraint.Parent = value
```
# Functions
## ToPtr
```lua
@returns string
csplineconstraint:ToPtr()
```
## IsValid
```lua
@returns bool
csplineconstraint:IsValid()
```

:::