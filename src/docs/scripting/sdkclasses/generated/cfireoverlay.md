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
--- @param ptr string
CFireOverlay(ptr)
```
# Properties
## BaseColors 
```lua
--- @type table
Read: cfireoverlay.BaseColors
Write: cfireoverlay.BaseColors = value
```
## Scale 
```lua
--- @type number
Read: cfireoverlay.Scale
Write: cfireoverlay.Scale = value
```
## GUID 
```lua
--- @type number
Read: cfireoverlay.GUID
Write: cfireoverlay.GUID = value
```
## Parent (Read-Only)
```lua
--- @type CGlowOverlay
Read: cfireoverlay.Parent
```
# Functions
## ToPtr
```lua
--- @return string
cfireoverlay:ToPtr()
```
## IsValid
```lua
--- @return bool
cfireoverlay:IsValid()
```

:::