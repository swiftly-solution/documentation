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
## Parent 
```lua
@type CBaseAnimGraph
Read: cconstraintanchor.Parent
Write: cconstraintanchor.Parent = value
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