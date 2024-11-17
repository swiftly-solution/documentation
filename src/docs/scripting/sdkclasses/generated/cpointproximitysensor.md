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
--- @param ptr string
CPointProximitySensor(ptr)
```
# Properties
## Disabled 
```lua
--- @type boolean
Read: cpointproximitysensor.Disabled
Write: cpointproximitysensor.Disabled = value
```
## TargetEntity (Read-Only)
```lua
--- @type CBaseEntity
Read: cpointproximitysensor.TargetEntity
```
## Parent (Read-Only)
```lua
--- @type CPointEntity
Read: cpointproximitysensor.Parent
```
# Functions
## ToPtr
```lua
--- @return string
cpointproximitysensor:ToPtr()
```
## IsValid
```lua
--- @return bool
cpointproximitysensor:IsValid()
```

:::