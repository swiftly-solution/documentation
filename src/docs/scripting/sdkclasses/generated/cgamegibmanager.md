---
title: CGameGibManager
index: true
order: 2
category:
  - Guide
---

# CGameGibManager

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
CGameGibManager(ptr)
```
# Properties
## AllowNewGibs 
```lua
--- @type boolean
Read: cgamegibmanager.AllowNewGibs
Write: cgamegibmanager.AllowNewGibs = value
```
## CurrentMaxPieces 
```lua
--- @type number
Read: cgamegibmanager.CurrentMaxPieces
Write: cgamegibmanager.CurrentMaxPieces = value
```
## MaxPieces 
```lua
--- @type number
Read: cgamegibmanager.MaxPieces
Write: cgamegibmanager.MaxPieces = value
```
## LastFrame 
```lua
--- @type number
Read: cgamegibmanager.LastFrame
Write: cgamegibmanager.LastFrame = value
```
## Parent (Read-Only)
```lua
--- @type CBaseEntity
Read: cgamegibmanager.Parent
```
# Functions
## ToPtr
```lua
--- @return string
cgamegibmanager:ToPtr()
```
## IsValid
```lua
--- @return bool
cgamegibmanager:IsValid()
```

:::