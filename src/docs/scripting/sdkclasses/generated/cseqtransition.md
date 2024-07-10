---
title: CSeqTransition
index: true
order: 2
category:
  - Guide
---

# CSeqTransition

::: tabs
@tab Lua
# Constructor
```lua
CSeqTransition(ptr --[[ string ]])
```
# Properties
## FadeInTime 
```lua
@type number
Read: cseqtransition.FadeInTime
Write: cseqtransition.FadeInTime = value
```
## FadeOutTime 
```lua
@type number
Read: cseqtransition.FadeOutTime
Write: cseqtransition.FadeOutTime = value
```
# Functions
## ToPtr
```lua
@returns string
cseqtransition:ToPtr()
```
## IsValid
```lua
@returns bool
cseqtransition:IsValid()
```

:::