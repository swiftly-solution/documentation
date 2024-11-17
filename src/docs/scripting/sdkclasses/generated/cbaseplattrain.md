---
title: CBasePlatTrain
index: true
order: 2
category:
  - Guide
---

# CBasePlatTrain

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
CBasePlatTrain(ptr)
```
# Properties
## NoiseMoving 
```lua
--- @type string
Read: cbaseplattrain.NoiseMoving
Write: cbaseplattrain.NoiseMoving = value
```
## NoiseArrived 
```lua
--- @type string
Read: cbaseplattrain.NoiseArrived
Write: cbaseplattrain.NoiseArrived = value
```
## Volume 
```lua
--- @type number
Read: cbaseplattrain.Volume
Write: cbaseplattrain.Volume = value
```
## TWidth 
```lua
--- @type number
Read: cbaseplattrain.TWidth
Write: cbaseplattrain.TWidth = value
```
## TLength 
```lua
--- @type number
Read: cbaseplattrain.TLength
Write: cbaseplattrain.TLength = value
```
## Parent (Read-Only)
```lua
--- @type CBaseToggle
Read: cbaseplattrain.Parent
```
# Functions
## ToPtr
```lua
--- @return string
cbaseplattrain:ToPtr()
```
## IsValid
```lua
--- @return bool
cbaseplattrain:IsValid()
```

:::