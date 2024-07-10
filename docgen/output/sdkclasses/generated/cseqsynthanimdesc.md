---
title: CSeqSynthAnimDesc
index: true
order: 2
category:
  - Guide
---

# CSeqSynthAnimDesc

::: tabs
@tab Lua
# Constructor
```lua
CSeqSynthAnimDesc(ptr --[[ string ]])
```
# Properties
## Flags 
```lua
@type CSeqSeqDescFlag
Read: cseqsynthanimdesc.Flags
Write: cseqsynthanimdesc.Flags = value
```
## Transition 
```lua
@type CSeqTransition
Read: cseqsynthanimdesc.Transition
Write: cseqsynthanimdesc.Transition = value
```
## LocalBaseReference 
```lua
@type number
Read: cseqsynthanimdesc.LocalBaseReference
Write: cseqsynthanimdesc.LocalBaseReference = value
```
## LocalBoneMask 
```lua
@type number
Read: cseqsynthanimdesc.LocalBoneMask
Write: cseqsynthanimdesc.LocalBoneMask = value
```
## ActivityArray 
```lua
@type table
Read: cseqsynthanimdesc.ActivityArray
Write: cseqsynthanimdesc.ActivityArray = value
```
# Functions
## ToPtr
```lua
@returns string
cseqsynthanimdesc:ToPtr()
```
## IsValid
```lua
@returns bool
cseqsynthanimdesc:IsValid()
```

:::