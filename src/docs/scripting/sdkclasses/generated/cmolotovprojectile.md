---
title: CMolotovProjectile
index: true
order: 2
category:
  - Guide
---

# CMolotovProjectile

::: tabs
@tab Lua
# Constructor
```lua
CMolotovProjectile(ptr --[[ string ]])
```
# Properties
## IsIncGrenade 
```lua
@type boolean
Read: cmolotovprojectile.IsIncGrenade
Write: cmolotovprojectile.IsIncGrenade = value
```
## Detonated 
```lua
@type boolean
Read: cmolotovprojectile.Detonated
Write: cmolotovprojectile.Detonated = value
```
## StillTimer 
```lua
@type IntervalTimer
Read: cmolotovprojectile.StillTimer
Write: cmolotovprojectile.StillTimer = value
```
## HasBouncedOffPlayer 
```lua
@type boolean
Read: cmolotovprojectile.HasBouncedOffPlayer
Write: cmolotovprojectile.HasBouncedOffPlayer = value
```
## Parent 
```lua
@type CBaseCSGrenadeProjectile
Read: cmolotovprojectile.Parent
Write: cmolotovprojectile.Parent = value
```
# Functions
## ToPtr
```lua
@returns string
cmolotovprojectile:ToPtr()
```
## IsValid
```lua
@returns bool
cmolotovprojectile:IsValid()
```

:::