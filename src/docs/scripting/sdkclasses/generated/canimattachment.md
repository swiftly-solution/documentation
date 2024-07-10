---
title: CAnimAttachment
index: true
order: 2
category:
  - Guide
---

# CAnimAttachment

::: tabs
@tab Lua
# Constructor
```lua
CAnimAttachment(ptr --[[ string ]])
```
# Properties
## InfluenceOffsets 
```lua
@type table
Read: canimattachment.InfluenceOffsets
Write: canimattachment.InfluenceOffsets = value
```
## InfluenceIndices 
```lua
@type table
Read: canimattachment.InfluenceIndices
Write: canimattachment.InfluenceIndices = value
```
## InfluenceWeights 
```lua
@type table
Read: canimattachment.InfluenceWeights
Write: canimattachment.InfluenceWeights = value
```
## NumInfluences 
```lua
@type number
Read: canimattachment.NumInfluences
Write: canimattachment.NumInfluences = value
```
# Functions
## ToPtr
```lua
@returns string
canimattachment:ToPtr()
```
## IsValid
```lua
@returns bool
canimattachment:IsValid()
```

:::