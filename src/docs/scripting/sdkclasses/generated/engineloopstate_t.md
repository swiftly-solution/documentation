---
title: EngineLoopState_t
index: true
order: 2
category:
  - Guide
---

# EngineLoopState_t

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
EngineLoopState_t(ptr)
```
# Properties
## PlatWindowWidth 
```lua
--- @type number
Read: engineloopstate_t.PlatWindowWidth
Write: engineloopstate_t.PlatWindowWidth = value
```
## PlatWindowHeight 
```lua
--- @type number
Read: engineloopstate_t.PlatWindowHeight
Write: engineloopstate_t.PlatWindowHeight = value
```
## RenderWidth 
```lua
--- @type number
Read: engineloopstate_t.RenderWidth
Write: engineloopstate_t.RenderWidth = value
```
## RenderHeight 
```lua
--- @type number
Read: engineloopstate_t.RenderHeight
Write: engineloopstate_t.RenderHeight = value
```
# Functions
## ToPtr
```lua
--- @return string
engineloopstate_t:ToPtr()
```
## IsValid
```lua
--- @return bool
engineloopstate_t:IsValid()
```

:::