---
title: SummaryTakeDamageInfo_t
index: true
order: 2
category:
  - Guide
---

# SummaryTakeDamageInfo_t

::: tabs
@tab Lua
# Constructor
```lua
SummaryTakeDamageInfo_t(ptr --[[ string ]])
```
# Properties
## SummarisedCount 
```lua
@type number
Read: summarytakedamageinfo_t.SummarisedCount
Write: summarytakedamageinfo_t.SummarisedCount = value
```
## Info (Read-Only)
```lua
@type CTakeDamageInfo
Read: summarytakedamageinfo_t.Info
```
## Result (Read-Only)
```lua
@type CTakeDamageResult
Read: summarytakedamageinfo_t.Result
```
## Target (Read-Only)
```lua
@type CBaseEntity
Read: summarytakedamageinfo_t.Target
```
# Functions
## ToPtr
```lua
@returns string
summarytakedamageinfo_t:ToPtr()
```
## IsValid
```lua
@returns bool
summarytakedamageinfo_t:IsValid()
```

:::