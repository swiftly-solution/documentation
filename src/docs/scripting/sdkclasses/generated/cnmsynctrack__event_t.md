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
## StartTime 
```lua
@type NmPercent_t
Read: cnmsynctrack__event_t.StartTime
Write: cnmsynctrack__event_t.StartTime = value
```
## Duration 
```lua
@type NmPercent_t
Read: cnmsynctrack__event_t.Duration
Write: cnmsynctrack__event_t.Duration = value
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