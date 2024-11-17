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
--- @param ptr string
CRandStopwatch(ptr)
```
# Properties
## MinInterval 
```lua
--- @type number
Read: crandstopwatch.MinInterval
Write: crandstopwatch.MinInterval = value
```
## MaxInterval 
```lua
--- @type number
Read: crandstopwatch.MaxInterval
Write: crandstopwatch.MaxInterval = value
```
## Parent (Read-Only)
```lua
--- @type CStopwatchBase
Read: crandstopwatch.Parent
```
# Functions
## ToPtr
```lua
--- @return string
crandstopwatch:ToPtr()
```
## IsValid
```lua
--- @return bool
crandstopwatch:IsValid()
```

:::