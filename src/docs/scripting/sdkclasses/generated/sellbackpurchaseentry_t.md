---
title: SellbackPurchaseEntry_t
index: true
order: 2
category:
  - Guide
---

# SellbackPurchaseEntry_t

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
SellbackPurchaseEntry_t(ptr)
```
# Properties
## DefIdx 
```lua
--- @type number
Read: sellbackpurchaseentry_t.DefIdx
Write: sellbackpurchaseentry_t.DefIdx = value
```
## Cost 
```lua
--- @type number
Read: sellbackpurchaseentry_t.Cost
Write: sellbackpurchaseentry_t.Cost = value
```
## PrevArmor 
```lua
--- @type number
Read: sellbackpurchaseentry_t.PrevArmor
Write: sellbackpurchaseentry_t.PrevArmor = value
```
## PrevHelmet 
```lua
--- @type boolean
Read: sellbackpurchaseentry_t.PrevHelmet
Write: sellbackpurchaseentry_t.PrevHelmet = value
```
## Item (Read-Only)
```lua
--- @type CEntityInstance
Read: sellbackpurchaseentry_t.Item
```
# Functions
## ToPtr
```lua
--- @return string
sellbackpurchaseentry_t:ToPtr()
```
## IsValid
```lua
--- @return bool
sellbackpurchaseentry_t:IsValid()
```

:::