---
title: CFireOverlay
index: true
order: 2
category:
  - Guide
---

# CFireOverlay

::: tabs
@tab Lua
# Constructor
```lua
CFireOverlay(ptr --[[ string ]])
```
# Properties
## BaseColors 
```lua
@type table
Read: cfireoverlay.BaseColors
Write: cfireoverlay.BaseColors = value
```
## Scale 
```lua
@type number
Read: cfireoverlay.Scale
Write: cfireoverlay.Scale = value
```
## GUID 
```lua
@type number
Read: cfireoverlay.GUID
Write: cfireoverlay.GUID = value
```
## Parent (Read-Only)
```lua
@type CGlowOverlay
Read: cfireoverlay.Parent
```
# Functions
## ToPtr
```lua
@returns string
cfireoverlay:ToPtr()
```
## IsValid
```lua
@returns bool
cfireoverlay:IsValid()
```

:::