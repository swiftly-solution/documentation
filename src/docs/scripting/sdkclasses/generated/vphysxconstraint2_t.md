---
title: VPhysXConstraint2_t
index: true
order: 2
category:
  - Guide
---

# VPhysXConstraint2_t

::: tabs
@tab Lua
# Constructor
```lua
VPhysXConstraint2_t(ptr --[[ string ]])
```
# Properties
## Flags 
```lua
@type number
Read: vphysxconstraint2_t.Flags
Write: vphysxconstraint2_t.Flags = value
```
## Parent 
```lua
@type number
Read: vphysxconstraint2_t.Parent
Write: vphysxconstraint2_t.Parent = value
```
## Child 
```lua
@type number
Read: vphysxconstraint2_t.Child
Write: vphysxconstraint2_t.Child = value
```
## Params 
```lua
@type VPhysXConstraintParams_t
Read: vphysxconstraint2_t.Params
Write: vphysxconstraint2_t.Params = value
```
# Functions
## ToPtr
```lua
@returns string
vphysxconstraint2_t:ToPtr()
```
## IsValid
```lua
@returns bool
vphysxconstraint2_t:IsValid()
```

:::