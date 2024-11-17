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
--- @param ptr string
CSingleplayRules(ptr)
```
# Properties
## SinglePlayerGameEnding 
```lua
--- @type boolean
Read: csingleplayrules.SinglePlayerGameEnding
Write: csingleplayrules.SinglePlayerGameEnding = value
```
## Parent (Read-Only)
```lua
--- @type CGameRules
Read: csingleplayrules.Parent
```
# Functions
## ToPtr
```lua
--- @return string
csingleplayrules:ToPtr()
```
## IsValid
```lua
--- @return bool
csingleplayrules:IsValid()
```

:::