---
title: CSmoothFunc
index: true
order: 2
category:
  - Guide
---

# CSmoothFunc

::: tabs
@tab Lua
# Constructor
```lua
CSmoothFunc(ptr --[[ string ]])
```
# Properties
## SmoothAmplitude 
```lua
@type number
Read: csmoothfunc.SmoothAmplitude
Write: csmoothfunc.SmoothAmplitude = value
```
## SmoothBias 
```lua
@type number
Read: csmoothfunc.SmoothBias
Write: csmoothfunc.SmoothBias = value
```
## SmoothDuration 
```lua
@type number
Read: csmoothfunc.SmoothDuration
Write: csmoothfunc.SmoothDuration = value
```
## SmoothRemainingTime 
```lua
@type number
Read: csmoothfunc.SmoothRemainingTime
Write: csmoothfunc.SmoothRemainingTime = value
```
## SmoothDir 
```lua
@type number
Read: csmoothfunc.SmoothDir
Write: csmoothfunc.SmoothDir = value
```
# Functions
## ToPtr
```lua
@returns string
csmoothfunc:ToPtr()
```
## IsValid
```lua
@returns bool
csmoothfunc:IsValid()
```

:::