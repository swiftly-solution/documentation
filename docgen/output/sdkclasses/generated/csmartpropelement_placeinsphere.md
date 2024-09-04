---
title: CSmartPropElement_PlaceInSphere
index: true
order: 2
category:
  - Guide
---

# CSmartPropElement_PlaceInSphere

::: tabs
@tab Lua
# Constructor
```lua
CSmartPropElement_PlaceInSphere(ptr --[[ string ]])
```
# Properties
## PlacementMode (Read-Only)
```lua
@type CSmartPropAttributeRadiusPlacementMode
Read: csmartpropelement_placeinsphere.PlacementMode
```
## DistributionMode (Read-Only)
```lua
@type CSmartPropAttributeDistributionMode
Read: csmartpropelement_placeinsphere.DistributionMode
```
## Randomness 
```lua
@type CSmartPropAttributeFloat
Read: csmartpropelement_placeinsphere.Randomness
Write: csmartpropelement_placeinsphere.Randomness = value
```
## PlaneUpDirection 
```lua
@type CSmartPropAttributeVector
Read: csmartpropelement_placeinsphere.PlaneUpDirection
Write: csmartpropelement_placeinsphere.PlaneUpDirection = value
```
## CountMin 
```lua
@type CSmartPropAttributeInt
Read: csmartpropelement_placeinsphere.CountMin
Write: csmartpropelement_placeinsphere.CountMin = value
```
## CountMax 
```lua
@type CSmartPropAttributeInt
Read: csmartpropelement_placeinsphere.CountMax
Write: csmartpropelement_placeinsphere.CountMax = value
```
## PositionRadiusInner 
```lua
@type CSmartPropAttributeFloat
Read: csmartpropelement_placeinsphere.PositionRadiusInner
Write: csmartpropelement_placeinsphere.PositionRadiusInner = value
```
## PositionRadiusOuter 
```lua
@type CSmartPropAttributeFloat
Read: csmartpropelement_placeinsphere.PositionRadiusOuter
Write: csmartpropelement_placeinsphere.PositionRadiusOuter = value
```
## AlignOrientation 
```lua
@type CSmartPropAttributeBool
Read: csmartpropelement_placeinsphere.AlignOrientation
Write: csmartpropelement_placeinsphere.AlignOrientation = value
```
## AlignDirection 
```lua
@type CSmartPropAttributeVector
Read: csmartpropelement_placeinsphere.AlignDirection
Write: csmartpropelement_placeinsphere.AlignDirection = value
```
## Parent (Read-Only)
```lua
@type CSmartPropElement_Group
Read: csmartpropelement_placeinsphere.Parent
```
# Functions
## ToPtr
```lua
@returns string
csmartpropelement_placeinsphere:ToPtr()
```
## IsValid
```lua
@returns bool
csmartpropelement_placeinsphere:IsValid()
```

:::