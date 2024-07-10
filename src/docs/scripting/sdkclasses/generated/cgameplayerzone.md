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
CGamePlayerZone(ptr --[[ string ]])
```
# Properties
## OnPlayerInZone 
```lua
@type CEntityIOOutput
Read: cgameplayerzone.OnPlayerInZone
Write: cgameplayerzone.OnPlayerInZone = value
```
## OnPlayerOutZone 
```lua
@type CEntityIOOutput
Read: cgameplayerzone.OnPlayerOutZone
Write: cgameplayerzone.OnPlayerOutZone = value
```
## Parent 
```lua
@type CRuleBrushEntity
Read: cgameplayerzone.Parent
Write: cgameplayerzone.Parent = value
```
# Functions
## ToPtr
```lua
@returns string
cgameplayerzone:ToPtr()
```
## IsValid
```lua
@returns bool
cgameplayerzone:IsValid()
```

:::