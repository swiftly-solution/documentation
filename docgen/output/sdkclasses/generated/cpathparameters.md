---
title: CPathParameters
index: true
order: 2
category:
  - Guide
---

# CPathParameters

::: tabs
@tab Lua
# Constructor
```lua
CPathParameters(ptr --[[ string ]])
```
# Properties
## StartControlPointNumber 
```lua
@type number
Read: cpathparameters.StartControlPointNumber
Write: cpathparameters.StartControlPointNumber = value
```
## EndControlPointNumber 
```lua
@type number
Read: cpathparameters.EndControlPointNumber
Write: cpathparameters.EndControlPointNumber = value
```
## BulgeControl 
```lua
@type number
Read: cpathparameters.BulgeControl
Write: cpathparameters.BulgeControl = value
```
## Bulge 
```lua
@type number
Read: cpathparameters.Bulge
Write: cpathparameters.Bulge = value
```
## MidPoint 
```lua
@type number
Read: cpathparameters.MidPoint
Write: cpathparameters.MidPoint = value
```
## StartPointOffset 
```lua
@type Vector
Read: cpathparameters.StartPointOffset
Write: cpathparameters.StartPointOffset = value
```
## MidPointOffset 
```lua
@type Vector
Read: cpathparameters.MidPointOffset
Write: cpathparameters.MidPointOffset = value
```
## EndOffset 
```lua
@type Vector
Read: cpathparameters.EndOffset
Write: cpathparameters.EndOffset = value
```
# Functions
## ToPtr
```lua
@returns string
cpathparameters:ToPtr()
```
## IsValid
```lua
@returns bool
cpathparameters:IsValid()
```

:::