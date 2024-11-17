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
--- @param ptr string
NmSyncTrackTime_t(ptr)
```
# Properties
## EventIdx 
```lua
--- @type number
Read: nmsynctracktime_t.EventIdx
Write: nmsynctracktime_t.EventIdx = value
```
## PercentageThrough (Read-Only)
```lua
--- @type NmPercent_t
Read: nmsynctracktime_t.PercentageThrough
```
# Functions
## ToPtr
```lua
--- @return string
nmsynctracktime_t:ToPtr()
```
## IsValid
```lua
--- @return bool
nmsynctracktime_t:IsValid()
```

:::