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
--- @param ptr string
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
--- @return string
cmolotovprojectile:ToPtr()
```
## IsValid
```lua
--- @return bool
cmolotovprojectile:IsValid()
```

:::