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
## BuoyancyHelper 
```lua
@type CBuoyancyHelper
Read: ctriggerbuoyancy.BuoyancyHelper
Write: ctriggerbuoyancy.BuoyancyHelper = value
```
## FluidDensity 
```lua
@type number
Read: ctriggerbuoyancy.FluidDensity
Write: ctriggerbuoyancy.FluidDensity = value
```
## Parent 
```lua
@type CBaseTrigger
Read: ctriggerbuoyancy.Parent
Write: ctriggerbuoyancy.Parent = value
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