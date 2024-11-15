---
title: CTextureBasedAnimatable
index: true
order: 2
category:
  - Guide
---

# CTextureBasedAnimatable

::: tabs
@tab Lua
# Constructor
```lua
CTextureBasedAnimatable(ptr)
```
# Properties
## Loop 
```lua
--- @type boolean
Read: ctexturebasedanimatable.Loop
Write: ctexturebasedanimatable.Loop = value
```
## FPS 
```lua
--- @type number
Read: ctexturebasedanimatable.FPS
Write: ctexturebasedanimatable.FPS = value
```
## AnimationBoundsMin 
```lua
--- @type Vector
Read: ctexturebasedanimatable.AnimationBoundsMin
Write: ctexturebasedanimatable.AnimationBoundsMin = value
```
## AnimationBoundsMax 
```lua
--- @type Vector
Read: ctexturebasedanimatable.AnimationBoundsMax
Write: ctexturebasedanimatable.AnimationBoundsMax = value
```
## StartTime 
```lua
--- @type number
Read: ctexturebasedanimatable.StartTime
Write: ctexturebasedanimatable.StartTime = value
```
## StartFrame 
```lua
--- @type number
Read: ctexturebasedanimatable.StartFrame
Write: ctexturebasedanimatable.StartFrame = value
```
## Parent (Read-Only)
```lua
--- @type CBaseModelEntity
Read: ctexturebasedanimatable.Parent
```
# Functions
## ToPtr
```lua
@returns string
ctexturebasedanimatable:ToPtr()
```
## IsValid
```lua
@returns bool
ctexturebasedanimatable:IsValid()
```

:::