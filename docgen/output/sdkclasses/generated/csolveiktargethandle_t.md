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
## PositionHandle 
```lua
@type CAnimParamHandle
Read: csolveiktargethandle_t.PositionHandle
Write: csolveiktargethandle_t.PositionHandle = value
```
## OrientationHandle 
```lua
@type CAnimParamHandle
Read: csolveiktargethandle_t.OrientationHandle
Write: csolveiktargethandle_t.OrientationHandle = value
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