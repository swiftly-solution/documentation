---
title: ParticlePreviewState_t
index: true
order: 2
category:
  - Guide
---

# ParticlePreviewState_t

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
ParticlePreviewState_t(ptr)
```
# Properties
## PreviewModel 
```lua
--- @type string
Read: particlepreviewstate_t.PreviewModel
Write: particlepreviewstate_t.PreviewModel = value
```
## ModSpecificData 
```lua
--- @type number
Read: particlepreviewstate_t.ModSpecificData
Write: particlepreviewstate_t.ModSpecificData = value
```
## GroundType 
```lua
--- @type number
Read: particlepreviewstate_t.GroundType
Write: particlepreviewstate_t.GroundType = value
```
## SequenceName 
```lua
--- @type string
Read: particlepreviewstate_t.SequenceName
Write: particlepreviewstate_t.SequenceName = value
```
## FireParticleOnSequenceFrame 
```lua
--- @type number
Read: particlepreviewstate_t.FireParticleOnSequenceFrame
Write: particlepreviewstate_t.FireParticleOnSequenceFrame = value
```
## HitboxSetName 
```lua
--- @type string
Read: particlepreviewstate_t.HitboxSetName
Write: particlepreviewstate_t.HitboxSetName = value
```
## MaterialGroupName 
```lua
--- @type string
Read: particlepreviewstate_t.MaterialGroupName
Write: particlepreviewstate_t.MaterialGroupName = value
```
## BodyGroups (Read-Only)
```lua
--- @type table
Read: particlepreviewstate_t.BodyGroups
```
## PlaybackSpeed 
```lua
--- @type number
Read: particlepreviewstate_t.PlaybackSpeed
Write: particlepreviewstate_t.PlaybackSpeed = value
```
## ParticleSimulationRate 
```lua
--- @type number
Read: particlepreviewstate_t.ParticleSimulationRate
Write: particlepreviewstate_t.ParticleSimulationRate = value
```
## ShouldDrawHitboxes 
```lua
--- @type boolean
Read: particlepreviewstate_t.ShouldDrawHitboxes
Write: particlepreviewstate_t.ShouldDrawHitboxes = value
```
## ShouldDrawAttachments 
```lua
--- @type boolean
Read: particlepreviewstate_t.ShouldDrawAttachments
Write: particlepreviewstate_t.ShouldDrawAttachments = value
```
## ShouldDrawAttachmentNames 
```lua
--- @type boolean
Read: particlepreviewstate_t.ShouldDrawAttachmentNames
Write: particlepreviewstate_t.ShouldDrawAttachmentNames = value
```
## ShouldDrawControlPointAxes 
```lua
--- @type boolean
Read: particlepreviewstate_t.ShouldDrawControlPointAxes
Write: particlepreviewstate_t.ShouldDrawControlPointAxes = value
```
## AnimationNonLooping 
```lua
--- @type boolean
Read: particlepreviewstate_t.AnimationNonLooping
Write: particlepreviewstate_t.AnimationNonLooping = value
```
## PreviewGravity 
```lua
--- @type Vector
Read: particlepreviewstate_t.PreviewGravity
Write: particlepreviewstate_t.PreviewGravity = value
```
# Functions
## ToPtr
```lua
--- @return string
particlepreviewstate_t:ToPtr()
```
## IsValid
```lua
--- @return bool
particlepreviewstate_t:IsValid()
```

:::