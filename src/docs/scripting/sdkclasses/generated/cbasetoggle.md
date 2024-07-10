---
title: CBaseToggle
index: true
order: 2
category:
  - Guide
---

# CBaseToggle

::: tabs
@tab Lua
# Constructor
```lua
CBaseToggle(ptr --[[ string ]])
```
# Properties
## Toggle_state 
```lua
@type number
Read: cbasetoggle.Toggle_state
Write: cbasetoggle.Toggle_state = value
```
## MoveDistance 
```lua
@type number
Read: cbasetoggle.MoveDistance
Write: cbasetoggle.MoveDistance = value
```
## Wait 
```lua
@type number
Read: cbasetoggle.Wait
Write: cbasetoggle.Wait = value
```
## Lip 
```lua
@type number
Read: cbasetoggle.Lip
Write: cbasetoggle.Lip = value
```
## AlwaysFireBlockedOutputs 
```lua
@type boolean
Read: cbasetoggle.AlwaysFireBlockedOutputs
Write: cbasetoggle.AlwaysFireBlockedOutputs = value
```
## Position1 
```lua
@type Vector
Read: cbasetoggle.Position1
Write: cbasetoggle.Position1 = value
```
## Position2 
```lua
@type Vector
Read: cbasetoggle.Position2
Write: cbasetoggle.Position2 = value
```
## MoveAng 
```lua
@type QAngle
Read: cbasetoggle.MoveAng
Write: cbasetoggle.MoveAng = value
```
## Angle1 
```lua
@type QAngle
Read: cbasetoggle.Angle1
Write: cbasetoggle.Angle1 = value
```
## Angle2 
```lua
@type QAngle
Read: cbasetoggle.Angle2
Write: cbasetoggle.Angle2 = value
```
## Height 
```lua
@type number
Read: cbasetoggle.Height
Write: cbasetoggle.Height = value
```
## Activator (Read-Only)
```lua
@type CBaseEntity
Read: cbasetoggle.Activator
```
## FinalDest 
```lua
@type Vector
Read: cbasetoggle.FinalDest
Write: cbasetoggle.FinalDest = value
```
## FinalAngle 
```lua
@type QAngle
Read: cbasetoggle.FinalAngle
Write: cbasetoggle.FinalAngle = value
```
## MovementType 
```lua
@type number
Read: cbasetoggle.MovementType
Write: cbasetoggle.MovementType = value
```
## Master 
```lua
@type string
Read: cbasetoggle.Master
Write: cbasetoggle.Master = value
```
## Parent 
```lua
@type CBaseModelEntity
Read: cbasetoggle.Parent
Write: cbasetoggle.Parent = value
```
# Functions
## ToPtr
```lua
@returns string
cbasetoggle:ToPtr()
```
## IsValid
```lua
@returns bool
cbasetoggle:IsValid()
```

:::