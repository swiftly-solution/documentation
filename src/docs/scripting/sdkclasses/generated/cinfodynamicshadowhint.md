---
title: CInfoDynamicShadowHint
index: true
order: 2
category:
  - Guide
---

# CInfoDynamicShadowHint

::: tabs
@tab Lua
# Constructor
```lua
CInfoDynamicShadowHint(ptr)
```
# Properties
## Disabled 
```lua
--- @type boolean
Read: cinfodynamicshadowhint.Disabled
Write: cinfodynamicshadowhint.Disabled = value
```
## Range 
```lua
--- @type number
Read: cinfodynamicshadowhint.Range
Write: cinfodynamicshadowhint.Range = value
```
## Importance 
```lua
--- @type number
Read: cinfodynamicshadowhint.Importance
Write: cinfodynamicshadowhint.Importance = value
```
## LightChoice 
```lua
--- @type number
Read: cinfodynamicshadowhint.LightChoice
Write: cinfodynamicshadowhint.LightChoice = value
```
## Light (Read-Only)
```lua
--- @type CBaseEntity
Read: cinfodynamicshadowhint.Light
```
## Parent (Read-Only)
```lua
--- @type CPointEntity
Read: cinfodynamicshadowhint.Parent
```
# Functions
## ToPtr
```lua
@returns string
cinfodynamicshadowhint:ToPtr()
```
## IsValid
```lua
@returns bool
cinfodynamicshadowhint:IsValid()
```

:::