---
title: CNmRootMotionEvent
index: true
order: 2
category:
  - Guide
---

# CNmRootMotionEvent

::: tabs
@tab Lua
# Constructor
```lua
CNmRootMotionEvent(ptr)
```
# Properties
## BlendTimeSeconds 
```lua
--- @type number
Read: cnmrootmotionevent.BlendTimeSeconds
Write: cnmrootmotionevent.BlendTimeSeconds = value
```
## Parent (Read-Only)
```lua
--- @type CNmEvent
Read: cnmrootmotionevent.Parent
```
# Functions
## ToPtr
```lua
@returns string
cnmrootmotionevent:ToPtr()
```
## IsValid
```lua
@returns bool
cnmrootmotionevent:IsValid()
```

:::