---
title: CPlayer_MovementServices
index: true
order: 2
category:
  - Guide
---

# CPlayer_MovementServices

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
CPlayer_MovementServices(ptr)
```
# Properties
## Impulse 
```lua
--- @type number
Read: cplayer_movementservices.Impulse
Write: cplayer_movementservices.Impulse = value
```
## Buttons (Read-Only)
```lua
--- @type CInButtonState
Read: cplayer_movementservices.Buttons
```
## QueuedButtonDownMask 
```lua
--- @type number
Read: cplayer_movementservices.QueuedButtonDownMask
Write: cplayer_movementservices.QueuedButtonDownMask = value
```
## QueuedButtonChangeMask 
```lua
--- @type number
Read: cplayer_movementservices.QueuedButtonChangeMask
Write: cplayer_movementservices.QueuedButtonChangeMask = value
```
## ButtonDoublePressed 
```lua
--- @type number
Read: cplayer_movementservices.ButtonDoublePressed
Write: cplayer_movementservices.ButtonDoublePressed = value
```
## ButtonPressedCmdNumber 
```lua
--- @type table
Read: cplayer_movementservices.ButtonPressedCmdNumber
Write: cplayer_movementservices.ButtonPressedCmdNumber = value
```
## LastCommandNumberProcessed 
```lua
--- @type number
Read: cplayer_movementservices.LastCommandNumberProcessed
Write: cplayer_movementservices.LastCommandNumberProcessed = value
```
## ToggleButtonDownMask 
```lua
--- @type number
Read: cplayer_movementservices.ToggleButtonDownMask
Write: cplayer_movementservices.ToggleButtonDownMask = value
```
## Maxspeed 
```lua
--- @type number
Read: cplayer_movementservices.Maxspeed
Write: cplayer_movementservices.Maxspeed = value
```
## ForceSubtickMoveWhen 
```lua
--- @type table
Read: cplayer_movementservices.ForceSubtickMoveWhen
Write: cplayer_movementservices.ForceSubtickMoveWhen = value
```
## ForwardMove 
```lua
--- @type number
Read: cplayer_movementservices.ForwardMove
Write: cplayer_movementservices.ForwardMove = value
```
## LeftMove 
```lua
--- @type number
Read: cplayer_movementservices.LeftMove
Write: cplayer_movementservices.LeftMove = value
```
## UpMove 
```lua
--- @type number
Read: cplayer_movementservices.UpMove
Write: cplayer_movementservices.UpMove = value
```
## LastMovementImpulses 
```lua
--- @type Vector
Read: cplayer_movementservices.LastMovementImpulses
Write: cplayer_movementservices.LastMovementImpulses = value
```
## OldViewAngles 
```lua
--- @type QAngle
Read: cplayer_movementservices.OldViewAngles
Write: cplayer_movementservices.OldViewAngles = value
```
## Parent (Read-Only)
```lua
--- @type CPlayerPawnComponent
Read: cplayer_movementservices.Parent
```
# Functions
## ToPtr
```lua
--- @return string
cplayer_movementservices:ToPtr()
```
## IsValid
```lua
--- @return bool
cplayer_movementservices:IsValid()
```

:::