---
title: CFuncConveyor
index: true
order: 2
category:
  - Guide
---

# CFuncConveyor

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
CFuncConveyor(ptr)
```
# Properties
## ConveyorModels 
```lua
--- @type string
Read: cfuncconveyor.ConveyorModels
Write: cfuncconveyor.ConveyorModels = value
```
## TransitionDurationSeconds 
```lua
--- @type number
Read: cfuncconveyor.TransitionDurationSeconds
Write: cfuncconveyor.TransitionDurationSeconds = value
```
## MoveEntitySpace 
```lua
--- @type QAngle
Read: cfuncconveyor.MoveEntitySpace
Write: cfuncconveyor.MoveEntitySpace = value
```
## MoveDirEntitySpace 
```lua
--- @type Vector
Read: cfuncconveyor.MoveDirEntitySpace
Write: cfuncconveyor.MoveDirEntitySpace = value
```
## TargetSpeed 
```lua
--- @type number
Read: cfuncconveyor.TargetSpeed
Write: cfuncconveyor.TargetSpeed = value
```
## TransitionStartTick 
```lua
--- @type number
Read: cfuncconveyor.TransitionStartTick
Write: cfuncconveyor.TransitionStartTick = value
```
## TransitionDurationTicks 
```lua
--- @type number
Read: cfuncconveyor.TransitionDurationTicks
Write: cfuncconveyor.TransitionDurationTicks = value
```
## TransitionStartSpeed 
```lua
--- @type number
Read: cfuncconveyor.TransitionStartSpeed
Write: cfuncconveyor.TransitionStartSpeed = value
```
## Parent (Read-Only)
```lua
--- @type CBaseModelEntity
Read: cfuncconveyor.Parent
```
# Functions
## ToPtr
```lua
--- @return string
cfuncconveyor:ToPtr()
```
## IsValid
```lua
--- @return bool
cfuncconveyor:IsValid()
```

:::