---
title: FilterHealth
index: true
order: 2
category:
  - Guide
---

# FilterHealth

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
FilterHealth(ptr)
```
# Properties
## AdrenalineActive 
```lua
--- @type boolean
Read: filterhealth.AdrenalineActive
Write: filterhealth.AdrenalineActive = value
```
## HealthMin 
```lua
--- @type number
Read: filterhealth.HealthMin
Write: filterhealth.HealthMin = value
```
## HealthMax 
```lua
--- @type number
Read: filterhealth.HealthMax
Write: filterhealth.HealthMax = value
```
## Parent (Read-Only)
```lua
--- @type CBaseFilter
Read: filterhealth.Parent
```
# Functions
## ToPtr
```lua
--- @return string
filterhealth:ToPtr()
```
## IsValid
```lua
--- @return bool
filterhealth:IsValid()
```

:::