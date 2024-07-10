---
title: CSeqIKLock
index: true
order: 2
category:
  - Guide
---

# CSeqIKLock

::: tabs
@tab Lua
# Constructor
```lua
CSeqIKLock(ptr --[[ string ]])
```
# Properties
## PosWeight 
```lua
@type number
Read: cseqiklock.PosWeight
Write: cseqiklock.PosWeight = value
```
## AngleWeight 
```lua
@type number
Read: cseqiklock.AngleWeight
Write: cseqiklock.AngleWeight = value
```
## LocalBone 
```lua
@type number
Read: cseqiklock.LocalBone
Write: cseqiklock.LocalBone = value
```
## BonesOrientedAlongPositiveX 
```lua
@type boolean
Read: cseqiklock.BonesOrientedAlongPositiveX
Write: cseqiklock.BonesOrientedAlongPositiveX = value
```
# Functions
## ToPtr
```lua
@returns string
cseqiklock:ToPtr()
```
## IsValid
```lua
@returns bool
cseqiklock:IsValid()
```

:::