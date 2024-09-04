---
title: GameAmmoTypeInfo_t
index: true
order: 2
category:
  - Guide
---

# GameAmmoTypeInfo_t

::: tabs
@tab Lua
# Constructor
```lua
GameAmmoTypeInfo_t(ptr --[[ string ]])
```
# Properties
## BuySize 
```lua
@type number
Read: gameammotypeinfo_t.BuySize
Write: gameammotypeinfo_t.BuySize = value
```
## Cost 
```lua
@type number
Read: gameammotypeinfo_t.Cost
Write: gameammotypeinfo_t.Cost = value
```
## Parent (Read-Only)
```lua
@type AmmoTypeInfo_t
Read: gameammotypeinfo_t.Parent
```
# Functions
## ToPtr
```lua
@returns string
gameammotypeinfo_t:ToPtr()
```
## IsValid
```lua
@returns bool
gameammotypeinfo_t:IsValid()
```

:::