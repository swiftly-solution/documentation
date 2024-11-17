---
title: PointDefinition_t
index: true
order: 2
category:
  - Guide
---

# PointDefinition_t

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
PointDefinition_t(ptr)
```
# Properties
## ControlPoint 
```lua
--- @type number
Read: pointdefinition_t.ControlPoint
Write: pointdefinition_t.ControlPoint = value
```
## LocalCoords 
```lua
--- @type boolean
Read: pointdefinition_t.LocalCoords
Write: pointdefinition_t.LocalCoords = value
```
## Offset 
```lua
--- @type Vector
Read: pointdefinition_t.Offset
Write: pointdefinition_t.Offset = value
```
# Functions
## ToPtr
```lua
--- @return string
pointdefinition_t:ToPtr()
```
## IsValid
```lua
--- @return bool
pointdefinition_t:IsValid()
```

:::