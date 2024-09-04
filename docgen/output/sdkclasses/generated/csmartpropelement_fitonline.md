---
title: CSmartPropElement_FitOnLine
index: true
order: 2
category:
  - Guide
---

# CSmartPropElement_FitOnLine

::: tabs
@tab Lua
# Constructor
```lua
CSmartPropElement_FitOnLine(ptr --[[ string ]])
```
# Properties
## Start 
```lua
@type CSmartPropAttributeVector
Read: csmartpropelement_fitonline.Start
Write: csmartpropelement_fitonline.Start = value
```
## End 
```lua
@type CSmartPropAttributeVector
Read: csmartpropelement_fitonline.End
Write: csmartpropelement_fitonline.End = value
```
## PointSpace (Read-Only)
```lua
@type CSmartPropAttributeCoordinateSpace
Read: csmartpropelement_fitonline.PointSpace
```
## OrientAlongLine 
```lua
@type CSmartPropAttributeBool
Read: csmartpropelement_fitonline.OrientAlongLine
Write: csmartpropelement_fitonline.OrientAlongLine = value
```
## UpDirection 
```lua
@type CSmartPropAttributeVector
Read: csmartpropelement_fitonline.UpDirection
Write: csmartpropelement_fitonline.UpDirection = value
```
## UpDirectionSpace (Read-Only)
```lua
@type CSmartPropAttributeCoordinateSpace
Read: csmartpropelement_fitonline.UpDirectionSpace
```
## PrioritizeUp 
```lua
@type CSmartPropAttributeBool
Read: csmartpropelement_fitonline.PrioritizeUp
Write: csmartpropelement_fitonline.PrioritizeUp = value
```
## ScaleMode (Read-Only)
```lua
@type CSmartPropAttributeScaleMode
Read: csmartpropelement_fitonline.ScaleMode
```
## PickMode (Read-Only)
```lua
@type CSmartPropAttributePickMode
Read: csmartpropelement_fitonline.PickMode
```
## Parent (Read-Only)
```lua
@type CSmartPropElement_Group
Read: csmartpropelement_fitonline.Parent
```
# Functions
## ToPtr
```lua
@returns string
csmartpropelement_fitonline:ToPtr()
```
## IsValid
```lua
@returns bool
csmartpropelement_fitonline:IsValid()
```

:::