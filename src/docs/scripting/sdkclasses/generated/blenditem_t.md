---
title: BlendItem_t
index: true
order: 2
category:
  - Guide
---

# BlendItem_t

::: tabs
@tab Lua
# Constructor
```lua
BlendItem_t(ptr --[[ string ]])
```
# Properties
## Tags 
```lua
@type table
Read: blenditem_t.Tags
Write: blenditem_t.Tags = value
```
## Child (Read-Only)
```lua
@type CAnimUpdateNodeRef
Read: blenditem_t.Child
```
## Pos 
```lua
@type Vector2D
Read: blenditem_t.Pos
Write: blenditem_t.Pos = value
```
## Duration 
```lua
@type number
Read: blenditem_t.Duration
Write: blenditem_t.Duration = value
```
## UseCustomDuration 
```lua
@type boolean
Read: blenditem_t.UseCustomDuration
Write: blenditem_t.UseCustomDuration = value
```
# Functions
## ToPtr
```lua
@returns string
blenditem_t:ToPtr()
```
## IsValid
```lua
@returns bool
blenditem_t:IsValid()
```

:::