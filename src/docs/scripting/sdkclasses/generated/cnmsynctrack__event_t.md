---
title: CNmSyncTrack__Event_t
index: true
order: 2
category:
  - Guide
---

# CNmSyncTrack__Event_t

::: tabs
@tab Lua
# Constructor
```lua
CNmSyncTrack__Event_t(ptr --[[ string ]])
```
# Properties
## StartTime (Read-Only)
```lua
@type NmPercent_t
Read: cnmsynctrack__event_t.StartTime
```
## Duration (Read-Only)
```lua
@type NmPercent_t
Read: cnmsynctrack__event_t.Duration
```
# Functions
## ToPtr
```lua
@returns string
cnmsynctrack__event_t:ToPtr()
```
## IsValid
```lua
@returns bool
cnmsynctrack__event_t:IsValid()
```

:::