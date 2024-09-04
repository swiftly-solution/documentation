---
title: CNmFootEvent
index: true
order: 2
category:
  - Guide
---

# CNmFootEvent

::: tabs
@tab Lua
# Constructor
```lua
CNmFootEvent(ptr --[[ string ]])
```
# Properties
## Phase 
```lua
@type number
Read: cnmfootevent.Phase
Write: cnmfootevent.Phase = value
```
## Parent (Read-Only)
```lua
@type CNmEvent
Read: cnmfootevent.Parent
```
# Functions
## ToPtr
```lua
@returns string
cnmfootevent:ToPtr()
```
## IsValid
```lua
@returns bool
cnmfootevent:IsValid()
```

:::