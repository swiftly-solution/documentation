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
--- @param ptr string
CSeqSynthAnimDesc(ptr)
```
# Properties
## Flags (Read-Only)
```lua
--- @type CSeqSeqDescFlag
Read: cseqsynthanimdesc.Flags
```
## Transition (Read-Only)
```lua
--- @type CSeqTransition
Read: cseqsynthanimdesc.Transition
```
## LocalBaseReference 
```lua
--- @type number
Read: cseqsynthanimdesc.LocalBaseReference
Write: cseqsynthanimdesc.LocalBaseReference = value
```
## LocalBoneMask 
```lua
--- @type number
Read: cseqsynthanimdesc.LocalBoneMask
Write: cseqsynthanimdesc.LocalBoneMask = value
```
## ActivityArray (Read-Only)
```lua
--- @type table
Read: cseqsynthanimdesc.ActivityArray
```
# Functions
## ToPtr
```lua
--- @return string
cseqsynthanimdesc:ToPtr()
```
## IsValid
```lua
--- @return bool
cseqsynthanimdesc:IsValid()
```

:::