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
--- @param ptr string
SummaryTakeDamageInfo_t(ptr)
```
# Properties
## SummarisedCount 
```lua
--- @type number
Read: summarytakedamageinfo_t.SummarisedCount
Write: summarytakedamageinfo_t.SummarisedCount = value
```
## Info (Read-Only)
```lua
--- @type CTakeDamageInfo
Read: summarytakedamageinfo_t.Info
```
## Result (Read-Only)
```lua
--- @type CTakeDamageResult
Read: summarytakedamageinfo_t.Result
```
# Functions
## ToPtr
```lua
--- @return string
summarytakedamageinfo_t:ToPtr()
```
## IsValid
```lua
--- @return bool
summarytakedamageinfo_t:IsValid()
```

:::