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
--- @param ptr string
GameAmmoTypeInfo_t(ptr)
```
# Properties
## BuySize 
```lua
--- @type number
Read: gameammotypeinfo_t.BuySize
Write: gameammotypeinfo_t.BuySize = value
```
## Cost 
```lua
--- @type number
Read: gameammotypeinfo_t.Cost
Write: gameammotypeinfo_t.Cost = value
```
## Parent (Read-Only)
```lua
--- @type AmmoTypeInfo_t
Read: gameammotypeinfo_t.Parent
```
# Functions
## ToPtr
```lua
--- @return string
gameammotypeinfo_t:ToPtr()
```
## IsValid
```lua
--- @return bool
gameammotypeinfo_t:IsValid()
```

:::