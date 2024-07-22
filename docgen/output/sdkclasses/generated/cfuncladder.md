---
title: CFuncLadder
index: true
order: 2
category:
  - Guide
---

# CFuncLadder

::: tabs
@tab Lua
# Constructor
```lua
CFuncLadder(ptr --[[ string ]])
```
# Properties
## LadderDir 
```lua
@type Vector
Read: cfuncladder.LadderDir
Write: cfuncladder.LadderDir = value
```
## LocalTop 
```lua
@type Vector
Read: cfuncladder.LocalTop
Write: cfuncladder.LocalTop = value
```
## PlayerMountPositionTop 
```lua
@type Vector
Read: cfuncladder.PlayerMountPositionTop
Write: cfuncladder.PlayerMountPositionTop = value
```
## PlayerMountPositionBottom 
```lua
@type Vector
Read: cfuncladder.PlayerMountPositionBottom
Write: cfuncladder.PlayerMountPositionBottom = value
```
## AutoRideSpeed 
```lua
@type number
Read: cfuncladder.AutoRideSpeed
Write: cfuncladder.AutoRideSpeed = value
```
## Disabled 
```lua
@type boolean
Read: cfuncladder.Disabled
Write: cfuncladder.Disabled = value
```
## FakeLadder 
```lua
@type boolean
Read: cfuncladder.FakeLadder
Write: cfuncladder.FakeLadder = value
```
## HasSlack 
```lua
@type boolean
Read: cfuncladder.HasSlack
Write: cfuncladder.HasSlack = value
```
## SurfacePropName 
```lua
@type string
Read: cfuncladder.SurfacePropName
Write: cfuncladder.SurfacePropName = value
```
## OnPlayerGotOnLadder (Read-Only)
```lua
@type CEntityIOOutput
Read: cfuncladder.OnPlayerGotOnLadder
```
## OnPlayerGotOffLadder (Read-Only)
```lua
@type CEntityIOOutput
Read: cfuncladder.OnPlayerGotOffLadder
```
## Parent 
```lua
@type CBaseModelEntity
Read: cfuncladder.Parent
Write: cfuncladder.Parent = value
```
# Functions
## ToPtr
```lua
@returns string
cfuncladder:ToPtr()
```
## IsValid
```lua
@returns bool
cfuncladder:IsValid()
```

:::