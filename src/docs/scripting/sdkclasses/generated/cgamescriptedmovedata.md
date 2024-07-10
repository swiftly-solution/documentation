---
title: CGameScriptedMoveData
index: true
order: 2
category:
  - Guide
---

# CGameScriptedMoveData

::: tabs
@tab Lua
# Constructor
```lua
CGameScriptedMoveData(ptr --[[ string ]])
```
# Properties
## AccumulatedRootMotion 
```lua
@type Vector
Read: cgamescriptedmovedata.AccumulatedRootMotion
Write: cgamescriptedmovedata.AccumulatedRootMotion = value
```
## Dest 
```lua
@type Vector
Read: cgamescriptedmovedata.Dest
Write: cgamescriptedmovedata.Dest = value
```
## Src 
```lua
@type Vector
Read: cgamescriptedmovedata.Src
Write: cgamescriptedmovedata.Src = value
```
## Src1 
```lua
@type QAngle
Read: cgamescriptedmovedata.Src1
Write: cgamescriptedmovedata.Src1 = value
```
## Dst 
```lua
@type QAngle
Read: cgamescriptedmovedata.Dst
Write: cgamescriptedmovedata.Dst = value
```
## Current 
```lua
@type QAngle
Read: cgamescriptedmovedata.Current
Write: cgamescriptedmovedata.Current = value
```
## AngRate 
```lua
@type number
Read: cgamescriptedmovedata.AngRate
Write: cgamescriptedmovedata.AngRate = value
```
## Duration 
```lua
@type number
Read: cgamescriptedmovedata.Duration
Write: cgamescriptedmovedata.Duration = value
```
## StartTime 
```lua
@type number
Read: cgamescriptedmovedata.StartTime
Write: cgamescriptedmovedata.StartTime = value
```
## Active 
```lua
@type boolean
Read: cgamescriptedmovedata.Active
Write: cgamescriptedmovedata.Active = value
```
## TeleportOnEnd 
```lua
@type boolean
Read: cgamescriptedmovedata.TeleportOnEnd
Write: cgamescriptedmovedata.TeleportOnEnd = value
```
## IgnoreRotation 
```lua
@type boolean
Read: cgamescriptedmovedata.IgnoreRotation
Write: cgamescriptedmovedata.IgnoreRotation = value
```
## Type 
```lua
@type number
Read: cgamescriptedmovedata.Type
Write: cgamescriptedmovedata.Type = value
```
## Success 
```lua
@type boolean
Read: cgamescriptedmovedata.Success
Write: cgamescriptedmovedata.Success = value
```
## ForcedCrouchState 
```lua
@type number
Read: cgamescriptedmovedata.ForcedCrouchState
Write: cgamescriptedmovedata.ForcedCrouchState = value
```
## IgnoreCollisions 
```lua
@type boolean
Read: cgamescriptedmovedata.IgnoreCollisions
Write: cgamescriptedmovedata.IgnoreCollisions = value
```
# Functions
## ToPtr
```lua
@returns string
cgamescriptedmovedata:ToPtr()
```
## IsValid
```lua
@returns bool
cgamescriptedmovedata:IsValid()
```

:::