---
title: VMixDynamicsDesc_t
index: true
order: 2
category:
  - Guide
---

# VMixDynamicsDesc_t

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
VMixDynamicsDesc_t(ptr)
```
# Properties
## FldbGain 
```lua
--- @type number
Read: vmixdynamicsdesc_t.FldbGain
Write: vmixdynamicsdesc_t.FldbGain = value
```
## FldbNoiseGateThreshold 
```lua
--- @type number
Read: vmixdynamicsdesc_t.FldbNoiseGateThreshold
Write: vmixdynamicsdesc_t.FldbNoiseGateThreshold = value
```
## FldbCompressionThreshold 
```lua
--- @type number
Read: vmixdynamicsdesc_t.FldbCompressionThreshold
Write: vmixdynamicsdesc_t.FldbCompressionThreshold = value
```
## FldbLimiterThreshold 
```lua
--- @type number
Read: vmixdynamicsdesc_t.FldbLimiterThreshold
Write: vmixdynamicsdesc_t.FldbLimiterThreshold = value
```
## FldbKneeWidth 
```lua
--- @type number
Read: vmixdynamicsdesc_t.FldbKneeWidth
Write: vmixdynamicsdesc_t.FldbKneeWidth = value
```
## Ratio 
```lua
--- @type number
Read: vmixdynamicsdesc_t.Ratio
Write: vmixdynamicsdesc_t.Ratio = value
```
## LimiterRatio 
```lua
--- @type number
Read: vmixdynamicsdesc_t.LimiterRatio
Write: vmixdynamicsdesc_t.LimiterRatio = value
```
## AttackTimeMS 
```lua
--- @type number
Read: vmixdynamicsdesc_t.AttackTimeMS
Write: vmixdynamicsdesc_t.AttackTimeMS = value
```
## ReleaseTimeMS 
```lua
--- @type number
Read: vmixdynamicsdesc_t.ReleaseTimeMS
Write: vmixdynamicsdesc_t.ReleaseTimeMS = value
```
## RMSTimeMS 
```lua
--- @type number
Read: vmixdynamicsdesc_t.RMSTimeMS
Write: vmixdynamicsdesc_t.RMSTimeMS = value
```
## WetMix 
```lua
--- @type number
Read: vmixdynamicsdesc_t.WetMix
Write: vmixdynamicsdesc_t.WetMix = value
```
## PeakMode 
```lua
--- @type boolean
Read: vmixdynamicsdesc_t.PeakMode
Write: vmixdynamicsdesc_t.PeakMode = value
```
# Functions
## ToPtr
```lua
--- @return string
vmixdynamicsdesc_t:ToPtr()
```
## IsValid
```lua
--- @return bool
vmixdynamicsdesc_t:IsValid()
```

:::