---
title: FootFixedSettings
index: true
order: 2
category:
  - Guide
---

# FootFixedSettings

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
FootFixedSettings(ptr)
```
# Properties
## TraceSettings (Read-Only)
```lua
--- @type TraceSettings_t
Read: footfixedsettings.TraceSettings
```
## FootBaseBindPosePositionMS 
```lua
--- @type Vector
Read: footfixedsettings.FootBaseBindPosePositionMS
Write: footfixedsettings.FootBaseBindPosePositionMS = value
```
## FootBaseLength 
```lua
--- @type number
Read: footfixedsettings.FootBaseLength
Write: footfixedsettings.FootBaseLength = value
```
## MaxRotationLeft 
```lua
--- @type number
Read: footfixedsettings.MaxRotationLeft
Write: footfixedsettings.MaxRotationLeft = value
```
## MaxRotationRight 
```lua
--- @type number
Read: footfixedsettings.MaxRotationRight
Write: footfixedsettings.MaxRotationRight = value
```
## FootstepLandedTagIndex 
```lua
--- @type number
Read: footfixedsettings.FootstepLandedTagIndex
Write: footfixedsettings.FootstepLandedTagIndex = value
```
## EnableTracing 
```lua
--- @type boolean
Read: footfixedsettings.EnableTracing
Write: footfixedsettings.EnableTracing = value
```
## TraceAngleBlend 
```lua
--- @type number
Read: footfixedsettings.TraceAngleBlend
Write: footfixedsettings.TraceAngleBlend = value
```
## DisableTagIndex 
```lua
--- @type number
Read: footfixedsettings.DisableTagIndex
Write: footfixedsettings.DisableTagIndex = value
```
## FootIndex 
```lua
--- @type number
Read: footfixedsettings.FootIndex
Write: footfixedsettings.FootIndex = value
```
# Functions
## ToPtr
```lua
--- @return string
footfixedsettings:ToPtr()
```
## IsValid
```lua
--- @return bool
footfixedsettings:IsValid()
```

:::