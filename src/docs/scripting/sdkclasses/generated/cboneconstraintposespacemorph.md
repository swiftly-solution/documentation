---
title: CBoneConstraintPoseSpaceMorph
index: true
order: 2
category:
  - Guide
---

# CBoneConstraintPoseSpaceMorph

::: tabs
@tab Lua
# Constructor
```lua
CBoneConstraintPoseSpaceMorph(ptr --[[ string ]])
```
# Properties
## BoneName 
```lua
@type string
Read: cboneconstraintposespacemorph.BoneName
Write: cboneconstraintposespacemorph.BoneName = value
```
## AttachmentName 
```lua
@type string
Read: cboneconstraintposespacemorph.AttachmentName
Write: cboneconstraintposespacemorph.AttachmentName = value
```
## OutputMorph (Read-Only)
```lua
@type table
Read: cboneconstraintposespacemorph.OutputMorph
```
## InputList (Read-Only)
```lua
@type table
Read: cboneconstraintposespacemorph.InputList
```
## Clamp 
```lua
@type boolean
Read: cboneconstraintposespacemorph.Clamp
Write: cboneconstraintposespacemorph.Clamp = value
```
## Parent (Read-Only)
```lua
@type CBoneConstraintBase
Read: cboneconstraintposespacemorph.Parent
```
# Functions
## ToPtr
```lua
@returns string
cboneconstraintposespacemorph:ToPtr()
```
## IsValid
```lua
@returns bool
cboneconstraintposespacemorph:IsValid()
```

:::