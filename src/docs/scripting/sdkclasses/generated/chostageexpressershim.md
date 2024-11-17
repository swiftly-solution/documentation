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
--- @param ptr string
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
--- @return string
chostageexpressershim:ToPtr()
```
## IsValid
```lua
--- @return bool
chostageexpressershim:IsValid()
```

:::