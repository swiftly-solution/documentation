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
--- @param ptr string
CTriggerBuoyancy(ptr)
```
# Properties
## BuoyancyHelper (Read-Only)
```lua
--- @type CBuoyancyHelper
Read: ctriggerbuoyancy.BuoyancyHelper
```
## FluidDensity 
```lua
--- @type number
Read: ctriggerbuoyancy.FluidDensity
Write: ctriggerbuoyancy.FluidDensity = value
```
## Parent (Read-Only)
```lua
--- @type CBaseTrigger
Read: ctriggerbuoyancy.Parent
```
# Functions
## ToPtr
```lua
--- @return string
ctriggerbuoyancy:ToPtr()
```
## IsValid
```lua
--- @return bool
ctriggerbuoyancy:IsValid()
```

:::