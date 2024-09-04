---
title: CBtActionMoveTo
index: true
order: 2
category:
  - Guide
---

# CBtActionMoveTo

::: tabs
@tab Lua
# Constructor
```lua
CBtActionMoveTo(ptr --[[ string ]])
```
# Properties
## DestinationInputKey 
```lua
@type string
Read: cbtactionmoveto.DestinationInputKey
Write: cbtactionmoveto.DestinationInputKey = value
```
## HidingSpotInputKey 
```lua
@type string
Read: cbtactionmoveto.HidingSpotInputKey
Write: cbtactionmoveto.HidingSpotInputKey = value
```
## ThreatInputKey 
```lua
@type string
Read: cbtactionmoveto.ThreatInputKey
Write: cbtactionmoveto.ThreatInputKey = value
```
## Destination 
```lua
@type Vector
Read: cbtactionmoveto.Destination
Write: cbtactionmoveto.Destination = value
```
## AutoLookAdjust 
```lua
@type boolean
Read: cbtactionmoveto.AutoLookAdjust
Write: cbtactionmoveto.AutoLookAdjust = value
```
## ComputePath 
```lua
@type boolean
Read: cbtactionmoveto.ComputePath
Write: cbtactionmoveto.ComputePath = value
```
## DamagingAreasPenaltyCost 
```lua
@type number
Read: cbtactionmoveto.DamagingAreasPenaltyCost
Write: cbtactionmoveto.DamagingAreasPenaltyCost = value
```
## CheckApproximateCornersTimer (Read-Only)
```lua
@type CountdownTimer
Read: cbtactionmoveto.CheckApproximateCornersTimer
```
## CheckHighPriorityItem (Read-Only)
```lua
@type CountdownTimer
Read: cbtactionmoveto.CheckHighPriorityItem
```
## RepathTimer (Read-Only)
```lua
@type CountdownTimer
Read: cbtactionmoveto.RepathTimer
```
## ArrivalEpsilon 
```lua
@type number
Read: cbtactionmoveto.ArrivalEpsilon
Write: cbtactionmoveto.ArrivalEpsilon = value
```
## AdditionalArrivalEpsilon2D 
```lua
@type number
Read: cbtactionmoveto.AdditionalArrivalEpsilon2D
Write: cbtactionmoveto.AdditionalArrivalEpsilon2D = value
```
## HidingSpotCheckDistanceThreshold 
```lua
@type number
Read: cbtactionmoveto.HidingSpotCheckDistanceThreshold
Write: cbtactionmoveto.HidingSpotCheckDistanceThreshold = value
```
## NearestAreaDistanceThreshold 
```lua
@type number
Read: cbtactionmoveto.NearestAreaDistanceThreshold
Write: cbtactionmoveto.NearestAreaDistanceThreshold = value
```
## Parent (Read-Only)
```lua
@type CBtNode
Read: cbtactionmoveto.Parent
```
# Functions
## ToPtr
```lua
@returns string
cbtactionmoveto:ToPtr()
```
## IsValid
```lua
@returns bool
cbtactionmoveto:IsValid()
```

:::