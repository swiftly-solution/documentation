---
title: CPhysFixed
index: true
order: 2
category:
  - Guide
---

# CPhysFixed

::: tabs
@tab Lua
# Constructor
```lua
CPhysFixed(ptr)
```
# Properties
## LinearFrequency 
```lua
--- @type number
Read: cphysfixed.LinearFrequency
Write: cphysfixed.LinearFrequency = value
```
## LinearDampingRatio 
```lua
--- @type number
Read: cphysfixed.LinearDampingRatio
Write: cphysfixed.LinearDampingRatio = value
```
## AngularFrequency 
```lua
--- @type number
Read: cphysfixed.AngularFrequency
Write: cphysfixed.AngularFrequency = value
```
## AngularDampingRatio 
```lua
--- @type number
Read: cphysfixed.AngularDampingRatio
Write: cphysfixed.AngularDampingRatio = value
```
## EnableLinearConstraint 
```lua
--- @type boolean
Read: cphysfixed.EnableLinearConstraint
Write: cphysfixed.EnableLinearConstraint = value
```
## EnableAngularConstraint 
```lua
--- @type boolean
Read: cphysfixed.EnableAngularConstraint
Write: cphysfixed.EnableAngularConstraint = value
```
## Parent (Read-Only)
```lua
--- @type CPhysConstraint
Read: cphysfixed.Parent
```
# Functions
## ToPtr
```lua
@returns string
cphysfixed:ToPtr()
```
## IsValid
```lua
@returns bool
cphysfixed:IsValid()
```

:::