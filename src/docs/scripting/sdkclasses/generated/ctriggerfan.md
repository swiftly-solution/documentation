---
title: CTriggerFan
index: true
order: 2
category:
  - Guide
---

# CTriggerFan

::: tabs
@tab Lua
# Constructor
```lua
CTriggerFan(ptr)
```
# Properties
## FanOrigin 
```lua
--- @type Vector
Read: ctriggerfan.FanOrigin
Write: ctriggerfan.FanOrigin = value
```
## FanEnd 
```lua
--- @type Vector
Read: ctriggerfan.FanEnd
Write: ctriggerfan.FanEnd = value
```
## Noise 
```lua
--- @type Vector
Read: ctriggerfan.Noise
Write: ctriggerfan.Noise = value
```
## Force 
```lua
--- @type number
Read: ctriggerfan.Force
Write: ctriggerfan.Force = value
```
## RopeForceScale 
```lua
--- @type number
Read: ctriggerfan.RopeForceScale
Write: ctriggerfan.RopeForceScale = value
```
## PlayerForce 
```lua
--- @type number
Read: ctriggerfan.PlayerForce
Write: ctriggerfan.PlayerForce = value
```
## RampTime 
```lua
--- @type number
Read: ctriggerfan.RampTime
Write: ctriggerfan.RampTime = value
```
## Falloff 
```lua
--- @type boolean
Read: ctriggerfan.Falloff
Write: ctriggerfan.Falloff = value
```
## PushPlayer 
```lua
--- @type boolean
Read: ctriggerfan.PushPlayer
Write: ctriggerfan.PushPlayer = value
```
## RampDown 
```lua
--- @type boolean
Read: ctriggerfan.RampDown
Write: ctriggerfan.RampDown = value
```
## AddNoise 
```lua
--- @type boolean
Read: ctriggerfan.AddNoise
Write: ctriggerfan.AddNoise = value
```
## RampTimer (Read-Only)
```lua
--- @type CountdownTimer
Read: ctriggerfan.RampTimer
```
## Parent (Read-Only)
```lua
--- @type CBaseTrigger
Read: ctriggerfan.Parent
```
# Functions
## ToPtr
```lua
@returns string
ctriggerfan:ToPtr()
```
## IsValid
```lua
@returns bool
ctriggerfan:IsValid()
```

:::