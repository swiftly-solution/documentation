---
title: COmniLight
index: true
order: 2
category:
  - Guide
---

# COmniLight

::: tabs
@tab Lua
# Constructor
```lua
COmniLight(ptr --[[ string ]])
```
# Properties
## InnerAngle 
```lua
@type number
Read: comnilight.InnerAngle
Write: comnilight.InnerAngle = value
```
## OuterAngle 
```lua
@type number
Read: comnilight.OuterAngle
Write: comnilight.OuterAngle = value
```
## ShowLight 
```lua
@type boolean
Read: comnilight.ShowLight
Write: comnilight.ShowLight = value
```
## Parent 
```lua
@type CBarnLight
Read: comnilight.Parent
Write: comnilight.Parent = value
```
# Functions
## ToPtr
```lua
@returns string
comnilight:ToPtr()
```
## IsValid
```lua
@returns bool
comnilight:IsValid()
```

:::