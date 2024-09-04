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
## Flags (Read-Only)
```lua
@type CSeqSeqDescFlag
Read: cseqsynthanimdesc.Flags
```
## Transition (Read-Only)
```lua
@type CSeqTransition
Read: cseqsynthanimdesc.Transition
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
## ActivityArray (Read-Only)
```lua
@type table
Read: cseqsynthanimdesc.ActivityArray
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