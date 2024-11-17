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
--- @param ptr string
COmniLight(ptr)
```
# Properties
## InnerAngle 
```lua
--- @type number
Read: comnilight.InnerAngle
Write: comnilight.InnerAngle = value
```
## OuterAngle 
```lua
--- @type number
Read: comnilight.OuterAngle
Write: comnilight.OuterAngle = value
```
## ShowLight 
```lua
--- @type boolean
Read: comnilight.ShowLight
Write: comnilight.ShowLight = value
```
## Parent (Read-Only)
```lua
--- @type CBarnLight
Read: comnilight.Parent
```
# Functions
## ToPtr
```lua
--- @return string
comnilight:ToPtr()
```
## IsValid
```lua
--- @return bool
comnilight:IsValid()
```

:::