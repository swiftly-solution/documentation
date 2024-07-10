---
title: CPointGiveAmmo
index: true
order: 2
category:
  - Guide
---

# CPointGiveAmmo

::: tabs
@tab Lua
# Constructor
```lua
CPointGiveAmmo(ptr --[[ string ]])
```
# Properties
## Activator (Read-Only)
```lua
@type CBaseEntity
Read: cpointgiveammo.Activator
```
## Parent 
```lua
@type CPointEntity
Read: cpointgiveammo.Parent
Write: cpointgiveammo.Parent = value
```
# Functions
## ToPtr
```lua
@returns string
cpointgiveammo:ToPtr()
```
## IsValid
```lua
@returns bool
cpointgiveammo:IsValid()
```

:::