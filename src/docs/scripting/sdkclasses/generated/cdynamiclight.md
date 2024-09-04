---
title: CDynamicLight
index: true
order: 2
category:
  - Guide
---

# CDynamicLight

::: tabs
@tab Lua
# Constructor
```lua
CDynamicLight(ptr --[[ string ]])
```
# Properties
## ActualFlags 
```lua
@type number
Read: cdynamiclight.ActualFlags
Write: cdynamiclight.ActualFlags = value
```
## Flags 
```lua
@type number
Read: cdynamiclight.Flags
Write: cdynamiclight.Flags = value
```
## LightStyle 
```lua
@type number
Read: cdynamiclight.LightStyle
Write: cdynamiclight.LightStyle = value
```
## On 
```lua
@type boolean
Read: cdynamiclight.On
Write: cdynamiclight.On = value
```
## Radius 
```lua
@type number
Read: cdynamiclight.Radius
Write: cdynamiclight.Radius = value
```
## Exponent 
```lua
@type number
Read: cdynamiclight.Exponent
Write: cdynamiclight.Exponent = value
```
## InnerAngle 
```lua
@type number
Read: cdynamiclight.InnerAngle
Write: cdynamiclight.InnerAngle = value
```
## OuterAngle 
```lua
@type number
Read: cdynamiclight.OuterAngle
Write: cdynamiclight.OuterAngle = value
```
## SpotRadius 
```lua
@type number
Read: cdynamiclight.SpotRadius
Write: cdynamiclight.SpotRadius = value
```
## Parent (Read-Only)
```lua
@type CBaseModelEntity
Read: cdynamiclight.Parent
```
# Functions
## ToPtr
```lua
@returns string
cdynamiclight:ToPtr()
```
## IsValid
```lua
@returns bool
cdynamiclight:IsValid()
```

:::