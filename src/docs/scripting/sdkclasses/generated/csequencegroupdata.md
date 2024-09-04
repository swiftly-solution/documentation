---
title: CSequenceGroupData
index: true
order: 2
category:
  - Guide
---

# CSequenceGroupData

::: tabs
@tab Lua
# Constructor
```lua
CSequenceGroupData(ptr --[[ string ]])
```
# Properties
## Flags 
```lua
@type number
Read: csequencegroupdata.Flags
Write: csequencegroupdata.Flags = value
```
## LocalS1SeqDescArray (Read-Only)
```lua
@type table
Read: csequencegroupdata.LocalS1SeqDescArray
```
## LocalMultiSeqDescArray (Read-Only)
```lua
@type table
Read: csequencegroupdata.LocalMultiSeqDescArray
```
## LocalSynthAnimDescArray (Read-Only)
```lua
@type table
Read: csequencegroupdata.LocalSynthAnimDescArray
```
## LocalCmdSeqDescArray (Read-Only)
```lua
@type table
Read: csequencegroupdata.LocalCmdSeqDescArray
```
## LocalBoneMaskArray (Read-Only)
```lua
@type table
Read: csequencegroupdata.LocalBoneMaskArray
```
## LocalScaleSetArray (Read-Only)
```lua
@type table
Read: csequencegroupdata.LocalScaleSetArray
```
## LocalPoseParamArray (Read-Only)
```lua
@type table
Read: csequencegroupdata.LocalPoseParamArray
```
## LocalIKAutoplayLockArray (Read-Only)
```lua
@type table
Read: csequencegroupdata.LocalIKAutoplayLockArray
```
# Functions
## ToPtr
```lua
@returns string
csequencegroupdata:ToPtr()
```
## IsValid
```lua
@returns bool
csequencegroupdata:IsValid()
```

:::