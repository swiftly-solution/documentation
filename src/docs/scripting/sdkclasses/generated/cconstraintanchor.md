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
--- @param ptr string
CConstraintAnchor(ptr)
```
# Properties
## MassScale 
```lua
--- @type number
Read: cconstraintanchor.MassScale
Write: cconstraintanchor.MassScale = value
```
## Parent (Read-Only)
```lua
--- @type CBaseAnimGraph
Read: cconstraintanchor.Parent
```
# Functions
## ToPtr
```lua
--- @return string
cconstraintanchor:ToPtr()
```
## IsValid
```lua
--- @return bool
cconstraintanchor:IsValid()
```

:::