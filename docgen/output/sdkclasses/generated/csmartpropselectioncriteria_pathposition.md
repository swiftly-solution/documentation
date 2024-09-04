---
title: CSmartPropSelectionCriteria_PathPosition
index: true
order: 2
category:
  - Guide
---

# CSmartPropSelectionCriteria_PathPosition

::: tabs
@tab Lua
# Constructor
```lua
CSmartPropSelectionCriteria_PathPosition(ptr --[[ string ]])
```
# Properties
## PlaceAtPositions (Read-Only)
```lua
@type CSmartPropAttributePathPositions
Read: csmartpropselectioncriteria_pathposition.PlaceAtPositions
```
## PlaceEveryNthPosition 
```lua
@type CSmartPropAttributeInt
Read: csmartpropselectioncriteria_pathposition.PlaceEveryNthPosition
Write: csmartpropselectioncriteria_pathposition.PlaceEveryNthPosition = value
```
## NthPositionIndexOffset 
```lua
@type CSmartPropAttributeInt
Read: csmartpropselectioncriteria_pathposition.NthPositionIndexOffset
Write: csmartpropselectioncriteria_pathposition.NthPositionIndexOffset = value
```
## AllowAtStart 
```lua
@type CSmartPropAttributeBool
Read: csmartpropselectioncriteria_pathposition.AllowAtStart
Write: csmartpropselectioncriteria_pathposition.AllowAtStart = value
```
## AllowAtEnd 
```lua
@type CSmartPropAttributeBool
Read: csmartpropselectioncriteria_pathposition.AllowAtEnd
Write: csmartpropselectioncriteria_pathposition.AllowAtEnd = value
```
## Parent (Read-Only)
```lua
@type CSmartPropSelectionCriteria
Read: csmartpropselectioncriteria_pathposition.Parent
```
# Functions
## ToPtr
```lua
@returns string
csmartpropselectioncriteria_pathposition:ToPtr()
```
## IsValid
```lua
@returns bool
csmartpropselectioncriteria_pathposition:IsValid()
```

:::