---
title: AggregateLODSetup_t
index: true
order: 2
category:
  - Guide
---

# AggregateLODSetup_t

::: tabs
@tab Lua
# Constructor
```lua
AggregateLODSetup_t(ptr --[[ string ]])
```
# Properties
## LODOrigin 
```lua
@type Vector
Read: aggregatelodsetup_t.LODOrigin
Write: aggregatelodsetup_t.LODOrigin = value
```
## MaxObjectScale 
```lua
@type number
Read: aggregatelodsetup_t.MaxObjectScale
Write: aggregatelodsetup_t.MaxObjectScale = value
```
## SwitchDistances 
```lua
@type table
Read: aggregatelodsetup_t.SwitchDistances
Write: aggregatelodsetup_t.SwitchDistances = value
```
# Functions
## ToPtr
```lua
@returns string
aggregatelodsetup_t:ToPtr()
```
## IsValid
```lua
@returns bool
aggregatelodsetup_t:IsValid()
```

:::