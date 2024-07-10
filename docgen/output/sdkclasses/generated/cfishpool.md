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
CFishPool(ptr --[[ string ]])
```
# Properties
## FishCount 
```lua
@type number
Read: cfishpool.FishCount
Write: cfishpool.FishCount = value
```
## MaxRange 
```lua
@type number
Read: cfishpool.MaxRange
Write: cfishpool.MaxRange = value
```
## SwimDepth 
```lua
@type number
Read: cfishpool.SwimDepth
Write: cfishpool.SwimDepth = value
```
## WaterLevel 
```lua
@type number
Read: cfishpool.WaterLevel
Write: cfishpool.WaterLevel = value
```
## IsDormant 
```lua
@type boolean
Read: cfishpool.IsDormant
Write: cfishpool.IsDormant = value
```
## VisTimer 
```lua
@type CountdownTimer
Read: cfishpool.VisTimer
Write: cfishpool.VisTimer = value
```
## Parent 
```lua
@type CBaseEntity
Read: cfishpool.Parent
Write: cfishpool.Parent = value
```
# Functions
## ToPtr
```lua
@returns string
cfishpool:ToPtr()
```
## IsValid
```lua
@returns bool
cfishpool:IsValid()
```

:::