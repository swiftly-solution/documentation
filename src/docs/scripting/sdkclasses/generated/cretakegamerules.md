---
title: CRetakeGameRules
index: true
order: 2
category:
  - Guide
---

# CRetakeGameRules

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
CRetakeGameRules(ptr)
```
# Properties
## MatchSeed 
```lua
--- @type number
Read: cretakegamerules.MatchSeed
Write: cretakegamerules.MatchSeed = value
```
## BlockersPresent 
```lua
--- @type boolean
Read: cretakegamerules.BlockersPresent
Write: cretakegamerules.BlockersPresent = value
```
## RoundInProgress 
```lua
--- @type boolean
Read: cretakegamerules.RoundInProgress
Write: cretakegamerules.RoundInProgress = value
```
## FirstSecondHalfRound 
```lua
--- @type number
Read: cretakegamerules.FirstSecondHalfRound
Write: cretakegamerules.FirstSecondHalfRound = value
```
## BombSite 
```lua
--- @type number
Read: cretakegamerules.BombSite
Write: cretakegamerules.BombSite = value
```
# Functions
## ToPtr
```lua
--- @return string
cretakegamerules:ToPtr()
```
## IsValid
```lua
--- @return bool
cretakegamerules:IsValid()
```

:::