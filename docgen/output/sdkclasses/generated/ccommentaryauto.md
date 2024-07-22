---
title: CCommentaryAuto
index: true
order: 2
category:
  - Guide
---

# CCommentaryAuto

::: tabs
@tab Lua
# Constructor
```lua
CCommentaryAuto(ptr --[[ string ]])
```
# Properties
## OnCommentaryNewGame (Read-Only)
```lua
@type CEntityIOOutput
Read: ccommentaryauto.OnCommentaryNewGame
```
## OnCommentaryMidGame (Read-Only)
```lua
@type CEntityIOOutput
Read: ccommentaryauto.OnCommentaryMidGame
```
## OnCommentaryMultiplayerSpawn (Read-Only)
```lua
@type CEntityIOOutput
Read: ccommentaryauto.OnCommentaryMultiplayerSpawn
```
## Parent 
```lua
@type CBaseEntity
Read: ccommentaryauto.Parent
Write: ccommentaryauto.Parent = value
```
# Functions
## ToPtr
```lua
@returns string
ccommentaryauto:ToPtr()
```
## IsValid
```lua
@returns bool
ccommentaryauto:IsValid()
```

:::