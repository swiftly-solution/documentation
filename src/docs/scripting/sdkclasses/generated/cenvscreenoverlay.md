---
title: CEnvScreenOverlay
index: true
order: 2
category:
  - Guide
---

# CEnvScreenOverlay

::: tabs
@tab Lua
# Constructor
```lua
CEnvScreenOverlay(ptr --[[ string ]])
```
# Properties
## OverlayNames 
```lua
@type table
Read: cenvscreenoverlay.OverlayNames
Write: cenvscreenoverlay.OverlayNames = value
```
## OverlayTimes 
```lua
@type table
Read: cenvscreenoverlay.OverlayTimes
Write: cenvscreenoverlay.OverlayTimes = value
```
## StartTime 
```lua
@type number
Read: cenvscreenoverlay.StartTime
Write: cenvscreenoverlay.StartTime = value
```
## DesiredOverlay 
```lua
@type number
Read: cenvscreenoverlay.DesiredOverlay
Write: cenvscreenoverlay.DesiredOverlay = value
```
## IsActive 
```lua
@type boolean
Read: cenvscreenoverlay.IsActive
Write: cenvscreenoverlay.IsActive = value
```
## Parent 
```lua
@type CPointEntity
Read: cenvscreenoverlay.Parent
Write: cenvscreenoverlay.Parent = value
```
# Functions
## ToPtr
```lua
@returns string
cenvscreenoverlay:ToPtr()
```
## IsValid
```lua
@returns bool
cenvscreenoverlay:IsValid()
```

:::