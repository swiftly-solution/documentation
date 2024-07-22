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
CSolveIKTargetHandle_t(ptr --[[ string ]])
```
# Properties
## PositionHandle (Read-Only)
```lua
@type CAnimParamHandle
Read: csolveiktargethandle_t.PositionHandle
```
## OrientationHandle (Read-Only)
```lua
@type CAnimParamHandle
Read: csolveiktargethandle_t.OrientationHandle
```
# Functions
## ToPtr
```lua
@returns string
csolveiktargethandle_t:ToPtr()
```
## IsValid
```lua
@returns bool
csolveiktargethandle_t:IsValid()
```

:::