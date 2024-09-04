---
title: CParticleAnimTag
index: true
order: 2
category:
  - Guide
---

# CParticleAnimTag

::: tabs
@tab Lua
# Constructor
```lua
CParticleAnimTag(ptr --[[ string ]])
```
# Properties
## ParticleSystemName 
```lua
@type string
Read: cparticleanimtag.ParticleSystemName
Write: cparticleanimtag.ParticleSystemName = value
```
## ConfigName 
```lua
@type string
Read: cparticleanimtag.ConfigName
Write: cparticleanimtag.ConfigName = value
```
## DetachFromOwner 
```lua
@type boolean
Read: cparticleanimtag.DetachFromOwner
Write: cparticleanimtag.DetachFromOwner = value
```
## StopWhenTagEnds 
```lua
@type boolean
Read: cparticleanimtag.StopWhenTagEnds
Write: cparticleanimtag.StopWhenTagEnds = value
```
## TagEndStopIsInstant 
```lua
@type boolean
Read: cparticleanimtag.TagEndStopIsInstant
Write: cparticleanimtag.TagEndStopIsInstant = value
```
## AttachmentName 
```lua
@type string
Read: cparticleanimtag.AttachmentName
Write: cparticleanimtag.AttachmentName = value
```
## AttachmentType 
```lua
@type number
Read: cparticleanimtag.AttachmentType
Write: cparticleanimtag.AttachmentType = value
```
## AttachmentCP1Name 
```lua
@type string
Read: cparticleanimtag.AttachmentCP1Name
Write: cparticleanimtag.AttachmentCP1Name = value
```
## AttachmentCP1Type 
```lua
@type number
Read: cparticleanimtag.AttachmentCP1Type
Write: cparticleanimtag.AttachmentCP1Type = value
```
## Parent (Read-Only)
```lua
@type CAnimTagBase
Read: cparticleanimtag.Parent
```
# Functions
## ToPtr
```lua
@returns string
cparticleanimtag:ToPtr()
```
## IsValid
```lua
@returns bool
cparticleanimtag:IsValid()
```

:::