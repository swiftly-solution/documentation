---
title: CJumpHelperUpdateNode
index: true
order: 2
category:
  - Guide
---

# CJumpHelperUpdateNode

::: tabs
@tab Lua
# Constructor
```lua
CJumpHelperUpdateNode(ptr --[[ string ]])
```
# Properties
## TargetParam (Read-Only)
```lua
@type CAnimParamHandle
Read: cjumphelperupdatenode.TargetParam
```
## OriginalJumpMovement 
```lua
@type Vector
Read: cjumphelperupdatenode.OriginalJumpMovement
Write: cjumphelperupdatenode.OriginalJumpMovement = value
```
## OriginalJumpDuration 
```lua
@type number
Read: cjumphelperupdatenode.OriginalJumpDuration
Write: cjumphelperupdatenode.OriginalJumpDuration = value
```
## JumpStartCycle 
```lua
@type number
Read: cjumphelperupdatenode.JumpStartCycle
Write: cjumphelperupdatenode.JumpStartCycle = value
```
## JumpEndCycle 
```lua
@type number
Read: cjumphelperupdatenode.JumpEndCycle
Write: cjumphelperupdatenode.JumpEndCycle = value
```
## CorrectionMethod 
```lua
@type number
Read: cjumphelperupdatenode.CorrectionMethod
Write: cjumphelperupdatenode.CorrectionMethod = value
```
## TranslationAxis 
```lua
@type table
Read: cjumphelperupdatenode.TranslationAxis
Write: cjumphelperupdatenode.TranslationAxis = value
```
## ScaleSpeed 
```lua
@type boolean
Read: cjumphelperupdatenode.ScaleSpeed
Write: cjumphelperupdatenode.ScaleSpeed = value
```
## Parent (Read-Only)
```lua
@type CSequenceUpdateNode
Read: cjumphelperupdatenode.Parent
```
# Functions
## ToPtr
```lua
@returns string
cjumphelperupdatenode:ToPtr()
```
## IsValid
```lua
@returns bool
cjumphelperupdatenode:IsValid()
```

:::