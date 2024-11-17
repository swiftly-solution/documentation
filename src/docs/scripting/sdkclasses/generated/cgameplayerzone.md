---
title: CGamePlayerZone
index: true
order: 2
category:
  - Guide
---

# CGamePlayerZone

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
CGamePlayerZone(ptr)
```
# Properties
## OnPlayerInZone (Read-Only)
```lua
--- @type CEntityIOOutput
Read: cgameplayerzone.OnPlayerInZone
```
## OnPlayerOutZone (Read-Only)
```lua
--- @type CEntityIOOutput
Read: cgameplayerzone.OnPlayerOutZone
```
## Parent (Read-Only)
```lua
--- @type CRuleBrushEntity
Read: cgameplayerzone.Parent
```
# Functions
## ToPtr
```lua
--- @return string
cgameplayerzone:ToPtr()
```
## IsValid
```lua
--- @return bool
cgameplayerzone:IsValid()
```

:::