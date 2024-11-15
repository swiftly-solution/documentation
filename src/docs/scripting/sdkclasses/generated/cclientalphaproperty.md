---
title: CClientAlphaProperty
index: true
order: 2
category:
  - Guide
---

# CClientAlphaProperty

::: tabs
@tab Lua
# Constructor
```lua
CClientAlphaProperty(ptr)
```
# Properties
## RenderFX 
```lua
--- @type number
Read: cclientalphaproperty.RenderFX
Write: cclientalphaproperty.RenderFX = value
```
## RenderMode 
```lua
--- @type number
Read: cclientalphaproperty.RenderMode
Write: cclientalphaproperty.RenderMode = value
```
## AlphaOverride 
```lua
--- @type bitfield:1
Read: cclientalphaproperty.AlphaOverride
Write: cclientalphaproperty.AlphaOverride = value
```
## ShadowAlphaOverride 
```lua
--- @type bitfield:1
Read: cclientalphaproperty.ShadowAlphaOverride
Write: cclientalphaproperty.ShadowAlphaOverride = value
```
## Reserved 
```lua
--- @type bitfield:6
Read: cclientalphaproperty.Reserved
Write: cclientalphaproperty.Reserved = value
```
## Alpha 
```lua
--- @type number
Read: cclientalphaproperty.Alpha
Write: cclientalphaproperty.Alpha = value
```
## DesyncOffset 
```lua
--- @type number
Read: cclientalphaproperty.DesyncOffset
Write: cclientalphaproperty.DesyncOffset = value
```
## Reserved2 
```lua
--- @type number
Read: cclientalphaproperty.Reserved2
Write: cclientalphaproperty.Reserved2 = value
```
## DistFadeStart 
```lua
--- @type number
Read: cclientalphaproperty.DistFadeStart
Write: cclientalphaproperty.DistFadeStart = value
```
## DistFadeEnd 
```lua
--- @type number
Read: cclientalphaproperty.DistFadeEnd
Write: cclientalphaproperty.DistFadeEnd = value
```
## FadeScale 
```lua
--- @type number
Read: cclientalphaproperty.FadeScale
Write: cclientalphaproperty.FadeScale = value
```
## RenderFxStartTime 
```lua
--- @type number
Read: cclientalphaproperty.RenderFxStartTime
Write: cclientalphaproperty.RenderFxStartTime = value
```
## RenderFxDuration 
```lua
--- @type number
Read: cclientalphaproperty.RenderFxDuration
Write: cclientalphaproperty.RenderFxDuration = value
```
## Parent (Read-Only)
```lua
--- @type IClientAlphaProperty
Read: cclientalphaproperty.Parent
```
# Functions
## ToPtr
```lua
@returns string
cclientalphaproperty:ToPtr()
```
## IsValid
```lua
@returns bool
cclientalphaproperty:IsValid()
```

:::