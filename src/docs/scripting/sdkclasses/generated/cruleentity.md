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
--- @param ptr string
CRuleEntity(ptr)
```
# Properties
## Master 
```lua
--- @type string
Read: cruleentity.Master
Write: cruleentity.Master = value
```
## Parent (Read-Only)
```lua
--- @type CBaseModelEntity
Read: cruleentity.Parent
```
# Functions
## ToPtr
```lua
--- @return string
cruleentity:ToPtr()
```
## IsValid
```lua
--- @return bool
cruleentity:IsValid()
```

:::