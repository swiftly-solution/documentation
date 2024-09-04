---
title: CEnvFireSource
index: true
order: 2
category:
  - Guide
---

# CEnvFireSource

::: tabs
@tab Lua
# Constructor
```lua
CEnvFireSource(ptr --[[ string ]])
```
# Properties
## Enabled 
```lua
@type boolean
Read: cenvfiresource.Enabled
Write: cenvfiresource.Enabled = value
```
## Radius 
```lua
@type number
Read: cenvfiresource.Radius
Write: cenvfiresource.Radius = value
```
## Damage 
```lua
@type number
Read: cenvfiresource.Damage
Write: cenvfiresource.Damage = value
```
## Parent (Read-Only)
```lua
@type CBaseEntity
Read: cenvfiresource.Parent
```
# Functions
## ToPtr
```lua
@returns string
cenvfiresource:ToPtr()
```
## IsValid
```lua
@returns bool
cenvfiresource:IsValid()
```

:::