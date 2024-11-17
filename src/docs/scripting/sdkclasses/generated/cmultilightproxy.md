---
title: CMultiLightProxy
index: true
order: 2
category:
  - Guide
---

# CMultiLightProxy

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
CMultiLightProxy(ptr)
```
# Properties
## LightNameFilter 
```lua
--- @type string
Read: cmultilightproxy.LightNameFilter
Write: cmultilightproxy.LightNameFilter = value
```
## LightClassFilter 
```lua
--- @type string
Read: cmultilightproxy.LightClassFilter
Write: cmultilightproxy.LightClassFilter = value
```
## LightRadiusFilter 
```lua
--- @type number
Read: cmultilightproxy.LightRadiusFilter
Write: cmultilightproxy.LightRadiusFilter = value
```
## BrightnessDelta 
```lua
--- @type number
Read: cmultilightproxy.BrightnessDelta
Write: cmultilightproxy.BrightnessDelta = value
```
## PerformScreenFade 
```lua
--- @type boolean
Read: cmultilightproxy.PerformScreenFade
Write: cmultilightproxy.PerformScreenFade = value
```
## TargetBrightnessMultiplier 
```lua
--- @type number
Read: cmultilightproxy.TargetBrightnessMultiplier
Write: cmultilightproxy.TargetBrightnessMultiplier = value
```
## CurrentBrightnessMultiplier 
```lua
--- @type number
Read: cmultilightproxy.CurrentBrightnessMultiplier
Write: cmultilightproxy.CurrentBrightnessMultiplier = value
```
## Parent (Read-Only)
```lua
--- @type CLogicalEntity
Read: cmultilightproxy.Parent
```
# Functions
## ToPtr
```lua
--- @return string
cmultilightproxy:ToPtr()
```
## IsValid
```lua
--- @return bool
cmultilightproxy:IsValid()
```

:::