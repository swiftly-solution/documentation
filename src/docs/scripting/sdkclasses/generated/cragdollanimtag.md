---
title: CRagdollAnimTag
index: true
order: 2
category:
  - Guide
---

# CRagdollAnimTag

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
CRagdollAnimTag(ptr)
```
# Properties
## PoseControl 
```lua
--- @type number
Read: cragdollanimtag.PoseControl
Write: cragdollanimtag.PoseControl = value
```
## Frequency 
```lua
--- @type number
Read: cragdollanimtag.Frequency
Write: cragdollanimtag.Frequency = value
```
## DampingRatio 
```lua
--- @type number
Read: cragdollanimtag.DampingRatio
Write: cragdollanimtag.DampingRatio = value
```
## DecayDuration 
```lua
--- @type number
Read: cragdollanimtag.DecayDuration
Write: cragdollanimtag.DecayDuration = value
```
## DecayBias 
```lua
--- @type number
Read: cragdollanimtag.DecayBias
Write: cragdollanimtag.DecayBias = value
```
## Destroy 
```lua
--- @type boolean
Read: cragdollanimtag.Destroy
Write: cragdollanimtag.Destroy = value
```
## Parent (Read-Only)
```lua
--- @type CAnimTagBase
Read: cragdollanimtag.Parent
```
# Functions
## ToPtr
```lua
--- @return string
cragdollanimtag:ToPtr()
```
## IsValid
```lua
--- @return bool
cragdollanimtag:IsValid()
```

:::