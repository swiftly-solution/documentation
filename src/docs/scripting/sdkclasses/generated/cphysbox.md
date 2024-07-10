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
## OnDamaged 
```lua
@type CEntityIOOutput
Read: cphysbox.OnDamaged
Write: cphysbox.OnDamaged = value
```
## OnAwakened 
```lua
@type CEntityIOOutput
Read: cphysbox.OnAwakened
Write: cphysbox.OnAwakened = value
```
## OnMotionEnabled 
```lua
@type CEntityIOOutput
Read: cphysbox.OnMotionEnabled
Write: cphysbox.OnMotionEnabled = value
```
## OnPlayerUse 
```lua
@type CEntityIOOutput
Read: cphysbox.OnPlayerUse
Write: cphysbox.OnPlayerUse = value
```
## OnStartTouch 
```lua
@type CEntityIOOutput
Read: cphysbox.OnStartTouch
Write: cphysbox.OnStartTouch = value
```
## CarryingPlayer (Read-Only)
```lua
@type CBasePlayerPawn
Read: cphysbox.CarryingPlayer
```
## Parent 
```lua
@type CBreakable
Read: cphysbox.Parent
Write: cphysbox.Parent = value
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