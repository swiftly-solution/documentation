---
title: constraint_breakableparams_t
index: true
order: 2
category:
  - Guide
---

# constraint_breakableparams_t

::: tabs
@tab Lua
# Constructor
```lua
constraint_breakableparams_t(ptr)
```
# Properties
## Strength 
```lua
--- @type number
Read: constraint_breakableparams_t.Strength
Write: constraint_breakableparams_t.Strength = value
```
## ForceLimit 
```lua
--- @type number
Read: constraint_breakableparams_t.ForceLimit
Write: constraint_breakableparams_t.ForceLimit = value
```
## TorqueLimit 
```lua
--- @type number
Read: constraint_breakableparams_t.TorqueLimit
Write: constraint_breakableparams_t.TorqueLimit = value
```
## BodyMassScale 
```lua
--- @type table
Read: constraint_breakableparams_t.BodyMassScale
Write: constraint_breakableparams_t.BodyMassScale = value
```
## IsActive 
```lua
--- @type boolean
Read: constraint_breakableparams_t.IsActive
Write: constraint_breakableparams_t.IsActive = value
```
# Functions
## ToPtr
```lua
@returns string
constraint_breakableparams_t:ToPtr()
```
## IsValid
```lua
@returns bool
constraint_breakableparams_t:IsValid()
```

:::