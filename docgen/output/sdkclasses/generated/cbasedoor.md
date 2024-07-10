---
title: CBaseDoor
index: true
order: 2
category:
  - Guide
---

# CBaseDoor

::: tabs
@tab Lua
# Constructor
```lua
CBaseDoor(ptr --[[ string ]])
```
# Properties
## MoveEntitySpace 
```lua
@type QAngle
Read: cbasedoor.MoveEntitySpace
Write: cbasedoor.MoveEntitySpace = value
```
## MoveDirParentSpace 
```lua
@type Vector
Read: cbasedoor.MoveDirParentSpace
Write: cbasedoor.MoveDirParentSpace = value
```
## Ls 
```lua
@type locksound_t
Read: cbasedoor.Ls
Write: cbasedoor.Ls = value
```
## ForceClosed 
```lua
@type boolean
Read: cbasedoor.ForceClosed
Write: cbasedoor.ForceClosed = value
```
## DoorGroup 
```lua
@type boolean
Read: cbasedoor.DoorGroup
Write: cbasedoor.DoorGroup = value
```
## Locked 
```lua
@type boolean
Read: cbasedoor.Locked
Write: cbasedoor.Locked = value
```
## IgnoreDebris 
```lua
@type boolean
Read: cbasedoor.IgnoreDebris
Write: cbasedoor.IgnoreDebris = value
```
## SpawnPosition 
```lua
@type number
Read: cbasedoor.SpawnPosition
Write: cbasedoor.SpawnPosition = value
```
## BlockDamage 
```lua
@type number
Read: cbasedoor.BlockDamage
Write: cbasedoor.BlockDamage = value
```
## NoiseMoving 
```lua
@type string
Read: cbasedoor.NoiseMoving
Write: cbasedoor.NoiseMoving = value
```
## NoiseArrived 
```lua
@type string
Read: cbasedoor.NoiseArrived
Write: cbasedoor.NoiseArrived = value
```
## NoiseMovingClosed 
```lua
@type string
Read: cbasedoor.NoiseMovingClosed
Write: cbasedoor.NoiseMovingClosed = value
```
## NoiseArrivedClosed 
```lua
@type string
Read: cbasedoor.NoiseArrivedClosed
Write: cbasedoor.NoiseArrivedClosed = value
```
## ChainTarget 
```lua
@type string
Read: cbasedoor.ChainTarget
Write: cbasedoor.ChainTarget = value
```
## OnBlockedClosing 
```lua
@type CEntityIOOutput
Read: cbasedoor.OnBlockedClosing
Write: cbasedoor.OnBlockedClosing = value
```
## OnBlockedOpening 
```lua
@type CEntityIOOutput
Read: cbasedoor.OnBlockedOpening
Write: cbasedoor.OnBlockedOpening = value
```
## OnUnblockedClosing 
```lua
@type CEntityIOOutput
Read: cbasedoor.OnUnblockedClosing
Write: cbasedoor.OnUnblockedClosing = value
```
## OnUnblockedOpening 
```lua
@type CEntityIOOutput
Read: cbasedoor.OnUnblockedOpening
Write: cbasedoor.OnUnblockedOpening = value
```
## OnFullyClosed 
```lua
@type CEntityIOOutput
Read: cbasedoor.OnFullyClosed
Write: cbasedoor.OnFullyClosed = value
```
## OnFullyOpen 
```lua
@type CEntityIOOutput
Read: cbasedoor.OnFullyOpen
Write: cbasedoor.OnFullyOpen = value
```
## OnClose 
```lua
@type CEntityIOOutput
Read: cbasedoor.OnClose
Write: cbasedoor.OnClose = value
```
## OnOpen 
```lua
@type CEntityIOOutput
Read: cbasedoor.OnOpen
Write: cbasedoor.OnOpen = value
```
## OnLockedUse 
```lua
@type CEntityIOOutput
Read: cbasedoor.OnLockedUse
Write: cbasedoor.OnLockedUse = value
```
## LoopMoveSound 
```lua
@type boolean
Read: cbasedoor.LoopMoveSound
Write: cbasedoor.LoopMoveSound = value
```
## CreateNavObstacle 
```lua
@type boolean
Read: cbasedoor.CreateNavObstacle
Write: cbasedoor.CreateNavObstacle = value
```
## IsChaining 
```lua
@type boolean
Read: cbasedoor.IsChaining
Write: cbasedoor.IsChaining = value
```
## IsUsable 
```lua
@type boolean
Read: cbasedoor.IsUsable
Write: cbasedoor.IsUsable = value
```
## Parent 
```lua
@type CBaseToggle
Read: cbasedoor.Parent
Write: cbasedoor.Parent = value
```
# Functions
## ToPtr
```lua
@returns string
cbasedoor:ToPtr()
```
## IsValid
```lua
@returns bool
cbasedoor:IsValid()
```

:::