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
--- @param ptr string
CRandSimTimer(ptr)
```
# Properties
## MinInterval 
```lua
--- @type number
Read: crandsimtimer.MinInterval
Write: crandsimtimer.MinInterval = value
```
## MaxInterval 
```lua
--- @type number
Read: crandsimtimer.MaxInterval
Write: crandsimtimer.MaxInterval = value
```
## Parent (Read-Only)
```lua
--- @type CSimpleSimTimer
Read: crandsimtimer.Parent
```
# Functions
## ToPtr
```lua
--- @return string
crandsimtimer:ToPtr()
```
## IsValid
```lua
--- @return bool
crandsimtimer:IsValid()
```

:::