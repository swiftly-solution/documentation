---
title: CSmartPropElement_PlaceOnPath
index: true
order: 2
category:
  - Guide
---

# CSmartPropElement_PlaceOnPath

::: tabs
@tab Lua
# Constructor
```lua
CSmartPropElement_PlaceOnPath(ptr --[[ string ]])
```
# Properties
## PathName 
```lua
@type string
Read: csmartpropelement_placeonpath.PathName
Write: csmartpropelement_placeonpath.PathName = value
```
## Spacing 
```lua
@type CSmartPropAttributeFloat
Read: csmartpropelement_placeonpath.Spacing
Write: csmartpropelement_placeonpath.Spacing = value
```
## OffsetAlongPath 
```lua
@type CSmartPropAttributeFloat
Read: csmartpropelement_placeonpath.OffsetAlongPath
Write: csmartpropelement_placeonpath.OffsetAlongPath = value
```
## PathOffset 
```lua
@type CSmartPropAttributeVector2D
Read: csmartpropelement_placeonpath.PathOffset
Write: csmartpropelement_placeonpath.PathOffset = value
```
## PathSpace (Read-Only)
```lua
@type CSmartPropAttributeCoordinateSpace
Read: csmartpropelement_placeonpath.PathSpace
```
## UseFixedUpDirection 
```lua
@type CSmartPropAttributeBool
Read: csmartpropelement_placeonpath.UseFixedUpDirection
Write: csmartpropelement_placeonpath.UseFixedUpDirection = value
```
## UseProjectedDistance 
```lua
@type CSmartPropAttributeBool
Read: csmartpropelement_placeonpath.UseProjectedDistance
Write: csmartpropelement_placeonpath.UseProjectedDistance = value
```
## UpDirection 
```lua
@type CSmartPropAttributeVector
Read: csmartpropelement_placeonpath.UpDirection
Write: csmartpropelement_placeonpath.UpDirection = value
```
## UpDirectionSpace (Read-Only)
```lua
@type CSmartPropAttributeCoordinateSpace
Read: csmartpropelement_placeonpath.UpDirectionSpace
```
## DefaultPath (Read-Only)
```lua
@type table
Read: csmartpropelement_placeonpath.DefaultPath
```
## Parent (Read-Only)
```lua
@type CSmartPropElement_Group
Read: csmartpropelement_placeonpath.Parent
```
# Functions
## ToPtr
```lua
@returns string
csmartpropelement_placeonpath:ToPtr()
```
## IsValid
```lua
@returns bool
csmartpropelement_placeonpath:IsValid()
```

:::