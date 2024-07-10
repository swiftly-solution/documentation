---
title: CPathTrack
index: true
order: 2
category:
  - Guide
---

# CPathTrack

::: tabs
@tab Lua
# Constructor
```lua
CPathTrack(ptr --[[ string ]])
```
# Properties
## Pnext (Read-Only)
```lua
@type CPathTrack
Read: cpathtrack.Pnext
```
## Pprevious (Read-Only)
```lua
@type CPathTrack
Read: cpathtrack.Pprevious
```
## Paltpath (Read-Only)
```lua
@type CPathTrack
Read: cpathtrack.Paltpath
```
## Radius 
```lua
@type number
Read: cpathtrack.Radius
Write: cpathtrack.Radius = value
```
## Length 
```lua
@type number
Read: cpathtrack.Length
Write: cpathtrack.Length = value
```
## AltName 
```lua
@type string
Read: cpathtrack.AltName
Write: cpathtrack.AltName = value
```
## IterVal 
```lua
@type number
Read: cpathtrack.IterVal
Write: cpathtrack.IterVal = value
```
## OrientationType 
```lua
@type number
Read: cpathtrack.OrientationType
Write: cpathtrack.OrientationType = value
```
## OnPass 
```lua
@type CEntityIOOutput
Read: cpathtrack.OnPass
Write: cpathtrack.OnPass = value
```
## Parent 
```lua
@type CPointEntity
Read: cpathtrack.Parent
Write: cpathtrack.Parent = value
```
# Functions
## ToPtr
```lua
@returns string
cpathtrack:ToPtr()
```
## IsValid
```lua
@returns bool
cpathtrack:IsValid()
```

:::