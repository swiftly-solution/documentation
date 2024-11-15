---
title: CHostageExpresserShim
index: true
order: 2
category:
  - Guide
---

# CHostageExpresserShim

::: tabs
@tab Lua
# Constructor
```lua
CHostageExpresserShim(ptr)
```
# Properties
## Expresser (Read-Only)
```lua
--- @type CAI_Expresser
Read: chostageexpressershim.Expresser
```
## Parent (Read-Only)
```lua
--- @type CBaseCombatCharacter
Read: chostageexpressershim.Parent
```
# Functions
## ToPtr
```lua
@returns string
chostageexpressershim:ToPtr()
```
## IsValid
```lua
@returns bool
chostageexpressershim:IsValid()
```

:::