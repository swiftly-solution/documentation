---
title: CTakeDamageResult
index: true
order: 2
category:
  - Guide
---

# CTakeDamageResult

::: tabs
@tab Lua
# Constructor
```lua
CTakeDamageResult(ptr --[[ string ]])
```
# Properties
## OriginatingInfo 
```lua
@type CTakeDamageInfo
Read: ctakedamageresult.OriginatingInfo
Write: ctakedamageresult.OriginatingInfo = value
```
## HealthLost 
```lua
@type number
Read: ctakedamageresult.HealthLost
Write: ctakedamageresult.HealthLost = value
```
## DamageTaken 
```lua
@type number
Read: ctakedamageresult.DamageTaken
Write: ctakedamageresult.DamageTaken = value
```
## TotalledHealthLost 
```lua
@type number
Read: ctakedamageresult.TotalledHealthLost
Write: ctakedamageresult.TotalledHealthLost = value
```
## TotalledDamageTaken 
```lua
@type number
Read: ctakedamageresult.TotalledDamageTaken
Write: ctakedamageresult.TotalledDamageTaken = value
```
# Functions
## ToPtr
```lua
@returns string
ctakedamageresult:ToPtr()
```
## IsValid
```lua
@returns bool
ctakedamageresult:IsValid()
```

:::