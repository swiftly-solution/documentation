---
title: CGunTarget
index: true
order: 2
category:
  - Guide
---

# CGunTarget

::: tabs
@tab Lua
# Constructor
```lua
CGunTarget(ptr --[[ string ]])
```
# Properties
## On 
```lua
@type boolean
Read: cguntarget.On
Write: cguntarget.On = value
```
## TargetEnt (Read-Only)
```lua
@type CBaseEntity
Read: cguntarget.TargetEnt
```
## OnDeath 
```lua
@type CEntityIOOutput
Read: cguntarget.OnDeath
Write: cguntarget.OnDeath = value
```
## Parent 
```lua
@type CBaseToggle
Read: cguntarget.Parent
Write: cguntarget.Parent = value
```
# Functions
## ToPtr
```lua
@returns string
cguntarget:ToPtr()
```
## IsValid
```lua
@returns bool
cguntarget:IsValid()
```

:::