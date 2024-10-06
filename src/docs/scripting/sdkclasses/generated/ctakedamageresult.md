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
## OriginatingInfo (Read-Only)
```lua
@type CTakeDamageInfo
Read: ctakedamageresult.OriginatingInfo
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
## TotalledDamageAbsorbed 
```lua
@type number
Read: ctakedamageresult.TotalledDamageAbsorbed
Write: ctakedamageresult.TotalledDamageAbsorbed = value
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