---
title: CTriggerBuoyancy
index: true
order: 2
category:
  - Guide
---

# CTriggerBuoyancy

::: tabs
@tab Lua
# Constructor
```lua
CTriggerBuoyancy(ptr --[[ string ]])
```
# Properties
## BuoyancyHelper (Read-Only)
```lua
@type CBuoyancyHelper
Read: ctriggerbuoyancy.BuoyancyHelper
```
## FluidDensity 
```lua
@type number
Read: ctriggerbuoyancy.FluidDensity
Write: ctriggerbuoyancy.FluidDensity = value
```
## Parent (Read-Only)
```lua
@type CBaseTrigger
Read: ctriggerbuoyancy.Parent
```
# Functions
## ToPtr
```lua
@returns string
ctriggerbuoyancy:ToPtr()
```
## IsValid
```lua
@returns bool
ctriggerbuoyancy:IsValid()
```

:::