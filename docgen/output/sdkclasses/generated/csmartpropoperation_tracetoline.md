---
title: CSmartPropOperation_TraceToLine
index: true
order: 2
category:
  - Guide
---

# CSmartPropOperation_TraceToLine

::: tabs
@tab Lua
# Constructor
```lua
CSmartPropOperation_TraceToLine(ptr --[[ string ]])
```
# Properties
## EndPointA 
```lua
@type CSmartPropAttributeVector
Read: csmartpropoperation_tracetoline.EndPointA
Write: csmartpropoperation_tracetoline.EndPointA = value
```
## EndPointSpaceA (Read-Only)
```lua
@type CSmartPropAttributeCoordinateSpace
Read: csmartpropoperation_tracetoline.EndPointSpaceA
```
## EndPointB 
```lua
@type CSmartPropAttributeVector
Read: csmartpropoperation_tracetoline.EndPointB
Write: csmartpropoperation_tracetoline.EndPointB = value
```
## EndPointSpaceB (Read-Only)
```lua
@type CSmartPropAttributeCoordinateSpace
Read: csmartpropoperation_tracetoline.EndPointSpaceB
```
## TraceAway 
```lua
@type CSmartPropAttributeBool
Read: csmartpropoperation_tracetoline.TraceAway
Write: csmartpropoperation_tracetoline.TraceAway = value
```
## TraceLength 
```lua
@type CSmartPropAttributeFloat
Read: csmartpropoperation_tracetoline.TraceLength
Write: csmartpropoperation_tracetoline.TraceLength = value
```
## Parent (Read-Only)
```lua
@type CSmartPropOperation_Trace
Read: csmartpropoperation_tracetoline.Parent
```
# Functions
## ToPtr
```lua
@returns string
csmartpropoperation_tracetoline:ToPtr()
```
## IsValid
```lua
@returns bool
csmartpropoperation_tracetoline:IsValid()
```

:::