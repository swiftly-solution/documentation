---
title: CAudioPhonemeTag
index: true
order: 2
category:
  - Guide
---

# CAudioPhonemeTag

::: tabs
@tab Lua
# Constructor
```lua
CAudioPhonemeTag(ptr --[[ string ]])
```
# Properties
## StartTime 
```lua
@type number
Read: caudiophonemetag.StartTime
Write: caudiophonemetag.StartTime = value
```
## EndTime 
```lua
@type number
Read: caudiophonemetag.EndTime
Write: caudiophonemetag.EndTime = value
```
## PhonemeCode 
```lua
@type number
Read: caudiophonemetag.PhonemeCode
Write: caudiophonemetag.PhonemeCode = value
```
# Functions
## ToPtr
```lua
@returns string
caudiophonemetag:ToPtr()
```
## IsValid
```lua
@returns bool
caudiophonemetag:IsValid()
```

:::