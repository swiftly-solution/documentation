---
title: CGlowProperty
index: true
order: 2
category:
  - Guide
---

# CGlowProperty

::: tabs
@tab Lua
# Constructor
```lua
CGlowProperty(ptr)
```
# Properties
## GlowColor 
```lua
--- @type Vector
Read: cglowproperty.GlowColor
Write: cglowproperty.GlowColor = value
```
## GlowType 
```lua
--- @type number
Read: cglowproperty.GlowType
Write: cglowproperty.GlowType = value
```
## GlowTeam 
```lua
--- @type number
Read: cglowproperty.GlowTeam
Write: cglowproperty.GlowTeam = value
```
## GlowRange 
```lua
--- @type number
Read: cglowproperty.GlowRange
Write: cglowproperty.GlowRange = value
```
## GlowRangeMin 
```lua
--- @type number
Read: cglowproperty.GlowRangeMin
Write: cglowproperty.GlowRangeMin = value
```
## GlowColorOverride 
```lua
--- @type Color
Read: cglowproperty.GlowColorOverride
Write: cglowproperty.GlowColorOverride = value
```
## Flashing 
```lua
--- @type boolean
Read: cglowproperty.Flashing
Write: cglowproperty.Flashing = value
```
## GlowTime 
```lua
--- @type number
Read: cglowproperty.GlowTime
Write: cglowproperty.GlowTime = value
```
## GlowStartTime 
```lua
--- @type number
Read: cglowproperty.GlowStartTime
Write: cglowproperty.GlowStartTime = value
```
## EligibleForScreenHighlight 
```lua
--- @type boolean
Read: cglowproperty.EligibleForScreenHighlight
Write: cglowproperty.EligibleForScreenHighlight = value
```
## Glowing 
```lua
--- @type boolean
Read: cglowproperty.Glowing
Write: cglowproperty.Glowing = value
```
# Functions
## ToPtr
```lua
@returns string
cglowproperty:ToPtr()
```
## IsValid
```lua
@returns bool
cglowproperty:IsValid()
```

:::