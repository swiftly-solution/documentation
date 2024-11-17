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
--- @param ptr string
AggregateLODSetup_t(ptr)
```
# Properties
## LODOrigin 
```lua
--- @type Vector
Read: aggregatelodsetup_t.LODOrigin
Write: aggregatelodsetup_t.LODOrigin = value
```
## MaxObjectScale 
```lua
--- @type number
Read: aggregatelodsetup_t.MaxObjectScale
Write: aggregatelodsetup_t.MaxObjectScale = value
```
## SwitchDistances (Read-Only)
```lua
--- @type table
Read: aggregatelodsetup_t.SwitchDistances
```
# Functions
## ToPtr
```lua
--- @return string
aggregatelodsetup_t:ToPtr()
```
## IsValid
```lua
--- @return bool
aggregatelodsetup_t:IsValid()
```

:::