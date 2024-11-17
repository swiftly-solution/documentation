---
title: CEntityDissolve
index: true
order: 2
category:
  - Guide
---

# CEntityDissolve

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
CEntityDissolve(ptr)
```
# Properties
## FadeInStart 
```lua
--- @type number
Read: centitydissolve.FadeInStart
Write: centitydissolve.FadeInStart = value
```
## FadeInLength 
```lua
--- @type number
Read: centitydissolve.FadeInLength
Write: centitydissolve.FadeInLength = value
```
## FadeOutModelStart 
```lua
--- @type number
Read: centitydissolve.FadeOutModelStart
Write: centitydissolve.FadeOutModelStart = value
```
## FadeOutModelLength 
```lua
--- @type number
Read: centitydissolve.FadeOutModelLength
Write: centitydissolve.FadeOutModelLength = value
```
## FadeOutStart 
```lua
--- @type number
Read: centitydissolve.FadeOutStart
Write: centitydissolve.FadeOutStart = value
```
## FadeOutLength 
```lua
--- @type number
Read: centitydissolve.FadeOutLength
Write: centitydissolve.FadeOutLength = value
```
## StartTime 
```lua
--- @type number
Read: centitydissolve.StartTime
Write: centitydissolve.StartTime = value
```
## DissolveType 
```lua
--- @type number
Read: centitydissolve.DissolveType
Write: centitydissolve.DissolveType = value
```
## DissolverOrigin 
```lua
--- @type Vector
Read: centitydissolve.DissolverOrigin
Write: centitydissolve.DissolverOrigin = value
```
## Magnitude 
```lua
--- @type number
Read: centitydissolve.Magnitude
Write: centitydissolve.Magnitude = value
```
## Parent (Read-Only)
```lua
--- @type CBaseModelEntity
Read: centitydissolve.Parent
```
# Functions
## ToPtr
```lua
--- @return string
centitydissolve:ToPtr()
```
## IsValid
```lua
--- @return bool
centitydissolve:IsValid()
```

:::