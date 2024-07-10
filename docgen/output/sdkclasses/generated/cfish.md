---
title: CFish
index: true
order: 2
category:
  - Guide
---

# CFish

::: tabs
@tab Lua
# Constructor
```lua
CFish(ptr --[[ string ]])
```
# Properties
## Pool (Read-Only)
```lua
@type CFishPool
Read: cfish.Pool
```
## Id 
```lua
@type number
Read: cfish.Id
Write: cfish.Id = value
```
## X 
```lua
@type number
Read: cfish.X
Write: cfish.X = value
```
## Y 
```lua
@type number
Read: cfish.Y
Write: cfish.Y = value
```
## Z 
```lua
@type number
Read: cfish.Z
Write: cfish.Z = value
```
## Angle 
```lua
@type number
Read: cfish.Angle
Write: cfish.Angle = value
```
## AngleChange 
```lua
@type number
Read: cfish.AngleChange
Write: cfish.AngleChange = value
```
## Forward 
```lua
@type Vector
Read: cfish.Forward
Write: cfish.Forward = value
```
## Perp 
```lua
@type Vector
Read: cfish.Perp
Write: cfish.Perp = value
```
## PoolOrigin 
```lua
@type Vector
Read: cfish.PoolOrigin
Write: cfish.PoolOrigin = value
```
## WaterLevel 
```lua
@type number
Read: cfish.WaterLevel
Write: cfish.WaterLevel = value
```
## Speed 
```lua
@type number
Read: cfish.Speed
Write: cfish.Speed = value
```
## DesiredSpeed 
```lua
@type number
Read: cfish.DesiredSpeed
Write: cfish.DesiredSpeed = value
```
## CalmSpeed 
```lua
@type number
Read: cfish.CalmSpeed
Write: cfish.CalmSpeed = value
```
## PanicSpeed 
```lua
@type number
Read: cfish.PanicSpeed
Write: cfish.PanicSpeed = value
```
## AvoidRange 
```lua
@type number
Read: cfish.AvoidRange
Write: cfish.AvoidRange = value
```
## TurnTimer 
```lua
@type CountdownTimer
Read: cfish.TurnTimer
Write: cfish.TurnTimer = value
```
## TurnClockwise 
```lua
@type boolean
Read: cfish.TurnClockwise
Write: cfish.TurnClockwise = value
```
## GoTimer 
```lua
@type CountdownTimer
Read: cfish.GoTimer
Write: cfish.GoTimer = value
```
## MoveTimer 
```lua
@type CountdownTimer
Read: cfish.MoveTimer
Write: cfish.MoveTimer = value
```
## PanicTimer 
```lua
@type CountdownTimer
Read: cfish.PanicTimer
Write: cfish.PanicTimer = value
```
## DisperseTimer 
```lua
@type CountdownTimer
Read: cfish.DisperseTimer
Write: cfish.DisperseTimer = value
```
## ProximityTimer 
```lua
@type CountdownTimer
Read: cfish.ProximityTimer
Write: cfish.ProximityTimer = value
```
## Visible 
```lua
@type table
Read: cfish.Visible
Write: cfish.Visible = value
```
## Parent 
```lua
@type CBaseAnimGraph
Read: cfish.Parent
Write: cfish.Parent = value
```
# Functions
## ToPtr
```lua
@returns string
cfish:ToPtr()
```
## IsValid
```lua
@returns bool
cfish:IsValid()
```

:::