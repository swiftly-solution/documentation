---
title: CNmTargetWarpEvent
index: true
order: 2
category:
  - Guide
---

# CNmTargetWarpEvent

::: tabs
@tab Lua
# Constructor
```lua
CNmTargetWarpEvent(ptr --[[ string ]])
```
# Properties
## Rule 
```lua
@type number
Read: cnmtargetwarpevent.Rule
Write: cnmtargetwarpevent.Rule = value
```
## Algorithm 
```lua
@type number
Read: cnmtargetwarpevent.Algorithm
Write: cnmtargetwarpevent.Algorithm = value
```
## Parent (Read-Only)
```lua
@type CNmEvent
Read: cnmtargetwarpevent.Parent
```
# Functions
## ToPtr
```lua
@returns string
cnmtargetwarpevent:ToPtr()
```
## IsValid
```lua
@returns bool
cnmtargetwarpevent:IsValid()
```

:::