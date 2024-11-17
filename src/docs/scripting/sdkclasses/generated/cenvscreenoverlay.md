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
--- @param ptr string
CEnvScreenOverlay(ptr)
```
# Properties
## OverlayNames 
```lua
--- @type table
Read: cenvscreenoverlay.OverlayNames
Write: cenvscreenoverlay.OverlayNames = value
```
## OverlayTimes 
```lua
--- @type table
Read: cenvscreenoverlay.OverlayTimes
Write: cenvscreenoverlay.OverlayTimes = value
```
## StartTime 
```lua
--- @type number
Read: cenvscreenoverlay.StartTime
Write: cenvscreenoverlay.StartTime = value
```
## DesiredOverlay 
```lua
--- @type number
Read: cenvscreenoverlay.DesiredOverlay
Write: cenvscreenoverlay.DesiredOverlay = value
```
## IsActive 
```lua
--- @type boolean
Read: cenvscreenoverlay.IsActive
Write: cenvscreenoverlay.IsActive = value
```
## Parent (Read-Only)
```lua
--- @type CPointEntity
Read: cenvscreenoverlay.Parent
```
# Functions
## ToPtr
```lua
--- @return string
cenvscreenoverlay:ToPtr()
```
## IsValid
```lua
--- @return bool
cenvscreenoverlay:IsValid()
```

:::