---
title: CSeqS1SeqDesc
index: true
order: 2
category:
  - Guide
---

# CSeqS1SeqDesc

::: tabs
@tab Lua
# Constructor
```lua
CSeqS1SeqDesc(ptr --[[ string ]])
```
# Properties
## Flags 
```lua
@type CSeqSeqDescFlag
Read: cseqs1seqdesc.Flags
Write: cseqs1seqdesc.Flags = value
```
## Fetch 
```lua
@type CSeqMultiFetch
Read: cseqs1seqdesc.Fetch
Write: cseqs1seqdesc.Fetch = value
```
## LocalWeightlist 
```lua
@type number
Read: cseqs1seqdesc.LocalWeightlist
Write: cseqs1seqdesc.LocalWeightlist = value
```
## AutoLayerArray 
```lua
@type table
Read: cseqs1seqdesc.AutoLayerArray
Write: cseqs1seqdesc.AutoLayerArray = value
```
## IKLockArray 
```lua
@type table
Read: cseqs1seqdesc.IKLockArray
Write: cseqs1seqdesc.IKLockArray = value
```
## Transition 
```lua
@type CSeqTransition
Read: cseqs1seqdesc.Transition
Write: cseqs1seqdesc.Transition = value
```
## ActivityArray 
```lua
@type table
Read: cseqs1seqdesc.ActivityArray
Write: cseqs1seqdesc.ActivityArray = value
```
## FootMotion 
```lua
@type table
Read: cseqs1seqdesc.FootMotion
Write: cseqs1seqdesc.FootMotion = value
```
# Functions
## ToPtr
```lua
@returns string
cseqs1seqdesc:ToPtr()
```
## IsValid
```lua
@returns bool
cseqs1seqdesc:IsValid()
```

:::