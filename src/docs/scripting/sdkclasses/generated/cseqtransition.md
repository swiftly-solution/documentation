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
--- @param ptr string
CSeqTransition(ptr)
```
# Properties
## FadeInTime 
```lua
--- @type number
Read: cseqtransition.FadeInTime
Write: cseqtransition.FadeInTime = value
```
## FadeOutTime 
```lua
--- @type number
Read: cseqtransition.FadeOutTime
Write: cseqtransition.FadeOutTime = value
```
# Functions
## ToPtr
```lua
--- @return string
cseqtransition:ToPtr()
```
## IsValid
```lua
--- @return bool
cseqtransition:IsValid()
```

:::