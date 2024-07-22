---
title: CBasePropDoor
index: true
order: 2
category:
  - Guide
---

# CBasePropDoor

::: tabs
@tab Lua
# Constructor
```lua
CBasePropDoor(ptr --[[ string ]])
```
# Properties
## AutoReturnDelay 
```lua
@type number
Read: cbasepropdoor.AutoReturnDelay
Write: cbasepropdoor.AutoReturnDelay = value
```
## HardwareType 
```lua
@type number
Read: cbasepropdoor.HardwareType
Write: cbasepropdoor.HardwareType = value
```
## NeedsHardware 
```lua
@type boolean
Read: cbasepropdoor.NeedsHardware
Write: cbasepropdoor.NeedsHardware = value
```
## DoorState 
```lua
@type number
Read: cbasepropdoor.DoorState
Write: cbasepropdoor.DoorState = value
```
## Locked 
```lua
@type boolean
Read: cbasepropdoor.Locked
Write: cbasepropdoor.Locked = value
```
## ClosedPosition 
```lua
@type Vector
Read: cbasepropdoor.ClosedPosition
Write: cbasepropdoor.ClosedPosition = value
```
## ClosedAngles 
```lua
@type QAngle
Read: cbasepropdoor.ClosedAngles
Write: cbasepropdoor.ClosedAngles = value
```
## Blocker (Read-Only)
```lua
@type CBaseEntity
Read: cbasepropdoor.Blocker
```
## FirstBlocked 
```lua
@type boolean
Read: cbasepropdoor.FirstBlocked
Write: cbasepropdoor.FirstBlocked = value
```
## Ls (Read-Only)
```lua
@type locksound_t
Read: cbasepropdoor.Ls
```
## ForceClosed 
```lua
@type boolean
Read: cbasepropdoor.ForceClosed
Write: cbasepropdoor.ForceClosed = value
```
## LatchWorldPosition 
```lua
@type Vector
Read: cbasepropdoor.LatchWorldPosition
Write: cbasepropdoor.LatchWorldPosition = value
```
## Activator (Read-Only)
```lua
@type CBaseEntity
Read: cbasepropdoor.Activator
```
## SoundMoving 
```lua
@type string
Read: cbasepropdoor.SoundMoving
Write: cbasepropdoor.SoundMoving = value
```
## SoundOpen 
```lua
@type string
Read: cbasepropdoor.SoundOpen
Write: cbasepropdoor.SoundOpen = value
```
## SoundClose 
```lua
@type string
Read: cbasepropdoor.SoundClose
Write: cbasepropdoor.SoundClose = value
```
## SoundLock 
```lua
@type string
Read: cbasepropdoor.SoundLock
Write: cbasepropdoor.SoundLock = value
```
## SoundUnlock 
```lua
@type string
Read: cbasepropdoor.SoundUnlock
Write: cbasepropdoor.SoundUnlock = value
```
## SoundLatch 
```lua
@type string
Read: cbasepropdoor.SoundLatch
Write: cbasepropdoor.SoundLatch = value
```
## SoundPound 
```lua
@type string
Read: cbasepropdoor.SoundPound
Write: cbasepropdoor.SoundPound = value
```
## SoundJiggle 
```lua
@type string
Read: cbasepropdoor.SoundJiggle
Write: cbasepropdoor.SoundJiggle = value
```
## SoundLockedAnim 
```lua
@type string
Read: cbasepropdoor.SoundLockedAnim
Write: cbasepropdoor.SoundLockedAnim = value
```
## NumCloseAttempts 
```lua
@type number
Read: cbasepropdoor.NumCloseAttempts
Write: cbasepropdoor.NumCloseAttempts = value
```
## PhysicsMaterial 
```lua
@type number
Read: cbasepropdoor.PhysicsMaterial
Write: cbasepropdoor.PhysicsMaterial = value
```
## SlaveName 
```lua
@type string
Read: cbasepropdoor.SlaveName
Write: cbasepropdoor.SlaveName = value
```
## Master (Read-Only)
```lua
@type CBasePropDoor
Read: cbasepropdoor.Master
```
## OnBlockedClosing (Read-Only)
```lua
@type CEntityIOOutput
Read: cbasepropdoor.OnBlockedClosing
```
## OnBlockedOpening (Read-Only)
```lua
@type CEntityIOOutput
Read: cbasepropdoor.OnBlockedOpening
```
## OnUnblockedClosing (Read-Only)
```lua
@type CEntityIOOutput
Read: cbasepropdoor.OnUnblockedClosing
```
## OnUnblockedOpening (Read-Only)
```lua
@type CEntityIOOutput
Read: cbasepropdoor.OnUnblockedOpening
```
## OnFullyClosed (Read-Only)
```lua
@type CEntityIOOutput
Read: cbasepropdoor.OnFullyClosed
```
## OnFullyOpen (Read-Only)
```lua
@type CEntityIOOutput
Read: cbasepropdoor.OnFullyOpen
```
## OnClose (Read-Only)
```lua
@type CEntityIOOutput
Read: cbasepropdoor.OnClose
```
## OnOpen (Read-Only)
```lua
@type CEntityIOOutput
Read: cbasepropdoor.OnOpen
```
## OnLockedUse (Read-Only)
```lua
@type CEntityIOOutput
Read: cbasepropdoor.OnLockedUse
```
## OnAjarOpen (Read-Only)
```lua
@type CEntityIOOutput
Read: cbasepropdoor.OnAjarOpen
```
## Parent 
```lua
@type CDynamicProp
Read: cbasepropdoor.Parent
Write: cbasepropdoor.Parent = value
```
# Functions
## ToPtr
```lua
@returns string
cbasepropdoor:ToPtr()
```
## IsValid
```lua
@returns bool
cbasepropdoor:IsValid()
```

:::