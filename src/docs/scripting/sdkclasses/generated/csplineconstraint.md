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
--- @param ptr string
CSplineConstraint(ptr)
```
# Properties
## AnchorOffsetRestore 
```lua
--- @type Vector
Read: csplineconstraint.AnchorOffsetRestore
Write: csplineconstraint.AnchorOffsetRestore = value
```
## Parent (Read-Only)
```lua
--- @type CPhysConstraint
Read: csplineconstraint.Parent
```
# Functions
## ToPtr
```lua
--- @return string
csplineconstraint:ToPtr()
```
## IsValid
```lua
--- @return bool
csplineconstraint:IsValid()
```

:::