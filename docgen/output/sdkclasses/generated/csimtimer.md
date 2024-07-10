---
title: CSimTimer
index: true
order: 2
category:
  - Guide
---

# CSimTimer

::: tabs
@tab Lua
# Constructor
```lua
CSimTimer(ptr --[[ string ]])
```
# Properties
## Interval 
```lua
@type number
Read: csimtimer.Interval
Write: csimtimer.Interval = value
```
## Parent 
```lua
@type CSimpleSimTimer
Read: csimtimer.Parent
Write: csimtimer.Parent = value
```
# Functions
## ToPtr
```lua
@returns string
csimtimer:ToPtr()
```
## IsValid
```lua
@returns bool
csimtimer:IsValid()
```

:::