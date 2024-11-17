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
--- @param ptr string
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
--- @return string
cstopwatch:ToPtr()
```
## IsValid
```lua
--- @return bool
cstopwatch:IsValid()
```

:::