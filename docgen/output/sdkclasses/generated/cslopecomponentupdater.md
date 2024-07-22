---
title: CSlopeComponentUpdater
index: true
order: 2
category:
  - Guide
---

# CSlopeComponentUpdater

::: tabs
@tab Lua
# Constructor
```lua
CSlopeComponentUpdater(ptr --[[ string ]])
```
# Properties
## TraceDistance 
```lua
@type number
Read: cslopecomponentupdater.TraceDistance
Write: cslopecomponentupdater.TraceDistance = value
```
## SlopeAngle (Read-Only)
```lua
@type CAnimParamHandle
Read: cslopecomponentupdater.SlopeAngle
```
## SlopeAngleFront (Read-Only)
```lua
@type CAnimParamHandle
Read: cslopecomponentupdater.SlopeAngleFront
```
## SlopeAngleSide (Read-Only)
```lua
@type CAnimParamHandle
Read: cslopecomponentupdater.SlopeAngleSide
```
## SlopeHeading (Read-Only)
```lua
@type CAnimParamHandle
Read: cslopecomponentupdater.SlopeHeading
```
## SlopeNormal (Read-Only)
```lua
@type CAnimParamHandle
Read: cslopecomponentupdater.SlopeNormal
```
## SlopeNormal_WorldSpace (Read-Only)
```lua
@type CAnimParamHandle
Read: cslopecomponentupdater.SlopeNormal_WorldSpace
```
## Parent 
```lua
@type CAnimComponentUpdater
Read: cslopecomponentupdater.Parent
Write: cslopecomponentupdater.Parent = value
```
# Functions
## ToPtr
```lua
@returns string
cslopecomponentupdater:ToPtr()
```
## IsValid
```lua
@returns bool
cslopecomponentupdater:IsValid()
```

:::