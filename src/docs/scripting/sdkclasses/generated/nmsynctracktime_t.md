---
title: NmSyncTrackTime_t
index: true
order: 2
category:
  - Guide
---

# NmSyncTrackTime_t

::: tabs
@tab Lua
# Constructor
```lua
NmSyncTrackTime_t(ptr --[[ string ]])
```
# Properties
## EventIdx 
```lua
@type number
Read: nmsynctracktime_t.EventIdx
Write: nmsynctracktime_t.EventIdx = value
```
## PercentageThrough 
```lua
@type NmPercent_t
Read: nmsynctracktime_t.PercentageThrough
Write: nmsynctracktime_t.PercentageThrough = value
```
# Functions
## ToPtr
```lua
@returns string
nmsynctracktime_t:ToPtr()
```
## IsValid
```lua
@returns bool
nmsynctracktime_t:IsValid()
```

:::