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
CHostageExpresserShim(ptr --[[ string ]])
```
# Properties
## Expresser 
```lua
@type CAI_Expresser
Read: chostageexpressershim.Expresser
Write: chostageexpressershim.Expresser = value
```
## Parent 
```lua
@type CBaseCombatCharacter
Read: chostageexpressershim.Parent
Write: chostageexpressershim.Parent = value
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