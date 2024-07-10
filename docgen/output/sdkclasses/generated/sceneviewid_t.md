---
title: SceneViewId_t
index: true
order: 2
category:
  - Guide
---

# SceneViewId_t

::: tabs
@tab Lua
# Constructor
```lua
SceneViewId_t(ptr --[[ string ]])
```
# Properties
## ViewId 
```lua
@type number
Read: sceneviewid_t.ViewId
Write: sceneviewid_t.ViewId = value
```
## FrameCount 
```lua
@type number
Read: sceneviewid_t.FrameCount
Write: sceneviewid_t.FrameCount = value
```
# Functions
## ToPtr
```lua
@returns string
sceneviewid_t:ToPtr()
```
## IsValid
```lua
@returns bool
sceneviewid_t:IsValid()
```

:::