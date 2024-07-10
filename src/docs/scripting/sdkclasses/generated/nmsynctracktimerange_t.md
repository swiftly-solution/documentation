---
title: NmSyncTrackTimeRange_t
index: true
order: 2
category:
  - Guide
---

# NmSyncTrackTimeRange_t

::: tabs
@tab Lua
# Constructor
```lua
NmSyncTrackTimeRange_t(ptr --[[ string ]])
```
# Properties
## StartTime 
```lua
@type NmSyncTrackTime_t
Read: nmsynctracktimerange_t.StartTime
Write: nmsynctracktimerange_t.StartTime = value
```
## EndTime 
```lua
@type NmSyncTrackTime_t
Read: nmsynctracktimerange_t.EndTime
Write: nmsynctracktimerange_t.EndTime = value
```
# Functions
## ToPtr
```lua
@returns string
nmsynctracktimerange_t:ToPtr()
```
## IsValid
```lua
@returns bool
nmsynctracktimerange_t:IsValid()
```

:::