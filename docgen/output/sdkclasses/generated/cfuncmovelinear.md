---
title: CFuncMoveLinear
index: true
order: 2
category:
  - Guide
---

# CFuncMoveLinear

::: tabs
@tab Lua
# Constructor
```lua
CFuncMoveLinear(ptr --[[ string ]])
```
# Properties
## AuthoredPosition 
```lua
@type number
Read: cfuncmovelinear.AuthoredPosition
Write: cfuncmovelinear.AuthoredPosition = value
```
## MoveEntitySpace 
```lua
@type QAngle
Read: cfuncmovelinear.MoveEntitySpace
Write: cfuncmovelinear.MoveEntitySpace = value
```
## MoveDirParentSpace 
```lua
@type Vector
Read: cfuncmovelinear.MoveDirParentSpace
Write: cfuncmovelinear.MoveDirParentSpace = value
```
## SoundStart 
```lua
@type string
Read: cfuncmovelinear.SoundStart
Write: cfuncmovelinear.SoundStart = value
```
## SoundStop 
```lua
@type string
Read: cfuncmovelinear.SoundStop
Write: cfuncmovelinear.SoundStop = value
```
## CurrentSound 
```lua
@type string
Read: cfuncmovelinear.CurrentSound
Write: cfuncmovelinear.CurrentSound = value
```
## BlockDamage 
```lua
@type number
Read: cfuncmovelinear.BlockDamage
Write: cfuncmovelinear.BlockDamage = value
```
## StartPosition 
```lua
@type number
Read: cfuncmovelinear.StartPosition
Write: cfuncmovelinear.StartPosition = value
```
## OnFullyOpen 
```lua
@type CEntityIOOutput
Read: cfuncmovelinear.OnFullyOpen
Write: cfuncmovelinear.OnFullyOpen = value
```
## OnFullyClosed 
```lua
@type CEntityIOOutput
Read: cfuncmovelinear.OnFullyClosed
Write: cfuncmovelinear.OnFullyClosed = value
```
## CreateMovableNavMesh 
```lua
@type boolean
Read: cfuncmovelinear.CreateMovableNavMesh
Write: cfuncmovelinear.CreateMovableNavMesh = value
```
## CreateNavObstacle 
```lua
@type boolean
Read: cfuncmovelinear.CreateNavObstacle
Write: cfuncmovelinear.CreateNavObstacle = value
```
## Parent 
```lua
@type CBaseToggle
Read: cfuncmovelinear.Parent
Write: cfuncmovelinear.Parent = value
```
# Functions
## ToPtr
```lua
@returns string
cfuncmovelinear:ToPtr()
```
## IsValid
```lua
@returns bool
cfuncmovelinear:IsValid()
```

:::