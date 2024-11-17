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
--- @param ptr string
CCommentaryAuto(ptr)
```
# Properties
## OnCommentaryNewGame (Read-Only)
```lua
--- @type CEntityIOOutput
Read: ccommentaryauto.OnCommentaryNewGame
```
## OnCommentaryMidGame (Read-Only)
```lua
--- @type CEntityIOOutput
Read: ccommentaryauto.OnCommentaryMidGame
```
## OnCommentaryMultiplayerSpawn (Read-Only)
```lua
--- @type CEntityIOOutput
Read: ccommentaryauto.OnCommentaryMultiplayerSpawn
```
## Parent (Read-Only)
```lua
--- @type CBaseEntity
Read: ccommentaryauto.Parent
```
# Functions
## ToPtr
```lua
--- @return string
ccommentaryauto:ToPtr()
```
## IsValid
```lua
--- @return bool
ccommentaryauto:IsValid()
```

:::