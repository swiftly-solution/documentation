---
title: CEnvFade
index: true
order: 2
category:
  - Guide
---

# CEnvFade

::: tabs
@tab Lua
# Constructor
```lua
CEnvFade(ptr --[[ string ]])
```
# Properties
## FadeColor 
```lua
@type Color
Read: cenvfade.FadeColor
Write: cenvfade.FadeColor = value
```
## Duration 
```lua
@type number
Read: cenvfade.Duration
Write: cenvfade.Duration = value
```
## HoldDuration 
```lua
@type number
Read: cenvfade.HoldDuration
Write: cenvfade.HoldDuration = value
```
## OnBeginFade (Read-Only)
```lua
@type CEntityIOOutput
Read: cenvfade.OnBeginFade
```
## Parent (Read-Only)
```lua
@type CLogicalEntity
Read: cenvfade.Parent
```
# Functions
## ToPtr
```lua
@returns string
cenvfade:ToPtr()
```
## IsValid
```lua
@returns bool
cenvfade:IsValid()
```

:::