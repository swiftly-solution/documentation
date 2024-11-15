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
CSimTimer(ptr)
```
# Properties
## Interval 
```lua
--- @type number
Read: csimtimer.Interval
Write: csimtimer.Interval = value
```
## Parent (Read-Only)
```lua
--- @type CSimpleSimTimer
Read: csimtimer.Parent
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