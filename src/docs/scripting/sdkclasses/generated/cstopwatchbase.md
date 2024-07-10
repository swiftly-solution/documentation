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
CStopwatchBase(ptr --[[ string ]])
```
# Properties
## IsRunning 
```lua
@type boolean
Read: cstopwatchbase.IsRunning
Write: cstopwatchbase.IsRunning = value
```
## Parent 
```lua
@type CSimpleSimTimer
Read: cstopwatchbase.Parent
Write: cstopwatchbase.Parent = value
```
# Functions
## ToPtr
```lua
@returns string
cstopwatchbase:ToPtr()
```
## IsValid
```lua
@returns bool
cstopwatchbase:IsValid()
```

:::