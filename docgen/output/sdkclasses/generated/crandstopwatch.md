---
title: CRandStopwatch
index: true
order: 2
category:
  - Guide
---

# CRandStopwatch

::: tabs
@tab Lua
# Constructor
```lua
CRandStopwatch(ptr --[[ string ]])
```
# Properties
## MinInterval 
```lua
@type number
Read: crandstopwatch.MinInterval
Write: crandstopwatch.MinInterval = value
```
## MaxInterval 
```lua
@type number
Read: crandstopwatch.MaxInterval
Write: crandstopwatch.MaxInterval = value
```
## Parent (Read-Only)
```lua
@type CStopwatchBase
Read: crandstopwatch.Parent
```
# Functions
## ToPtr
```lua
@returns string
crandstopwatch:ToPtr()
```
## IsValid
```lua
@returns bool
crandstopwatch:IsValid()
```

:::