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
--- @param ptr string
CEnvFireSource(ptr)
```
# Properties
## Enabled 
```lua
--- @type boolean
Read: cenvfiresource.Enabled
Write: cenvfiresource.Enabled = value
```
## Radius 
```lua
--- @type number
Read: cenvfiresource.Radius
Write: cenvfiresource.Radius = value
```
## Damage 
```lua
--- @type number
Read: cenvfiresource.Damage
Write: cenvfiresource.Damage = value
```
## Parent (Read-Only)
```lua
--- @type CBaseEntity
Read: cenvfiresource.Parent
```
# Functions
## ToPtr
```lua
--- @return string
cenvfiresource:ToPtr()
```
## IsValid
```lua
--- @return bool
cenvfiresource:IsValid()
```

:::