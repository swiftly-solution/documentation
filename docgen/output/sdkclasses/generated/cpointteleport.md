---
title: CPointTeleport
index: true
order: 2
category:
  - Guide
---

# CPointTeleport

::: tabs
@tab Lua
# Constructor
```lua
CPointTeleport(ptr --[[ string ]])
```
# Properties
## SaveOrigin 
```lua
@type Vector
Read: cpointteleport.SaveOrigin
Write: cpointteleport.SaveOrigin = value
```
## SaveAngles 
```lua
@type QAngle
Read: cpointteleport.SaveAngles
Write: cpointteleport.SaveAngles = value
```
## TeleportParentedEntities 
```lua
@type boolean
Read: cpointteleport.TeleportParentedEntities
Write: cpointteleport.TeleportParentedEntities = value
```
## TeleportUseCurrentAngle 
```lua
@type boolean
Read: cpointteleport.TeleportUseCurrentAngle
Write: cpointteleport.TeleportUseCurrentAngle = value
```
## Parent 
```lua
@type CServerOnlyPointEntity
Read: cpointteleport.Parent
Write: cpointteleport.Parent = value
```
# Functions
## ToPtr
```lua
@returns string
cpointteleport:ToPtr()
```
## IsValid
```lua
@returns bool
cpointteleport:IsValid()
```

:::