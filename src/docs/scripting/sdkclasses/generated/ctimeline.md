---
title: CTimeline
index: true
order: 2
category:
  - Guide
---

# CTimeline

::: tabs
@tab Lua
# Constructor
```lua
CTimeline(ptr --[[ string ]])
```
# Properties
## Values 
```lua
@type table
Read: ctimeline.Values
Write: ctimeline.Values = value
```
## ValueCounts 
```lua
@type table
Read: ctimeline.ValueCounts
Write: ctimeline.ValueCounts = value
```
## BucketCount 
```lua
@type number
Read: ctimeline.BucketCount
Write: ctimeline.BucketCount = value
```
## Interval 
```lua
@type number
Read: ctimeline.Interval
Write: ctimeline.Interval = value
```
## FinalValue 
```lua
@type number
Read: ctimeline.FinalValue
Write: ctimeline.FinalValue = value
```
## CompressionType 
```lua
@type number
Read: ctimeline.CompressionType
Write: ctimeline.CompressionType = value
```
## Stopped 
```lua
@type boolean
Read: ctimeline.Stopped
Write: ctimeline.Stopped = value
```
## Parent (Read-Only)
```lua
@type IntervalTimer
Read: ctimeline.Parent
```
# Functions
## ToPtr
```lua
@returns string
ctimeline:ToPtr()
```
## IsValid
```lua
@returns bool
ctimeline:IsValid()
```

:::