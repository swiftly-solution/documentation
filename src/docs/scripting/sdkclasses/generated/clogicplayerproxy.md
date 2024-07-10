---
title: CLogicPlayerProxy
index: true
order: 2
category:
  - Guide
---

# CLogicPlayerProxy

::: tabs
@tab Lua
# Constructor
```lua
CLogicPlayerProxy(ptr --[[ string ]])
```
# Properties
## Player (Read-Only)
```lua
@type CBaseEntity
Read: clogicplayerproxy.Player
```
## PlayerHasAmmo 
```lua
@type CEntityIOOutput
Read: clogicplayerproxy.PlayerHasAmmo
Write: clogicplayerproxy.PlayerHasAmmo = value
```
## PlayerHasNoAmmo 
```lua
@type CEntityIOOutput
Read: clogicplayerproxy.PlayerHasNoAmmo
Write: clogicplayerproxy.PlayerHasNoAmmo = value
```
## PlayerDied 
```lua
@type CEntityIOOutput
Read: clogicplayerproxy.PlayerDied
Write: clogicplayerproxy.PlayerDied = value
```
## Parent 
```lua
@type CLogicalEntity
Read: clogicplayerproxy.Parent
Write: clogicplayerproxy.Parent = value
```
# Functions
## ToPtr
```lua
@returns string
clogicplayerproxy:ToPtr()
```
## IsValid
```lua
@returns bool
clogicplayerproxy:IsValid()
```

:::