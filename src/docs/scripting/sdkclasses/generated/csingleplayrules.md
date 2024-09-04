---
title: CSingleplayRules
index: true
order: 2
category:
  - Guide
---

# CSingleplayRules

::: tabs
@tab Lua
# Constructor
```lua
CSingleplayRules(ptr --[[ string ]])
```
# Properties
## SinglePlayerGameEnding 
```lua
@type boolean
Read: csingleplayrules.SinglePlayerGameEnding
Write: csingleplayrules.SinglePlayerGameEnding = value
```
## Parent (Read-Only)
```lua
@type CGameRules
Read: csingleplayrules.Parent
```
# Functions
## ToPtr
```lua
@returns string
csingleplayrules:ToPtr()
```
## IsValid
```lua
@returns bool
csingleplayrules:IsValid()
```

:::