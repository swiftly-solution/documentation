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
--- @param ptr string
CLogicPlayerProxy(ptr)
```
# Properties
## Player (Read-Only)
```lua
--- @type CBaseEntity
Read: clogicplayerproxy.Player
```
## PlayerHasAmmo (Read-Only)
```lua
--- @type CEntityIOOutput
Read: clogicplayerproxy.PlayerHasAmmo
```
## PlayerHasNoAmmo (Read-Only)
```lua
--- @type CEntityIOOutput
Read: clogicplayerproxy.PlayerHasNoAmmo
```
## PlayerDied (Read-Only)
```lua
--- @type CEntityIOOutput
Read: clogicplayerproxy.PlayerDied
```
## Parent (Read-Only)
```lua
--- @type CLogicalEntity
Read: clogicplayerproxy.Parent
```
# Functions
## ToPtr
```lua
--- @return string
clogicplayerproxy:ToPtr()
```
## IsValid
```lua
--- @return bool
clogicplayerproxy:IsValid()
```

:::