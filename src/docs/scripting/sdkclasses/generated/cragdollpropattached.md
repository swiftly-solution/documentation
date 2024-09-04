---
title: CRagdollPropAttached
index: true
order: 2
category:
  - Guide
---

# CRagdollPropAttached

::: tabs
@tab Lua
# Constructor
```lua
CRagdollPropAttached(ptr --[[ string ]])
```
# Properties
## BoneIndexAttached 
```lua
@type number
Read: cragdollpropattached.BoneIndexAttached
Write: cragdollpropattached.BoneIndexAttached = value
```
## RagdollAttachedObjectIndex 
```lua
@type number
Read: cragdollpropattached.RagdollAttachedObjectIndex
Write: cragdollpropattached.RagdollAttachedObjectIndex = value
```
## AttachmentPointBoneSpace 
```lua
@type Vector
Read: cragdollpropattached.AttachmentPointBoneSpace
Write: cragdollpropattached.AttachmentPointBoneSpace = value
```
## AttachmentPointRagdollSpace 
```lua
@type Vector
Read: cragdollpropattached.AttachmentPointRagdollSpace
Write: cragdollpropattached.AttachmentPointRagdollSpace = value
```
## ShouldDetach 
```lua
@type boolean
Read: cragdollpropattached.ShouldDetach
Write: cragdollpropattached.ShouldDetach = value
```
## ShouldDeleteAttachedActivationRecord 
```lua
@type boolean
Read: cragdollpropattached.ShouldDeleteAttachedActivationRecord
Write: cragdollpropattached.ShouldDeleteAttachedActivationRecord = value
```
## Parent (Read-Only)
```lua
@type CRagdollProp
Read: cragdollpropattached.Parent
```
# Functions
## ToPtr
```lua
@returns string
cragdollpropattached:ToPtr()
```
## IsValid
```lua
@returns bool
cragdollpropattached:IsValid()
```

:::