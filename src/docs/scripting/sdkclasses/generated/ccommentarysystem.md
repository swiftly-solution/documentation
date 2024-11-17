---
title: CCommentarySystem
index: true
order: 2
category:
  - Guide
---

# CCommentarySystem

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
CCommentarySystem(ptr)
```
# Properties
## CommentaryConvarsChanging 
```lua
--- @type boolean
Read: ccommentarysystem.CommentaryConvarsChanging
Write: ccommentarysystem.CommentaryConvarsChanging = value
```
## CommentaryEnabledMidGame 
```lua
--- @type boolean
Read: ccommentarysystem.CommentaryEnabledMidGame
Write: ccommentarysystem.CommentaryEnabledMidGame = value
```
## NextTeleportTime 
```lua
--- @type number
Read: ccommentarysystem.NextTeleportTime
Write: ccommentarysystem.NextTeleportTime = value
```
## TeleportStage 
```lua
--- @type number
Read: ccommentarysystem.TeleportStage
Write: ccommentarysystem.TeleportStage = value
```
## CheatState 
```lua
--- @type boolean
Read: ccommentarysystem.CheatState
Write: ccommentarysystem.CheatState = value
```
## IsFirstSpawnGroupToLoad 
```lua
--- @type boolean
Read: ccommentarysystem.IsFirstSpawnGroupToLoad
Write: ccommentarysystem.IsFirstSpawnGroupToLoad = value
```
# Functions
## ToPtr
```lua
--- @return string
ccommentarysystem:ToPtr()
```
## IsValid
```lua
--- @return bool
ccommentarysystem:IsValid()
```

:::