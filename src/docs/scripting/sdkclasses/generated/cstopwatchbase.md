---
title: CStopwatchBase
index: true
order: 2
category:
  - Guide
---

# CStopwatchBase

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
CStopwatchBase(ptr)
```
# Properties
## IsRunning 
```lua
--- @type boolean
Read: cstopwatchbase.IsRunning
Write: cstopwatchbase.IsRunning = value
```
## Parent (Read-Only)
```lua
--- @type CSimpleSimTimer
Read: cstopwatchbase.Parent
```
# Functions
## ToPtr
```lua
--- @return string
cstopwatchbase:ToPtr()
```
## IsValid
```lua
--- @return bool
cstopwatchbase:IsValid()
```

:::