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
FilterHealth(ptr --[[ string ]])
```
# Properties
## AdrenalineActive 
```lua
@type boolean
Read: filterhealth.AdrenalineActive
Write: filterhealth.AdrenalineActive = value
```
## HealthMin 
```lua
@type number
Read: filterhealth.HealthMin
Write: filterhealth.HealthMin = value
```
## HealthMax 
```lua
@type number
Read: filterhealth.HealthMax
Write: filterhealth.HealthMax = value
```
## Parent 
```lua
@type CBaseFilter
Read: filterhealth.Parent
Write: filterhealth.Parent = value
```
# Functions
## ToPtr
```lua
@returns string
filterhealth:ToPtr()
```
## IsValid
```lua
@returns bool
filterhealth:IsValid()
```

:::