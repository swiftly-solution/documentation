---
title: CEnvBeverage
index: true
order: 2
category:
  - Guide
---

# CEnvBeverage

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
CEnvBeverage(ptr)
```
# Properties
## CanInDispenser 
```lua
--- @type boolean
Read: cenvbeverage.CanInDispenser
Write: cenvbeverage.CanInDispenser = value
```
## BeverageType 
```lua
--- @type number
Read: cenvbeverage.BeverageType
Write: cenvbeverage.BeverageType = value
```
## Parent (Read-Only)
```lua
--- @type CBaseEntity
Read: cenvbeverage.Parent
```
# Functions
## ToPtr
```lua
--- @return string
cenvbeverage:ToPtr()
```
## IsValid
```lua
--- @return bool
cenvbeverage:IsValid()
```

:::