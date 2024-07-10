---
title: CStopwatch
index: true
order: 2
category:
  - Guide
---

# CStopwatch

::: tabs
@tab Lua
# Constructor
```lua
CStopwatch(ptr --[[ string ]])
```
# Properties
## Interval 
```lua
@type number
Read: cstopwatch.Interval
Write: cstopwatch.Interval = value
```
## Parent 
```lua
@type CStopwatchBase
Read: cstopwatch.Parent
Write: cstopwatch.Parent = value
```
# Functions
## ToPtr
```lua
@returns string
cstopwatch:ToPtr()
```
## IsValid
```lua
@returns bool
cstopwatch:IsValid()
```

:::