---
title: CPhysBox
index: true
order: 2
category:
  - Guide
---

# CPhysBox

::: tabs
@tab Lua
# Constructor
```lua
CPhysBox(ptr --[[ string ]])
```
# Properties
## DamageType 
```lua
@type number
Read: cphysbox.DamageType
Write: cphysbox.DamageType = value
```
## MassScale 
```lua
@type number
Read: cphysbox.MassScale
Write: cphysbox.MassScale = value
```
## DamageToEnableMotion 
```lua
@type number
Read: cphysbox.DamageToEnableMotion
Write: cphysbox.DamageToEnableMotion = value
```
## ForceToEnableMotion 
```lua
@type number
Read: cphysbox.ForceToEnableMotion
Write: cphysbox.ForceToEnableMotion = value
```
## PreferredCarryAngles 
```lua
@type QAngle
Read: cphysbox.PreferredCarryAngles
Write: cphysbox.PreferredCarryAngles = value
```
## NotSolidToWorld 
```lua
@type boolean
Read: cphysbox.NotSolidToWorld
Write: cphysbox.NotSolidToWorld = value
```
## EnableUseOutput 
```lua
@type boolean
Read: cphysbox.EnableUseOutput
Write: cphysbox.EnableUseOutput = value
```
## ExploitableByPlayer 
```lua
@type number
Read: cphysbox.ExploitableByPlayer
Write: cphysbox.ExploitableByPlayer = value
```
## TouchOutputPerEntityDelay 
```lua
@type number
Read: cphysbox.TouchOutputPerEntityDelay
Write: cphysbox.TouchOutputPerEntityDelay = value
```
## OnDamaged (Read-Only)
```lua
@type CEntityIOOutput
Read: cphysbox.OnDamaged
```
## OnAwakened (Read-Only)
```lua
@type CEntityIOOutput
Read: cphysbox.OnAwakened
```
## OnMotionEnabled (Read-Only)
```lua
@type CEntityIOOutput
Read: cphysbox.OnMotionEnabled
```
## OnPlayerUse (Read-Only)
```lua
@type CEntityIOOutput
Read: cphysbox.OnPlayerUse
```
## OnStartTouch (Read-Only)
```lua
@type CEntityIOOutput
Read: cphysbox.OnStartTouch
```
## CarryingPlayer (Read-Only)
```lua
@type CBasePlayerPawn
Read: cphysbox.CarryingPlayer
```
## Parent (Read-Only)
```lua
@type CBreakable
Read: cphysbox.Parent
```
# Functions
## ToPtr
```lua
@returns string
cphysbox:ToPtr()
```
## IsValid
```lua
@returns bool
cphysbox:IsValid()
```

:::