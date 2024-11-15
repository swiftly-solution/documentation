---
title: PointCameraSettings_t
index: true
order: 2
category:
  - Guide
---

# PointCameraSettings_t

::: tabs
@tab Lua
# Constructor
```lua
PointCameraSettings_t(ptr)
```
# Properties
## NearBlurryDistance 
```lua
--- @type number
Read: pointcamerasettings_t.NearBlurryDistance
Write: pointcamerasettings_t.NearBlurryDistance = value
```
## NearCrispDistance 
```lua
--- @type number
Read: pointcamerasettings_t.NearCrispDistance
Write: pointcamerasettings_t.NearCrispDistance = value
```
## FarCrispDistance 
```lua
--- @type number
Read: pointcamerasettings_t.FarCrispDistance
Write: pointcamerasettings_t.FarCrispDistance = value
```
## FarBlurryDistance 
```lua
--- @type number
Read: pointcamerasettings_t.FarBlurryDistance
Write: pointcamerasettings_t.FarBlurryDistance = value
```
# Functions
## ToPtr
```lua
@returns string
pointcamerasettings_t:ToPtr()
```
## IsValid
```lua
@returns bool
pointcamerasettings_t:IsValid()
```

:::