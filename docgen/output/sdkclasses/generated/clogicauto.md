---
title: CLogicAuto
index: true
order: 2
category:
  - Guide
---

# CLogicAuto

::: tabs
@tab Lua
# Constructor
```lua
CLogicAuto(ptr --[[ string ]])
```
# Properties
## OnMapSpawn (Read-Only)
```lua
@type CEntityIOOutput
Read: clogicauto.OnMapSpawn
```
## OnDemoMapSpawn (Read-Only)
```lua
@type CEntityIOOutput
Read: clogicauto.OnDemoMapSpawn
```
## OnNewGame (Read-Only)
```lua
@type CEntityIOOutput
Read: clogicauto.OnNewGame
```
## OnLoadGame (Read-Only)
```lua
@type CEntityIOOutput
Read: clogicauto.OnLoadGame
```
## OnMapTransition (Read-Only)
```lua
@type CEntityIOOutput
Read: clogicauto.OnMapTransition
```
## OnBackgroundMap (Read-Only)
```lua
@type CEntityIOOutput
Read: clogicauto.OnBackgroundMap
```
## OnMultiNewMap (Read-Only)
```lua
@type CEntityIOOutput
Read: clogicauto.OnMultiNewMap
```
## OnMultiNewRound (Read-Only)
```lua
@type CEntityIOOutput
Read: clogicauto.OnMultiNewRound
```
## OnVREnabled (Read-Only)
```lua
@type CEntityIOOutput
Read: clogicauto.OnVREnabled
```
## OnVRNotEnabled (Read-Only)
```lua
@type CEntityIOOutput
Read: clogicauto.OnVRNotEnabled
```
## Globalstate 
```lua
@type string
Read: clogicauto.Globalstate
Write: clogicauto.Globalstate = value
```
## Parent (Read-Only)
```lua
@type CBaseEntity
Read: clogicauto.Parent
```
# Functions
## ToPtr
```lua
@returns string
clogicauto:ToPtr()
```
## IsValid
```lua
@returns bool
clogicauto:IsValid()
```

:::