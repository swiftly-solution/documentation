---
title: CEnvTracer
index: true
order: 2
category:
  - Guide
---

# CEnvTracer

::: tabs
@tab Lua
# Constructor
```lua
CEnvTracer(ptr --[[ string ]])
```
# Properties
## End 
```lua
@type Vector
Read: cenvtracer.End
Write: cenvtracer.End = value
```
## Delay 
```lua
@type number
Read: cenvtracer.Delay
Write: cenvtracer.Delay = value
```
## Parent (Read-Only)
```lua
@type CPointEntity
Read: cenvtracer.Parent
```
# Functions
## ToPtr
```lua
@returns string
cenvtracer:ToPtr()
```
## IsValid
```lua
@returns bool
cenvtracer:IsValid()
```

:::