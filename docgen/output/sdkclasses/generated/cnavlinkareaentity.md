---
title: CNavLinkAreaEntity
index: true
order: 2
category:
  - Guide
---

# CNavLinkAreaEntity

::: tabs
@tab Lua
# Constructor
```lua
CNavLinkAreaEntity(ptr --[[ string ]])
```
# Properties
## Width 
```lua
@type number
Read: cnavlinkareaentity.Width
Write: cnavlinkareaentity.Width = value
```
## LocatorOffset 
```lua
@type Vector
Read: cnavlinkareaentity.LocatorOffset
Write: cnavlinkareaentity.LocatorOffset = value
```
## LocatorAnglesOffset 
```lua
@type QAngle
Read: cnavlinkareaentity.LocatorAnglesOffset
Write: cnavlinkareaentity.LocatorAnglesOffset = value
```
## StrMovementForward 
```lua
@type string
Read: cnavlinkareaentity.StrMovementForward
Write: cnavlinkareaentity.StrMovementForward = value
```
## StrMovementReverse 
```lua
@type string
Read: cnavlinkareaentity.StrMovementReverse
Write: cnavlinkareaentity.StrMovementReverse = value
```
## NavLinkIdForward 
```lua
@type number
Read: cnavlinkareaentity.NavLinkIdForward
Write: cnavlinkareaentity.NavLinkIdForward = value
```
## NavLinkIdReverse 
```lua
@type number
Read: cnavlinkareaentity.NavLinkIdReverse
Write: cnavlinkareaentity.NavLinkIdReverse = value
```
## Enabled 
```lua
@type boolean
Read: cnavlinkareaentity.Enabled
Write: cnavlinkareaentity.Enabled = value
```
## StrFilterName 
```lua
@type string
Read: cnavlinkareaentity.StrFilterName
Write: cnavlinkareaentity.StrFilterName = value
```
## Filter (Read-Only)
```lua
@type CBaseFilter
Read: cnavlinkareaentity.Filter
```
## OnNavLinkStart 
```lua
@type CEntityIOOutput
Read: cnavlinkareaentity.OnNavLinkStart
Write: cnavlinkareaentity.OnNavLinkStart = value
```
## OnNavLinkFinish 
```lua
@type CEntityIOOutput
Read: cnavlinkareaentity.OnNavLinkFinish
Write: cnavlinkareaentity.OnNavLinkFinish = value
```
## IsTerminus 
```lua
@type boolean
Read: cnavlinkareaentity.IsTerminus
Write: cnavlinkareaentity.IsTerminus = value
```
## Parent 
```lua
@type CPointEntity
Read: cnavlinkareaentity.Parent
Write: cnavlinkareaentity.Parent = value
```
# Functions
## ToPtr
```lua
@returns string
cnavlinkareaentity:ToPtr()
```
## IsValid
```lua
@returns bool
cnavlinkareaentity:IsValid()
```

:::