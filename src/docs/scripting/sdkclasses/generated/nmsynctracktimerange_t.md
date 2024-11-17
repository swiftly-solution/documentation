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
--- @param ptr string
NmSyncTrackTimeRange_t(ptr)
```
# Properties
## StartTime (Read-Only)
```lua
--- @type NmSyncTrackTime_t
Read: nmsynctracktimerange_t.StartTime
```
## EndTime (Read-Only)
```lua
--- @type NmSyncTrackTime_t
Read: nmsynctracktimerange_t.EndTime
```
# Functions
## ToPtr
```lua
--- @return string
nmsynctracktimerange_t:ToPtr()
```
## IsValid
```lua
--- @return bool
nmsynctracktimerange_t:IsValid()
```

:::