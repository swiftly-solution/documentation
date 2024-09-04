---
title: CConstraintAnchor
index: true
order: 2
category:
  - Guide
---

# CConstraintAnchor

::: tabs
@tab Lua
# Constructor
```lua
CConstraintAnchor(ptr --[[ string ]])
```
# Properties
## MassScale 
```lua
@type number
Read: cconstraintanchor.MassScale
Write: cconstraintanchor.MassScale = value
```
## Parent (Read-Only)
```lua
@type CBaseAnimGraph
Read: cconstraintanchor.Parent
```
# Functions
## ToPtr
```lua
@returns string
cconstraintanchor:ToPtr()
```
## IsValid
```lua
@returns bool
cconstraintanchor:IsValid()
```

:::