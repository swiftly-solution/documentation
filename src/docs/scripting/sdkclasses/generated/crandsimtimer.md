---
title: CRandSimTimer
index: true
order: 2
category:
  - Guide
---

# CRandSimTimer

::: tabs
@tab Lua
# Constructor
```lua
CRandSimTimer(ptr --[[ string ]])
```
# Properties
## MinInterval 
```lua
@type number
Read: crandsimtimer.MinInterval
Write: crandsimtimer.MinInterval = value
```
## MaxInterval 
```lua
@type number
Read: crandsimtimer.MaxInterval
Write: crandsimtimer.MaxInterval = value
```
## Parent 
```lua
@type CSimpleSimTimer
Read: crandsimtimer.Parent
Write: crandsimtimer.Parent = value
```
# Functions
## ToPtr
```lua
@returns string
crandsimtimer:ToPtr()
```
## IsValid
```lua
@returns bool
crandsimtimer:IsValid()
```

:::