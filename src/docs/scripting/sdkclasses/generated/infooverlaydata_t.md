---
title: InfoOverlayData_t
index: true
order: 2
category:
  - Guide
---

# InfoOverlayData_t

::: tabs
@tab Lua
# Constructor
```lua
InfoOverlayData_t(ptr)
```
# Properties
## Width 
```lua
--- @type number
Read: infooverlaydata_t.Width
Write: infooverlaydata_t.Width = value
```
## Height 
```lua
--- @type number
Read: infooverlaydata_t.Height
Write: infooverlaydata_t.Height = value
```
## Depth 
```lua
--- @type number
Read: infooverlaydata_t.Depth
Write: infooverlaydata_t.Depth = value
```
## UVStart 
```lua
--- @type Vector2D
Read: infooverlaydata_t.UVStart
Write: infooverlaydata_t.UVStart = value
```
## UVEnd 
```lua
--- @type Vector2D
Read: infooverlaydata_t.UVEnd
Write: infooverlaydata_t.UVEnd = value
```
## RenderOrder 
```lua
--- @type number
Read: infooverlaydata_t.RenderOrder
Write: infooverlaydata_t.RenderOrder = value
```
## TintColor 
```lua
--- @type Vector4D
Read: infooverlaydata_t.TintColor
Write: infooverlaydata_t.TintColor = value
```
## SequenceOverride 
```lua
--- @type number
Read: infooverlaydata_t.SequenceOverride
Write: infooverlaydata_t.SequenceOverride = value
```
# Functions
## ToPtr
```lua
@returns string
infooverlaydata_t:ToPtr()
```
## IsValid
```lua
@returns bool
infooverlaydata_t:IsValid()
```

:::