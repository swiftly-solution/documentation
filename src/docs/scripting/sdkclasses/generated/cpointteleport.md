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
--- @param ptr string
CPointTeleport(ptr)
```
# Properties
## SaveOrigin 
```lua
--- @type Vector
Read: cpointteleport.SaveOrigin
Write: cpointteleport.SaveOrigin = value
```
## SaveAngles 
```lua
--- @type QAngle
Read: cpointteleport.SaveAngles
Write: cpointteleport.SaveAngles = value
```
## TeleportParentedEntities 
```lua
--- @type boolean
Read: cpointteleport.TeleportParentedEntities
Write: cpointteleport.TeleportParentedEntities = value
```
## TeleportUseCurrentAngle 
```lua
--- @type boolean
Read: cpointteleport.TeleportUseCurrentAngle
Write: cpointteleport.TeleportUseCurrentAngle = value
```
## Parent (Read-Only)
```lua
--- @type CServerOnlyPointEntity
Read: cpointteleport.Parent
```
# Functions
## ToPtr
```lua
--- @return string
cpointteleport:ToPtr()
```
## IsValid
```lua
--- @return bool
cpointteleport:IsValid()
```

:::