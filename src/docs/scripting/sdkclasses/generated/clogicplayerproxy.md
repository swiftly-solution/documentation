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
## PlayerHasAmmo (Read-Only)
```lua
@type CEntityIOOutput
Read: clogicplayerproxy.PlayerHasAmmo
```
## PlayerHasNoAmmo (Read-Only)
```lua
@type CEntityIOOutput
Read: clogicplayerproxy.PlayerHasNoAmmo
```
## PlayerDied (Read-Only)
```lua
@type CEntityIOOutput
Read: clogicplayerproxy.PlayerDied
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