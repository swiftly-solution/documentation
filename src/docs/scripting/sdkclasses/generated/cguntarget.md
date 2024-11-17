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
--- @param ptr string
CGunTarget(ptr)
```
# Properties
## On 
```lua
--- @type boolean
Read: cguntarget.On
Write: cguntarget.On = value
```
## TargetEnt (Read-Only)
```lua
--- @type CBaseEntity
Read: cguntarget.TargetEnt
```
## OnDeath (Read-Only)
```lua
--- @type CEntityIOOutput
Read: cguntarget.OnDeath
```
## Parent (Read-Only)
```lua
--- @type CBaseToggle
Read: cguntarget.Parent
```
# Functions
## ToPtr
```lua
--- @return string
cguntarget:ToPtr()
```
## IsValid
```lua
--- @return bool
cguntarget:IsValid()
```

:::