---
title: CRulePointEntity
index: true
order: 2
category:
  - Guide
---

# CRulePointEntity

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
CRulePointEntity(ptr)
```
# Properties
## Score 
```lua
--- @type number
Read: crulepointentity.Score
Write: crulepointentity.Score = value
```
## Parent (Read-Only)
```lua
--- @type CRuleEntity
Read: crulepointentity.Parent
```
# Functions
## ToPtr
```lua
--- @return string
crulepointentity:ToPtr()
```
## IsValid
```lua
--- @return bool
crulepointentity:IsValid()
```

:::