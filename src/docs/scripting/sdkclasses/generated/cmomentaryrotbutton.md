---
title: CMomentaryRotButton
index: true
order: 2
category:
  - Guide
---

# CMomentaryRotButton

::: tabs
@tab Lua
# Constructor
```lua
CMomentaryRotButton(ptr)
```
# Properties
## OnUnpressed (Read-Only)
```lua
--- @type CEntityIOOutput
Read: cmomentaryrotbutton.OnUnpressed
```
## OnFullyOpen (Read-Only)
```lua
--- @type CEntityIOOutput
Read: cmomentaryrotbutton.OnFullyOpen
```
## OnFullyClosed (Read-Only)
```lua
--- @type CEntityIOOutput
Read: cmomentaryrotbutton.OnFullyClosed
```
## OnReachedPosition (Read-Only)
```lua
--- @type CEntityIOOutput
Read: cmomentaryrotbutton.OnReachedPosition
```
## LastUsed 
```lua
--- @type number
Read: cmomentaryrotbutton.LastUsed
Write: cmomentaryrotbutton.LastUsed = value
```
## Start 
```lua
--- @type QAngle
Read: cmomentaryrotbutton.Start
Write: cmomentaryrotbutton.Start = value
```
## End 
```lua
--- @type QAngle
Read: cmomentaryrotbutton.End
Write: cmomentaryrotbutton.End = value
```
## IdealYaw 
```lua
--- @type number
Read: cmomentaryrotbutton.IdealYaw
Write: cmomentaryrotbutton.IdealYaw = value
```
## Noise 
```lua
--- @type string
Read: cmomentaryrotbutton.Noise
Write: cmomentaryrotbutton.Noise = value
```
## UpdateTarget 
```lua
--- @type boolean
Read: cmomentaryrotbutton.UpdateTarget
Write: cmomentaryrotbutton.UpdateTarget = value
```
## Direction 
```lua
--- @type number
Read: cmomentaryrotbutton.Direction
Write: cmomentaryrotbutton.Direction = value
```
## ReturnSpeed 
```lua
--- @type number
Read: cmomentaryrotbutton.ReturnSpeed
Write: cmomentaryrotbutton.ReturnSpeed = value
```
## StartPosition 
```lua
--- @type number
Read: cmomentaryrotbutton.StartPosition
Write: cmomentaryrotbutton.StartPosition = value
```
## Parent (Read-Only)
```lua
--- @type CRotButton
Read: cmomentaryrotbutton.Parent
```
# Functions
## ToPtr
```lua
@returns string
cmomentaryrotbutton:ToPtr()
```
## IsValid
```lua
@returns bool
cmomentaryrotbutton:IsValid()
```

:::