---
title: CNmSyncTrack::Event_t
index: true
order: 2
category:
  - Guide
---

# CNmSyncTrack::Event_t

::: tabs
@tab Lua
# Constructor
```lua
CNmSyncTrack::Event_t(ptr --[[ string ]])
```
# Properties
## StartTime (Read-Only)
```lua
@type NmPercent_t
Read: cnmsynctrack::event_t.StartTime
```
## Duration (Read-Only)
```lua
@type NmPercent_t
Read: cnmsynctrack::event_t.Duration
```
# Functions
## ToPtr
```lua
@returns string
cnmsynctrack::event_t:ToPtr()
```
## IsValid
```lua
@returns bool
cnmsynctrack::event_t:IsValid()
```

:::