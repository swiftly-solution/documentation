---
title: CNavVolumeSphere
index: true
order: 2
category:
  - Guide
---

# CNavVolumeSphere

::: tabs
@tab Lua
# Constructor
```lua
CNavVolumeSphere(ptr --[[ string ]])
```
# Properties
## Center 
```lua
@type Vector
Read: cnavvolumesphere.Center
Write: cnavvolumesphere.Center = value
```
## Radius 
```lua
@type number
Read: cnavvolumesphere.Radius
Write: cnavvolumesphere.Radius = value
```
## Parent (Read-Only)
```lua
@type CNavVolume
Read: cnavvolumesphere.Parent
```
# Functions
## ToPtr
```lua
@returns string
cnavvolumesphere:ToPtr()
```
## IsValid
```lua
@returns bool
cnavvolumesphere:IsValid()
```

:::