---
title: CSmartPropOperation_TraceInDirection
index: true
order: 2
category:
  - Guide
---

# CSmartPropOperation_TraceInDirection

::: tabs
@tab Lua
# Constructor
```lua
CSmartPropOperation_TraceInDirection(ptr --[[ string ]])
```
# Properties
## TraceDirection 
```lua
@type CSmartPropAttributeVector
Read: csmartpropoperation_traceindirection.TraceDirection
Write: csmartpropoperation_traceindirection.TraceDirection = value
```
## DirectionSpace (Read-Only)
```lua
@type CSmartPropAttributeCoordinateSpace
Read: csmartpropoperation_traceindirection.DirectionSpace
```
## TraceLength 
```lua
@type CSmartPropAttributeFloat
Read: csmartpropoperation_traceindirection.TraceLength
Write: csmartpropoperation_traceindirection.TraceLength = value
```
## Parent (Read-Only)
```lua
@type CSmartPropOperation_Trace
Read: csmartpropoperation_traceindirection.Parent
```
# Functions
## ToPtr
```lua
@returns string
csmartpropoperation_traceindirection:ToPtr()
```
## IsValid
```lua
@returns bool
csmartpropoperation_traceindirection:IsValid()
```

:::