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
CBasePlatTrain(ptr --[[ string ]])
```
# Properties
## NoiseMoving 
```lua
@type string
Read: cbaseplattrain.NoiseMoving
Write: cbaseplattrain.NoiseMoving = value
```
## NoiseArrived 
```lua
@type string
Read: cbaseplattrain.NoiseArrived
Write: cbaseplattrain.NoiseArrived = value
```
## Volume 
```lua
@type number
Read: cbaseplattrain.Volume
Write: cbaseplattrain.Volume = value
```
## TWidth 
```lua
@type number
Read: cbaseplattrain.TWidth
Write: cbaseplattrain.TWidth = value
```
## TLength 
```lua
@type number
Read: cbaseplattrain.TLength
Write: cbaseplattrain.TLength = value
```
## Parent 
```lua
@type CBaseToggle
Read: cbaseplattrain.Parent
Write: cbaseplattrain.Parent = value
```
# Functions
## ToPtr
```lua
@returns string
cbaseplattrain:ToPtr()
```
## IsValid
```lua
@returns bool
cbaseplattrain:IsValid()
```

:::