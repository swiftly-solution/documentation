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
## Parent 
```lua
@type CGameRules
Read: csingleplayrules.Parent
Write: csingleplayrules.Parent = value
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