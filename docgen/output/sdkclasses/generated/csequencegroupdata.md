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
## LocalS1SeqDescArray 
```lua
@type table
Read: csequencegroupdata.LocalS1SeqDescArray
Write: csequencegroupdata.LocalS1SeqDescArray = value
```
## LocalMultiSeqDescArray 
```lua
@type table
Read: csequencegroupdata.LocalMultiSeqDescArray
Write: csequencegroupdata.LocalMultiSeqDescArray = value
```
## LocalSynthAnimDescArray 
```lua
@type table
Read: csequencegroupdata.LocalSynthAnimDescArray
Write: csequencegroupdata.LocalSynthAnimDescArray = value
```
## LocalCmdSeqDescArray 
```lua
@type table
Read: csequencegroupdata.LocalCmdSeqDescArray
Write: csequencegroupdata.LocalCmdSeqDescArray = value
```
## LocalBoneMaskArray 
```lua
@type table
Read: csequencegroupdata.LocalBoneMaskArray
Write: csequencegroupdata.LocalBoneMaskArray = value
```
## LocalScaleSetArray 
```lua
@type table
Read: csequencegroupdata.LocalScaleSetArray
Write: csequencegroupdata.LocalScaleSetArray = value
```
## LocalPoseParamArray 
```lua
@type table
Read: csequencegroupdata.LocalPoseParamArray
Write: csequencegroupdata.LocalPoseParamArray = value
```
## LocalIKAutoplayLockArray 
```lua
@type table
Read: csequencegroupdata.LocalIKAutoplayLockArray
Write: csequencegroupdata.LocalIKAutoplayLockArray = value
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