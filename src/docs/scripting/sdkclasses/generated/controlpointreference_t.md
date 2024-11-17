---
title: ControlPointReference_t
index: true
order: 2
category:
  - Guide
---

# ControlPointReference_t

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
ControlPointReference_t(ptr)
```
# Properties
## ControlPointNameString 
```lua
--- @type number
Read: controlpointreference_t.ControlPointNameString
Write: controlpointreference_t.ControlPointNameString = value
```
## OffsetFromControlPoint 
```lua
--- @type Vector
Read: controlpointreference_t.OffsetFromControlPoint
Write: controlpointreference_t.OffsetFromControlPoint = value
```
## OffsetInLocalSpace 
```lua
--- @type boolean
Read: controlpointreference_t.OffsetInLocalSpace
Write: controlpointreference_t.OffsetInLocalSpace = value
```
# Functions
## ToPtr
```lua
--- @return string
controlpointreference_t:ToPtr()
```
## IsValid
```lua
--- @return bool
controlpointreference_t:IsValid()
```

:::