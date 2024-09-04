---
title: CPhysicsSpring
index: true
order: 2
category:
  - Guide
---

# CPhysicsSpring

::: tabs
@tab Lua
# Constructor
```lua
CPhysicsSpring(ptr --[[ string ]])
```
# Properties
## Frequency 
```lua
@type number
Read: cphysicsspring.Frequency
Write: cphysicsspring.Frequency = value
```
## DampingRatio 
```lua
@type number
Read: cphysicsspring.DampingRatio
Write: cphysicsspring.DampingRatio = value
```
## RestLength 
```lua
@type number
Read: cphysicsspring.RestLength
Write: cphysicsspring.RestLength = value
```
## NameAttachStart 
```lua
@type string
Read: cphysicsspring.NameAttachStart
Write: cphysicsspring.NameAttachStart = value
```
## NameAttachEnd 
```lua
@type string
Read: cphysicsspring.NameAttachEnd
Write: cphysicsspring.NameAttachEnd = value
```
## Start 
```lua
@type Vector
Read: cphysicsspring.Start
Write: cphysicsspring.Start = value
```
## End 
```lua
@type Vector
Read: cphysicsspring.End
Write: cphysicsspring.End = value
```
## TeleportTick 
```lua
@type number
Read: cphysicsspring.TeleportTick
Write: cphysicsspring.TeleportTick = value
```
## Parent (Read-Only)
```lua
@type CBaseEntity
Read: cphysicsspring.Parent
```
# Functions
## ToPtr
```lua
@returns string
cphysicsspring:ToPtr()
```
## IsValid
```lua
@returns bool
cphysicsspring:IsValid()
```

:::