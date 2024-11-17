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
--- @param ptr string
CNmFootEvent(ptr)
```
# Properties
## Phase 
```lua
--- @type number
Read: cnmfootevent.Phase
Write: cnmfootevent.Phase = value
```
## Parent (Read-Only)
```lua
--- @type CNmEvent
Read: cnmfootevent.Parent
```
# Functions
## ToPtr
```lua
--- @return string
cnmfootevent:ToPtr()
```
## IsValid
```lua
--- @return bool
cnmfootevent:IsValid()
```

:::