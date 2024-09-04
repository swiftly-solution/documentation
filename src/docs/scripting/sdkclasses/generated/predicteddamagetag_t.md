---
title: PredictedDamageTag_t
index: true
order: 2
category:
  - Guide
---

# PredictedDamageTag_t

::: tabs
@tab Lua
# Constructor
```lua
PredictedDamageTag_t(ptr --[[ string ]])
```
# Properties
## TagTick 
```lua
@type number
Read: predicteddamagetag_t.TagTick
Write: predicteddamagetag_t.TagTick = value
```
## FlinchModSmall 
```lua
@type number
Read: predicteddamagetag_t.FlinchModSmall
Write: predicteddamagetag_t.FlinchModSmall = value
```
## FlinchModLarge 
```lua
@type number
Read: predicteddamagetag_t.FlinchModLarge
Write: predicteddamagetag_t.FlinchModLarge = value
```
## FriendlyFireDamageReductionRatio 
```lua
@type number
Read: predicteddamagetag_t.FriendlyFireDamageReductionRatio
Write: predicteddamagetag_t.FriendlyFireDamageReductionRatio = value
```
# Functions
## ToPtr
```lua
@returns string
predicteddamagetag_t:ToPtr()
```
## IsValid
```lua
@returns bool
predicteddamagetag_t:IsValid()
```

:::