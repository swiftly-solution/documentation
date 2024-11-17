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
--- @param ptr string
CSlopeComponentUpdater(ptr)
```
# Properties
## TraceDistance 
```lua
--- @type number
Read: cslopecomponentupdater.TraceDistance
Write: cslopecomponentupdater.TraceDistance = value
```
## SlopeAngle (Read-Only)
```lua
--- @type CAnimParamHandle
Read: cslopecomponentupdater.SlopeAngle
```
## SlopeAngleFront (Read-Only)
```lua
--- @type CAnimParamHandle
Read: cslopecomponentupdater.SlopeAngleFront
```
## SlopeAngleSide (Read-Only)
```lua
--- @type CAnimParamHandle
Read: cslopecomponentupdater.SlopeAngleSide
```
## SlopeHeading (Read-Only)
```lua
--- @type CAnimParamHandle
Read: cslopecomponentupdater.SlopeHeading
```
## SlopeNormal (Read-Only)
```lua
--- @type CAnimParamHandle
Read: cslopecomponentupdater.SlopeNormal
```
## SlopeNormal_WorldSpace (Read-Only)
```lua
--- @type CAnimParamHandle
Read: cslopecomponentupdater.SlopeNormal_WorldSpace
```
## Parent (Read-Only)
```lua
--- @type CAnimComponentUpdater
Read: cslopecomponentupdater.Parent
```
# Functions
## ToPtr
```lua
--- @return string
cslopecomponentupdater:ToPtr()
```
## IsValid
```lua
--- @return bool
cslopecomponentupdater:IsValid()
```

:::