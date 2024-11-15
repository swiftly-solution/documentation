---
title: CBlood
index: true
order: 2
category:
  - Guide
---

# CBlood

::: tabs
@tab Lua
# Constructor
```lua
CBlood(ptr)
```
# Properties
## SprayAngles 
```lua
--- @type QAngle
Read: cblood.SprayAngles
Write: cblood.SprayAngles = value
```
## SprayDir 
```lua
--- @type Vector
Read: cblood.SprayDir
Write: cblood.SprayDir = value
```
## Amount 
```lua
--- @type number
Read: cblood.Amount
Write: cblood.Amount = value
```
## Color 
```lua
--- @type number
Read: cblood.Color
Write: cblood.Color = value
```
## Parent (Read-Only)
```lua
--- @type CPointEntity
Read: cblood.Parent
```
# Functions
## ToPtr
```lua
@returns string
cblood:ToPtr()
```
## IsValid
```lua
@returns bool
cblood:IsValid()
```

:::