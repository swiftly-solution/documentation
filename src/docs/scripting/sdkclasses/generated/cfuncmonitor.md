---
title: CFuncMonitor
index: true
order: 2
category:
  - Guide
---

# CFuncMonitor

::: tabs
@tab Lua
# Constructor
```lua
CFuncMonitor(ptr)
```
# Properties
## TargetCamera 
```lua
--- @type string
Read: cfuncmonitor.TargetCamera
Write: cfuncmonitor.TargetCamera = value
```
## ResolutionEnum 
```lua
--- @type number
Read: cfuncmonitor.ResolutionEnum
Write: cfuncmonitor.ResolutionEnum = value
```
## RenderShadows 
```lua
--- @type boolean
Read: cfuncmonitor.RenderShadows
Write: cfuncmonitor.RenderShadows = value
```
## UseUniqueColorTarget 
```lua
--- @type boolean
Read: cfuncmonitor.UseUniqueColorTarget
Write: cfuncmonitor.UseUniqueColorTarget = value
```
## BrushModelName 
```lua
--- @type string
Read: cfuncmonitor.BrushModelName
Write: cfuncmonitor.BrushModelName = value
```
## TargetCamera1 (Read-Only)
```lua
--- @type CBaseEntity
Read: cfuncmonitor.TargetCamera1
```
## Enabled 
```lua
--- @type boolean
Read: cfuncmonitor.Enabled
Write: cfuncmonitor.Enabled = value
```
## Draw3DSkybox 
```lua
--- @type boolean
Read: cfuncmonitor.Draw3DSkybox
Write: cfuncmonitor.Draw3DSkybox = value
```
## StartEnabled 
```lua
--- @type boolean
Read: cfuncmonitor.StartEnabled
Write: cfuncmonitor.StartEnabled = value
```
## Parent (Read-Only)
```lua
--- @type CFuncBrush
Read: cfuncmonitor.Parent
```
# Functions
## ToPtr
```lua
@returns string
cfuncmonitor:ToPtr()
```
## IsValid
```lua
@returns bool
cfuncmonitor:IsValid()
```

:::