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
CNmFrameSnapEvent(ptr --[[ string ]])
```
# Properties
## FrameSnapMode 
```lua
@type number
Read: cnmframesnapevent.FrameSnapMode
Write: cnmframesnapevent.FrameSnapMode = value
```
## Parent 
```lua
@type CNmEvent
Read: cnmframesnapevent.Parent
Write: cnmframesnapevent.Parent = value
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