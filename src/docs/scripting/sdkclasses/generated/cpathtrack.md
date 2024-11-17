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
--- @param ptr string
CPathTrack(ptr)
```
# Properties
## Pnext (Read-Only)
```lua
--- @type CPathTrack
Read: cpathtrack.Pnext
```
## Pprevious (Read-Only)
```lua
--- @type CPathTrack
Read: cpathtrack.Pprevious
```
## Paltpath (Read-Only)
```lua
--- @type CPathTrack
Read: cpathtrack.Paltpath
```
## Radius 
```lua
--- @type number
Read: cpathtrack.Radius
Write: cpathtrack.Radius = value
```
## Length 
```lua
--- @type number
Read: cpathtrack.Length
Write: cpathtrack.Length = value
```
## AltName 
```lua
--- @type string
Read: cpathtrack.AltName
Write: cpathtrack.AltName = value
```
## IterVal 
```lua
--- @type number
Read: cpathtrack.IterVal
Write: cpathtrack.IterVal = value
```
## OrientationType 
```lua
--- @type number
Read: cpathtrack.OrientationType
Write: cpathtrack.OrientationType = value
```
## OnPass (Read-Only)
```lua
--- @type CEntityIOOutput
Read: cpathtrack.OnPass
```
## Parent (Read-Only)
```lua
--- @type CPointEntity
Read: cpathtrack.Parent
```
# Functions
## ToPtr
```lua
--- @return string
cpathtrack:ToPtr()
```
## IsValid
```lua
--- @return bool
cpathtrack:IsValid()
```

:::