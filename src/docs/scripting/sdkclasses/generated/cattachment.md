---
title: CAttachment
index: true
order: 2
category:
  - Guide
---

# CAttachment

::: tabs
@tab Lua
# Constructor
```lua
CAttachment(ptr)
```
# Properties
## Name 
```lua
--- @type string
Read: cattachment.Name
Write: cattachment.Name = value
```
## InfluenceNames 
```lua
--- @type table
Read: cattachment.InfluenceNames
Write: cattachment.InfluenceNames = value
```
## InfluenceOffsets 
```lua
--- @type table
Read: cattachment.InfluenceOffsets
Write: cattachment.InfluenceOffsets = value
```
## InfluenceWeights 
```lua
--- @type table
Read: cattachment.InfluenceWeights
Write: cattachment.InfluenceWeights = value
```
## InfluenceRootTransform 
```lua
--- @type table
Read: cattachment.InfluenceRootTransform
Write: cattachment.InfluenceRootTransform = value
```
## Influences 
```lua
--- @type number
Read: cattachment.Influences
Write: cattachment.Influences = value
```
## IgnoreRotation 
```lua
--- @type boolean
Read: cattachment.IgnoreRotation
Write: cattachment.IgnoreRotation = value
```
# Functions
## ToPtr
```lua
@returns string
cattachment:ToPtr()
```
## IsValid
```lua
@returns bool
cattachment:IsValid()
```

:::