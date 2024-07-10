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
ViewAngleServerChange_t(ptr --[[ string ]])
```
# Properties
## Type 
```lua
@type number
Read: viewangleserverchange_t.Type
Write: viewangleserverchange_t.Type = value
```
## Angle 
```lua
@type QAngle
Read: viewangleserverchange_t.Angle
Write: viewangleserverchange_t.Angle = value
```
## Index 
```lua
@type number
Read: viewangleserverchange_t.Index
Write: viewangleserverchange_t.Index = value
```
# Functions
## ToPtr
```lua
@returns string
viewangleserverchange_t:ToPtr()
```
## IsValid
```lua
@returns bool
viewangleserverchange_t:IsValid()
```

:::