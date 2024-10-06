---
title: CFuncShatterglass
index: true
order: 2
category:
  - Guide
---

# CFuncShatterglass

::: tabs
@tab Lua
# Constructor
```lua
CFuncShatterglass(ptr --[[ string ]])
```
# Properties
## ShatterGlassShards (Read-Only)
```lua
@type table
Read: cfuncshatterglass.ShatterGlassShards
```
## PanelSize 
```lua
@type Vector2D
Read: cfuncshatterglass.PanelSize
Write: cfuncshatterglass.PanelSize = value
```
## LastShatterSoundEmitTime 
```lua
@type number
Read: cfuncshatterglass.LastShatterSoundEmitTime
Write: cfuncshatterglass.LastShatterSoundEmitTime = value
```
## LastCleanupTime 
```lua
@type number
Read: cfuncshatterglass.LastCleanupTime
Write: cfuncshatterglass.LastCleanupTime = value
```
## InitAtTime 
```lua
@type number
Read: cfuncshatterglass.InitAtTime
Write: cfuncshatterglass.InitAtTime = value
```
## GlassThickness 
```lua
@type number
Read: cfuncshatterglass.GlassThickness
Write: cfuncshatterglass.GlassThickness = value
```
## SpawnInvulnerability 
```lua
@type number
Read: cfuncshatterglass.SpawnInvulnerability
Write: cfuncshatterglass.SpawnInvulnerability = value
```
## BreakSilent 
```lua
@type boolean
Read: cfuncshatterglass.BreakSilent
Write: cfuncshatterglass.BreakSilent = value
```
## BreakShardless 
```lua
@type boolean
Read: cfuncshatterglass.BreakShardless
Write: cfuncshatterglass.BreakShardless = value
```
## Broken 
```lua
@type boolean
Read: cfuncshatterglass.Broken
Write: cfuncshatterglass.Broken = value
```
## GlassNavIgnore 
```lua
@type boolean
Read: cfuncshatterglass.GlassNavIgnore
Write: cfuncshatterglass.GlassNavIgnore = value
```
## GlassInFrame 
```lua
@type boolean
Read: cfuncshatterglass.GlassInFrame
Write: cfuncshatterglass.GlassInFrame = value
```
## StartBroken 
```lua
@type boolean
Read: cfuncshatterglass.StartBroken
Write: cfuncshatterglass.StartBroken = value
```
## InitialDamageType 
```lua
@type number
Read: cfuncshatterglass.InitialDamageType
Write: cfuncshatterglass.InitialDamageType = value
```
## DamagePositioningEntityName01 
```lua
@type string
Read: cfuncshatterglass.DamagePositioningEntityName01
Write: cfuncshatterglass.DamagePositioningEntityName01 = value
```
## DamagePositioningEntityName02 
```lua
@type string
Read: cfuncshatterglass.DamagePositioningEntityName02
Write: cfuncshatterglass.DamagePositioningEntityName02 = value
```
## DamagePositioningEntityName03 
```lua
@type string
Read: cfuncshatterglass.DamagePositioningEntityName03
Write: cfuncshatterglass.DamagePositioningEntityName03 = value
```
## DamagePositioningEntityName04 
```lua
@type string
Read: cfuncshatterglass.DamagePositioningEntityName04
Write: cfuncshatterglass.DamagePositioningEntityName04 = value
```
## InitialDamagePositions (Read-Only)
```lua
@type table
Read: cfuncshatterglass.InitialDamagePositions
```
## ExtraDamagePositions (Read-Only)
```lua
@type table
Read: cfuncshatterglass.ExtraDamagePositions
```
## InitialPanelVertices (Read-Only)
```lua
@type table
Read: cfuncshatterglass.InitialPanelVertices
```
## OnBroken (Read-Only)
```lua
@type CEntityIOOutput
Read: cfuncshatterglass.OnBroken
```
## SurfaceType 
```lua
@type number
Read: cfuncshatterglass.SurfaceType
Write: cfuncshatterglass.SurfaceType = value
```
## Parent (Read-Only)
```lua
@type CBaseModelEntity
Read: cfuncshatterglass.Parent
```
# Functions
## ToPtr
```lua
@returns string
cfuncshatterglass:ToPtr()
```
## IsValid
```lua
@returns bool
cfuncshatterglass:IsValid()
```

:::