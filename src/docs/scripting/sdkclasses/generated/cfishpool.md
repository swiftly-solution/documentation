---
title: CFishPool
index: true
order: 2
category:
  - Guide
---

# CFishPool

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
CFishPool(ptr)
```
# Properties
## FishCount 
```lua
--- @type number
Read: cfishpool.FishCount
Write: cfishpool.FishCount = value
```
## MaxRange 
```lua
--- @type number
Read: cfishpool.MaxRange
Write: cfishpool.MaxRange = value
```
## SwimDepth 
```lua
--- @type number
Read: cfishpool.SwimDepth
Write: cfishpool.SwimDepth = value
```
## WaterLevel 
```lua
--- @type number
Read: cfishpool.WaterLevel
Write: cfishpool.WaterLevel = value
```
## IsDormant 
```lua
--- @type boolean
Read: cfishpool.IsDormant
Write: cfishpool.IsDormant = value
```
## VisTimer (Read-Only)
```lua
--- @type CountdownTimer
Read: cfishpool.VisTimer
```
## Parent (Read-Only)
```lua
--- @type CBaseEntity
Read: cfishpool.Parent
```
# Functions
## ToPtr
```lua
--- @return string
cfishpool:ToPtr()
```
## IsValid
```lua
--- @return bool
cfishpool:IsValid()
```

:::