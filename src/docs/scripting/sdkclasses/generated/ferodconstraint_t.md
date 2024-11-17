---
title: FeRodConstraint_t
index: true
order: 2
category:
  - Guide
---

# FeRodConstraint_t

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
FeRodConstraint_t(ptr)
```
# Properties
## Node 
```lua
--- @type table
Read: ferodconstraint_t.Node
Write: ferodconstraint_t.Node = value
```
## MaxDist 
```lua
--- @type number
Read: ferodconstraint_t.MaxDist
Write: ferodconstraint_t.MaxDist = value
```
## MinDist 
```lua
--- @type number
Read: ferodconstraint_t.MinDist
Write: ferodconstraint_t.MinDist = value
```
## Weight0 
```lua
--- @type number
Read: ferodconstraint_t.Weight0
Write: ferodconstraint_t.Weight0 = value
```
## RelaxationFactor 
```lua
--- @type number
Read: ferodconstraint_t.RelaxationFactor
Write: ferodconstraint_t.RelaxationFactor = value
```
# Functions
## ToPtr
```lua
--- @return string
ferodconstraint_t:ToPtr()
```
## IsValid
```lua
--- @return bool
ferodconstraint_t:IsValid()
```

:::