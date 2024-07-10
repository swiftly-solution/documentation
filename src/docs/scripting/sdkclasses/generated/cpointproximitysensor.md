---
title: CPointProximitySensor
index: true
order: 2
category:
  - Guide
---

# CPointProximitySensor

::: tabs
@tab Lua
# Constructor
```lua
CPointProximitySensor(ptr --[[ string ]])
```
# Properties
## Disabled 
```lua
@type boolean
Read: cpointproximitysensor.Disabled
Write: cpointproximitysensor.Disabled = value
```
## TargetEntity (Read-Only)
```lua
@type CBaseEntity
Read: cpointproximitysensor.TargetEntity
```
## Parent 
```lua
@type CPointEntity
Read: cpointproximitysensor.Parent
Write: cpointproximitysensor.Parent = value
```
# Functions
## ToPtr
```lua
@returns string
cpointproximitysensor:ToPtr()
```
## IsValid
```lua
@returns bool
cpointproximitysensor:IsValid()
```

:::