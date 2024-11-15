---
title: CNmFrameSnapEvent
index: true
order: 2
category:
  - Guide
---

# CNmFrameSnapEvent

::: tabs
@tab Lua
# Constructor
```lua
CNmFrameSnapEvent(ptr)
```
# Properties
## FrameSnapMode 
```lua
--- @type number
Read: cnmframesnapevent.FrameSnapMode
Write: cnmframesnapevent.FrameSnapMode = value
```
## Parent (Read-Only)
```lua
--- @type CNmEvent
Read: cnmframesnapevent.Parent
```
# Functions
## ToPtr
```lua
@returns string
cnmframesnapevent:ToPtr()
```
## IsValid
```lua
@returns bool
cnmframesnapevent:IsValid()
```

:::