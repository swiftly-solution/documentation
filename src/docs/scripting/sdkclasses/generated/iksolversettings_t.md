---
title: IKSolverSettings_t
index: true
order: 2
category:
  - Guide
---

# IKSolverSettings_t

::: tabs
@tab Lua
# Constructor
```lua
IKSolverSettings_t(ptr)
```
# Properties
## SolverType 
```lua
--- @type number
Read: iksolversettings_t.SolverType
Write: iksolversettings_t.SolverType = value
```
## NumIterations 
```lua
--- @type number
Read: iksolversettings_t.NumIterations
Write: iksolversettings_t.NumIterations = value
```
## EndEffectorRotationFixUpMode 
```lua
--- @type number
Read: iksolversettings_t.EndEffectorRotationFixUpMode
Write: iksolversettings_t.EndEffectorRotationFixUpMode = value
```
# Functions
## ToPtr
```lua
@returns string
iksolversettings_t:ToPtr()
```
## IsValid
```lua
@returns bool
iksolversettings_t:IsValid()
```

:::