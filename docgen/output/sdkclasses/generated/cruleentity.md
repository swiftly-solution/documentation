---
title: CRuleEntity
index: true
order: 2
category:
  - Guide
---

# CRuleEntity

::: tabs
@tab Lua
# Constructor
```lua
CRuleEntity(ptr --[[ string ]])
```
# Properties
## Master 
```lua
@type string
Read: cruleentity.Master
Write: cruleentity.Master = value
```
## Parent (Read-Only)
```lua
@type CBaseModelEntity
Read: cruleentity.Parent
```
# Functions
## ToPtr
```lua
@returns string
cruleentity:ToPtr()
```
## IsValid
```lua
@returns bool
cruleentity:IsValid()
```

:::