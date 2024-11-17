---
title: ViewAngleServerChange_t
index: true
order: 2
category:
  - Guide
---

# ViewAngleServerChange_t

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
ViewAngleServerChange_t(ptr)
```
# Properties
## Type 
```lua
--- @type number
Read: viewangleserverchange_t.Type
Write: viewangleserverchange_t.Type = value
```
## Angle 
```lua
--- @type QAngle
Read: viewangleserverchange_t.Angle
Write: viewangleserverchange_t.Angle = value
```
## Index 
```lua
--- @type number
Read: viewangleserverchange_t.Index
Write: viewangleserverchange_t.Index = value
```
# Functions
## ToPtr
```lua
--- @return string
viewangleserverchange_t:ToPtr()
```
## IsValid
```lua
--- @return bool
viewangleserverchange_t:IsValid()
```

:::