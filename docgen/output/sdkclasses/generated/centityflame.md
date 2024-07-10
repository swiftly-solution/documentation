---
title: CEntityFlame
index: true
order: 2
category:
  - Guide
---

# CEntityFlame

::: tabs
@tab Lua
# Constructor
```lua
CEntityFlame(ptr --[[ string ]])
```
# Properties
## EntAttached (Read-Only)
```lua
@type CBaseEntity
Read: centityflame.EntAttached
```
## CheapEffect 
```lua
@type boolean
Read: centityflame.CheapEffect
Write: centityflame.CheapEffect = value
```
## Size 
```lua
@type number
Read: centityflame.Size
Write: centityflame.Size = value
```
## UseHitboxes 
```lua
@type boolean
Read: centityflame.UseHitboxes
Write: centityflame.UseHitboxes = value
```
## NumHitboxFires 
```lua
@type number
Read: centityflame.NumHitboxFires
Write: centityflame.NumHitboxFires = value
```
## HitboxFireScale 
```lua
@type number
Read: centityflame.HitboxFireScale
Write: centityflame.HitboxFireScale = value
```
## Lifetime 
```lua
@type number
Read: centityflame.Lifetime
Write: centityflame.Lifetime = value
```
## Attacker (Read-Only)
```lua
@type CBaseEntity
Read: centityflame.Attacker
```
## DangerSound 
```lua
@type number
Read: centityflame.DangerSound
Write: centityflame.DangerSound = value
```
## DirectDamagePerSecond 
```lua
@type number
Read: centityflame.DirectDamagePerSecond
Write: centityflame.DirectDamagePerSecond = value
```
## CustomDamageType 
```lua
@type number
Read: centityflame.CustomDamageType
Write: centityflame.CustomDamageType = value
```
## Parent 
```lua
@type CBaseEntity
Read: centityflame.Parent
Write: centityflame.Parent = value
```
# Functions
## ToPtr
```lua
@returns string
centityflame:ToPtr()
```
## IsValid
```lua
@returns bool
centityflame:IsValid()
```

:::