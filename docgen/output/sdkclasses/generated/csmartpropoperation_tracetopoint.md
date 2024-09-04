---
title: CSmartPropOperation_TraceToPoint
index: true
order: 2
category:
  - Guide
---

# CSmartPropOperation_TraceToPoint

::: tabs
@tab Lua
# Constructor
```lua
CSmartPropOperation_TraceToPoint(ptr --[[ string ]])
```
# Properties
## TargetPoint 
```lua
@type CSmartPropAttributeVector
Read: csmartpropoperation_tracetopoint.TargetPoint
Write: csmartpropoperation_tracetopoint.TargetPoint = value
```
## TargetPointSpace (Read-Only)
```lua
@type CSmartPropAttributeCoordinateSpace
Read: csmartpropoperation_tracetopoint.TargetPointSpace
```
## TraceAway 
```lua
@type CSmartPropAttributeBool
Read: csmartpropoperation_tracetopoint.TraceAway
Write: csmartpropoperation_tracetopoint.TraceAway = value
```
## TraceLength 
```lua
@type CSmartPropAttributeFloat
Read: csmartpropoperation_tracetopoint.TraceLength
Write: csmartpropoperation_tracetopoint.TraceLength = value
```
## Parent (Read-Only)
```lua
@type CSmartPropOperation_Trace
Read: csmartpropoperation_tracetopoint.Parent
```
# Functions
## ToPtr
```lua
@returns string
csmartpropoperation_tracetopoint:ToPtr()
```
## IsValid
```lua
@returns bool
csmartpropoperation_tracetopoint:IsValid()
```

:::