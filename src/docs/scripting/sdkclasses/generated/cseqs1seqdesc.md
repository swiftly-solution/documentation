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
--- @param ptr string
CSeqS1SeqDesc(ptr)
```
# Properties
## Flags (Read-Only)
```lua
--- @type CSeqSeqDescFlag
Read: cseqs1seqdesc.Flags
```
## Fetch (Read-Only)
```lua
--- @type CSeqMultiFetch
Read: cseqs1seqdesc.Fetch
```
## LocalWeightlist 
```lua
--- @type number
Read: cseqs1seqdesc.LocalWeightlist
Write: cseqs1seqdesc.LocalWeightlist = value
```
## AutoLayerArray (Read-Only)
```lua
--- @type table
Read: cseqs1seqdesc.AutoLayerArray
```
## IKLockArray (Read-Only)
```lua
--- @type table
Read: cseqs1seqdesc.IKLockArray
```
## Transition (Read-Only)
```lua
--- @type CSeqTransition
Read: cseqs1seqdesc.Transition
```
## ActivityArray (Read-Only)
```lua
--- @type table
Read: cseqs1seqdesc.ActivityArray
```
## FootMotion (Read-Only)
```lua
--- @type table
Read: cseqs1seqdesc.FootMotion
```
# Functions
## ToPtr
```lua
--- @return string
cseqs1seqdesc:ToPtr()
```
## IsValid
```lua
--- @return bool
cseqs1seqdesc:IsValid()
```

:::