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
## StartTime (Read-Only)
```lua
@type NmSyncTrackTime_t
Read: nmsynctracktimerange_t.StartTime
```
## EndTime (Read-Only)
```lua
@type NmSyncTrackTime_t
Read: nmsynctracktimerange_t.EndTime
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