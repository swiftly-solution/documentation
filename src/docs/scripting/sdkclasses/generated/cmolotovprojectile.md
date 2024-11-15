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
CMolotovProjectile(ptr)
```
# Properties
## IsIncGrenade 
```lua
--- @type boolean
Read: cmolotovprojectile.IsIncGrenade
Write: cmolotovprojectile.IsIncGrenade = value
```
## Detonated 
```lua
--- @type boolean
Read: cmolotovprojectile.Detonated
Write: cmolotovprojectile.Detonated = value
```
## StillTimer (Read-Only)
```lua
--- @type IntervalTimer
Read: cmolotovprojectile.StillTimer
```
## HasBouncedOffPlayer 
```lua
--- @type boolean
Read: cmolotovprojectile.HasBouncedOffPlayer
Write: cmolotovprojectile.HasBouncedOffPlayer = value
```
## Parent (Read-Only)
```lua
--- @type CBaseCSGrenadeProjectile
Read: cmolotovprojectile.Parent
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