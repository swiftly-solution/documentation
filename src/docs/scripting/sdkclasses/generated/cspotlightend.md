---
title: CSpotlightEnd
index: true
order: 2
category:
  - Guide
---

# CSpotlightEnd

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
CSpotlightEnd(ptr)
```
# Properties
## LightScale 
```lua
--- @type number
Read: cspotlightend.LightScale
Write: cspotlightend.LightScale = value
```
## Radius 
```lua
--- @type number
Read: cspotlightend.Radius
Write: cspotlightend.Radius = value
```
## SpotlightDir 
```lua
--- @type Vector
Read: cspotlightend.SpotlightDir
Write: cspotlightend.SpotlightDir = value
```
## SpotlightOrg 
```lua
--- @type Vector
Read: cspotlightend.SpotlightOrg
Write: cspotlightend.SpotlightOrg = value
```
## Parent (Read-Only)
```lua
--- @type CBaseModelEntity
Read: cspotlightend.Parent
```
# Functions
## ToPtr
```lua
--- @return string
cspotlightend:ToPtr()
```
## IsValid
```lua
--- @return bool
cspotlightend:IsValid()
```

:::