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
CStopwatch(ptr)
```
# Properties
## Interval 
```lua
--- @type number
Read: cstopwatch.Interval
Write: cstopwatch.Interval = value
```
## Parent (Read-Only)
```lua
--- @type CStopwatchBase
Read: cstopwatch.Parent
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