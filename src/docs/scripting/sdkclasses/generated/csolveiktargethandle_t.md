---
title: CSolveIKTargetHandle_t
index: true
order: 2
category:
  - Guide
---

# CSolveIKTargetHandle_t

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
CSolveIKTargetHandle_t(ptr)
```
# Properties
## PositionHandle (Read-Only)
```lua
--- @type CAnimParamHandle
Read: csolveiktargethandle_t.PositionHandle
```
## OrientationHandle (Read-Only)
```lua
--- @type CAnimParamHandle
Read: csolveiktargethandle_t.OrientationHandle
```
# Functions
## ToPtr
```lua
--- @return string
csolveiktargethandle_t:ToPtr()
```
## IsValid
```lua
--- @return bool
csolveiktargethandle_t:IsValid()
```

:::