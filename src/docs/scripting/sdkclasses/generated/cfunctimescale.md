---
title: CFuncTimescale
index: true
order: 2
category:
  - Guide
---

# CFuncTimescale

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
CFuncTimescale(ptr)
```
# Properties
## DesiredTimescale 
```lua
--- @type number
Read: cfunctimescale.DesiredTimescale
Write: cfunctimescale.DesiredTimescale = value
```
## Acceleration 
```lua
--- @type number
Read: cfunctimescale.Acceleration
Write: cfunctimescale.Acceleration = value
```
## MinBlendRate 
```lua
--- @type number
Read: cfunctimescale.MinBlendRate
Write: cfunctimescale.MinBlendRate = value
```
## BlendDeltaMultiplier 
```lua
--- @type number
Read: cfunctimescale.BlendDeltaMultiplier
Write: cfunctimescale.BlendDeltaMultiplier = value
```
## IsStarted 
```lua
--- @type boolean
Read: cfunctimescale.IsStarted
Write: cfunctimescale.IsStarted = value
```
## Parent (Read-Only)
```lua
--- @type CBaseEntity
Read: cfunctimescale.Parent
```
# Functions
## ToPtr
```lua
--- @return string
cfunctimescale:ToPtr()
```
## IsValid
```lua
--- @return bool
cfunctimescale:IsValid()
```

:::